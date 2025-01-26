import React from 'react';
import './Page2.css';

function Page2() {
  return (
    <div id='our-specialization' className="page page2">
      <div className='main-container-page2'>
        <div className='container-header'>
            <h1> مجالات تخصصنا</h1>
        </div>
        <div className='white-background'>
            <div className='specialization-1'>
                <div className='specialization-header'>
                    <h1>قضايا المحاكم الشرعية</h1>
                </div>
                <div className='specialization-content'>
                    <p>  مكتبنا ذو خبرة واسعة في تمثيل الزبائن أمام المحاكم الشرعية. هذا ولأن المشاكل الأسرية هي موضوع حساس، فأن التمثيل الشخصي يكون بالالتزام بأخلاقيات المهنة، والسرية التامة.
                       </p>
                      <ul className="case-list">
                        <li>دعاوى الشقاق والنزاع "الطلاق</li>
                        <li>دعاوى نفقة الزوجة</li>
                        <li>دعاوى نفقة الصغار</li>
                        <li>دعاوى أجرة مسكن</li>
                        <li>دعاوى الحضانة</li>
                        <li>دعاوى المشاهدة والاستضافة</li>
                        <li>دعاوى اثبات عقود الزواج والطلاق</li>
                        <li>عقد اتفاقية طلاق وجميع ما يترتب عنها من حقوق شرعية ومالية</li>
                      </ul>
                </div>
            </div>
            <div className='specialization-2'>
            <div className='specialization-header'>
                    <h1>إصابات العمل</h1>
                </div>
                <div className='specialization-content'>
                    <p> مكتبنا ذو خبرة واسعة في تمثيل الأشخاص الذين يتعرضون إلى إصابات العمل التي تقع في مكان العمل نفسه، في الطريق اليه أو منه، والتي تعتبر إصابة عمل بموجب القانون.
                      </p>
                    <p>  في حالة تعرضك إلى حادث عمل، مكتبنا سيساعدك في تحصيل حقوقك وتعويضاتك من مؤسسة التأمين الوطني وغيرها من شركات التأمين.
                      </p>
                </div>
            </div>
        </div>
       </div> 
    </div>
  );
}

export default Page2;
