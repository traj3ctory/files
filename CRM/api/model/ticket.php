<?php
/** 
*
*Base Ticket Model Class
*
**/
  class TicketModel extends Model
  
  {
    /**
     * undocumented function summary
     *
     * Undocumented function long description
     *
     * @param String $companyId preegistered company Id tciket belongs to.
     * @param String $productId preregistered product Id tciket refers to.
     * @param String $customerId Userid of the sender .
     * @param String $title Title of the ticket.
     * @param String $title Ticket type.
     * @param String $message Description of the title.
     * @param String $files Registered company Id ticket belongs to.
     * @return Array [ status : boolean,message:string, data ?: Array['insertId':integer ] ]
     **/
    public function addTicket($companyId,$productId,$customerId,$title,$type,$message,$files,$status = 'pending'){
  
      $id = uniqid();
      $insert =  $this->insert('tickets',['id'=>$id,'product_id'=>$productId,'customer_id'=>$customerId,'title'=>$title,'createdat'=>date("Y-m-d H:i:s"),'message'=>$message,'company_id'=>$companyId,'type'=>$type,'files'=>$files,'ticketstatus'=>$status,]);
      if($insert) return $id;
      else false;
    }
    
    /**
     * Adds a ticket function long description
     *
     * @param Integer $ticketId Id of tiket to add chat
     * @param Integer $senderId Userid of the sender .
     * @param String $message reply message.
     * @param String $files attached files.
     * @return Array [ status : boolean,message:string, data ?: Array['insertId':integer ] ]
     **/
    public function addChat($ticketId,$message,$files,$senderId,$senderRole)
    {
      return $this->insert('ticketchat',['ticket_id'=>$ticketId,'senderid'=>$senderId,'role'=>$senderRole,'message'=>$message,'files'=>$files,'createdat'=>date("Y-m-d H:i:s")]);
    }

    /**
     * Updates the status of  a ticket.
     *
     * @param Integer $ticketId Id of tiket to add chat
     * @param String $status current status of the ticket.
     * @return Array [ status : boolean,message:string, data ?: Array['insertId':integer ] ]
     **/
    public function updateTicketStatus($ticketId,$status)
    {
      return $this->update('tickets',['ticketstatus'=>$status],['id'=>$ticketId]);
    }

      /**
     * Retrieve tickets .
     *
     * @param String $condition  - Query ticket condition
     * @param String $string String represenntation of values passed e.g name:String,id:integer = 'si'.
     * @param Array $values values to be passed to the query
     * @return Array [ status : boolean,message:string, data ?: Array['insertId':integer ] ]
     **/
    public function getTickets($condition = '',$string = '',$values = [])
    {
      $sql = 'SELECT * FROM tickets '.$condition;
      $query = $this->query($sql,$string,$values); 
      if($query) return $this->rows;
      else return false;
    }

    /**
     * Returns a database ticket object
     *
     * @param SQLQUERY~WHERE $condition to search ticket with
     * @param string $string SQL bindParam alphabet representation of $values '' e.g 'sis' - string,int,string
     * @param values $values SQL bindParam values
     * @return bool or @return DATABASETICKETOBEJCT 
     **/
    public function getTicket($condition = '',$string = '',$values = [])
    {
      $sql = 'SELECT * FROM tickets '.$condition;
      $query = $this->query($sql,$string,$values); 
      if($query) return $this->row;
      else return false;
    }

    /**
     * Returns a ticket by its Id
     *
     * @param UUID $ticketId primary key if the ticket table for the requested ticket
     * @return bool or @return DATABASETCIKETOBEJCT 
     **/
    public function getTicketById($ticketId,$status = 1)
    {
      return $this->getTicket('WHERE id = ? AND status = ? ','si',[$ticketId,$status]);
    }
    public function searchTicket($filter = [])
    {
      $conditions .= isset($filter['ticketId']) ? "AND ticket_id = ".$filter['ticketId'] : "";
      $conditions .= isset($filter['type']) ? "AND type = ".$filter['type'] : "";
      $conditions .= isset($filter['customerId']) ? "AND customer_id = ".$filter['customerId'] : "";
      $conditions .= isset($filter['companyId']) ? "AND customer_id = ".$filter['companyId'] : "";
      $conditions .= isset($filter['on']) ? "AND dateadded = ".$filter['on'] : "";
      $conditions .= isset($filter['startDate']) ? "AND dateadded >= ".$filter['startDate'] : "";
      $conditions .= isset($filter['endDate']) ? "AND dateadded <= ".$filter['endDate'] : "";

      $conditions .= isset($filter['order_by']) ? " ORDER BY ".$filter['order_by'] : "ORDER BY id";
      $conditions .= isset($filter['order']) ? " ".$filter['order'] : " DESC";

      $limit       = (int) isset($filter['limit']) ? $filter['limit'] : 20;
      $pageno      = (string) isset($filter['pageno']) ? $filter['pageno'] : 1;
      $conditions .= 'LIMIT '.(string) $limit;
      $conditions .= 'OFFSET '.(string) (($pageno - 1 ) * $limit);

      ltrim($conditions,'AND');
      return $this->getTickets($conditions,'',[]);
    }

    /**
     * Retrieves chats
     *
     * @param QueryConditionString $condtion - Condition  for retrieving packages
     * @param BindStrings $string  bind string for all parameters passed e.g 'ssii' for string,string,int,int
     * @param BindValues $values
     * @return bool false if query fails or @return object if query passes
     **/
    public function getChats($condition = '',$string = '',$values = [])
    {
      $sql = 'SELECT * FROM ticketchats '.$condition;
      $query = $this->query($sql,$string,$values); 
      if($query) return $this->rows;
      else return false;
    }

    /**
     * Retrieves a ticketchat
     *
     * @param QueryConditionString $condtion - Condition  for retrieving packages
     * @param BindStrings $string  bind string for all parameters passed e.g 'ssii' for string,string,int,int
     * @param BindValues $values
     * @return bool false if query fails or @return object if query passes
     **/
    public function getChat($condition = '',$string = '',$values = [])
    {
      $sql = 'SELECT * FROM ticketchat '.$condition;
      $query = $this->query($sql,$string,$values); 
      if($query) return $this->row;
      else return false;
    }

    /**
     * Retrieves all the chat for a ticket
     *
     * @param UUID $ticketId primary key if the ticket table for the requested ticket
     * @param Int $status 
     * @return bool or @return DATABASETICKETOBEJCT 
     **/
    public function getChatsByTicketId($ticketId,$status = 1)
    {
      return $this->getChats('WHERE ticket_id = ? AND status =  ?','si',[$ticketId,$status]);
    }

    
    /**
     * Retrieves all the chat for a ticket
     *
     * @param UUID $chatId primary key if the chat table for the requested ticket
     * @param Int $status 
     * @return bool or @return DATABASETICKETOBEJCT 
     **/
    public function getChatByChatId($chatId,$status = 1)
    {
      return $this->getChat('WHERE id = ? AND status =  ?','si',[$chatId,$status]);
    }
  }
?>