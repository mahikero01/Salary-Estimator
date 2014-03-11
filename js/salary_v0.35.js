/**
 * @author sarmientof
 */
var fltHalfMonthBasic;
   var fltNoneTaxIncome;
        var intTaxCode;
        var fltAMA;
        var fltPMA;
        var fltGYA;
        var fltAMB;
        var fltPMB;
        var fltGYB;
        var fltRDO;
        var fltLegHol;
        var fltSplHol;
        var fltUnpND; 
        var intGYSts = 0;
        var fltMealAdj = 0;
       
        var fltTotalDaysA;
        var fltTotalDaysB;
        var fltTotalDays = 0; 
        var fltTotalRDO;
        var fltTotalLv;
        var fltTotalCalendarDays;
        var fltTotalNDHours;
        
        var fltBasicPay;
        var fltDailyRate;
        var fltHourlyRate;
        var fltNDPerHourRate;
      var fltNDTotalCost;
      var fltMealCost;
        var fltLegHolRate;
        var fltSplHolRate;
        var fltTaxableIncome = 0.0;
        var fltWithholdingTax;
        var fltNetIncome = 0.0;
        
        var arrGYSts = new Array(0,6,2,4); //GY status value
        var arrTaxTable = new Array();
            arrTaxTable[0] = new Array();
            arrTaxTable[1] = new Array();
            arrTaxTable[2] = new Array();
            arrTaxTable[3] = new Array();
            arrTaxTable[4] = new Array();
            arrTaxTable[5] = new Array();
        
        var arrTaxTable2 = new Array();
            arrTaxTable2[0] = new Array();
            arrTaxTable2[1] = new Array();
            arrTaxTable2[2] = new Array();
            arrTaxTable2[3] = new Array();
            arrTaxTable2[4] = new Array();
            arrTaxTable2[5] = new Array();
            arrTaxTable2[6] = new Array();
            arrTaxTable2[7] = new Array();
        
        //initialized tax table
        function iniTaxTable(){
            arrTaxTable[0][0] = 1;
            arrTaxTable[0][1] = 0;
            arrTaxTable[0][2] = 417;
            arrTaxTable[0][3] = 1250;
            arrTaxTable[0][4] = 2917;
            arrTaxTable[0][5] = 5833;
            arrTaxTable[0][6] = 10417;
            arrTaxTable[0][7] = 20833;
            arrTaxTable[1][0] = 1;
            arrTaxTable[1][1] = 2083;
            arrTaxTable[1][2] = 2500;
            arrTaxTable[1][3] = 3333;
            arrTaxTable[1][4] = 5000;
            arrTaxTable[1][5] = 7917;
            arrTaxTable[1][6] = 12500;
            arrTaxTable[1][7] = 22917;
            arrTaxTable[2][0] = 1;
            arrTaxTable[2][1] = 3125;
            arrTaxTable[2][2] = 3542;
            arrTaxTable[2][3] = 4375;
            arrTaxTable[2][4] = 6042;
            arrTaxTable[2][5] = 8958;
            arrTaxTable[2][6] = 13542;
            arrTaxTable[2][7] = 23958;
            arrTaxTable[3][0] = 1;
            arrTaxTable[3][1] = 4167;
            arrTaxTable[3][2] = 4583;
            arrTaxTable[3][3] = 5417;
            arrTaxTable[3][4] = 7083;
            arrTaxTable[3][5] = 10000;
            arrTaxTable[3][6] = 14583;
            arrTaxTable[3][7] = 25000;
            arrTaxTable[4][0] = 1;
            arrTaxTable[4][1] = 5208;
            arrTaxTable[4][2] = 5625;
            arrTaxTable[4][3] = 6458;
            arrTaxTable[4][4] = 8125;
            arrTaxTable[4][5] = 11042;
            arrTaxTable[4][6] = 15625;
            arrTaxTable[4][7] = 26042;
            arrTaxTable[5][0] = 1;
            arrTaxTable[5][1] = 6250;
            arrTaxTable[5][2] = 6667;
            arrTaxTable[5][3] = 7500;
            arrTaxTable[5][4] = 9167;
            arrTaxTable[5][5] = 12083;
            arrTaxTable[5][6] = 16667;
            arrTaxTable[5][7] = 27083;
        }
        
        //initialized tax table2
        function iniTaxTable2(){
            arrTaxTable2[0][0] = 0;
            arrTaxTable2[0][1] = 0;
            arrTaxTable2[1][0] = 0;
            arrTaxTable2[1][1] = 0.05;
            arrTaxTable2[2][0] = 20.83;
            arrTaxTable2[2][1] = 0.10;
            arrTaxTable2[3][0] = 104.17;
            arrTaxTable2[3][1] = 0.15;
            arrTaxTable2[4][0] = 354.17;
            arrTaxTable2[4][1] = 0.20;
            arrTaxTable2[5][0] = 937.50;
            arrTaxTable2[5][1] = 0.25;
            arrTaxTable2[6][0] = 2083.33;
            arrTaxTable2[6][1] = 0.30;
            arrTaxTable2[7][0] = 5208.33;
            arrTaxTable2[7][1] = 0.32;
        }
        
        //total work days 
        function totalWorkDays(){
            fltAMA = parseFloat(document.frmSalary.txbAMA.value);
            fltPMA = parseFloat(document.frmSalary.txbPMA.value);
            fltGYA = parseFloat(document.frmSalary.txbGYA.value);
            fltAMB = parseFloat(document.frmSalary.txbAMB.value);
            fltPMB = parseFloat(document.frmSalary.txbPMB.value);
            fltGYB = parseFloat(document.frmSalary.txbGYB.value);
            fltTotalDaysA = (fltAMA + fltPMA + fltGYA) / 2;
            fltTotalDaysB = (fltAMB + fltPMB + fltGYB) / 2;
            fltTotalDays = fltTotalDaysA + fltTotalDaysB
        }
        
        //total all ND hours
        function totalNDHours(){
            fltTotalNDHours = fltGYA * 4;
            fltTotalNDHours += fltGYB * 4;
            fltTotalNDHours += fltAMA;
            fltTotalNDHours += fltUnpND;
            fltTotalNDHours -= arrGYSts[intGYSts];
        }
        
        //total all days RDO and Work
        function totalCalendarDays(){
            fltRDO = parseFloat(document.frmSalary.txbRDO.value);
            fltTotalCalendarDays = fltTotalDays + fltRDO;
        }
        
      //output total work and calendar days
      function quickTotalDaysUpdate(){
         var strTotalDays;
      
         strTotalDays = "=&nbsp;&nbsp;";
            strTotalDays += fltTotalDays;
            document.getElementById("outTotalWorkDays").innerHTML = strTotalDays;
            strTotalDays = "Total Calendar Days&nbsp;&nbsp;&nbsp;";
            strTotalDays += fltTotalCalendarDays; 
            document.getElementById("outTotalCalendarDays").innerHTML = strTotalDays; 
      }
      
        //run all auto function when changes made on days, rdo and leave
        function runAllTotalDays(){
            totalWorkDays();
            totalCalendarDays();
         quickTotalDaysUpdate();
        }
        
        //check which radio button GY status selected
        function radGYStsOnClick(radIndex) {
            var bolReturnValue = true;
            
            intGYSts = radIndex;
         onChangeInput();
            return bolReturnValue;
        }  
        
        //store all user input data
        function getAllUserInput(){
            fltHalfMonthBasic = parseFloat(document.frmSalary.txbHalfMonthBasic.value);
            intTaxCode = parseFloat(document.frmSalary.selTaxCode.value);
         totalWorkDays();
         fltNoneTaxIncome = parseFloat(document.frmSalary.txbNoneTaxIncome.value);
            fltRDO = parseFloat(document.frmSalary.txbRDO.value);
            fltLegHol = parseFloat(document.frmSalary.txbLegHol.value);
            fltSplHol = parseFloat(document.frmSalary.txbSplHol.value);
            fltUnpND = parseFloat(document.frmSalary.txbUnpND.value);
            intGYSts = parseInt(intGYSts);
            fltMealAdj = parseFloat(document.frmSalary.txbMealAdj.value);
            totalNDHours();
        }
        
        //set up decimal to 2
        function setDecimal(fltParValue){
            var fltValue;
            
            fltValue = Math.round(fltParValue*100) / 100;
            return fltValue;     
        }
        
        //compute monthly income
        function computeMonthlyRate(){
            fltBasicPay = fltHalfMonthBasic * 2;
        }
        
        //daily rate compute method
        function computeDailyRate(){
            fltDailyRate = setDecimal(fltBasicPay * 12 / 261);
        }

        //hourly rate compute method
        function computeHourlyRate(){
            fltHourlyRate = setDecimal(fltDailyRate / 8);
        }
        
        //ND per hour compute
        function computeNDPerHourRate(){
            fltNDPerHourRate = fltHourlyRate * 0.10;
        }
      
      //compute total ND cost
        function computeNDAddRate(){
            fltNDTotalCost = setDecimal(fltTotalNDHours * fltNDPerHourRate);
        }
        
      //compute meal allow
      function computeMealAllow(){
         var convertToInt = parseInt(fltTotalDays);
         
         fltMealCost = convertToInt * 110;
         fltMealCost += fltMealAdj;
      }
      
      //compute holiday rate
      function computeHolidayRate(){
            fltLegHolRate = setDecimal(fltLegHol * fltHourlyRate * 1);
            fltSplHolRate = setDecimal(fltSplHol * fltHourlyRate * 0.30);
      }
        
        //compute taxable income
        function computeTaxableIncome(){
            fltTaxableIncome = fltHalfMonthBasic + fltMealCost + fltLegHolRate + fltSplHolRate + fltNDTotalCost;
        }
      
        //compute withholding tax
        function computeWithholdingTax(){
            var index = 0;
            var tempStore;
           
            while(true){     
               if(fltTaxableIncome >= arrTaxTable[intTaxCode][index] && index < arrTaxTable[intTaxCode].length ){
                    index++;
                    continue;
               } else {
                    index--;
                    fltWithholdingTax = arrTaxTable2[index][0];
                    fltWithholdingTax += (fltTaxableIncome - arrTaxTable[intTaxCode][index]) * arrTaxTable2[index][1];
                    tempStore = setDecimal(fltWithholdingTax);
                    fltWithholdingTax = tempStore;
                    break;
               }
            }
        }
        
        //compute net income
        function computeNetIncome(){
            fltNetIncome = setDecimal(fltTaxableIncome + fltNoneTaxIncome - fltWithholdingTax);
        }
        
        
      //compute all data obtain
        function computeAll(){
            computeMonthlyRate();
            computeDailyRate();
            computeHourlyRate();
            computeNDPerHourRate();
         computeNDAddRate();
         computeMealAllow();
            computeHolidayRate();
            computeTaxableIncome();
            computeWithholdingTax();
            computeNetIncome();
        }
        
      function showResult(){
            var tempArray = new Array();
            var innerHTMLTags = " ";
            
            tempArray[0] = new Array();
            tempArray[0][0] = "Your Daily Rate";
         tempArray[0][1] = "  ==  ";
            tempArray[0][2] = fltDailyRate;
            tempArray[1] = new Array(); 
            tempArray[1][0] = "Your Hourly Rate";
         tempArray[1][1] = "  ==  ";
            tempArray[1][2] = fltHourlyRate;
            tempArray[2] = new Array(); 
            tempArray[2][0] = "ND add / hour";
         tempArray[2][1] = "  ==  ";
            tempArray[2][2] = fltNDPerHourRate;
            tempArray[3] = new Array(); 
            tempArray[3][0] = "Meal Allowance";
         tempArray[3][1] = "  ==  ";
            tempArray[3][2] = fltMealCost;
            tempArray[4] = new Array(); 
            tempArray[4][0] = "Total ND Hours";
         tempArray[4][1] = "  ==  ";
            tempArray[4][2] = fltTotalNDHours;
            tempArray[5] = new Array(); 
            tempArray[5][0] = "Total ND Cost";
         tempArray[5][1] = "  ==  ";
            tempArray[5][2] = fltNDTotalCost;
         tempArray[6] = new Array(); 
            tempArray[6][0] = "Sp Holiday 30%";
         tempArray[6][1] = "  ==  ";
            tempArray[6][2] = fltSplHolRate;
         tempArray[7] = new Array(); 
            tempArray[7][0] = "Lg Holiday 100%";
         tempArray[7][1] = "  ==  ";
            tempArray[7][2] = fltLegHolRate;
         tempArray[8] = new Array(); 
            tempArray[8][0] = "Taxable Income";
         tempArray[8][1] = "  ==  ";
            tempArray[8][2] = fltTaxableIncome;
            tempArray[9] = new Array(); 
            tempArray[9][0] = "Withholding Tax";
         tempArray[9][1] = "  ==  ";
            tempArray[9][2] = fltWithholdingTax;
            tempArray[10] = new Array(); 
            tempArray[10][0] = "Net Income";
         tempArray[10][1] = "  ==  ";
            tempArray[10][2] = fltNetIncome;
         tempArray[11] = new Array(); 
            tempArray[11][0] = "Unpaid ND";
         tempArray[11][1] = "  ==  ";
            tempArray[11][2] = arrGYSts[intGYSts];
         
         
            
            innerHTMLTags += "<table>";
            for(row=0; row<12; row++){
                innerHTMLTags += "<tr>";
                for(col=0; col<3; col++){
                    innerHTMLTags += "<td>" + tempArray[row][col] +"</td>";
                }    
                innerHTMLTags += "</tr>";
            }    
                
            innerHTMLTags += "</table>";
            
            document.getElementById("salaryResult").innerHTML = innerHTMLTags;
        }
      
      //auto update and compute if there are changes in data
      function onChangeInput(){
         iniTaxTable();
            iniTaxTable2();
         runAllTotalDays();
         getAllUserInput();
            computeAll();
         showResult();
      }