import '../../Styles/applinks.css'
//import styles from '../../Styles/AppLinks.module.css';



 function AppLinks(){
    return (
        <div className="app-linksCon">
                        <p>Get the app</p>
                        <div className="link-img-con">
                            <a href="https://play.google.com/store/games?hl=en">
                            
                            <img  className="img-link" src="./images/playstore.png" alt="playstore.png" />
                            </a>
                            <a href="https://apps.microsoft.com/home?hl=en-US&gl=US">

                            <img  className="img-link" src="./images/microsoft.png" alt="microsoft.png" />
                            </a>
                        </div>
                    </div>
    )
} 

  


export default AppLinks;