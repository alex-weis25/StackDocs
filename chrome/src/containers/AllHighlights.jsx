import React, { Component } from 'react';
import { firestore as fs } from '~/fire';
import { CreateHighlightButton } from '../components';
import { urlEncode } from '../highlighting';
import EntryContainer from './EntryContainer';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { sortByVote, watch } from '../index.js';

let encodedDocUrl = urlEncode(document.location.href);
const Highlights = fs.collection('UrlPages').doc(encodedDocUrl).collection('highlights');

export default class AllHighlights extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlightObj: {},
      sorted: []
    };
  }

  componentDidMount = () => {
    this.fetchEntries();
  };

  fetchEntries = () => {
    this.subscription = watch(Highlights)
      .map(highlights =>
        highlights.docs.map(highlight =>
          watch(highlight.ref.collection('entries')).map(entry => entry.docs)
        )
      )
      .switchMap(entryObs => combineLatest(...entryObs))
      .map(entries => entries.reduce((x, y) => x.concat(y), []))
      .map(entries => entries.map(_ => _.data()))
      .map(dataArr => dataArr.map(data => [data.entryId, data]))
      .map(sortArr => sortByVote(sortArr))
      .subscribe(sorted => this.setState({ sorted }));
  };

  componentWillUnmount = () => {
    this.subscription.unsubscribe();
  };

  render() {
    const setView = this.props.setView;
    const { currentUser, activeId, activeHL } = this.props;

    return (
      <div id="highlight-annotation">
        <div className="chromelights-highlight-header">
          <div className="chromelights-highlight-container">
            <h3 className="chromelights-highlight-title">
              {`...All entries...`}
            </h3>
          </div>
          <CreateHighlightButton
            setView={setView}
            activeId={activeId}
            activeHL={activeHL}
          />
        </div>
        {this.state.sorted &&
          this.state.sorted.map(entry => {
            const {
              isQuestion,
              title,
              highlightText,
              content,
              user,
              highlightID,
              date,
              downVote,
              upVote,
              comments
            } = entry[1];
            const entryId = entry[0];
            return (
              <div key={entryId}>
                <EntryContainer
                  key={entryId}
                  entryId={entryId}
                  highlightText={highlightText}
                  isQuestion={isQuestion}
                  fetch={this.fetchEntries}
                  hlPropsId={highlightID}
                  title={title}
                  content={content}
                  user={user}
                  downVote={downVote}
                  upVote={upVote}
                  comments={comments}
                  date={date}
                  currentUser={currentUser}
                />
              </div>
            );
          })}
      </div>
    );
  }
}
