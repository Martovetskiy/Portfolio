import React, {useEffect} from "react";
import styles from '../styles/Home.module.css';

export const Home: React.FC = () => {
    const labels: string[] = [
        'React enthusiast',
        'Jetpack Compose fan',
        'Android is my home',
        'Backend wizard',
        'Frontend magician',
        'UI/UX lover',
        'Coding with soul',
    ];

    const [currentLabelIdx, setCurrentLabelIdx] = React.useState<number>(0);
    const [fade, setFade] = React.useState<boolean>(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentLabelIdx((prev) => (prev + 1) % labels.length);
                setFade(true);
            }, 400);
        }, 1800);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id='home' className={styles.Home}>
            <img className={styles.HomeBg}
                 src='/assets/home-bg.png' alt='Home' />
            <img className={styles.cursor}
                 style={{top: '110px', left: '30%'}}
                 src='/assets/cursors/crs-green.png' alt='Cursor' />
            <div className={styles.HomeGrid}>
                <div>
                    <div className={styles.HelloContainer}>
                        <div className={styles.AvatarContainer}>
                            <img src='/assets/avatar.jpg' alt='Avatar' />
                        </div>
                        <span>Hello! I am Stepan Bodnar</span>
                    </div>
                    <h1 className={`${styles.MyLabel} ${fade ? styles.fadeIn : styles.fadeOut}`}>{labels[currentLabelIdx]}</h1>
                    <p className={styles.HomeDescription}>I love turning complex ideas into clean, user-friendly designs that people actually enjoy using.</p>
                    <div className={styles.ButtonContainer}>
                        <button className={styles.FilledButton} onClick={() => {
                            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                        }}>Download CV</button>
                        <button className={styles.OutlinedButton} onClick={() => {
                            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                        }}>Other</button>
                    </div>
                </div>
                <div className={styles.ImageMeContainer}>
                    <img src='/assets/me.png' alt='Avatar' />
                    <div className={styles.ImageTint}/>
                </div>


                <div className={styles.SkillsContainer}>
                    <SkillCard level={"Study"} title={"Mobile Dev"} description={"Android apps, Kotlin, Jetpack Compose."} />
                    <SkillCard level={"Study"} title={"Web Dev"} description={"React, TypeScript, UI/UX, modern web stack."} />
                </div>

                <div>
                    <div className={styles.ExpHeader}>
                        Experience Snapshot
                    </div>
                    <div className={styles.ExpBody}>
                        <ExperienceCard title={"15"} description={"GitHub stars"}/>
                        <ExperienceCard title={"2+"} description={"Projects completed"}/>
                        <ExperienceCard title={"4+ yr"} description={"Work experience"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface ExperienceCardProps {
    title: string;
    description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({title, description}) => {
    return (
        <div className={styles.ExperienceCard}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}



interface SkillCardProps {
    level: string;
    title: string;
    description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({level, title, description}) => {
    return (
        <div className={styles.SkillCard}>
            <div className={styles.SkillCardHeader}>
                <img src='/assets/lightning.png' alt='lightning'/>
                <div className={styles.TextArea} style={{
                    position: 'relative',
                    width: "fit-content",
                    padding: "2px 15px"
                }}>
                    <div style={{
                        width: "7px",
                        height: "2px",
                        backgroundColor: "black",
                        position: "absolute",
                        top: "0",
                        left: "0"
                    }}/>
                    <div style={{
                        width: "2px",
                        height: "7px",
                        backgroundColor: "black",
                        position: "absolute",
                        top: "0",
                        left: "0"
                    }}/>
                    <div style={{
                        width: "7px",
                        height: "2px",
                        backgroundColor: "black",
                        position: "absolute",
                        bottom: "0",
                        right: "0"
                    }}/>
                    <div style={{
                        width: "2px",
                        height: "7px",
                        backgroundColor: "black",
                        position: "absolute",
                        bottom: "0",
                        right: "0"
                    }}/>

                    <div style={{
                        width: "7px",
                        height: "2px",
                        backgroundColor: "black",
                        position: "absolute",
                        top: "0",
                        right: "0"
                    }}/>
                    <div style={{
                        width: "2px",
                        height: "7px",
                        backgroundColor: "black",
                        position: "absolute",
                        top: "0",
                        right: "0"
                    }}/>
                    <div style={{
                        width: "7px",
                        height: "2px",
                        backgroundColor: "black",
                        position: "absolute",
                        bottom: "0",
                        left: "0"
                    }}/>
                    <div style={{
                        width: "2px",
                        height: "7px",
                        backgroundColor: "black",
                        position: "absolute",
                        bottom: "0",
                        left: "0"
                    }}/>
                    <span className={styles.SkillLevel}>{level}</span>
                </div>
            </div>
            <div className={styles.SkillCardBody}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}