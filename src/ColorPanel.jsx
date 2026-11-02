function SzinPanel({color}) {
    return{
        <div>
        style ={{
            backgroundColor: color ? color.rgb :"#eee",
            width: "300px",
            height: "200px",
            margin: "20px auto",
        }}
        </div>
    };
}

export default SzinPanel;