import { useEffect, useState } from 'react';
import styles from './detail.module.css'
import { useNavigate, useParams } from 'react-router-dom'

interface CoinProp{
  symbol: string
  name: string
  price: string
  market_cap: string
  low_24h: string
  high_24h: string
  total_volume_24h: string
  delta_24h : string
  formatedPrice: string
  formaterMarket: string
  formatedLowPrice: string
  formatedHighprice: string
  error?: string
}

export default function Detail() {
  const { cripto } = useParams();
  const[detail, setDetail] = useState<CoinProp>();
  const[loading, setLoading] = useState(true)

  const navigate = useNavigate();
  useEffect(()=>{
    function getData(){
      fetch(`http://localhost:8080/coinlib/${cripto}`)
      .then(response => response.json())
      .then((data: CoinProp) => {
        if(data.error){
          navigate("/")
        }

        let price = Intl.NumberFormat("pt-br",{
          style:"currency",
          currency: "BRL"
        });
        const resultData = {
          ...data,
          formatedPrice: price.format(Number(data.price)),
          formaterMarket:price.format(Number(data.market_cap)),
          formatedLowPrice: price.format(Number(data.low_24h)),
          formatedHighprice: price.format(Number(data.high_24h)),
        }
        setDetail(resultData)
        setLoading(false)
      })
    }
    getData()
  },[])

  if(loading){
    return (
      <div className={styles.container}>
        <h4 className={styles.center}>Carregando informações...</h4>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.center}> {detail?.name} </h1>
      <p className={styles.center}>{detail?.symbol}</p>

      <section className={styles.content}>
        <p>
          <strong>Preço</strong> {detail?.formatedPrice}
        </p>
        <p>
          <strong>Maior preço</strong> {detail?.formatedHighprice}
        </p>
        <p>
          <strong>Menor preço</strong> {detail?.formatedLowPrice}
        </p>
        <p>
          <strong>Delta 24 horas</strong> 
          <span className={Number(detail?.delta_24h) >= 0 ? styles.profit : styles.loss}>
            {detail?.delta_24h}
            </span>
        </p>
        <p>
          <strong>Valor mercado</strong> {detail?.formaterMarket}
        </p>
      </section>

    </div>
  );
}