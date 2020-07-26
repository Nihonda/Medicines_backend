**Get all drugs**
----

* **URL**

  https://stg-lekinfo.herokuapp.com/api/v1/drug

* **Method:**
  
  `GET` 
  
*  **URL Params**

   **Optional:**
   
    To search
   
    https://stg-lekinfo.herokuapp.com/api/v1/drug?all= [ SEARCH QUERY ]
    
     will search by name, full trade name, atc, dosage form
    
    Current page is 1, per page by default 20 items. If you need you can modify by using url paramters for pagination `page=[ PAGE NUMBER ]` for limitation `limit=[ LIMIT NUMBER]`
  

* **Success Response:**
  
    **status code:** 200 <br />
    **status:** success <br />
    **data:** `{ drugs :  }`
 
* **Error Response:**

  **status code:** 404 <br />
  **status:** fail <br />
  **message:** `error message`
  
**Search by barcode**
----

* **URL**

  https://stg-lekinfo.herokuapp.com/api/v1/drug/ [BARCODE]

* **Method:**
  
  `GET` 
  
*  **URL Params**
 
    `required`

* **Success Response:**
  
    **status code:** 200 <br />
    **status:** success <br />
    **data:** `{ drug :  }`
 
* **Error Response:**

  **status code:** 404 <br />
  **status:** fail <br />
  **message:** `Invalid barcode`
  
**Search for drugs**
----

* **URL**

  https://stg-lekinfo.herokuapp.com/api/v1/drug/search?

* **Method:**
  
  `GET` 
  
*  **URL Params**

   **Optional:**
 
    `atc_name=[PARAMETER]`
    `full_trade_name=[PARAMETER]`
    `trade_name=[PARAMETER]`
    `dosage_form=[PARAMETER]`
    `country=[PARAMETER]`

* **Success Response:**
  
    **status code:** 200 <br />
    **status:** success <br />
    **data:** `{ drugs :  }`
 
* **Error Response:**

  **status code:** 404 <br />
  **status:** fail <br />
  **message:** `error message`
  
**Get total number of results**
----

* **URL**

  https://stg-lekinfo.herokuapp.com/api/v1/totalNum

* **Method:**
  
  `GET` 
  
*  **URL Params**

   **Optional:**
 
    `atc_name=[PARAMETER]`
    `full_trade_name=[PARAMETER]`
    `trade_name=[PARAMETER]`
    `dosage_form=[PARAMETER]`
    `country=[PARAMETER]`

* **Success Response:**
  
    **status code:** 200 <br />
    **status:** success <br />
    **total:** `total number of results`
 
* **Error Response:**

  **status code:** 404 <br />
  **status:** fail <br />
  **message:** `error message`
