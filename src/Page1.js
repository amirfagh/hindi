import React from 'react';
import './Page1.css';
import lawyerCartoon from './LawyerCartoon.jpg'

function Page1() {
  return (
    <div id='who-are-we' className="page page1">
        <div className='main-container'>
            <div className='image-section'>
                <img alt='lawyerimage' src={lawyerCartoon}/>
            </div>
            <div className='content-section'>
                <div className='content-section-header'>
                  <h2>محامي مختص وذو خبرة طويلة في قضايا المحاكم الشرعية وقضايا إصابات العمل.</h2>
                </div>
                <div className='content-section-description'> 
                  <p>يقدم مكتب المحامي محمد هندي استشارات قانونية لزبائنه ويرافقهم خطوة بخطوة في جميع الإجراءات المتعلقة بقضايا المحاكم الشرعية وقضايا إصابات العمل أمام مؤسسة التامين الوطني، بما في ذلك تمثيلهم أمام اللجان الطبية وضد شركات التأمين المختلفة وحتى ضد المشغلين.
                     </p>
                  <p>
                    فمنذ تأسيس المكتب وحتى اليوم تم معالجة ملفات كثيرة ومختلفة تتعلق في قضايا المحاكم الشرعية وقضايا إصابات العمل.
                  </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Page1;
