package utils

import (
	"os"
	"strings"

	merge "github.com/tylantz/go-tailwind-merge"
)

func GetTailwindMerger(path string) *merge.Merger {
	merger := merge.NewMerger(nil, true)

	data, err := os.ReadFile(path)
	if err != nil {
		panic(err)
	}

	merger.AddRules(strings.NewReader(string(data)), false)
	return merger
}
