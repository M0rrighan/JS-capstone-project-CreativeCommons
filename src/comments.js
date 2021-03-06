import counter from './counter';
import * as Involvment from './involvment-api';

const displayComments = (ul, userComment) => {
  const comment = document.createElement('li');
  comment.className = 'comment-li';
  const commentMeta = document.createElement('div');
  commentMeta.className = 'comment-meta';
  comment.appendChild(commentMeta);
  const name = document.createElement('p');
  name.style.textTransform = 'Capitalize';
  name.innerText = `${userComment.username}:`;

  const date = document.createElement('p');
  date.className = 'no-comments';
  date.innerText = userComment.creation_date;
  commentMeta.appendChild(date);
  commentMeta.appendChild(name);
  const message = document.createElement('p');
  message.innerText = userComment.comment;
  message.style.textTransform = 'Capitalize';
  comment.appendChild(message);
  ul.appendChild(comment);
};

const commentModal = (itemID) => {
  let commentCounter = 0;
  const modalInner = document.createElement('div');
  modalInner.className = 'modal-inner';
  const modalDetails = document.createElement('div');
  modalDetails.className = 'modal-details';
  modalInner.appendChild(modalDetails);
  const modalMeta = document.createElement('div');
  modalMeta.className = 'modal-meta';
  modalDetails.appendChild(modalMeta);
  const allComments = document.createElement('div');
  allComments.className = 'all-comments';
  modalMeta.appendChild(allComments);
  const allCommentsTitle = document.createElement('h1');
  allCommentsTitle.className = 'all-comments-title';
  allCommentsTitle.innerText = 'All Comments';
  allComments.appendChild(allCommentsTitle);
  const commentUl = document.createElement('ul');
  commentUl.className = 'comment-ul';
  Involvment.getComments(itemID).then((data) => {
    if (data === 'No comments available for this item') {
      commentUl.innerHTML = `<li class="no-comments">${`${data}. Add a new comment`}</li>`;
    } else {
      console.log('data passed to counter.comments', data);
      commentCounter = counter.comments(data);
      allCommentsTitle.innerText = `All Comments(${commentCounter})`;
      data.forEach((userComment) => {
        displayComments(commentUl, userComment);
      });
    }
  });
  allComments.appendChild(commentUl);
  const form = document.createElement('form');
  form.className = 'comment-form';
  modalMeta.appendChild(form);
  const formTitle = document.createElement('h1');
  formTitle.className = 'comment-form-title';
  formTitle.innerText = 'Add a comment';
  form.appendChild(formTitle);
  const commenterName = document.createElement('input');
  commenterName.type = 'text';
  commenterName.name = 'commenter';
  commenterName.placeholder = 'Your Name';
  commenterName.attributes.required = true;
  form.appendChild(commenterName);
  const commenterMessage = document.createElement('textarea');
  commenterMessage.rows = 5;
  commenterMessage.className = 'comment-message';
  commenterMessage.placeholder = 'Your Message';
  commenterMessage.attributes.required = true;
  form.appendChild(commenterMessage);
  const formButton = document.createElement('button');
  formButton.className = 'btn btn-alt';
  formButton.innerHTML = 'Add Comment';
  form.appendChild(formButton);
  formButton.onclick = (e) => {
    e.preventDefault();
    Involvment.postComment(
      itemID,
      commenterName.value,
      commenterMessage.value,
    ).then(() => {
      if (commentUl.hasChildNodes()) {
        commentUl.innerHTML = '';
        Involvment.getComments(itemID).then((data) => {
          if (data === 'No comments available for this item') {
            commentUl.innerHTML = `<li class="no-comments">${`${data}. Add a new comment`}</li>`;
          } else {
            allCommentsTitle.innerText = `Comments(${commentCounter + 1})`;
            data.forEach((userComment) => {
              displayComments(commentUl, userComment);
            });
          }
        });
      }
    });
    commenterName.value = '';
    commenterMessage.value = '';
  };
  console.log('modalInner in function commentModal-comments.js', modalInner);
  return modalInner;
};

export default commentModal;
