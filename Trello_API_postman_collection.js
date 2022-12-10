{
	"info": {
		"_postman_id": "b136d08c-8f1a-4b6d-bf92-5198ae2786ec",
		"name": "Trello API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "24422761"
	},
	"item": [
		{
			"name": "Create a Board",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json()\r",
							"pm.environment.set(\"boardId\", jsonData.id);\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Board name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"boardName\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Board id is correct\", function () {\r",
							"    pm.expect(jsonData.id).be.eql(pm.environment.get(\"boardId\"));\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "{{baseUrl}}/1/boards/?name={{boardName}}&token={{trelloToken}}&key={{trelloKey}}&defaultLists={{defaultLists}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"boards",
						""
					],
					"query": [
						{
							"key": "name",
							"value": "{{boardName}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						},
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "defaultLists",
							"value": "{{defaultLists}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "GET created Board",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json();\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Board name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"boardName\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Board id is correct\", function () {\r",
							"    pm.expect(jsonData.id).be.eql(pm.environment.get(\"boardId\"));\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "{{baseUrl}}/1/boards/{{boardId}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"boards",
						"{{boardId}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Update a Board",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json()\r",
							"\r",
							"pm.environment.set(\"boardName\", jsonData.name);\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Updated name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"boardName\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Board is the same\", function () {\r",
							"    pm.expect(jsonData.id).be.eql(pm.environment.get(\"boardId\"));\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"auth": {
					"type": "oauth1",
					"oauth1": [
						{
							"key": "tokenSecret",
							"value": "",
							"type": "string"
						},
						{
							"key": "token",
							"value": "",
							"type": "string"
						},
						{
							"key": "consumerSecret",
							"value": "",
							"type": "string"
						},
						{
							"key": "consumerKey",
							"value": "",
							"type": "string"
						},
						{
							"key": "signatureMethod",
							"value": "HMAC-SHA1",
							"type": "string"
						},
						{
							"key": "version",
							"value": "1.0",
							"type": "string"
						},
						{
							"key": "addParamsToHeader",
							"value": false,
							"type": "boolean"
						},
						{
							"key": "addEmptyParamsToSign",
							"value": false,
							"type": "boolean"
						}
					]
				},
				"method": "PUT",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/boards/{{boardId}}?name=Test Updated Board&key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"boards",
						"{{boardId}}"
					],
					"query": [
						{
							"key": "name",
							"value": "Test Updated Board"
						},
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "GET updated Board",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json();\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Board name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"boardName\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Board id is correct\", function () {\r",
							"    pm.expect(jsonData.id).be.eql(pm.environment.get(\"boardId\"));\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "{{baseUrl}}/1/boards/{{boardId}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"boards",
						"{{boardId}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a List 1 on the Board",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json()\r",
							"pm.environment.set(\"list1Name\", jsonData.name);\r",
							"pm.environment.set(\"list1Id\", jsonData.id);\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"List name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"list1Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Status to be not closed\", function () {\r",
							"    pm.expect(jsonData.closed).be.eql(false);\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/boards/{{boardId}}/lists?name={{list1Name}}&boardID={{boardId}}&key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"boards",
						"{{boardId}}",
						"lists"
					],
					"query": [
						{
							"key": "name",
							"value": "{{list1Name}}"
						},
						{
							"key": "boardID",
							"value": "{{boardId}}"
						},
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "GET a List 1",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json();\r",
							"\r",
							"pm.test(\"List name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"list1Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"List ID is correct\", function () {\r",
							"    pm.expect(jsonData.id).be.eql(pm.environment.get(\"list1Id\"));\r",
							"});\r",
							"\r",
							"\r",
							"pm.test(\"Create on the right board\", function () {\r",
							"    pm.expect(jsonData.idBoard).be.eql(pm.environment.get(\"boardId\"));\r",
							"});\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "{{baseUrl}}/1/lists/{{list1Id}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"lists",
						"{{list1Id}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Update List 1",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json()\r",
							"\r",
							"pm.environment.set(\"list1Name\", jsonData.name);\r",
							"pm.environment.set(\"list1Id\", jsonData.id);\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"List name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"list1Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"List is the same\", function () {\r",
							"    pm.expect(jsonData.id).be.eql(pm.environment.get(\"list1Id\"));\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/list/{{list1Id}}?name=Updated List 1&key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"list",
						"{{list1Id}}"
					],
					"query": [
						{
							"key": "name",
							"value": "Updated List 1"
						},
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "GET updated List 1",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json();\r",
							"\r",
							"pm.test(\"List name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"list1Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"List ID is correct\", function () {\r",
							"    pm.expect(jsonData.id).be.eql(pm.environment.get(\"list1Id\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Create on the right board\", function () {\r",
							"    pm.expect(jsonData.idBoard).be.eql(pm.environment.get(\"boardId\"));\r",
							"});\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "{{baseUrl}}/1/lists/{{list1Id}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"lists",
						"{{list1Id}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a Card 1 on List 1",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json()\r",
							"pm.environment.set(\"card1Name\", jsonData.name);\r",
							"pm.environment.set(\"card1Id\", jsonData.id);\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Card name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"card1Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Create on the right list\", function () {\r",
							"    pm.expect(jsonData.idList).be.eql(pm.environment.get(\"list1Id\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Create on the right board\", function () {\r",
							"    pm.expect(jsonData.idBoard).be.eql(pm.environment.get(\"boardId\"));\r",
							"});\r",
							"\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/cards?name={{card1Name}}&idList={{list1Id}}&key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"cards"
					],
					"query": [
						{
							"key": "name",
							"value": "{{card1Name}}"
						},
						{
							"key": "idList",
							"value": "{{list1Id}}"
						},
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "GET a Card 1",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json();\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Card name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"card1Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Card ID is correct\", function () {\r",
							"    pm.expect(jsonData.id).be.eql(pm.environment.get(\"card1Id\"));\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "{{baseUrl}}/1/cards/{{card1Id}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"cards",
						"{{card1Id}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Update Card 1",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json()\r",
							"pm.environment.set(\"card1Name\", jsonData.name);\r",
							"pm.environment.set(\"card1Id\", jsonData.id);\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Card name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"card1Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Same Card\", function () {\r",
							"  pm.expect(jsonData.id).be.eql(pm.environment.get(\"card1Id\"));\r",
							"});\r",
							"\r",
							"\r",
							"pm.test(\"Create on the right list\", function () {\r",
							"    pm.expect(jsonData.idList).be.eql(pm.environment.get(\"list1Id\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Create on the right board\", function () {\r",
							"    pm.expect(jsonData.idBoard).be.eql(pm.environment.get(\"boardId\"));\r",
							"});\r",
							"\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/cards/{{card1Id}}?name=Updated Card 1&idList={{list1Id}}&key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"cards",
						"{{card1Id}}"
					],
					"query": [
						{
							"key": "name",
							"value": "Updated Card 1"
						},
						{
							"key": "idList",
							"value": "{{list1Id}}"
						},
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "GET updated Card 1",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json();\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Card name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"card1Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Card id is correct\", function () {\r",
							"    pm.expect(jsonData.id).be.eql(pm.environment.get(\"card1Id\"));\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "{{baseUrl}}/1/cards/{{card1Id}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"cards",
						"{{card1Id}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Create List 2 on the Board",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json()\r",
							"\r",
							"pm.environment.set(\"list2Name\", jsonData.name);\r",
							"pm.environment.set(\"list2Id\", jsonData.id);\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"List name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"list2Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Status to be not closed\", function () {\r",
							"    pm.expect(jsonData.closed).be.eql(false);\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/boards/{{boardId}}/lists?name={{list2Name}}&boardID={{boardId}}&key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"boards",
						"{{boardId}}",
						"lists"
					],
					"query": [
						{
							"key": "name",
							"value": "{{list2Name}}"
						},
						{
							"key": "boardID",
							"value": "{{boardId}}"
						},
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "GET a List 2",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json();\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"List 2 name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"list2Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"List 2 ID is correct\", function () {\r",
							"    pm.expect(jsonData.id).be.eql(pm.environment.get(\"list2Id\"));\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "{{baseUrl}}/1/lists/{{list2Id}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"lists",
						"{{list2Id}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Move Card 1 from List 1 to List 2",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"const jsonData = pm.response.json();\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Same name card as before\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"card1Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Moved to List 2\", function () {\r",
							"    pm.expect(jsonData.idList).be.eql(pm.environment.get(\"list2Id\"));\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/cards/{{card1Id}}/?idList={{list2Id}}&key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"cards",
						"{{card1Id}}",
						""
					],
					"query": [
						{
							"key": "idList",
							"value": "{{list2Id}}"
						},
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "GET a Card 1 on List 2",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"const jsonData = pm.response.json();\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Card 1 name is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"card1Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Card 1 ID is correct\", function () {\r",
							"    pm.expect(jsonData.name).be.eql(pm.environment.get(\"card1Name\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Moved to List 2\", function () {\r",
							"    pm.expect(jsonData.idList).be.eql(pm.environment.get(\"list2Id\"));\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "{{baseUrl}}/1/cards/{{card1Id}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"cards",
						"{{card1Id}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Add comment to Card 1",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json();\r",
							"pm.environment.set(\"commentText\", jsonData.data.text);\r",
							"pm.environment.set(\"commentID\", jsonData.id);\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Correct text content\", function () {\r",
							"   pm.expect(jsonData.data.text).be.eql(pm.environment.get(\"commentText\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Comment added to correct Card\", function () {\r",
							"    pm.expect(jsonData.data.card.id).be.eql(pm.environment.get(\"card1Id\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Created from correct user\", function () {\r",
							"    pm.expect(jsonData.idMemberCreator).be.eql(\"638b4b82243c5401aae19361\");\r",
							"});\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/cards/{{card1Id}}/actions/comments?text={{commentText}}&key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"cards",
						"{{card1Id}}",
						"actions",
						"comments"
					],
					"query": [
						{
							"key": "text",
							"value": "{{commentText}}"
						},
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "GET a comment",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json();\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Correct comment ID\", function () {\r",
							"   pm.expect(jsonData.id).be.eql(pm.environment.get(\"commentID\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Correct text content\", function () {\r",
							"   pm.expect(jsonData.data.text).be.eql(pm.environment.get(\"commentText\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Comment added to correct Card\", function () {\r",
							"    pm.expect(jsonData.data.card.id).be.eql(pm.environment.get(\"card1Id\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Created from correct user\", function () {\r",
							"    pm.expect(jsonData.idMemberCreator).be.eql(\"638b4b82243c5401aae19361\");\r",
							"});\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/actions/{{commentID}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"actions",
						"{{commentID}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Update comment",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json();\r",
							"pm.environment.set(\"commentText\", jsonData.data.text);\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Correct comment ID\", function () {\r",
							"   pm.expect(jsonData.id).be.eql(pm.environment.get(\"commentID\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Correct text content\", function () {\r",
							"   pm.expect(jsonData.data.text).be.eql(pm.environment.get(\"commentText\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Comment added to correct Card\", function () {\r",
							"    pm.expect(jsonData.data.card.id).be.eql(pm.environment.get(\"card1Id\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Created from correct user\", function () {\r",
							"    pm.expect(jsonData.idMemberCreator).be.eql(\"638b4b82243c5401aae19361\");\r",
							"});\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/actions/{{commentID}}?text=Komentar update&key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"actions",
						"{{commentID}}"
					],
					"query": [
						{
							"key": "text",
							"value": "Komentar update"
						},
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "GET updated comment",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"let jsonData = pm.response.json();\r",
							"\r",
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Correct comment ID\", function () {\r",
							"   pm.expect(jsonData.id).be.eql(pm.environment.get(\"commentID\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Correct text content\", function () {\r",
							"   pm.expect(jsonData.data.text).be.eql(pm.environment.get(\"commentText\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Comment added to correct Card\", function () {\r",
							"    pm.expect(jsonData.data.card.id).be.eql(pm.environment.get(\"card1Id\"));\r",
							"});\r",
							"\r",
							"pm.test(\"Created from correct user\", function () {\r",
							"    pm.expect(jsonData.idMemberCreator).be.eql(\"638b4b82243c5401aae19361\");\r",
							"});\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/actions/{{commentID}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"actions",
						"{{commentID}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete comment",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/actions/{{commentID}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"actions",
						"{{commentID}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Card 1",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/cards/{{card1Id}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"cards",
						"{{card1Id}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete List 1",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/lists/{{list1Id}}/closed?key={{trelloKey}}&token={{trelloToken}}&value=true",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"lists",
						"{{list1Id}}",
						"closed"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						},
						{
							"key": "value",
							"value": "true"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete a Board",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "{{baseUrl}}/1/boards/{{boardId}}?key={{trelloKey}}&token={{trelloToken}}",
					"host": [
						"{{baseUrl}}"
					],
					"path": [
						"1",
						"boards",
						"{{boardId}}"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Get a Board members",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://api.trello.com/1/boards/{{boardId}}/memberships?key={{trelloKey}}&token={{trelloToken}}",
					"protocol": "https",
					"host": [
						"api",
						"trello",
						"com"
					],
					"path": [
						"1",
						"boards",
						"{{boardId}}",
						"memberships"
					],
					"query": [
						{
							"key": "key",
							"value": "{{trelloKey}}"
						},
						{
							"key": "token",
							"value": "{{trelloToken}}"
						}
					]
				}
			},
			"response": []
		}
	]
}