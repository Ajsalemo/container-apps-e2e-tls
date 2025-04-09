package main

import (
	"github.com/gofiber/fiber/v2"
	"go.uber.org/zap"

	controllers "container-apps-e2e-tls-go/controllers"
)

func init() {
	zap.ReplaceGlobals(zap.Must(zap.NewProduction()))
}

func main() {
	app := fiber.New()

	app.Get("/", controllers.IndexController)
	zap.L().Info("Go Fiber starting HTTPS server on port 3443")
	err := app.ListenTLS(":3443", "./certs/example.com.crt", "./certs/example.com.key")

	if err != nil {
		zap.L().Error("Failed to start server", zap.Error(err))
	}
}
