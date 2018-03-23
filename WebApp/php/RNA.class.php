<?php
	class RNA
	{
		public $id;
		public $header;
		public $sequence;
		public $structure;

		public function __construct($id,$header,$sequence,$structure)
		{
			$this->id = $id;
			$this->header = $header;
			$this->sequence = $sequence;
			$this->structure = $structure;
		}
	}
?>