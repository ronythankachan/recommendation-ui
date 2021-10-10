import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  recommendationTypes:string[]= ['Select','Topic','Feature']
  topicList:string[] = ['Loan','Banking'];
  selectedTopic:string='';
  featureList:string[] = ['interest','tenure']

  ruleList:any=[
    {
      "id":"1",
      "recommendation_type":"feature",
      "topic_predicted":{
        "uri":"CONC876",
        "forDisplay":"Loan"
      },
      "feature_predicted":{
        "uri":"PROP123",
        "forDisplay":"Interest rate"
      },
      "recommendation_list":[
        {
          "uri":"PROP4546",
          "forDisplay":"Tenure period"
        },
        {
          "uri":"PROP4543",
          "forDisplay":"Apply for loan"
        }
      ]
    },
    {
      "id":"2",
      "recommendation_type":"topic",
      "topic_predicted":{
        "uri":"CONC123",
        "forDisplay":"Loan"
      },
      "feature_predicted":{
        "uri":"PROP123",
        "forDisplay":"Calculate EMI"
      },
      "recommendation_list":[
        {
          "uri":"CONC9879",
          "forDisplay":"House loans"
        },
        {
          "uri":"CONC65794",
          "forDisplay":"Student Loans"
        },
        {
          "uri":"CONC9879",
          "forDisplay":"House loans"
        },
        {
          "uri":"CONC65794",
          "forDisplay":"Student Loans"
        },
        {
          "uri":"CONC9879",
          "forDisplay":"House loans"
        },
        {
          "uri":"CONC65794",
          "forDisplay":"Student Loans"
        },
        {
          "uri":"CONC9879",
          "forDisplay":"House loans"
        },
        {
          "uri":"CONC65794",
          "forDisplay":"Student Loans"
        },
        {
          "uri":"CONC9879",
          "forDisplay":"House loans"
        },
        {
          "uri":"CONC65794",
          "forDisplay":"Student Loans"
        }
      ]
    }
  ];
  selectedRecommendationType:string='Select';
  addRule:boolean =false;
  constructor() { }

  ngOnInit(): void {

  }
  
  changeRecommendationType(recommendationType:string):void{
    this.selectedRecommendationType = recommendationType;
  }

  enableAddRule(){
    this.addRule = true;
  }
  deleteRuleForm(){
    this.addRule = false;
  }
  deleteRule(id:String){
    this.ruleList = this.ruleList.filter((rule: any) => rule.id !== id)
  }
}
