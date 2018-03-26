import React, { Component } from 'react';
import { Map } from 'fireview';
import { firestore as fs } from '~/fire';
import Entries from '../components/Entries';
import Interactive from '../components/Interactive';
import CreateHighlightButton from '../components/CreateHighlightButton';
import { urlEncode } from '../highlighting';

export default class SingleHighlight extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedHighlight: this.props.activeId
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.activeId) {
      this.setState({ selectedHighlight: newProps.activeId });
    }
  }

  render() {
    const urlReadOnly = document.location.href;
    const url = urlEncode(urlReadOnly);
    const setView = this.props.setView;
    console.log('PROPS IN HIGHLIGHTANNOTATIONS: ', this.props);
    return (
      <div id="highlight-annotation">
        <div className="chromelights-highlight-header">
          <div className="chromelights-highlight-container">
            <h3 className="chromelights-highlight-title">
              {`...${this.state.selectedHighlight}...`}
            </h3>
          </div>
          <CreateHighlightButton setView={setView} />
        </div>
        <Map
          each
          from={fs
            .collection('UrlPages')
            .doc(url)
            .collection('highlights')
            .doc(this.state.selectedHighlight)
            .collection('entries')}
          Loading={() => <h3>Loading...</h3>}
          Empty={() => <h3 color="red">No Highlights on the page</h3>}
          Render={({
            upVote,
            downVote,
            content,
            comments,
            user,
            date,
            title,
            entryId,
          }) => (
            <div>
              <h3>{title}</h3>
              {console.log(typeof date)}
              <Entries
                content={content}
                user={user}
                date="March 2nd, 2003"
              />
              <Interactive
                entryId={entryId}
                downVote={downVote}
                upVote={upVote}
                comments={comments}
              />
            </div>
          )}
        />
      </div>
    );
  }
}
