
export default class Comments{
    constructor(type, commentsId, selectId) {
    this.type = type;    
    this.commentElement = document.getElementById(commentsId);
    this.selectElement = document.getElementById(selectId);
      // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
    }
    grabSelected(){
        let option;

        for (let i=0; i<this.selectElement.options.length; i++) {
            option = select.options[i];

                if (option.value == '4') {
                // or
                // if (option.text == 'Malaysia') {
                    option.setAttribute('selected', true);

                    // For a single select, the job's done
                    return; 
                } 
        }
}
    showCommentsList() {
        
    }
    getAllComments(){

    }
    renderCommentList(){
    
    }
    filterCommentsByName(){

    }
}