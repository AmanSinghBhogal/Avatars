import axios from 'axios';
import styles from '../../styles/Avatar.module.css';

export default function Character({ Avatar })
{
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                {Avatar.name}
            </div>
            <div className={styles.picture}>
                <img src={Avatar.photoUrl} alt="Ops Image not Found" />
            </div>
            <div className={styles.content}>
                <p><strong id={styles.tag}>Name:</strong> {Avatar?.name}</p>
                <p><strong id={styles.tag}>Gender:</strong> {Avatar?.gender}</p>
                <p><strong id={styles.tag}>Affiliation:</strong> {Avatar?.affiliation}</p>
                <p><strong id={styles.tag}>Allies:</strong> {Avatar?.allies.map((a) => `${a} `)}</p>
                <p><strong id={styles.tag}>Enemies:</strong> {Avatar?.enemies.map((a) => `${a} `)}</p>
                <p><strong id={styles.tag}>Love:</strong> {Avatar?.love}</p>
                <p><strong id={styles.tag}>Weapon:</strong> {Avatar?.weapon}</p>
                <p><strong id={styles.tag}>Position:</strong> {Avatar?.position}</p>
                <p><strong id={styles.tag}>Predecessor:</strong> {Avatar?.predecessor}</p>
            </div>
        </div>
    )
};

export async function getServerSideProps({ params })
{
    const AvatarId = params.AvatarId;
    const { data } = await axios.get(`https://last-airbender-api.herokuapp.com/api/v1/characters/${AvatarId}`);
    const Avatar = data;
    return {
        props: {
            Avatar
        }
    }
};