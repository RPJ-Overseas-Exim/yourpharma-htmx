package handlers

import (
	privacy_policy_views "github.com/RPJ-Overseas-Exim/yourpharma-htmx/views/privacyPolicy"
	terms_and_conditions_views "github.com/RPJ-Overseas-Exim/yourpharma-htmx/views/termsAndConditions"
	"github.com/labstack/echo/v4"
)

func RenderPrivacyPolicy(c echo.Context)error {
    return renderTempl(c, 200, privacy_policy_views.PrivacyPolicy())
}

func RenderTermsAndConditions(c echo.Context)error {
    return renderTempl(c, 200, terms_and_conditions_views.TermsAndConditions())
}
