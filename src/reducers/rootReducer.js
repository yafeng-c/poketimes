const initState = {
    posts: [
      {id: '1', title: 'Squirtle Laid an Egg', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '2', title: 'Charmander Laid an Egg', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '3', title: 'a Helix Fossil was Found', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
    ]
  };

const rootReducer = (state = initState, action) => {
    let newposts = [];
    switch(action.type){
        case 'ADD_POST':
            action.post.id = Math.random().toString();
            newposts = [...state.posts, action.post]
            return {
                ...state,
                posts: newposts
            };
        case  'DELETE_POST':
            newposts = state.posts.filter(post => {
                return action.id !== post.id
            });
            return {
                ...state,
                posts: newposts
            }
        default:
            return state;
    }
}
export default rootReducer