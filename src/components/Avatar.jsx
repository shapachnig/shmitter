import {TwitterContext} from "../utils/context.js";
import {useContext} from "react";

const Avatar = ({size}) => {
    const {user, setUser} = useContext(TwitterContext);

    function checkImageExists(url, callback) {
        const img = new Image();

        img.onload = function() {
            callback(true);
        };

        img.onerror = function() {
            callback(false);
        };

        img.src = url;
    }

    function changeAvatar (){
        const newAvatar = prompt('Write the Link to change your avatar!');

        checkImageExists(newAvatar,
            function(exists) {
            if (exists) {
                setUser({
                    name: 'Changed Avatar',
                    avatar: newAvatar
                })
            }

            if (!exists && (newAvatar)) {
                setUser({
                    name: 'Monster',
                    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
                })
            }})}


    return (
<img className={`user-avatar ${size ?? ''}`} onClick={changeAvatar} src={user.avatar} alt={user.name} />
    );
};

export default Avatar;