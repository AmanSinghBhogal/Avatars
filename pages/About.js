import axios from "axios";
import Link from 'next/link';
import AvtarCard from "../src/components/AvtarCard";
import styles from '../styles/About.module.css';

export default function About({ Avatars }) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Avatars</div>
            <div className={styles.content}>
                {
                    Avatars.map((dataItem) => 
                        <Link className={styles.card}  href={`/characters/${dataItem._id}`} key={dataItem._id}>
                            <a className={styles.link}><AvtarCard dataItem={dataItem} /></a>
                        </Link>
                    )
                }
            </div>
        </div>
        
    );
};



export async function getStaticProps()
{
    const { data } = await axios.get("https://last-airbender-api.herokuapp.com/api/v1/characters/avatar");
    const Avatars = data;
    return {
        props: {
            Avatars
        }
    }
}