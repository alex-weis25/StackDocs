import React, { Component } from 'react';
import { firestore } from '~/fire';
import { urlEncode } from '../highlighting';

let encodedDocUrl = urlEncode(document.location.href);
const UrlPages = firestore
.collection('UrlPages')
.doc(encodedDocUrl);


export default class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  handleChange = event => {
    let content = event.target.value;
    this.setState({ content });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { currentUser, comments, highlightId, entryId } = this.props;
    const content = this.state.content;
    const newDate = new Date();
    const newComment = {
      content,
      userDisplayName: currentUser.displayName,
      userId: currentUser.uid,
      cmtDownVote: 0,
      cmtUpVote: 0,
      score: 0,
      date: newDate.toString().slice(0, 15)
    };
    console.log('newComment', newComment);

    UrlPages
    .collection('highlights')
    .doc(highlightId)
    .collection('entries')
    .doc(entryId)
    .collection('comments')
    .add(newComment)
    .then(comment => {
      UrlPages
    .collection('highlights')
    .doc(highlightId)
    .collection('entries')
    .doc(entryId)
    .collection('comments')
    .doc(comment.id)
    .add({
      commentId: comment.id
    });
    })
    .catch(err => console.log('error: ', err));
    this.setState({ content: '' });
  }

  render() {
    return (
        <form  onSubmit={this.handleSubmit} className="chromelights-comment-form" >
          <textarea placeholder="Reply or comment!" value={this.state.content} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Submit" />
        </form>
    );
  }
}
