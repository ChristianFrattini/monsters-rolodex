
import './search-box.styles.css'

const SearchBox =({className,placeholder,onChangeHandler})=>(
    
        
            <input className={`search-box ${className}` }//string interpolation ca be useful
            //to target a specific search box (console will show: search-box monsters-search-box)
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
            ></input>
        )
    


export default SearchBox;