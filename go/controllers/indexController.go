package controllers

import (
	"github.com/gofiber/fiber/v2"
	"go.uber.org/zap"
)

func IndexController(c *fiber.Ctx) error {
	c.Request().Header.VisitAll(func(key, value []byte) {
		zap.L().Info("Header", zap.ByteString("key", key), zap.ByteString("value", value))
	})
	return c.JSON(fiber.Map{"message": "Logging request headers.."})
}