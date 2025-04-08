package com.coinlib.api_coinlib.controllers;

import com.coinlib.api_coinlib.services.CoinlibService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/coinlib")
public class CoinlibController {
    private final CoinlibService coinlibService;
    @Value("${URL_ORIGIN}")
    private String URL_ORIGIN;

    public CoinlibController(CoinlibService coinlibService) {
        this.coinlibService = coinlibService;
    }

    @CrossOrigin(origins = "${URL_ORIGIN}")
    @GetMapping()
    public ResponseEntity<String> requestCoinlib() {
        return this.coinlibService.requestCoinlib();
    }
    @CrossOrigin(origins = "${URL_ORIGIN}")
    @GetMapping("/{coin}")
    public ResponseEntity<String> getCoin(@PathVariable String coin){
        return this.coinlibService.requestCoin(coin);
    }
}
