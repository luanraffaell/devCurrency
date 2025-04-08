package com.coinlib.api_coinlib.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class CoinlibService {
    @Value("${API_KEY}")
    private String API_KEY;
    public CoinlibService(){}

    public ResponseEntity<String> requestCoinlib() {

        String URL = "https://coinlib.io/api/v1/coinlist?key=" + API_KEY + "&pref=BRL";
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForEntity(URL, String.class);
    }
    public ResponseEntity<String> requestCoin(String coin) {
        String URL = "https://coinlib.io/api/v1/coin?key=" + API_KEY + "&pref=BRL&symbol="+coin.toUpperCase();
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForEntity(URL, String.class);
    }
}
