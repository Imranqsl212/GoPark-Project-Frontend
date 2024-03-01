import { useContext } from "react";
import Notification from "../Notification/Notifications";
import { NotificationContext } from "../../contexts/notificationContext.js";

const NotificationConatiner = ({children}) => {
    const { notification } = useContext(NotificationContext);

    return (
        <>
            {notification && (<Notification type={notification.type} text={notification.text} key={notification.key} />)}
            {children}
        </>
    )
}

export default NotificationConatiner;