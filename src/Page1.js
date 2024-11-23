import React from 'react';
import './Page1.css';
import LawyerImage from './lawyer2.jpg'; // Replace with the correct path to the lawyer image

function Page1() {
  return (
    <div className="page page1">
      {/* Upper background image with title */}
      <div className="page-header">
        <h1>مكتب المحامي محمد هندي</h1>
      </div>

      {/* Content section with image on the left and text on the right */}
      <div className="page-content">
        <div className="image-container">
          <img src={LawyerImage} alt="Lawyer" />
        </div>
        <div className="text-container">
          <p className="page1-text">
            محامي مختص وذو خبرة طويلة في قضايا المحاكم الشرعية وقضايا إصابات العمل.
          </p>
          <div className="page1-description">
            <p>
              يقدم مكتب المحامي محمد هندي استشارات قانونية لزبائنه ويرافقهم خطوة بخطوة في جميع الإجراءات المتعلقة بقضايا المحاكم الشرعية وقضايا إصابات العمل أمام مؤسسة التامين الوطني، بما في ذلك تمثيلهم أمام اللجان الطبية وضد شركات التأمين المختلفة وحتى ضد المشغلين.
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
