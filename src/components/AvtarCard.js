import styles from '../../styles/AvtarCard.module.css';

export default function AvtarCard({ dataItem })
{
    return(
        <div className={styles.AvtarCard} key={dataItem._id}>
            <img src={dataItem.photoUrl} alt={dataItem.name} />
            <h3>{dataItem.name}</h3>
        </div>  
    )
};
