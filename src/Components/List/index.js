import {useState} from "react"
import { Link } from "react-router-dom"
import Filter from "../Filter"
function List(setList,list){
    const [descricao,setDescricao] = useState("")
    const [valor,setValor] = useState("")
    const [categoria,setCategoria] = useState("Entradas")
    const [filter,setFilter] = useState("Todos")
    const [valueTotal,setValueTotal] = useState(6780)
    
    function CalculateValue(categoria,value){
        if(categoria === "Entradas"){
            setValueTotal(valueTotal + Number(value))
        }
        else{
            setValueTotal(valueTotal - Number(value))
        }
    }
     
    function set(description,value,category){
            if(description.length > 0 && value.length > 0){
            const obj = {descricao:description,valor:value,categoria:category}
            setList([...list,obj])
            CalculateValue(category,value)
        }
        else{
            window.alert("Escreva nos Campos Obrigatório")
        }
    }

    
    return(
        <>
            <header className="headerIndex">
                <div className="divLogoIndex">
                    <h1 className="logoIndex">Nu</h1>
                    <h2 className="logoIndex1">Kenzie</h2>
                </div>
                <Link className="buttonIndex" to="/">Inicio</Link>
            </header>
            <main>
                
            <div className="board">
                <div className="descricao">
                    <span>Descrição</span>
                    <input required = {true} className="inputBoardDescricao" type="text" placeholder="Digite Aqui" onChange={(e)=>{e.preventDefault();setDescricao(e.target.value)}}></input>
                    <p>Ex:Compra de Roupas</p>
                </div>
                
                <div className="precoOpcao">
                    
                    <div className="valor">
                    <span>Valor</span>
                    <div className="valorInput">
                        <h4>R$</h4>
                        <input className="inputBoardValor" type="number" placeholder="Digite Aqui" onChange={(e)=>{e.preventDefault();setValor(e.target.value)}}></input>
                    </div>
                    </div>
                    
                    <div className="opcao">
                        <span>Tipo de Valor</span>
                        <select name="typeValue" className="inputBoard" onClick={(e)=>{e.preventDefault();setCategoria(e.target.value)}}>
                        <option value="Entradas">Entrada</option>
                        <option value="Saidas">Saida</option>
                        </select>
                    </div>
                </div>

                    <div>
                    <button className="buttonAdd" onClick={(e)=>{e.preventDefault();set(descricao,valor,categoria)}}>Inserir Valor</button>
                    </div>
            
            <div className="totalValue">
                <div className="infoValue">
                    <h2 className="h2Value">Valor Total:</h2>
                    <span className="spanValue">O valor se refere ao saldo</span>
                </div>
                <h6 className="Value">$ {valueTotal}</h6>
            </div>
            
            </div>
            
            
            <div className="ListFilter">
            <div className="filter">
                <h2 className="textResumo">Resumo Financeiro</h2>
                <div className="divButtonsFilters">
                    <button onClick={(e)=>{e.preventDefault();setFilter("Todos")}} className="buttonsFilters">Todos</button>
                    <button onClick={(e)=>{e.preventDefault();setFilter("Entradas")}} className="buttonsFilters">Entradas</button>
                    <button onClick={(e)=>{e.preventDefault();setFilter("Saidas")}} className="buttonsFilters">Saidas</button>
                </div>
            </div>
            <div className="List">
            <ul>
            {Filter(list,filter,setList,setValueTotal,valueTotal)}
            </ul>
            </div>
            </div>

            </main>
            </>
    )
}

export default List