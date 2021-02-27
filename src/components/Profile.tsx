import styles from '../style/components/Profile.module.css'


export function  Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/73472945?s=400&u=3f89eedd729bb64edd9b902983c50f3ed570284c&v=4" alt="José Aroldo"/>
            <div>
                <strong>José Aroldo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>

    );
}