import style from '../style/components/ExperienceBar.module.css';


export function ExperienceBar(){
    return(
        <header className={style.experienceBar}>
            <samp>0 xp</samp>
            <div>
                <div style={{ width: '50%' }} />
                <span className={style.currentExperience} style={{ left: '50%' }}>
                    300 xp
                </span>
            </div>
            <samp>600 xp</samp>
        </header>
    )
}