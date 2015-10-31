const formatSection = (ix, titleHeader, ...content) => ({
  title: `SECTION ${ix}. ${titleHeader}`,
  content
});

const fcmp = {
  lowercase: 'FastCashMoneyPlus.biz',
  uppercase: 'FASTCASHMONEYPLUS.biz'
};

const forwardLookingStatements = (ix) => {
  const projectionWords = [
    'certainly',
    'absolutely',
    'undoubtedly',
    'opportunity',
    'achieve',
    'believe',
    'pipeline',
    'expect',
    'anticipate',
    'assume',
    'outlook'
  ];
  return formatSection(ix, 'Forward Looking Statements',
    `The speculations quoted represent past performance and do not guarantee future results. Investment return and principal value of an investment will fluctuate so that an investor’s FastCash, when sold or redeemed, may be worth more or less than the original cost.`,
    `Certain information provided through this Website contains forward-looking statements with respect to ${fcmp.lowercase}'s future financial or business performance, strategies or expectations. Forward-looking statements are typically identified by words or phrases such as "${projectionWords.join('", "')}", and similar expressions, or future or conditional verbs such as "will", "would", "should", "could", "may", or similar expressions.`,
    `In addition to risk factors previously disclosed, and those identified elsewhere in this Website, the following factors, among others, could cause actual results to differ materially from forward-looking statements or historical performance: (1) the introduction, withdrawal, success and timing of business initiatives and strategies; (2) changes and volatility in political, economic or industry conditions, the interest rate environment, foreign exchange rates or financial and capital markets, which could result in changes in demand for products or services or in the value of assets under management; (4) the impact of increased competition; (5) the impact of future acquisitions or divestitures; (6) the unfavorable resolution of legal proceedings; (5) the impact, extent and timing of technological changes and the adequacy of intellectual property and information security protection; (10) terrorist activities, international hostilities and natural disasters, which may adversely affect the general economy, or domestic and local financial and capital markets; (11) the ability to attract and retain highly talented professionals; (15) the impact of ${fcmp.lowercase} electing to provide support to its products from time to time and any potential liabilities related to securities lending or other indemnification obligations; and (16) the impact of problems at other financial institutions or the failure or negative performance of products at other financial institutions.`
  );
};

const warranty = (ix) =>
  formatSection(ix, 'Warranty',
    `The material in this site could include technical or factual inaccuracies. THE MATERIALS IN THIS SITE ARE PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESSED OR IMPLIED, TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW. ${fcmp.uppercase} DISCLAIMS ALL WARRANTIES OR MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. ${fcmp.uppercase} DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE MATERIAL WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THIS SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ${fcmp.uppercase} DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OF OR THE RESULT OF THE USE OF THE MATERIAL IN THIS SITE IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE. YOU (AND NOT ${fcmp.uppercase}) ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION. THE ABOVE EXCLUSION MAY NOT APPLY TO YOU, TO THE EXTENT THAT APPLICABLE LAW MAY NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES.`
  );

const forumSelection = (ix) =>
  formatSection(ix, 'Forum Selection Clause',
    `If there is any dispute about or involving the ${fcmp.lowercase} Services, you agree that the dispute shall be governed by the laws of the The West Bank or North Cyprus, without regard to conflict of law provisions and you agree to exclusive personal jurisdiction and venue in the state and federal courts of the United States located in The West Bank or North Cyprus. Either ${fcmp.lowercase} or you may demand that any dispute between ${fcmp.lowercase} and you about or involving the ${fcmp.lowercase} Services must be settled by arbitration utilizing the dispute resolution procedures of the West Bank Arbitration Association (WBAA), or Northern Cyprus Arbitration Association (NCAA), provided that the foregoing shall not prevent ${fcmp.lowercase} from seeking injunctive relief in a court of competent jurisdiction.`
  );

const rightsAndResponsabilities = (ix) =>
  formatSection(ix, 'Statement of Rights and Responsibilities',
    `This Statement of Rights and Responsibilities ("Statement," "Terms," or "SRR") is our terms of service that governs our relationship with users and others who interact with ${fcmp.lowercase}, as well as ${fcmp.lowercase} brands, products and services, which we call the “${fcmp.lowercase} Services” or “Services”. By using or accessing the ${fcmp.lowercase} Services, you agree to this Statement, as updated from time to time.`,
    `Because ${fcmp.lowercase} provides a wide range of Services, we update these terms and add supplemental terms that apply to your interaction with a specific app, product, or service without notification. To the extent those supplemental terms conflict with this SRR, the supplemental terms associated with the app, product, or service govern with respect to your use of such app, product or service to the extent of the conflict.`
  );

const intellectualProperty = (ix) =>
  formatSection(ix, 'Intellectual Property',
    `${fcmp.lowercase} owns all of the content and information you post on ${fcmp.lowercase}, and you hereby relinquish all control over said content and information. In addition:`,
    `For content that is covered by intellectual property rights, like photos and videos (IP content), you specifically give us the following permission, subject to your privacy and application settings: you grant us an exclusive, transferable, sub-licensable, royalty-free, worldwide license to use any IP content that you post on or in connection with ${fcmp.lowercase}. This IP License does not end when you delete your IP content or your account.`,
    `${fcmp.lowercase} does not represent or endorse the accuracy or reliability of any advice, opinion, statement, or other information displayed, uploaded, or distributed through the Services by any user, information provider or any other person or entity. You acknowledge that any reliance upon any such opinion, advice, statement, memorandum, or information shall be at your sole risk. THE SERVICES AND ALL DOWNLOADABLE SOFTWARE ARE DISTRIBUTED ON AN "AS IS" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, WARRANTIES OF TITLE OR IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. YOU HEREBY ACKNOWLEDGE THAT USE OF THE SERVICES IS AT YOUR SOLE RISK.`
  );

const ending = () =>
  formatSection('', '',
    `We always appreciate your feedback or other suggestions about ${fcmp.lowercase}, but you understand that we may use your feedback or suggestions without any obligation to compensate you for them.`
  );

export default [
  forwardLookingStatements,
  warranty,
  forumSelection,
  rightsAndResponsabilities,
  intellectualProperty,
  ending
].map((section, ix) => section(ix + 1));
