module.exports = {
	"questionPanels" : [{
		"panelId" : "intro-panel",
		"panelHeader" : "A quick survey?",
		"panelText" : "Please could you take a few minutes to fill out our survey?",
		"action" : {
			"conditions" : [{
				"questionId" : "existing-user",
				"value" : "no",
				"action" : "GOTO",
				"target" : "register-panel"
			}],
			"default" : {
				"action" : "GOTO",
				"target" : "final-panel"
			}
		},
		"button" : {
			"text" : "Next",
      "disabled" : false
		},
    "" : {
      "text" : "Back",
      "disable" : false
    },
		"questionSets" : [{
			"index" : 1,
			"questionSetId" : "intro-set"
		}]
	}]
};
