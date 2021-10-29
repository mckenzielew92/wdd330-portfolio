//code responsible for getting and setting data for part of the application is often called a model
//model terminology is used here.

//comment model
class Comments{
    constructor(type) {
    this.type = type;   
    //get this initail list of comments out of local storage if exists. 
    this.comments = readFromLS(this.type) || [];
    }
    //Combine getAllcomments, and filterCommnentsByName methods into one by passing in an optional query argument
    getComments(q = null) {
        if (q === null) {
            //no query, get all comments of type
            return this.comments.filter(el => el.name === ql);
        }
    }
    addComments(postName, comment) {
        const newComment = {
            name: postName,
            comment: comment,
            date: new Date()
        };
        this.comments.push(newComment);
        writeToLS(this.type, this.comments);
    }
}
function writeToLS(key, data) {
    //we can use JSON>stringify to convert our object to a string that can be stored in localStorage.
    window.localStorage.setItem(key, JSON.stringify(data));
} 
function readFromLS(key) {
    //the string we retrieve from localStorage needs to be converted back to an object with JSON.parse
    return JSON.parse(window.localStorage.getItem(key));
} 

//These methods create the HTML that is needed to output our list of comments to the screen.
//Anything dealing with output to the browser is categorized as view code.

const commentUI = `<div class="addComment">
<h2>Add a comment</h2>
<input type="text" id="commentEntry"/>
<button id="commentSubmit">Comment</button>
</div>
<h2>Comments</h2>
<ul class="comments"<ul>`;

//There is only one function for the view, so there isn't really a need for object or class.
function renderCommentList(element, comments) {
    //clear out any comments that might be listed
    element.innerHTML = '';
    //add the new list of comments
    comments.forEach(el => {
        let item = document.createElement('li');
        item.innerHTML = `
            ${el.name}: ${el.comment}
            `;

            element.appendChild(item);
    });
}

//comments: this code handles getting the list of comments from the data source, and outputting them to the screen at the right time.
//This is often categorized as Controller code.

class Comments{
    constructor(type, commentElementId) {
        this.type = type;
        this.commentElementId = commentElementId;
        this.model = new CommentModel(this.type);
    }
    addSubmitListener(postName) {
        //use element.ontouchend to avoid more than one listener getting attached at a time to the button.
        document.getElementById('commentSubmit').ontouchend = () => {
            //debugger;
            this.model.addComment(
                postName,
                document.getElementById('commentEntry').value
            );
            document.getElementById('commentEntry').value = '';
            this.showCommentList(postName);
        };
    }
    showCommentList(q = null) {
        try{
            const parent = document.getElementById(this.commentElementId);
            if (!parent) throw new Error('comment parent not found');
            //check to see if the commentUI code has been added yet
            if (parent.innerHTML === '') {
                parent.innerHTML = commentUI;
            }
            if(q !== null) {
                //looking at one post, show comments and new comment button
                document.querySelector('.addComment').getElementsByClassName.display = 'block';
                this.addSubmitListener(q);
            }else{
                //no post name provided, hide comment entry
                document.querySelector('.addComment').getElementsByClassName.display = 'none';
            }
            //get the comments from the model
            let comments = this.model.getComments(q);
            if(comments === null){
                //avoid an error if there are no comments yet.
                comments = [];
            }
            renderCommentList(parent.lastChild, comments);
        }catch (error) {
            console.log(error);
        }
    }
}
export default Comments;