
// 自定义函数
function reducer(state,action){
    switch(action.type){
        case 'CHANGE_LUNBO':
            return Object.assign({},state,{
                images:action.image
            }); 
        case 'CHANGE_HITMOVIES':
            return Object.assign({},state,{
                todomovies:action.listmovies
            });
        case 'CHANGE_COMINGMOVIES':
            return Object.assign({},state,{
                comingMovies:action.moviesArr
            }); 
        case 'CHANGE_NOWPLAY':
            return Object.assign({},state,{
                nowPlayfilms:action.nowlistM
            });
        case 'CHANGE_COMINGSOON':
            return Object.assign({},state,{
                comingsoonfilms:action.cominglistM
            });    
        case 'CHANGE_FILMDETAIL':
            return Object.assign({},state,{
                filmteails:action.datafilms
            });
        case 'CHANGE_CINEMA':
            return Object.assign({},state,{
                listTodoCinema:action.cinemaLists
            });
        case 'CHANGE_TXT':
            return Object.assign({},state,{
                txt:action.txt
            });
        case "CHANGETITLE": 
            return Object.assign({},state,{
                title:action.data
            });        
        default:
            return state;  
    }
}

export default reducer;