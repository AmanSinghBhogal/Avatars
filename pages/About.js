import axios from "axios";
import Link from 'react-dom';
import AvtarCard from "../src/components/AvtarCard";
import styles from '../styles/About.module.css';

export default function About({ Avatars }) {
    console.log(Avatars);
    return (
        <div className={styles.container}>
            <div className={styles.title}>Avatars</div>
            <div className={styles.content}>
                {
                    Avatars.map((dataItem) => <AvtarCard dataItem={dataItem} />)
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