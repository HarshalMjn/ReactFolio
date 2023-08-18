import './ItemDate.css';

function ItemDate(props) {
    const day = props.day;
    const month = props.nov;
    const year = props.year;
    return ( <div class="mfg-date">
           <span>{day}</span>
           <span>{month}</span>
           <span>{year}</span>
    </div>);

    
       



}

export default ItemDate ;