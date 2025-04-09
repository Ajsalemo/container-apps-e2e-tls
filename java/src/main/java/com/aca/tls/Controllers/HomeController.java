package com.aca.tls.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    String message = "container-apps-e2e-tls-java";

    @GetMapping("/")
    public String home() {
        return message;
    }
}
