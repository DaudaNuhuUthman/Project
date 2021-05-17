

function Select(props){
    return( 
        <select className="category" name={props.name} onChange={props.onChange}>
                    <option value="">Select Category</option>
                        <option value="Clothes"> clothes</option>
                        <option value="Food"> food</option>
                        <option value="Repairs"> Repair Shops</option>
                        <option value="Groceries"> Groceries</option>
                        <option value="Pharmacy"> Pharmacy</option>
                        <option value="Beauty"> Beauty</option>
                        <option value="electronics"> Electronics</option>
                        <option value="Hospital and Clinic"> Hospital and Clinic</option>
                        <option value="Mobile Banking"> Mobile Banking</option>
                        <option value="Public Building"> Public Building</option>

                    </select>
    )
};
export default Select;