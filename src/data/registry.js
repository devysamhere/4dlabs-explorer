export const pipeline = [
 ['Capture','Multi-device real-world capture'],['Data','Rights registration + encrypted storage'],['Processing','Cleaning · annotation · automated QA'],['Training','AXON world-model + skill models'],['Distribution','API access + industry licensing']
];
export const products = [
 {name:'Ego Suite',status:'In production',detail:'RGB · IMU · tactile glove streams'},
 {name:'Phone 3D spatial scanning',status:'Coming soon',detail:'Phone-based spatial capture and uploads'}
];
export const tracking = [
 {name:'Capture',description:'Real-world data collected through phones, Ego Suite and compatible devices.',metrics:['episodes','3D scans','capture hours','data volume','modalities','tasks','environments']},
 {name:'Quality',description:'Processing, annotation, automated checks and human review.',metrics:['accepted','rejected','quarantined','quality score','annotation status']},
 {name:'Provenance',description:'Rights and provenance records associated with captured data.',metrics:['rights registrations','transactions','unique wallets','contracts','provenance records']},
 {name:'Contributors',description:'Participation in public contributor programs and capture work.',metrics:['contributors','active contributors','tasks completed','points','published rewards']},
 {name:'Marketplace',description:'Dataset and custom-campaign activity where 4Dlabs makes it public.',metrics:['datasets','campaigns','licensed datasets','application sectors','published pricing']},
 {name:'Models & APIs',description:'Training and distribution activity exposed by public model or API surfaces.',metrics:['models','skills','evaluations','training runs','API activity']}
];
export const history={alpha:{label:'4Dlabs Alpha',ended:'2026-09-29',url:'https://app.galxe.com/quest/4Dlabs/GCJxRtZjhh?refer=explore_all'}};

export const coverage = [
 {sector:'Industrial manufacturing',modality:'RGB-D · hand pose · contact',scale:'50K+ episodes (sample)'},
 {sector:'Supermarkets',modality:'Egocentric RGB-D · hand pose · product annotations',scale:'Multi-store campaigns'},
 {sector:'Pharmacies',modality:'RGB-D · hand pose · label/OCR annotations',scale:'Expert-validated campaigns'},
 {sector:'Home services',modality:'Egocentric RGB · hand pose',scale:'180K+ episodes (sample)'},
 {sector:'Logistics & warehousing',modality:'Egocentric video · depth · IMU',scale:'From 10K episodes'},
 {sector:'Food service & restaurants',modality:'Egocentric RGB-D · hand pose · contact',scale:'Multi-site campaigns'}
];
