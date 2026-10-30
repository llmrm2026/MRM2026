const qMain = [
  {
    question_text: "A 28-year-old obese female presents with a 1-month history of right-sided pleuritic chest pain. She has a prior history of lower extremity deep vein thrombosis (DVT) 1 year ago and was recently diagnosed with Systemic Lupus Erythematosus (SLE). Vital signs and physical examination are normal. Spirometry shows FEV1 of 3.2 L and FVC of 3.6 L (FEV1/FVC ratio 89%). What is the most likely diagnosis?",
    option_a: "Bronchial Asthma",
    option_b: "Pulmonary Embolism (PE)",
    option_c: "Chronic Obstructive Pulmonary Disease (COPD)",
    option_d: "Obesity Hypoventilation Syndrome",
    correct_option: "B",
    explanation: "Rationale: The combination of obesity, active SLE (a major secondary cause of antiphospholipid syndrome), a history of unprovoked DVT, and persistent pleuritic chest pain strongly points to pulmonary embolism/thromboembolism. Normal spirometry rules out obstructive airway diseases.\nReference: Harrison's Principles of Internal Medicine, 21st Edition; CHEST Pulmonary Embolism Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 60-year-old diabetic patient presents with a painful, shallow ulcer located over the medial malleolus with sloughy tissue. Ankle-Brachial Systolic Index (ABSI/ABPI) is calculated at 0.70. What is the primary underlying etiology of this ulcer?",
    option_a: "Pure Arterial Ulcer",
    option_b: "Neuropathic Diabetic Foot Ulcer",
    option_c: "Mixed Venous-Arterial Ulcer (Venous Predominant)",
    option_d: "Erythematous Pressure Injury",
    correct_option: "C",
    explanation: "Rationale: Ulceration over the medial malleolus (gaiter zone) is classic for venous insufficiency. An ABPI of 0.70 indicates mild-to-moderate peripheral arterial co-pathology (mixed venous-arterial ulcer), requiring modified compression therapy.\nReference: Rutherford's Vascular Surgery and Endovascular Therapy, 10th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 22-year-old male presents to the emergency department experiencing his second episode of post-exercise palpitations lasting over 1 hour. ECG confirms Supraventricular Tachycardia (SVT). His blood pressure is 113/60 mmHg and heart rate is 180 bpm. What is the initial recommended pharmacological intervention if vagal maneuvers fail?",
    option_a: "Intravenous Verapamil",
    option_b: "Immediate Synchronized Cardioversion",
    option_c: "Intravenous Amiodarone",
    option_d: "Intravenous Adenosine",
    correct_option: "D",
    explanation: "Rationale: In hemodynamically stable SVT, non-pharmacological vagal maneuvers are attempted first, followed by rapid IV push Adenosine (6 mg, then 12 mg). Synchronized cardioversion is reserved for hemodynamically unstable patients.\nReference: AHA/ACC/HRS Guidelines for Management of Adult Patients with Supraventricular Tachycardia.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which class of antihypertensive agents is associated with increased renal calcium excretion and an elevated long-term risk of bone loss and osteoporosis?",
    option_a: "Thiazide-like Diuretics (e.g., Indapamide)",
    option_b: "Loop Diuretics (e.g., Furosemide)",
    option_c: "ACE Inhibitors (e.g., Ramipril)",
    option_d: "Dihydropyridine Calcium Channel Blockers",
    correct_option: "B",
    explanation: "Rationale: Loop diuretics inhibit the Na+/K+/2Cl- cotransporter in the thick ascending limb of Henle, leading to hypercalciuria and increased osteoporosis risk. In contrast, thiazides (indapamide) decrease calcium excretion and protect bone density.\nReference: Goodman & Gilman's The Pharmacological Basis of Therapeutics, 13th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 65-year-old patient with knee osteoarthritis continues to experience localized joint pain despite consistent full-dose paracetamol (acetaminophen) therapy. What is the recommended next pharmacological step according to clinical practice guidelines?",
    option_a: "High-dose Oral Opioid Therapy",
    option_b: "Oral Glucosamine Sulfate alone",
    option_c: "Topical NSAID (e.g., Topical Ibuprofen / Diclofenac gel)",
    option_d: "Intra-articular Corticosteroid Injection immediately",
    correct_option: "C",
    explanation: "Rationale: OARSI and ACR guidelines recommend topical NSAIDs as first-line or second-line adjuncts after paracetamol for knee osteoarthritis before advancing to systemic oral NSAIDs due to superior cardiovascular and GI safety.\nReference: 2019 American College of Rheumatology / Arthritis Foundation Guideline for Osteoarthritis.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which of the following anticonvulsant medications is excreted in significant quantities into breast milk and poses a high risk of infantile sedation, respiratory depression, and withdrawal?",
    option_a: "Carbamazepine",
    option_b: "Sodium Valproate",
    option_c: "Phenytoin",
    option_d: "Phenobarbital",
    correct_option: "D",
    explanation: "Rationale: Phenobarbital and sedating benzodiazepines pass readily into breast milk with long elimination half-lives, placing nursing infants at high risk for CNS depression and drowsiness. Valproate, carbamazepine, and phenytoin are generally safer during lactation.\nReference: WHO Breastfeeding and Maternal Medication Guidelines; Briggs Drugs in Pregnancy and Lactation.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 2-month-old infant presents with thick, yellow, greasy, crusty scales over the scalp without significant pruritus or systemic symptoms. What is the standard management for infantile seborrheic dermatitis (cradle cap)?",
    option_a: "Mild pediatric shampoo combined with mineral oil softening",
    option_b: "High-potency topical corticosteroid ointment",
    option_c: "Oral Terbinafine antifungal therapy",
    option_d: "Systemic oral antibiotics",
    correct_option: "A",
    explanation: "Rationale: Infantile seborrheic dermatitis is a benign self-limiting condition. Treatment involves softening crusts with mineral/vegetable oil followed by gentle brushing and cleansing with mild baby shampoo.\nReference: Nelson Textbook of Pediatrics, 21st Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 14-year-old active boy presents with gradual onset of localized anterior knee pain over the tibial tuberosity, exacerbated by climbing stairs and jumping. What is the diagnosis?",
    option_a: "Osteochondritis Dissecans of the Femoral Condyle",
    option_b: "Sinding-Larsen-Johansson Syndrome",
    option_c: "Osgood-Schlatter Disease (Tibial Tubercle Apophysitis)",
    option_d: "Patellar Tendon Rupture",
    correct_option: "C",
    explanation: "Rationale: Osgood-Schlatter disease is traction apophysitis of the tibial tubercle secondary to repetitive quadriceps contractions during adolescent growth spurts.\nReference: Tachdjian's Pediatric Orthopaedics, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Fundoscopic examination of a 55-year-old diabetic patient reveals multiple retinal dot-and-blot hemorrhages, microaneurysms, and hard exudates. What underlying ocular pathology is present?",
    option_a: "Central Retinal Artery Occlusion (CRAO)",
    option_b: "Acute Vitreous Hemorrhage",
    option_c: "Rhegmatogenous Retinal Detachment",
    option_d: "Diabetic Retinopathy",
    correct_option: "D",
    explanation: "Rationale: Dot-and-blot hemorrhages represent small intraretinal hemorrhages stemming from compromised retinal capillaries, a hallmark feature of non-proliferative diabetic retinopathy.\nReference: Kanski's Clinical Ophthalmology, 9th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "In a clinical trial comparing standard Drug B to novel Drug A, 20 out of 200 patients receiving Drug A developed side effects (Risk = 0.10), whereas 90 out of 600 patients receiving Drug B developed side effects (Risk = 0.15). What is the Relative Risk (RR) of side effects for Drug A compared to Drug B?",
    option_a: "1.50",
    option_b: "0.67",
    option_c: "0.05",
    option_d: "0.85",
    correct_option: "B",
    explanation: "Rationale: Relative Risk (RR) = Risk in Group A / Risk in Group B = (20/200) / (90/600) = 0.10 / 0.15 = 0.67. This indicates a 33% reduction in relative risk.\nReference: Basic & Clinical Biostatistics (Dawson & Trapp).",
    tag: "Past Year Question"
  },
  {
    question_text: "According to international consensus guidelines, what minimum duration of complete seizure freedom is generally required before considering a cautious taper of Antiepileptic Drugs (AEDs)?",
    option_a: "3 Months",
    option_b: "6 Months",
    option_c: "24 Months (2 Years)",
    option_d: "5 Years",
    correct_option: "C",
    explanation: "Rationale: Guidelines recommend that patients be seizure-free for at least 2 years (24 months) prior to attempting planned antiepileptic drug withdrawal under physician supervision.\nReference: ILAE (International League Against Epilepsy) Practice Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "A cancer patient receiving regular background oral morphine presents with acute breakthrough pain. What standard proportion of the total 24-hour daily morphine dose should be prescribed as immediate-release oral morphine syrup for breakthrough pain relief?",
    option_a: "50% of the total daily dose",
    option_b: "10% to 16% (one-sixth) of the total daily dose",
    option_c: "2% of the total daily dose",
    option_d: "Double the total daily dose",
    correct_option: "B",
    explanation: "Rationale: Standard breakthrough pain dosing is calculated as 1/10th to 1/6th (approx. 10-15%) of the total 24-hour baseline opioid dose, administered as short-acting immediate-release morphine PRN.\nReference: Oxford Textbook of Palliative Medicine, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 62-year-old male with chronic heart failure with reduced ejection fraction (HFrEF, NYHA Class III) remains symptomatic despite maximum tolerated doses of Furosemide, Enalapril, and Bisoprolol. Which medication should be added next to reduce mortality?",
    option_a: "Diltiazem",
    option_b: "Verapamil",
    option_c: "Spironolactone (Mineralocorticoid Receptor Antagonist)",
    option_d: "Amethyst",
    correct_option: "C",
    explanation: "Rationale: In symptomatic HFrEF despite ACEi and beta-blocker therapy, adding a Mineralocorticoid Receptor Antagonist (Spironolactone or Eplerenone) significantly decreases mortality and heart failure hospitalizations. Non-dihydropyridine CCBs (diltiazem) are contraindicated.\nReference: 2021 ESC Guidelines for Heart Failure.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient sustains a closed mid-shaft fracture of the humerus. On physical exam, he is unable to extend his wrist (wrist drop) or metacarpophalangeal joints. Which nerve is injured?",
    option_a: "Axillary Nerve",
    option_b: "Radial Nerve",
    option_c: "Ulnar Nerve",
    option_d: "Musculocutaneous Nerve",
    correct_option: "B",
    explanation: "Rationale: The radial nerve runs in the radial groove directly along the mid-shaft of the humerus, making it highly vulnerable to injury leading to wrist drop.\nReference: Rockwood and Green's Fractures in Adults, 9th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A baseball pitcher complains of lateral elbow pain provoked by wrist extension against resistance. What is the diagnosis?",
    option_a: "Biceps Tendinitis",
    option_b: "Lateral Epicondylitis (Tennis Elbow)",
    option_c: "Medial Epicondylitis (Golfer's Elbow)",
    option_d: "Olecranon Bursitis",
    correct_option: "B",
    explanation: "Rationale: Lateral epicondylitis involves tendinopathy of the extensor carpi radialis brevis origin, presenting with pain at the lateral epicondyle exacerbated by resisted wrist extension.\nReference: Magee's Orthopedic Physical Assessment, 7th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical presentation is the single most specific finding distinguishing Cauda Equina Syndrome from uncomplicated lumbar disc herniation?",
    option_a: "Unilateral lumbar pain radiating to the foot",
    option_b: "Positive straight leg raise test",
    option_c: "Perineal (saddle) anesthesia and sphincter dysfunction",
    option_d: "Unilateral L5 dermatomal numbness",
    correct_option: "C",
    explanation: "Rationale: Cauda equina syndrome involves multi-radicular compression causing neurogenic bowel/bladder dysfunction and loss of sensation in the S3-S5 distribution (saddle anesthesia).\nReference: Rothman-Simeone The Spine, 7th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with microcytic anemia displays target cells and anisocytosis on peripheral blood film. Serum ferritin and folate levels are within normal limits. What is the definitive next diagnostic test?",
    option_a: "Serum Iron Studies",
    option_b: "Urine Bence Jones Protein",
    option_c: "Hemoglobin Electrophoresis",
    option_d: "Bone Marrow Biopsy",
    correct_option: "C",
    explanation: "Rationale: Microcytosis with target cells in the setting of normal iron stores points toward a hemoglobinopathy, specifically Thalassemia trait, confirmed via Hemoglobin Electrophoresis.\nReference: Hoffbrand's Essential Haematology, 8th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 30-year-old male experiences severe, strictly unilateral retro-orbital pain lasting 60 minutes, accompanied by ipsilateral nasal congestion and lacrimation. What is the diagnosis?",
    option_a: "Migraine with Aura",
    option_b: "Tension-type Headache",
    option_c: "Cluster Headache",
    option_d: "Temporal Arteritis",
    correct_option: "C",
    explanation: "Rationale: Cluster headache is a trigeminal autonomic cephalgia featuring severe unilateral orbital/periorbital pain accompanied by autonomic signs (lacrimation, rhinorrhea, Horner's syndrome).\nReference: IHS International Classification of Headache Disorders (ICHD-3).",
    tag: "Past Year Question"
  },
  {
    question_text: "Which agent acts as an osmotic laxative by drawing fluid into the intestinal lumen via non-absorbable synthetic disaccharide breakdown?",
    option_a: "Senna",
    option_b: "Lactulose",
    option_c: "Methylcellulose",
    option_d: "Bisacodyl",
    correct_option: "B",
    explanation: "Rationale: Lactulose is a synthetic non-absorbable disaccharide metabolized by colonic bacteria into organic acids, exerting osmotic pressure to draw water into the bowel lumen.\nReference: Goodman & Gilman's Pharmacological Basis of Therapeutics.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which non-absorbable fiber supplement acts as a bulk-forming laxative?",
    option_a: "Lactulose",
    option_b: "Docusate Sodium",
    option_c: "Methylcellulose",
    option_d: "Senna extract",
    correct_option: "C",
    explanation: "Rationale: Methylcellulose absorbs water in the intestine to form a viscous gel, increasing stool bulk and promoting peristalsis.\nReference: Sleisenger and Fordtran's Gastrointestinal and Liver Disease.",
    tag: "Past Year Question"
  },
  {
    question_text: "In clinical gait analysis, what is the definition of a single 'stride length'?",
    option_a: "The distance between the initial contact of one foot and the initial contact of the opposite foot.",
    option_b: "The width between the midlines of both feet during double support phase.",
    option_c: "The linear distance between successive points of initial contact of the same heel.",
    option_d: "The distance traveled by the trunk during one complete swing phase.",
    correct_option: "C",
    explanation: "Rationale: Stride length is defined as the linear distance between two consecutive initial contacts of the SAME foot (heel-strike to heel-strike of the same foot). Step length, by contrast, is the distance between initial contact of one foot and initial contact of the opposite foot.\nReference: Kapanji's Physiology of the Joints; Magee's Orthopedic Physical Assessment, 7th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 62-year-old male undergoes a total gastrectomy for gastric adenocarcinoma. Two years later, he presents with fatigue and peripheral neuropathy. Laboratory workup reveals macrocytic anemia (MCV > 100 fL). What is the primary underlying pathophysiology of his anemia?",
    option_a: "Reduced iron absorption secondary to loss of gastric acid synthesis",
    option_b: "Impaired Vitamin B12 absorption due to loss of Intrinsic Factor secretion",
    option_c: "Severe folate deficiency caused by small intestinal bacterial overgrowth",
    option_d: "Direct bone marrow toxicity induced by adjuvant chemotherapy",
    correct_option: "B",
    explanation: "Rationale: Total gastrectomy removes gastric parietal cells, which are responsible for secreting Intrinsic Factor (IF). Intrinsic factor is essential for binding Vitamin B12 and facilitating its absorption in the terminal ileum. Lack of IF leads to pernicious/macrocytic anemia.\nReference: Sleisenger and Fordtran's Gastrointestinal and Liver Disease, 11th Edition; Harrison's Principles of Internal Medicine.",
    tag: "Past Year Question"
  },
  {
    question_text: "A transtibial amputee is fitted with a lower-limb prosthesis. Which functional component of the prosthesis is primarily designed to absorb axial vertical shock loading during heel strike?",
    option_a: "Suction suspension sleeve",
    option_b: "Rigid patellar-tendon-bearing (PTB) socket",
    option_c: "Dynamic response foot with shock-absorbing pylon",
    option_d: "Shuttle-lock pin system",
    correct_option: "C",
    explanation: "Rationale: Shock-absorbing pylons and dynamic response prosthetic feet contain vertical compliance elements (springs or elastomers) specifically designed to reduce axial vertical impact and shear forces transmitted to the residual limb during initial heel contact.\nReference: Atlas of Amputations and Limb Deficiencies (AAOS); Braddom's Physical Medicine and Rehabilitation.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 22-year-old patient involved in a high-speed motor vehicle collision sustains Diffuse Axonal Injury (DAI). What mechanical force is predominantly responsible for causing DAI?",
    option_a: "Direct focal impact compression",
    option_b: "Low-velocity translational shearing",
    option_c: "Rotational acceleration-deceleration forces",
    option_d: "Sustained intracranial hypotension",
    correct_option: "C",
    explanation: "Rationale: DAI is caused by high-velocity angular or rotational acceleration-deceleration forces, which generate shearing stresses along tissue interfaces of differing densities (e.g., grey-white matter junction, corpus callosum, brainstem).\nReference: Greenberg's Handbook of Neurosurgery, 9th Edition; Adams and Victor's Principles of Neurology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 60-year-old female presents with a Trendelenburg gait. During single-leg stance on her right leg, her pelvis drops toward the left side. Which muscle is weak, and which nerve supplies it?",
    option_a: "Left Gluteus Medius — Inferior Gluteal Nerve",
    option_b: "Right Gluteus Medius — Superior Gluteal Nerve",
    option_c: "Right Gluteus Maximus — Inferior Gluteal Nerve",
    option_d: "Left Tensor Fasciae Latae — Obturator Nerve",
    correct_option: "B",
    explanation: "Rationale: A drop of the pelvis on the non-stance (unsupported) side during single-leg stance indicates weakness of the hip abductors (primarily Gluteus Medius) on the STANCE (stance-phase) side. Thus, a left pelvic drop indicates right Gluteus Medius weakness, innervated by the Superior Gluteal Nerve (L4-S1).\nReference: Moore's Clinically Oriented Anatomy; Magee's Orthopedic Physical Assessment.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 45-year-old female presents with paroxysmal episodes of severe hypertension, severe headaches, diaphoresis, and marked anxiety. Which biochemical substances are excess secreted in this condition?",
    option_a: "Cortisol and ACTH",
    option_b: "Aldosterone and Renin",
    option_c: "Catecholamines (Epinephrine and Norepinephrine)",
    option_d: "Thyroid-Stimulating Hormone (TSH)",
    correct_option: "C",
    explanation: "Rationale: The classic triad of headache, sweating, and tachycardia with episodic hypertension is pathognomonic for Pheochromocytoma, a neuroendocrine tumor of the adrenal medulla that hypersecretes catecholamines (measured via plasma/urine free metanephrines).\nReference: Williams Textbook of Endocrinology, 14th Edition; Harrison's Principles of Internal Medicine.",
    tag: "Past Year Question"
  },
  {
    question_text: "Following severe traumatic brain injury, a patient develops hypertonia and spasticity. Which physiological alterations contribute to motor unit hyperexcitability in spasticity?",
    option_a: "Increased Ia afferent presynaptic inhibition",
    option_b: "Disinhibition of spinal stretch reflexes and reduced reciprocal inhibition of antagonist muscles",
    option_c: "Enhancement of Renshaw cell recurrent inhibition",
    option_d: "Loss of lower motor neuron alpha motor neuron output",
    correct_option: "B",
    explanation: "Rationale: Spasticity results from upper motor neuron lesions causing loss of descending tonic inhibitory drive, leading to alpha motor neuron hyperexcitability, impaired Ia presynaptic inhibition, and reduced reciprocal inhibition of antagonist muscles.\nReference: Upper Motor Neuron Syndrome and Spasticity (Barnes & Johnson); Physical Medicine and Rehabilitation Board Review.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with End-Stage Renal Disease (ESRD) on maintenance hemodialysis presents with severe generalized uremic pruritus. Serum phosphate and parathyroid hormone levels are fully optimized. Which oral medication is recommended as first-line targeted pharmacological therapy for refractory uremic pruritus?",
    option_a: "High-dose oral Prednisolone",
    option_b: "Sedating H1-antihistamines",
    option_c: "Oral Morphine",
    option_d: "Oral Gabapentin",
    correct_option: "D",
    explanation: "Rationale: Gabapentin (or Pregabalin) administered post-dialysis is highly effective and widely recommended for uremic pruritus refractory to conservative measures and biochemical optimization (calcium/phosphate control). Opioids can worsen pruritus.\nReference: KDIGO Clinical Practice Guidelines for Chronic Kidney Disease; Brenner and Rector's The Kidney.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 24-year-old male with C6 complete spinal cord injury (ASIA A) experiences recurrent retained pulmonary secretions and weak cough. What is the primary mechanical reason for his impaired peak cough flow?",
    option_a: "Paralysis of abdominal muscles and internal intercostal muscles",
    option_b: "Complete denervation of the diaphragm muscle (C3-C5)",
    option_c: "Severe chest wall non-compliance secondary to rib cage ossification",
    option_d: "Laryngeal spasm during peak expiration",
    correct_option: "A",
    explanation: "Rationale: Effective coughing requires high intra-abdominal and intra-thoracic pressures generated by forceful contraction of the abdominal (T7-L1) and internal intercostal muscles. In C6 tetraplegia, the diaphragm is preserved, but abdominal and intercostal paralysis severely impairs expiratory force.\nReference: Spinal Cord Medicine: Principles and Practice (Lin & Cardenas); Essentials of Spinal Cord Injury Medicine.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which of the following physical parameters is NOT a component of the standard neonatal APGAR scoring system evaluated at 1 and 5 minutes post-birth?",
    option_a: "Heart rate",
    option_b: "Muscle tone",
    option_c: "Quantitative Respiratory Rate per minute",
    option_d: "Reflex irritability (Grimace)",
    correct_option: "C",
    explanation: "Rationale: The APGAR acronym stands for: Appearance (color), Pulse (heart rate), Grimace (reflex irritability), Activity (muscle tone), and Respiration (respiratory effort, NOT exact numerical respiratory rate).\nReference: Nelson Textbook of Pediatrics, 21st Edition; Neonatal Resuscitation Program (NRP) Manual.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with persistent headache, brisk deep tendon reflexes, and mild papilledema. Lumbar puncture reveals an opening pressure of 15 mmHg, normal CSF glucose, and normal total white cell count, but a markedly elevated CSF protein level. What is the most likely diagnosis?",
    option_a: "Bacterial Meningitis",
    option_b: "Viral Meningitis",
    option_c: "Guillain-Barré Syndrome (GBS)",
    option_d: "Benign Intracranial Hypertension",
    correct_option: "C",
    explanation: "Rationale: An elevated CSF protein level with a normal CSF white blood cell count (cytoalbuminologic dissociation) is the classic laboratory hallmark of Guillain-Barré Syndrome (GBS). Opening pressure is typically normal or only mildly elevated.\nReference: Adams and Victor's Principles of Neurology, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which of the following statements regarding Duchenne Muscular Dystrophy (DMD) is CORRECT?",
    option_a: "Children are typically wheelchair-bound during early toddlerhood (age 1-2)",
    option_b: "Complete absence of dystrophin is normal in healthy muscle tissue",
    option_c: "Calf muscle pseudohypertrophy due to fatty and fibrous tissue replacement is a classic sign",
    option_d: "It is inherited in an Autosomal Dominant pattern",
    correct_option: "C",
    explanation: "Rationale: DMD is an X-linked recessive disorder caused by dystrophin deficiency. Pseudohypertrophy of the calf muscles (gastrocnemius) is a cardinal clinical finding. Wheelchair dependence usually occurs around age 10-12, and death typically occurs in the 20s from respiratory or cardiac failure.\nReference: Nelson Textbook of Pediatrics, 21st Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 62-year-old patient presents with knee pain. Which of the following X-ray findings suggests an alternative diagnosis rather than primary Osteoarthritis (OA)?",
    option_a: "Osteophytes at joint margins",
    option_b: "Subchondral bone sclerosis",
    option_c: "Subchondral cyst formation",
    option_d: "Marginal periarticular bone erosion",
    correct_option: "D",
    explanation: "Rationale: Marginal periarticular bone erosions are characteristic of inflammatory arthritides (such as Rheumatoid Arthritis), whereas Osteoarthritis is characterized by marginal osteophytes, subchondral sclerosis, asymmetric joint space narrowing, and subchondral cysts.\nReference: Kelley and Firestein's Textbook of Rheumatology, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which developmental milestone capability is CORRECT for a typically developing child?",
    option_a: "Hand dominance established at 6 months",
    option_b: "Independent stair climbing with alternating feet by 12 months",
    option_c: "Ability to draw a triangle at 3 years of age",
    option_d: "Ability to transfer an object from hand to hand by 6 months of age",
    correct_option: "D",
    explanation: "Rationale: Object transfer across the midline (hand-to-hand) is normally achieved between 6 and 7 months. Drawing a triangle occurs at 5 years (a circle is at 3 years).\nReference: Nelson Textbook of Pediatrics, 21st Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which neural pathway and brainstem nuclear complex mediate the afferent and efferent limbs of the gag reflex, respectively?",
    option_a: "Spinal Trigeminal Nucleus to Edinger-Westphal Nucleus",
    option_b: "Solitary tract / nucleus (CN IX afferent) to Nucleus Ambiguus (CN X efferent)",
    option_c: "Solitary tract to Superior Salivatory Nucleus",
    option_d: "Cochlear Nucleus to Hypoglossal Nucleus",
    correct_option: "B",
    explanation: "Rationale: Sensory afferents from the posterior pharynx travel via the Glossopharyngeal nerve (CN IX) to the Solitary Tract/Nucleus, which synapses on the Nucleus Ambiguus to drive motor efferents via the Vagus nerve (CN X) causing pharyngeal contraction.\nReference: Blumenfeld's Neuroanatomy through Clinical Cases, 3rd Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "In a comatose patient, which statement accurately correlates brainstem lesion location relative to the Red Nucleus with observed abnormal posturing?",
    option_a: "Lesions of the vestibular nuclei completely restore normal arm flexion",
    option_b: "Decerebrate posturing (extension of all four limbs) occurs with lesions above the red nucleus",
    option_c: "Decorticate posturing (flexion of upper limbs) occurs with lesions below the red nucleus",
    option_d: "Decerebrate posturing results from brainstem lesions located below the level of the Red Nucleus (midbrain/pons)",
    correct_option: "D",
    explanation: "Rationale: Decerebrate (extensor) posturing occurs when the lesion is below the red nucleus (uncoupling rubrospinal tract flexion, leaving vestibulospinal excitation unopposed). Decorticate (flexor) posturing indicates destructive lesions above the red nucleus.\nReference: Adams and Victor's Principles of Neurology, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 20-year-old male with newly diagnosed Type 1 Diabetes presents with nausea and vomiting. Which laboratory finding specifically points toward Diabetic Ketoacidosis (DKA)?",
    option_a: "Serum osmolality > 380 mOsm/kg without ketonuria",
    option_b: "Plasma glucose < 4.0 mmol/L",
    option_c: "Serum Bicarbonate < 10 mmol/L (or < 18 mmol/L) with arterial pH < 7.30",
    option_d: "Serum potassium < 2.0 mmol/L without acidosis",
    correct_option: "C",
    explanation: "Rationale: Diagnostic criteria for DKA include hyperglycemia (blood glucose > 11 mmol/L), arterial pH < 7.30, serum bicarbonate < 18 mmol/L (severe DKA < 10 mmol/L), and high anion gap metabolic acidosis with positive blood/urine ketones.\nReference: ADA Standards of Medical Care in Diabetes.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which anatomical statement regarding the Femoral Artery is CORRECT?",
    option_a: "The Femoral Artery originates directly from the Internal Iliac Artery",
    option_b: "The Femoral Artery lies medial to the Femoral Vein in the femoral triangle",
    option_c: "The Femoral Artery lies lateral to the Femoral Nerve",
    option_d: "The Femoral Artery is the direct continuation of the External Iliac Artery beneath the inguinal ligament",
    correct_option: "D",
    explanation: "Rationale: The External Iliac Artery becomes the Femoral Artery as it passes posterior to the inguinal ligament. In the femoral triangle (NAVEL from lateral to medial: Nerve, Artery, Vein, Empty space, Lymphatics), the artery lies LATERAL to the femoral vein.\nReference: Moore's Clinically Oriented Anatomy, 8th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 43-year-old male presents with headache and neck stiffness. LP shows opening pressure of 15 cmH2O, cloudy CSF, glucose 3.3 mmol/L (serum glucose 4.7 mmol/L), protein 0.7 g/L, and WCC 100/mm3 (70% lymphocytes). What is the diagnosis?",
    option_a: "Viral Meningitis with normal protein",
    option_b: "Tuberculous Meningitis",
    option_c: "Normal CSF profile",
    option_d: "Cryptococcal Meningitis in immunocompetent",
    correct_option: "B",
    explanation: "Rationale: Lymphocytic-predominant pleocytosis (WCC 100 with 70% lymphocytes) combined with elevated protein (0.7 g/L) and reduced CSF-to-serum glucose ratio is characteristic of Tuberculous Meningitis or fungal meningitis.\nReference: Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with a Right Inferior Homonymous Quadrantanopia ('pie on the floor'). Where is the anatomical site of the lesion?",
    option_a: "Optic Chiasm",
    option_b: "Left Optic Nerve",
    option_c: "Left Parietal Lobe (Baumann's bundle)",
    option_d: "Right Temporal Lobe",
    correct_option: "C",
    explanation: "Rationale: Superior optic radiations passing through the parietal lobe carry signals from the superior retina (inferior visual field). A left parietal lesion causes a Right Inferior Homonymous Quadrantanopia. Temporal lobe lesions (Meyer's loop) cause superior quadrantanopia.\nReference: Blumenfeld's Neuroanatomy through Clinical Cases, 3rd Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which anatomical movements are normally permitted at the elbow joint complex (humeroulnar, humeroradial, and proximal radioulnar articulations)?",
    option_a: "Flexion-Extension and Supination-Pronation",
    option_b: "Abduction-Adduction and Circumduction",
    option_c: "Inversion-Eversion and Rotation",
    option_d: "Dorsiflexion-Plantarflexion and Elevation",
    correct_option: "A",
    explanation: "Rationale: The elbow complex consists of a hinge joint (humeroulnar/humeroradial) allowing flexion and extension, and pivot joints (proximal and distal radioulnar joints) allowing forearm supination and pronation.\nReference: Kapanji's Physiology of the Joints, Vol 1; Gray's Anatomy, 42nd Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "According to the World Health Organization (WHO), how is osteoporosis defined clinically based on Dual-Energy X-ray Absorptiometry (DEXA) measurement?",
    option_a: "Bone Mineral Density (BMD) T-score of -2.5 SD or lower at the lumbar spine or hip",
    option_b: "BMD T-score between -1.0 SD and -2.5 SD",
    option_c: "BMD T-score of 0 SD",
    option_d: "Z-score of -1.0 SD or lower",
    correct_option: "A",
    explanation: "Rationale: Osteoporosis is defined as a BMD T-score ≤ -2.5 standard deviations below the young adult reference mean. T-scores between -1.0 and -2.5 represent osteopenia.\nReference: WHO Technical Report Series 843; NOF Clinician's Guide to Prevention and Treatment of Osteoporosis.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical statement regarding the osmotic laxative Lactulose is CORRECT?",
    option_a: "It is effective and specifically indicated in hepatic encephalopathy to reduce plasma ammonia levels",
    option_b: "Its laxative onset of action occurs reliably within 10 to 12 minutes of administration",
    option_c: "It is strictly contraindicated in patients with severe hepatic impairment",
    option_d: "It works by directly stimulating the myenteric plexus to induce peristalsis",
    correct_option: "A",
    explanation: "Rationale: Lactulose is a non-absorbable disaccharide metabolized by colonic bacteria into organic acids. This lowers colonic pH, trapping toxic ammonia (NH3) as non-absorbable ammonium (NH4+), making it a cornerstone therapy for hepatic encephalopathy. Its laxative onset takes 24-48 hours.\nReference: Sleisenger and Fordtran's Gastrointestinal and Liver Disease, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the primary cellular mechanism of action of Biguanides (e.g., Metformin) in managing Type 2 Diabetes Mellitus?",
    option_a: "Enhances peripheral insulin sensitivity and suppresses hepatic gluconeogenesis via AMPK activation",
    option_b: "Direct stimulation of pancreatic beta-cell insulin secretion via ATP-sensitive potassium channels",
    option_c: "Inhibition of intestinal alpha-glucosidase enzymes",
    option_d: "Selective blockade of renal SGLT2 cotransporters",
    correct_option: "A",
    explanation: "Rationale: Metformin activates AMP-activated protein kinase (AMPK), reducing hepatic glucose output and enhancing muscle insulin sensitivity without inducing hypoglycemia. A rare but serious potential adverse effect is lactic acidosis.\nReference: Goodman & Gilman's Pharmacological Basis of Therapeutics, 13th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient undergoing multi-drug anti-tuberculosis therapy defaults on his prescribed daily vitamin supplementation and subsequently develops distal sensory peripheral numbness. Which anti-TB drug is responsible?",
    option_a: "Isoniazid (INH)",
    option_b: "Rifampicin",
    option_c: "Pyrazinamide",
    option_d: "Ethambutol",
    correct_option: "A",
    explanation: "Rationale: Isoniazid competitively inhibits pyridoxine (Vitamin B6) phosphorylation and increases its renal excretion, leading to Pyridoxine Deficiency and peripheral neuropathy. Pyridoxine (10-50 mg/day) must be co-prescribed.\nReference: Harrison's Principles of Internal Medicine, 21st Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 30-year-old obese female presents with headache, transient visual obscurations, and bilateral papilledema. Brain CT scan is normal with non-dilated ventricles. Lumbar puncture demonstrates an elevated opening pressure (> 25 cmH2O) with normal CSF chemistry. What is the diagnosis?",
    option_a: "Benign Intracranial Hypertension (Idiopathic Intracranial Hypertension / Pseudotumor Cerebri)",
    option_b: "Guillain-Barré Syndrome (GBS)",
    option_c: "Viral Meningitis",
    option_d: "Multiple Sclerosis",
    correct_option: "A",
    explanation: "Rationale: Idiopathic Intracranial Hypertension (IIH) classically affects young obese females, presenting with papilledema, normal brain imaging (ruling out mass lesions), and elevated CSF opening pressure (> 25 cmH2O) with normal CSF composition.\nReference: Adams and Victor's Principles of Neurology, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Ischemic thrombosis of the Anterior Spinal Artery leading to anterior cord syndrome is a recognized perioperative complication of which surgical procedure?",
    option_a: "Abdominal Aortic Aneurysm (AAA) Repair",
    option_b: "Elective Laparoscopic Cholecystectomy",
    option_c: "Total Thyroidectomy",
    option_d: "Inguinal Hernioplasty",
    correct_option: "A",
    explanation: "Rationale: The Great Radicular Artery (Artery of Adamkiewicz), which supplies the lower two-thirds of the anterior spinal cord, originates from lower intercostal or upper lumbar arteries branching off the aorta. Aortic cross-clamping during AAA repair risks spinal ischemia and Anterior Spinal Artery Syndrome.\nReference: Rutherford's Vascular Surgery and Endovascular Therapy, 10th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A stroke patient 5 months post-onset understands spoken language fully but experiences severe struggle, groping, and articulatory incoordination when attempting to vocalize words. He recognizes his speech errors but cannot correct them, resorting to writing. Cranial nerves are intact. What speech disorder is present?",
    option_a: "Speech Apraxia (Apraxia of Speech)",
    option_b: "Wernicke's Aphasia",
    option_c: "Dysarthria",
    option_d: "Broca's Aphasia",
    correct_option: "A",
    explanation: "Rationale: Apraxia of Speech is a motor speech planning disorder characterized by trial-and-error groping, inconsistent articulatory errors, intact language comprehension, and preserved ability to write normally (which is impaired in classic Broca's aphasia).\nReference: Duffy's Motor Speech Disorders: Substrates, Differential Diagnosis, and Management, 4th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "In evaluating a 78-year-old patient with community-acquired pneumonia, which clinical finding contributes a positive scoring point under the CURB-65 severity criteria?",
    option_a: "Serum Urea level > 7.0 mmol/L (9.0 mmol/L)",
    option_b: "Systolic Blood Pressure of 95 mmHg",
    option_c: "Respiratory Rate of 25 breaths/min",
    option_d: "Heart Rate of 95 bpm",
    correct_option: "A",
    explanation: "Rationale: CURB-65 components (1 point each): Confusion, Urea > 7.0 mmol/L, Respiratory rate ≥ 30/min, Blood pressure (Systolic < 90 or Diastolic ≤ 60 mmHg), Age ≥ 65. Urea of 9 mmol/L and Age 78 both score points. RR 25 and SBP 95 do not meet criteria thresholds.\nReference: BTS (British Thoracic Society) Guidelines for the Management of Community-Acquired Pneumonia.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presenting with acute foot drop (inability to dorsiflex and evert the foot) has suffered injury to which peripheral nerve?",
    option_a: "Common Peroneal (Fibular) Nerve",
    option_b: "Tibial Nerve",
    option_c: "Femoral Nerve",
    option_d: "Obturator Nerve",
    correct_option: "A",
    explanation: "Rationale: The Common Peroneal Nerve winds around the fibular neck where it is prone to entrapment or trauma. Injury causes paralysis of anterior (dorsiflexors) and lateral (evertors) compartment muscles, resulting in foot drop.\nReference: AIDS to the Examination of the Peripheral Nervous System (Brain).",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient post-TBI develops high-volume dilute urine production and excessive thirst. What key diagnostic test distinguishes Central Diabetes Insipidus from Primary Polydipsia?",
    option_a: "Fasting Plasma Glucose",
    option_b: "24-hour Urinary Cortisol Excretion",
    option_c: "Serum Thyroid Stimulating Hormone",
    option_d: "Water Deprivation Test with Desmopressin (DDAVP) response evaluation",
    correct_option: "D",
    explanation: "Water deprivation followed by exogenous ADH (desmopressin) administration confirms central DI if urine osmolality increases significantly after DDAVP.\nReference: Williams Textbook of Endocrinology, 14th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What post-operative endocrine monitoring is required for a patient undergoing bilateral adrenalectomy for Cushing's Disease?",
    option_a: "Parathyroid Hormone Administration",
    option_b: "Calcitonin Supplementation",
    option_c: "Lifelong Glucocorticoid and Mineralocorticoid Replacement Therapy",
    option_d: "Insulin Infusion only",
    correct_option: "C",
    explanation: "Bilateral adrenalectomy removes adrenal cortical steroid production, necessitating lifelong physiological hydrocortisone and fludrocortisone replacement to prevent adrenal crisis.\nReference: Harrison's Principles of Internal Medicine.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the correct mathematical formula used to calculate the Serum Anion Gap?",
    option_a: "[Na+] + [K+] - [Cl-]",
    option_b: "[Na+] / [HCO3-]",
    option_c: "[Cl-] - [HCO3-]",
    option_d: "[Na+] - ([Cl-] + [HCO3-])",
    correct_option: "D",
    explanation: "The serum anion gap is calculated as unmeasured anions: Serum Sodium minus the sum of Serum Chloride and Bicarbonate. Normal value is 8–12 mEq/L.\nReference: Rose & Post's Clinical Physiology of Acid-Base Disorders.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the baseline glycemic target HbA1c for most non-pregnant adults with Type 2 Diabetes to prevent microvascular complications?",
    option_a: "< 5.0%",
    option_b: "< 9.5%",
    option_c: "< 7.0% (53 mmol/mol)",
    option_d: "< 11.0%",
    correct_option: "C",
    explanation: "ADA standards of care establish an HbA1c goal of <7.0% for non-pregnant adults to minimize microvascular risks while avoiding severe hypoglycemia.\nReference: American Diabetes Association (ADA) Standards of Care in Diabetes.",
    tag: "Past Year Question"
  },
  {
    question_text: "An elderly female sustains a low-trauma vertebral compression fracture. What is the Gold Standard diagnostic tool to evaluate underlying osteoporosis density?",
    option_a: "Plain Thoracolumbar Radiograph",
    option_b: "Bone Scintigraphy",
    option_c: "Serum Calcium Level",
    option_d: "Dual-Energy X-ray Absorptiometry (DEXA Scan)",
    correct_option: "D",
    explanation: "DEXA measuring bone mineral density at the lumbar spine and hip is the WHO gold standard for diagnosing osteoporosis (T-score ≤ -2.5).\nReference: NOF (National Osteoporosis Foundation) Clinician's Guide.",
    tag: "Past Year Question"
  },
  {
    question_text: "In an emergency resuscitation situation, a patient with unknown blood group requires immediate life-saving uncrossmatched packed red blood cell transfusion. What blood type must be issued?",
    option_a: "B Positive",
    option_b: "AB Negative",
    option_c: "B Negative",
    option_d: "O Negative",
    correct_option: "D",
    explanation: "O-negative RBCs lack A, B, and RhD antigens, making them the universal donor emergency blood product to prevent acute hemolytic transfusion reactions.\nReference: AABB Technical Manual, 20th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Four hours following packed red blood cell transfusion, a patient suddenly develops acute dyspnea, non-cardiogenic pulmonary edema, fever, and hypoxemia. What is the diagnosis?",
    option_a: "Acute Bacterial Sepsis",
    option_b: "Delayed Hemolytic Transfusion Reaction",
    option_c: "Transfusion-Related Acute Lung Injury (TRALI)",
    option_d: "Anaphylaxis",
    correct_option: "C",
    explanation: "TRALI presents within 6 hours of transfusion with acute respiratory distress, bilateral pulmonary infiltrates, fever, and hypoxemia due to donor anti-HLA antibodies.\nReference: AABB Guidelines for Transfusion Reactions.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the target therapeutic INR range for a patient with a mechanical mitral valve replacement?",
    option_a: "1.5 to 2.0",
    option_b: "1.0 to 1.5",
    option_c: "2.5 to 3.5",
    option_d: "3.5 to 4.5",
    correct_option: "C",
    explanation: "High-thrombogenicity prosthetic valves (such as mechanical mitral valves) require higher target INR (2.5-3.5) compared to mechanical aortic valves (2.0-3.0).\nReference: 2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical pattern of sensory and motor loss defines Brown-Séquard syndrome following spinal cord hemisection?",
    option_a: "Ipsilateral loss of motor function and proprioception with contralateral loss of pain and temperature",
    option_b: "Bilateral total loss of pain and temperature",
    option_c: "Ipsilateral pain loss with contralateral motor loss",
    option_d: "Total sensory loss with preserved motor control",
    correct_option: "A",
    explanation: "Hemisection interrupts corticospinal and dorsal columns ipsilaterally and spinothalamic tracts contralaterally.\nReference: Spinal Cord Medicine (Kirshblum).",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with acute occlusion of the left main Middle Cerebral Artery (MCA). Which combination of neurological deficits is expected?",
    option_a: "Bilateral lower limb paralysis with urinary retention",
    option_b: "Pure cerebellar ataxia",
    option_c: "Right hemiparesis, right sensory loss, and Global/Broca/Wernicke Aphasia",
    option_d: "Left hemiparesis and left hemispatial neglect",
    correct_option: "C",
    explanation: "Left MCA strokes damage the dominant (left) hemisphere, causing aphasia from language-area involvement and right-sided (contralateral) motor and sensory deficits.\nReference: Blumenfeld's Neuroanatomy through Clinical Cases.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient involved in a trauma presents with GCS 12, suffers a brief loss of consciousness followed by a 'lucid interval', and then rapidly deteriorates. CT brain reveals a biconvex hyperdense mass. What is the diagnosis?",
    option_a: "Subarachnoid Hemorrhage",
    option_b: "Subdural Hematoma (SDH)",
    option_c: "Diffuse Axonal Injury",
    option_d: "Epidural Hematoma (EDH)",
    correct_option: "D",
    explanation: "Classical lucid intervals followed by rapid compression are characteristic of arterial bleeding from the middle meningeal artery in epidural hematomas.\nReference: Greenberg's Handbook of Neurosurgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient sustains a spinal cord lesion resulting in a complete sensory level at T10. At what anatomical landmark will cutaneous sensation be impaired below?",
    option_a: "Inguinal Crease",
    option_b: "Nipple Line",
    option_c: "Xiphoid Process",
    option_d: "Level of the Umbilicus",
    correct_option: "D",
    explanation: "T10 dermatome maps directly to the level of the umbilicus. T4 corresponds to nipples, T6 to xiphoid process, L1 to inguinal line.\nReference: Moore's Clinically Oriented Anatomy.",
    tag: "Past Year Question"
  },
  {
    question_text: "A post-stroke patient taking Phenytoin for post-stroke seizures is admitted with severe pneumonia. Why is monitoring serum Phenytoin drug levels essential?",
    option_a: "Phenytoin follows first-order kinetics, so levels change in proportion to dose",
    option_b: "Phenytoin is mainly cleared by the kidneys, so sepsis-related renal impairment causes accumulation",
    option_c: "Phenytoin exhibits zero-order (saturation) kinetics and narrow therapeutic index",
    option_d: "Phenytoin has a wide therapeutic index, so levels are checked mainly to confirm adherence",
    correct_option: "C",
    explanation: "Rationale: Phenytoin's hepatic metabolism saturates within the therapeutic range, so elimination becomes zero-order: a small dose increase, or an interacting drug (e.g. some antibiotics), can produce a disproportionate rise in level and toxicity. Its therapeutic index is narrow. In acute illness, low albumin raises the unbound (active) fraction, so the total level can look normal while the free level is toxic; check a free level or correct for albumin. A is the opposite of phenytoin's kinetics; B is wrong because clearance is hepatic, not renal; D is wrong because the index is narrow.\nReference: Goodman & Gilman's Pharmacological Basis of Therapeutics.",
    tag: "Past Year Question"
  },
  {
    question_text: "According to the McDonald criteria for Multiple Sclerosis, what demonstration is mandatory for establishing diagnosis?",
    option_a: "Positive viral CSF culture",
    option_b: "Complete resolution of all symptoms within 24 hours",
    option_c: "Single isolated lesion on CT",
    option_d: "Dissemination in Space (DIS) and Dissemination in Time (DIT)",
    correct_option: "D",
    explanation: "Diagnosis of MS requires proving lesions separated in spatial distribution (DIS) and temporal occurrence (DIT).\nReference: 2017 Revisions to the McDonald Criteria for Multiple Sclerosis.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which of the following conditions represents an ABSOLUTE contraindication to IV thrombolysis (rtPA) in acute ischemic stroke?",
    option_a: "Active intracranial hemorrhage on non-contrast CT",
    option_b: "Mild essential hypertension (BP 130/80)",
    option_c: "History of seasonal allergies",
    option_d: "Patient age 65 years",
    correct_option: "A",
    explanation: "Presence of active intracranial hemorrhage on head CT is an absolute contraindication to thrombolysis due to catastrophic bleeding risk.\nReference: AHA/ASA Guidelines for the Early Management of Ischemic Stroke.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with severe hypercalcemia (Serum Ca 3.3 mmol/L) and severe dehydration. After initial aggressive IV normal saline rehydration, serum Ca remains 3.0 mmol/L. What is the definitive pharmacological intervention?",
    option_a: "Oral Vitamin D3",
    option_b: "Intravenous Bisphosphonate (e.g., Pamidronate / Zoledronic Acid)",
    option_c: "Intravenous Thiazide Diuretics",
    option_d: "Oral Calcium Carbonate",
    correct_option: "B",
    explanation: "IV bisphosphonates (pamidronate or zoledronic acid) inhibit osteoclast activity and are the mainstay of definitive treatment for severe hypercalcemia after rehydration.\nReference: Harrison's Principles of Internal Medicine.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which cardinal laboratory feature characterizes Acute Kidney Injury (AKI)?",
    option_a: "Isolated elevation of serum bilirubin",
    option_b: "Severe hyperglycemia",
    option_c: "Progressive decrease in platelet count alone",
    option_d: "Rapid increase in serum creatinine and reduction in urine output",
    correct_option: "D",
    explanation: "KDIGO defines AKI as an abrupt decline in renal function featuring absolute or percentage increases in serum creatinine and/or oliguria.\nReference: KDIGO Clinical Practice Guideline for Acute Kidney Injury.",
    tag: "Past Year Question"
  },
  {
    question_text: "A diabetic patient with persistent hypertension and microalbuminuria is initiated on antihypertensive therapy. Which drug class provides renal protection by reducing intraglomerular pressure?",
    option_a: "Beta-blocker",
    option_b: "Alpha-1 Blocker",
    option_c: "ACE Inhibitor (e.g., Enalapril) or ARB",
    option_d: "Dihydropyridine CCB",
    correct_option: "C",
    explanation: "ACE inhibitors dilate the efferent arteriole, reducing intraglomerular capillary pressure and slowing diabetic nephropathy progression.\nReference: ADA Standards of Care in Diabetes; KDIGO CKD Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "A hypertensive patient refuses pharmacological therapy. Which lifestyle modification provides the LEAST magnitude of BP reduction compared to dietary and weight changes?",
    option_a: "Dietary sodium restriction to < 2.0 g/day",
    option_b: "Adoption of DASH diet rich in fruits/vegetables",
    option_c: "Weight reduction achieving normal BMI",
    option_d: "Modest alcohol consumption of 2 cans of beer per day",
    correct_option: "D",
    explanation: "Consuming 2 cans of beer daily retains significant alcohol intake and offers minimal to no BP benefit compared to major sodium reduction, DASH diet, and weight loss.\nReference: 2017 ACC/AHA High Blood Pressure Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "Losartan is converted into its active carboxylic acid metabolite (E-3174) in the liver. What is the therapeutic advantage of this pharmacokinetic transformation?",
    option_a: "E-3174 is a potent non-competitive ARB with a long terminal half-life",
    option_b: "E-3174 causes severe renal toxicity",
    option_c: "E-3174 converts into adrenaline",
    option_d: "E-3174 is excreted unchanged in lungs",
    correct_option: "A",
    explanation: "The active metabolite E-3174 is 10-40 times more potent than losartan itself and provides sustained 24-hour blood pressure control.\nReference: Goodman & Gilman's Pharmacological Basis of Therapeutics.",
    tag: "Past Year Question"
  },
  {
    question_text: "Methicillin-Resistant Staphylococcus aureus (MRSA) confers resistance to beta-lactam antibiotics via mutation in which target protein?",
    option_a: "Penicillin-Binding Protein 2a (PBP2a encoded by mecA gene)",
    option_b: "50S Ribosomal RNA",
    option_c: "Bacterial Cell Wall Mycolic Acid",
    option_d: "DNA Gyrase subunit B",
    correct_option: "A",
    explanation: "Acquisition of the mecA gene encoding modified PBP2a reduces affinity for almost all beta-lactam antibiotics.\nReference: Mandell, Douglas, and Bennett's Infectious Diseases.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which antibiotic treatment regime is recommended for Pseudomembranous Colitis (Clostridioides difficile infection)?",
    option_a: "Oral Vancomycin or Oral Fidaxomicin",
    option_b: "Oral Amoxicillin",
    option_c: "Prolonged Oral Tetracycline",
    option_d: "Intravenous Clindamycin",
    correct_option: "A",
    explanation: "First-line therapy for C. difficile colitis is oral Vancomycin or oral Fidaxomicin. Clindamycin is a primary trigger of C. difficile colitis.\nReference: IDSA/SHEA Clinical Practice Guidelines for C. difficile.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with Klebsiella pneumoniae urosepsis develops septic shock and Acute Kidney Injury. What is the immediate priority management?",
    option_a: "Immediate nephrectomy",
    option_b: "Discontinue all fluids",
    option_c: "High-dose oral loop diuretics alone",
    option_d: "Targeted IV Broad-Spectrum Antibiotics and Fluid Resuscitation while avoiding nephrotoxins",
    correct_option: "D",
    explanation: "Surviving Sepsis Campaign guidelines mandate prompt fluid resuscitation and early IV antimicrobial administration while adjusting for renal clearance.\nReference: Surviving Sepsis Campaign International Guidelines 2021.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which combination of neurological signs is characteristic of Cervical Spondylotic Myelopathy?",
    option_a: "Sparing of all reflexes",
    option_b: "Isolated sensory loss without motor involvement",
    option_c: "Upper limb LMN signs (areflexia/atrophy) with lower limb UMN signs (hyperreflexia/spasticity) and gait ataxia",
    option_d: "Pure lower motor neuron signs in all four extremities",
    correct_option: "C",
    explanation: "Cervical myelopathy compresses nerve roots at the lesion level (LMN signs in arms) and corticospinal tracts (UMN signs and spasticity in legs).\nReference: Rothman-Simeone The Spine, 7th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A runner complains of severe recurrent cramping calf pain that arises after 15 minutes of running and resolves completely with rest. What condition should be evaluated?",
    option_a: "Plantar Fasciitis",
    option_b: "Chronic Exertional Compartment Syndrome (CECS)",
    option_c: "Achilles Tendon Rupture",
    option_d: "Deep Vein Thrombosis",
    correct_option: "B",
    explanation: "CECS presents as exercise-induced reversible intracompartmental pressure elevation causing ischemic pain that subsides upon rest.\nReference: DeLee, Drez, & Miller's Orthopaedic Sports Medicine.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the Gold Standard diagnostic test to confirm Chronic Exertional Compartment Syndrome?",
    option_a: "MRI of the calf",
    option_b: "Electromyography (EMG)",
    option_c: "Intracompartmental pressure measurement at rest and post-exercise",
    option_d: "Nerve Conduction Studies (NCS)",
    correct_option: "C",
    explanation: "Diagnosis is definitively established by measuring elevated needle compartment pressures before and immediately following symptom-inducing exercise.\nReference: DeLee & Drez's Orthopaedic Sports Medicine.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which radiographic feature on plain joint X-ray distinguishes Rheumatoid Arthritis from Osteoarthritis?",
    option_a: "Asymmetric Joint Space Narrowing",
    option_b: "Osteophyte Formation",
    option_c: "Subchondral Sclerosis",
    option_d: "Marginal Periarticular Bone Erosions",
    correct_option: "D",
    explanation: "Marginal bone erosions and periarticular osteopenia characterize inflammatory erosive arthritis (RA), whereas osteophytes and subchondral sclerosis characterize degenerative OA.\nReference: Kelley and Firestein's Textbook of Rheumatology.",
    tag: "Past Year Question"
  },
  {
    question_text: "Entrapment of the Ulnar Nerve at the wrist level occurs within which fibro-osseous anatomical canal?",
    option_a: "Cubital Tunnel",
    option_b: "Radial Tunnel",
    option_c: "Guyon's Canal",
    option_d: "Carpal Tunnel",
    correct_option: "C",
    explanation: "The ulnar nerve passes through Guyon's canal at the wrist (formed by pisiform and hook of hamate). Cubital tunnel is at the elbow.\nReference: Gray's Anatomy, 42nd Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A lesion of the ulnar nerve proximal to its division into superficial and deep branches causes sensory loss in the 4th and 5th digits combined with hypothenar muscle atrophy. Which nerve segment is involved?",
    option_a: "Superficial Radial Nerve",
    option_b: "Isolated Deep Branch of Ulnar Nerve",
    option_c: "Main Ulnar Nerve trunk prior to cutaneous and deep motor division",
    option_d: "Isolated Palmar Cutaneous Branch",
    correct_option: "C",
    explanation: "Combined loss of hypothenar motor power and digital sensation requires a lesion proximal to the bifurcation of the ulnar nerve main trunk.\nReference: Green's Operative Hand Surgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "Physical examination of a patient with suspected Adhesive Capsulitis (Frozen Shoulder) demonstrates which classic ROM restriction pattern?",
    option_a: "Equal reduction in both Active and Passive Range of Motion",
    option_b: "Loss of Active ROM with completely normal Passive ROM",
    option_c: "Reduced Passive ROM with normal Active ROM",
    option_d: "Normal ROM with isolated loss of power",
    correct_option: "A",
    explanation: "Adhesive capsulitis causes glenohumeral capsular contracture, restricting both active and passive joint motion identically.\nReference: Rockwood and Matsen's The Shoulder, 5th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the normal physiological Scapulohumeral Rhythm ratio of glenohumeral to scapulothoracic motion during shoulder abduction?",
    option_a: "5:1",
    option_b: "2:1 (2 degrees glenohumeral for every 1 degree scapulothoracic)",
    option_c: "1:3",
    option_d: "1:1",
    correct_option: "B",
    explanation: "During 180 degrees of shoulder abduction, approximately 120 degrees occurs at the glenohumeral joint and 60 degrees at the scapulothoracic articulation (2:1 ratio).\nReference: Kapanji's Physiology of the Joints.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is a recognized conservative non-surgical intervention for early Hallux Rigidus (osteoarthritis of the 1st MTP joint)?",
    option_a: "Modification of footwear using stiff-soled or rocker-bottom shoes",
    option_b: "Cheilectomy of the dorsal osteophyte",
    option_c: "First metatarsophalangeal joint arthrodesis",
    option_d: "Soft, flexible-soled shoes to encourage toe dorsiflexion",
    correct_option: "A",
    explanation: "Rationale: In hallux rigidus, pain comes from forced dorsiflexion of the 1st MTP joint at toe-off. Stiff-soled or rocker-bottom shoes (or a Morton's extension insert) limit that dorsiflexion and are first-line conservative care. Soft, flexible soles do the opposite and worsen pain. Cheilectomy and 1st MTP arthrodesis are both effective, but they are surgical options for when conservative measures fail.\nReference: Mann's Surgery of the Foot and Ankle, 9th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which anatomical statement regarding the human vertebral column is CORRECT?",
    option_a: "Vertebral body mass progressively increases moving caudally from cervical to lumbar region",
    option_b: "Anterior longitudinal ligament lies inside the vertebral canal",
    option_c: "Vertebral bodies get smaller towards the sacrum",
    option_d: "The spinal cord ends at S5 in adults",
    correct_option: "A",
    explanation: "Vertebral body sizes increase downwards to accommodate cumulative body weight load. ALL lies anterior to vertebral bodies, not inside the canal.\nReference: Gray's Anatomy, 42nd Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "At which vertebral level does the adult spinal cord typically terminate (Conus Medullaris)?",
    option_a: "L5 - S1 Level",
    option_b: "S3 Level",
    option_c: "L1 - L2 Vertebral Level",
    option_d: "T6 Level",
    correct_option: "C",
    explanation: "The adult conus medullaris ends at the L1-L2 interspace, below which lower spinal nerve roots form the cauda equina.\nReference: Moore's Clinically Oriented Anatomy.",
    tag: "Past Year Question"
  },
  {
    question_text: "A defect in the pars interarticularis combined with anterior slippage of one vertebra over another is termed:",
    option_a: "Spondylosis and Ankylosis",
    option_b: "Scoliosis and Kyphosis",
    option_c: "Spondylolysis and Spondylolisthesis",
    option_d: "Discitis and Osteomyelitis",
    correct_option: "C",
    explanation: "Spondylolysis refers to a pars interarticularis fracture/defect; forward translation/slippage of the vertebral body is spondylolisthesis.\nReference: Rothman-Simeone The Spine.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 25-year-old female experiences episodic unilateral throbbing headaches associated with photophobia, phonophobia, and nausea. What is the diagnosis?",
    option_a: "Tension-type Headache",
    option_b: "Cluster Headache",
    option_c: "Temporal Arteritis",
    option_d: "Migraine",
    correct_option: "D",
    explanation: "Unilateral pulsatile pain accompanied by photophobia, phonophobia, and nausea is the classic presentation of migraine.\nReference: ICHD-3 Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "To minimize opioid tolerance and dependence in chronic non-cancer pain, what strategy is recommended?",
    option_a: "Escalate opioid dosage indefinitely",
    option_b: "Utilize multimodal non-opioid analgesics and taper/discontinue opioids",
    option_c: "Combine opioids with sedating benzodiazepines",
    option_d: "Prescribe high-dose opioids PRN indefinitely",
    correct_option: "B",
    explanation: "Guidelines recommend multimodal non-opioid pain strategies and opioid deprescribing to avoid hyperalgesia, misuse, and dependence.\nReference: CDC Guideline for Prescribing Opioids for Chronic Pain.",
    tag: "Past Year Question"
  },
  {
    question_text: "Medical interventions to lower elevated Intracranial Pressure (ICP) include all of the following EXCEPT:",
    option_a: "Hypoventilation (inducing Hypercapnia)",
    option_b: "External Ventricular Drainage (CSF drainage)",
    option_c: "Administration of IV Mannitol",
    option_d: "Therapeutic Barbiturate Coma",
    correct_option: "A",
    explanation: "Hypoventilation increases arterial pCO2, causing cerebral vasodilation and INCREASING ICP. Hyperventilation lowers pCO2 and reduces ICP.\nReference: Greenberg's Handbook of Neurosurgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which complication is uniquely associated with Ventriculoatrial (VA) shunts compared to Ventriculoperitoneal (VP) shunts?",
    option_a: "Abdominal Pseudocyst",
    option_b: "Shunt Nephritis and Endocarditis / Bacteremia",
    option_c: "Bowel Perforation",
    option_d: "Inguinal Hernia",
    correct_option: "B",
    explanation: "VA shunts drain CSF into the right atrium; infections can directly cause bloodstream bacteremia, immune-complex glomerulonephritis (shunt nephritis), and endocarditis.\nReference: Greenberg's Handbook of Neurosurgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "A motor vehicle accident victim presents with a Glasgow Coma Scale (GCS) score of 5. How is this TBI categorized?",
    option_a: "Fully Awake and Oriented",
    option_b: "Mild Traumatic Brain Injury (GCS 13–15)",
    option_c: "Moderate Traumatic Brain Injury (GCS 9–12)",
    option_d: "Severe Traumatic Brain Injury (GCS 3–8)",
    correct_option: "D",
    explanation: "GCS scores of 3 to 8 define severe TBI, requiring immediate airway protection and neurocritical monitoring.\nReference: ATLS Student Course Manual, 10th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A stroke patient with a large left cerebral hemisphere lesion is evaluated. Which clinical presentation corresponds to left hemispheric injury?",
    option_a: "Pure ataxia of left arm",
    option_b: "Left hemiparesis and Left Hemispatial Neglect",
    option_c: "Right hemiparesis and Aphasia",
    option_d: "Bilateral leg weakness with intact speech",
    correct_option: "C",
    explanation: "Left hemisphere cortical strokes produce motor/sensory deficits on the right side of the body and language impairment (aphasia).\nReference: Blumenfeld's Neuroanatomy.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the core defining feature of Delirium?",
    option_a: "Chronic progressive memory loss over 5 years",
    option_b: "Confabulation alone",
    option_c: "Acute disturbance in Attention and Awareness with a fluctuating course",
    option_d: "Stable auditory hallucinations",
    correct_option: "C",
    explanation: "Delirium is characterized by acute-onset, fluctuating impairment in attention, perception, and level of consciousness.\nReference: DSM-5-TR Diagnostic Criteria for Delirium.",
    tag: "Past Year Question"
  },
  {
    question_text: "Using the Wallace Rule of Nines, calculate the total burn surface area (TBSA) for an adult with burns involving both entire upper limbs (arms) and the anterior chest.",
    option_a: "45%",
    option_b: "18%",
    option_c: "36%",
    option_d: "27%",
    correct_option: "D",
    explanation: "Each full upper extremity = 9% (18% for both). Anterior chest = 9% (anterior trunk total is 18%, chest is 9%). 18% + 9% = 27% TBSA.\nReference: ATLS Student Course Manual.",
    tag: "Past Year Question"
  },
  {
    question_text: "Asking a patient to spell the word 'WORLD' backward tests which specific domain of cognitive function?",
    option_a: "Auditory Comprehension",
    option_b: "Attention and Concentration / Working Memory",
    option_c: "Visuospatial Construction",
    option_d: "Long-term Episodic Memory",
    correct_option: "B",
    explanation: "Spelling 'WORLD' backward or serial 7s evaluates working memory, attention, and mental manipulation on MMSE.\nReference: Folstein Mini-Mental State Examination (MMSE) Manual.",
    tag: "Past Year Question"
  },
  {
    question_text: "Inability to perform rapid alternating movements (e.g., rapid pronation/supination of hands) is termed:",
    option_a: "Dysmetria",
    option_b: "Dysdiadochokinesia",
    option_c: "Dyspraxia",
    option_d: "Dyskinesia",
    correct_option: "B",
    explanation: "Dysdiadochokinesia is a cardinal sign of cerebellar hemisphere dysfunction characterized by impaired rapid alternating movements.\nReference: DeJong's The Neurologic Examination.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 24-hour urine protein collection sample is considered invalid and must be repeated if:",
    option_a: "The final void at 24 hours was collected",
    option_b: "Any single voided urine sample during the 24-hour period was discarded or missed",
    option_c: "Total volume exceeded 1.5 Liters",
    option_d: "The specimen was kept refrigerated",
    correct_option: "B",
    explanation: "Discarding any voided urine during the 24-hour collection period undercounts total protein excretion, rendering the test inaccurate.\nReference: Brenner and Rector's The Kidney.",
    tag: "Past Year Question"
  },
  {
    question_text: "Suprapubic Catheterization (SPC) is contraindicated in which of the following conditions?",
    option_a: "Prostatic Enlargement",
    option_b: "Acute Urinary Retention",
    option_c: "Urethral Stricture",
    option_d: "Known Bladder Carcinoma or non-palpable empty bladder",
    correct_option: "D",
    explanation: "SPC is contraindicated when bladder cancer is present (risk of tumor seeding along tract) or when the bladder cannot be distended/palpated (risk of bowel perforation).\nReference: Campbell-Walsh-Wein Urology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with high fever, toxicity, and palpable purpura. Blood cultures suspect Neisseria meningitidis (Meningococcemia). What is the empiric antibiotic of choice?",
    option_a: "Oral Tetracycline",
    option_b: "Oral Cloxacillin",
    option_c: "Intravenous Ceftriaxone or Penicillin G",
    option_d: "Topical Neomycin",
    correct_option: "C",
    explanation: "Meningococcemia requires immediate high-dose parenteral Ceftriaxone or Penicillin G to prevent fulminant shock and mortality.\nReference: Mandell's Principles and Practice of Infectious Diseases.",
    tag: "Past Year Question"
  },
  {
    question_text: "All of the following are established risk factors for Urinary Tract Infection (UTI) EXCEPT:",
    option_a: "Obstructive Uropathy",
    option_b: "Long-term Tetracycline therapy",
    option_c: "Diabetes Mellitus",
    option_d: "Pregnancy",
    correct_option: "B",
    explanation: "Diabetes, pregnancy, urinary tract obstruction, and catheters increase UTI risk. Tetracycline therapy is not an established independent risk factor.\nReference: IDSA UTI Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "A cortical brain lesion (e.g., acute ischemic stroke) typically produces which pattern of neurogenic bladder dysfunction?",
    option_a: "Detrusor-Sphincter Dyssynergia (DSD)",
    option_b: "Areflexic Flaccid Bladder",
    option_c: "Complete urinary retention without detrusor tone",
    option_d: "Detrusor Hyperreflexia (Overactivity) with preserved synergy",
    correct_option: "D",
    explanation: "Suprapontine lesions remove voluntary cortical inhibition of micturition, resulting in detrusor hyperreflexia, but sphincter synergy remains intact (unlike spinal cord lesions).\nReference: Campbell-Walsh-Wein Urology.",
    tag: "Past Year Question"
  },
  {
    question_text: "Under the Wagner classification for diabetic foot ulcers, a deep ulcer that penetrates to tendon, joint capsule or deep fascia, without abscess or osteomyelitis, is graded as:",
    option_a: "Wagner Grade 3",
    option_b: "Wagner Grade 0",
    option_c: "Wagner Grade 1",
    option_d: "Wagner Grade 2",
    correct_option: "D",
    explanation: "Rationale: A deep ulcer reaching tendon, capsule or deep fascia, with no abscess and no osteomyelitis, is Wagner Grade 2. Grade 3 would require abscess, osteomyelitis or joint sepsis; Grade 1 is a superficial ulcer only.\nWagner classification:\nGrade 0 - No open ulcer; intact skin (pre-ulcerative or healed lesion, bony deformity)\nGrade 1 - Superficial ulcer involving skin or subcutaneous tissue\nGrade 2 - Deep ulcer to tendon, joint capsule or deep fascia, without abscess or osteomyelitis\nGrade 3 - Deep ulcer with abscess, osteomyelitis or joint sepsis\nGrade 4 - Localised gangrene (forefoot or heel)\nGrade 5 - Gangrene of the whole foot\nReference: Levin and O'Neal's The Diabetic Foot, 7th Edition; Wagner FW, Foot Ankle 1981.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which of the following factors increases the risk of lower extremity amputation in patients with Diabetes Mellitus?",
    option_a: "Peripheral Neuropathy alone",
    option_b: "Normal ABPI",
    option_c: "High dietary fiber",
    option_d: "Peripheral Neuropathy, Foot Deformities, and Peripheral Artery Disease (All of the above)",
    correct_option: "D",
    explanation: "The tri-planar threat of loss of protective sensation (neuropathy), abnormal focal pressure points (deformity), and ischemia (PAD) drives amputation risk.\nReference: ADA Standards of Care in Diabetes.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which statement regarding the Ankle-Brachial Systolic Index (ABSI / ABPI) is CORRECT?",
    option_a: "An ABPI value < 0.90 confirms Peripheral Artery Disease (PAD)",
    option_b: "ABPI cannot be measured in diabetic patients",
    option_c: "ABPI is measured using venous Doppler signals",
    option_d: "An ABPI of 1.20 indicates severe lower limb ischemia",
    correct_option: "A",
    explanation: "Normal ABPI is 0.90 to 1.30. Values <0.90 indicate PAD; values >1.40 indicate non-compressible, calcified medial arterial sclerosis.\nReference: ACC/AHA Guidelines for the Management of Patients With PAD.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which statement regarding the Denver II Developmental Screening Test is CORRECT?",
    option_a: "Adjustments must be made for premature infants by subtracting weeks of prematurity from chronological age up to 2 years",
    option_b: "Language scale is omitted",
    option_c: "It can diagnose exact IQ scores",
    option_d: "Mother's subjective report is completely invalid",
    correct_option: "A",
    explanation: "Prematurity adjustments (using gestational age) are applied up to 24 months of age when interpreting Denver II milestones.\nReference: Denver II Screening Manual; Nelson Textbook of Pediatrics.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which developmental milestone capability differentiates a typical 7-month-old infant from a 5-month-old infant?",
    option_a: "Fixating on objects",
    option_b: "Sitting unsupported without assistance",
    option_c: "Social smile",
    option_d: "Rolling over from prone to supine",
    correct_option: "B",
    explanation: "Independent unsupported sitting is achieved between 6 to 7 months. Rolling occurs at 4-5 months.\nReference: Nelson Textbook of Pediatrics, 21st Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Physical signs of neonatal hypotonia ('floppy infant') include all of the following EXCEPT:",
    option_a: "Opisthotonus (severe extensor posturing of trunk and neck)",
    option_b: "Poor suckling and feeble cry",
    option_c: "Frog-like posture in supine position",
    option_d: "Marked head lag on pull-to-sit test",
    correct_option: "A",
    explanation: "Opisthotonus is extreme extensor hypertonia (spasticity/rigidity), seen in meningeal irritation or severe UMN damage (e.g., kernicterus), not hypotonia.\nReference: Volpe's Neurology of the Newborn, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which motor milestone presentation is considered PATHOLOGICAL and requires immediate neurological evaluation?",
    option_a: "Strong hand preference (hand dominance) in an infant under 1 year of age",
    option_b: "Echolalia at 2 years of age",
    option_c: "Fine pincer grasp at 10 months",
    option_d: "Standing with support at 12 months",
    correct_option: "A",
    explanation: "Hand preference prior to 12 months indicates hemiparesis or weakness in the non-preferred hand.\nReference: Nelson Textbook of Pediatrics.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which statement regarding childhood seizure disorders is CORRECT?",
    option_a: "Neuroimaging is never indicated in pediatric seizures",
    option_b: "All single febrile seizures require lifelong antiepileptic therapy",
    option_c: "Febrile seizures occur exclusively after age 10",
    option_d: "Absence seizures frequently exhibit a positive family history and genetic predisposition",
    correct_option: "D",
    explanation: "Childhood Absence Epilepsy has a strong polygenic basis, with classic 3-Hz spike-and-wave discharges on EEG and frequent positive family history.\nReference: Swaiman's Pediatric Neurology, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A hand deformity characterized by hyperextension of the Proximal Interphalangeal (PIP) joint and flexion of the Distal Interphalangeal (DIP) joint is called:",
    option_a: "Ulnar Drift",
    option_b: "Mallet Finger",
    option_c: "Boutonniere Deformity",
    option_d: "Swan-Neck Deformity",
    correct_option: "D",
    explanation: "Swan-neck deformity is PIP hyperextension with DIP flexion. Boutonniere deformity is PIP flexion with DIP hyperextension.\nReference: Kelley and Firestein's Textbook of Rheumatology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with spinal accessory nerve palsy exhibits trapezius muscle weakness, dropping of the shoulder girdle, and impaired scapular rotation. Which muscle group should be targeted in therapy to compensate for scapular stabilization?",
    option_a: "Pectoralis Major and Latissimus Dorsi",
    option_b: "Serratus Anterior and Rhomboids",
    option_c: "Infraspinatus and Teres Minor",
    option_d: "Supraspinatus and Deltoid",
    correct_option: "B",
    explanation: "Rationale: When the trapezius is weak, the remaining scapular stabilisers must compensate. The serratus anterior holds the scapula against the thoracic wall and assists upward rotation; the rhomboids (with levator scapulae) retract and elevate the scapula. Strengthening these reduces shoulder drop and lateral scapular winging. Pectoralis major and latissimus dorsi move the humerus and tend to depress or protract the shoulder girdle; infraspinatus, teres minor, supraspinatus and deltoid act on the glenohumeral joint, not the scapula.\nReference: Braddom's Physical Medicine and Rehabilitation.",
    tag: "Past Year Question"
  },
  {
    question_text: "The diagnosis of a joint motion contracture is established primarily through which diagnostic assessment?",
    option_a: "Plain radiograph of the joint",
    option_b: "MRI of the joint and periarticular soft tissues",
    option_c: "Dynamic musculoskeletal ultrasound of the muscle-tendon unit",
    option_d: "Clinical physical examination (goniometric measurement of passive ROM)",
    correct_option: "D",
    explanation: "Rationale: A contracture is defined clinically as a fixed loss of passive range of motion, so the diagnosis is made and quantified on examination with goniometric measurement of passive ROM (compared with the opposite side or normative values). Imaging has a supporting role only: plain radiographs exclude bony block or ankylosis, and MRI or ultrasound can show soft-tissue causes, but none of them establishes or measures the contracture itself.\nReference: Kisner & Colby's Therapeutic Exercise; Braddom's Physical Medicine and Rehabilitation.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which condition is a CONTRAINDICATION to the application of superficial thermal heat therapy?",
    option_a: "Subacute joint stiffness",
    option_b: "Chronic muscle spasm",
    option_c: "Acute tissue trauma and acute inflammation (first 48 hours)",
    option_d: "Chronic osteoarthritis",
    correct_option: "C",
    explanation: "Applying heat during acute inflammation causes vasodilation, increasing edema, hemorrhage, and hyperalgesia.\nReference: Michlovitz's Modalities for Therapeutic Intervention, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "The therapeutic transfer of thermal energy in a moving hydrotherapy whirlpool bath occurs primarily through which physical mechanism?",
    option_a: "Conduction alone",
    option_b: "Conversion",
    option_c: "Convection",
    option_d: "Radiation",
    correct_option: "C",
    explanation: "Convection is thermal transfer via fluid or gas movement across a body surface, as in a whirlpool bath.\nReference: Cameron's Physical Agents in Rehabilitation.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the primary physiological mechanism by which Continuous Positive Airway Pressure (CPAP) improves oxygenation in hypoxemic respiratory failure?",
    option_a: "Recruit collapsed alveoli and increase Functional Residual Capacity (FRC)",
    option_b: "Administer 100% helium gas",
    option_c: "Decrease cardiac output intentionally",
    option_d: "Paralyze the diaphragm",
    correct_option: "A",
    explanation: "CPAP provides positive end-expiratory pressure, keeping alveoli open, reducing intrapulmonary shunting, and raising FRC.\nReference: West's Respiratory Physiology: Essentials, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which physiological effect results directly from therapeutic Cryotherapy (cold application)?",
    option_a: "Increased nerve conduction velocity",
    option_b: "Local vasoconstriction and decreased tissue cellular metabolic rate",
    option_c: "Acceleration of enzymatic collagenase activity",
    option_d: "Increased blood flow and vessel dilation",
    correct_option: "B",
    explanation: "Cryotherapy causes reflex vasoconstriction, slows nerve conduction, and decreases metabolic rate, reducing secondary hypoxic injury.\nReference: Michlovitz's Modalities for Therapeutic Intervention.",
    tag: "Past Year Question"
  },
  {
    question_text: "According to World Health Organization (WHO) criteria, a bone mineral density T-score of -2.8 SD measured by DEXA is classified as:",
    option_a: "Osteopenia",
    option_b: "Normal Bone Density",
    option_c: "Osteoporosis",
    option_d: "Osteopetrosis",
    correct_option: "C",
    explanation: "WHO classification: Normal (T-score ≥ -1.0), Osteopenia (-1.0 to -2.5), Osteoporosis (T-score ≤ -2.5).\nReference: WHO Criteria for Diagnosis of Osteoporosis.",
    tag: "Past Year Question"
  },
  {
    question_text: "Clinical manifestations of primary secondary Lymphedema of the upper limb include all of the following EXCEPT:",
    option_a: "Sensation of heaviness and tightness in the limb",
    option_b: "Non-pitting woody edema in chronic stages",
    option_c: "Severe acute lancinating neuropathic pain",
    option_d: "Restricted joint range of motion",
    correct_option: "C",
    explanation: "Lymphedema causes painless heaviness, fullness, and swelling. Sharp neuropathic pain is atypical and suggests nerve compression or acute infection.\nReference: Foldi's Textbook of Lymphology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient experiences an acute hyperventilation panic attack. What Arterial Blood Gas (ABG) pattern is expected prior to intervention?",
    option_a: "High pH, High pCO2",
    option_b: "Low pH, High pCO2 (Acute Respiratory Acidosis)",
    option_c: "Low pH, Low pCO2 (Metabolic Acidosis)",
    option_d: "High pH, Low pCO2 (Acute Respiratory Alkalosis)",
    correct_option: "D",
    explanation: "Hyperventilation excessively blows off CO2 (hypocapnia), driving blood pH up (alkalemia).\nReference: West's Respiratory Physiology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A post-operative patient on prophylactic low-dose Dalteparin (2500 units daily) develops acute lower extremity swelling, pain, and venous occlusion on ultrasound. What is the correct immediate management step?",
    option_a: "Increase Dalteparin to therapeutic weight-adjusted treatment dosage",
    option_b: "Place an inferior vena cava filter without drugs",
    option_c: "Continue current prophylactic dose unchanged",
    option_d: "Discontinue all anticoagulation immediately",
    correct_option: "A",
    explanation: "Development of breakthrough DVT on prophylactic anticoagulation mandates upgrading to full therapeutic-dose anticoagulation.\nReference: CHEST Antithrombotic Guidelines for VTE.",
    tag: "Past Year Question"
  },
  {
    question_text: "Nonsteroidal Anti-inflammatory Drugs (NSAIDs) exert their primary anti-inflammatory effect by inhibiting which enzyme?",
    option_a: "Lipoxygenase (5-LOX)",
    option_b: "Cyclooxygenase (COX-1 and COX-2)",
    option_c: "Phospholipase A2",
    option_d: "HMG-CoA Reductase",
    correct_option: "B",
    explanation: "NSAIDs inhibit COX enzymes, blocking conversion of arachidonic acid into pro-inflammatory prostaglandins.\nReference: Goodman & Gilman's Pharmacological Basis of Therapeutics.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with stable angina taking Metoprolol has persistent symptoms. What is the mechanism of action of Beta-blockers in reducing myocardial ischemia?",
    option_a: "Increase heart rate to improve output",
    option_b: "Directly dilate coronary arteries",
    option_c: "Inhibit platelet aggregation",
    option_d: "Decrease myocardial oxygen demand by reducing heart rate and contractility",
    correct_option: "D",
    explanation: "Beta-blockers reduce heart rate, BP, and cardiac contractility, reducing myocardial oxygen consumption.\nReference: Braunwald's Heart Disease.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with severe COPD exacerbation presents with hypercapnic respiratory failure. What is the initial target oxygen saturation (SpO2) range for controlled oxygen delivery?",
    option_a: "98% to 100%",
    option_b: "50% to 60%",
    option_c: "88% to 92%",
    option_d: "70% to 75%",
    correct_option: "C",
    explanation: "Target SpO2 of 88-92% prevents worsening hypercapnia from loss of hypoxic respiratory drive and V/Q mismatching.\nReference: GOLD COPD Guidelines 2026.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which sign on physical exam indicates Upper Motor Neuron (UMN) dysfunction?",
    option_a: "Marked Muscle Atrophy",
    option_b: "Hyporeflexia",
    option_c: "Extensor Plantar Response (Babinski sign)",
    option_d: "Muscle Fasciculations",
    correct_option: "C",
    explanation: "Babinski sign, hyperreflexia, and spasticity are classic UMN signs. Atrophy, fasciculations, and flaccidity indicate LMN lesions.\nReference: DeJong's Neurologic Exam.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 45-year-old female presents with acute right upper quadrant pain radiating to the scapula following a fatty meal. Murphy sign is positive. What is the diagnosis?",
    option_a: "Acute Pancreatitis",
    option_b: "Acute Cholecystitis",
    option_c: "Diverticulitis",
    option_d: "Acute Appendicitis",
    correct_option: "B",
    explanation: "Inspiratory arrest on deep palpation of the right upper quadrant (Murphy sign) indicates acute cholecystitis.\nReference: Sabiston Textbook of Surgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 30-year-old female presents with hyperpigmentation, fatigue, hyponatremia, and hyperkalemia. What is the diagnosis?",
    option_a: "Conn's Syndrome",
    option_b: "Primary Adrenal Insufficiency (Addison's Disease)",
    option_c: "Cushing's Syndrome",
    option_d: "Primary Aldosteronism",
    correct_option: "B",
    explanation: "Addison's disease lacks cortisol and aldosterone, causing hyponatremia, hyperkalemia, and high ACTH (hyperpigmentation).\nReference: Harrison's Internal Medicine.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which antibody is most specific for Systemic Lupus Erythematosus (SLE)?",
    option_a: "Anti-centromere",
    option_b: "Anti-Scl-70",
    option_c: "Anti-CCP",
    option_d: "Anti-double stranded DNA (anti-dsDNA) and Anti-Smith (anti-Sm)",
    correct_option: "D",
    explanation: "Anti-dsDNA and Anti-Sm antibodies are highly specific for SLE.\nReference: Kelley & Firestein's Rheumatology.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the hallmark urine microscopic finding in Acute Glomerulonephritis?",
    option_a: "White Blood Cell (WBC) Casts",
    option_b: "Muddy Brown Granular Casts",
    option_c: "Hyaline Casts",
    option_d: "Red Blood Cell (RBC) Casts",
    correct_option: "D",
    explanation: "RBC casts confirm glomerular bleeding characteristic of glomerulonephritis. Muddy brown casts indicate ATN.\nReference: Brenner and Rector's The Kidney.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with acute anaphylaxis after a bee sting. What is the immediate first-line drug of choice?",
    option_a: "IV Diphenhydramine",
    option_b: "Oral Hydrocortisone",
    option_c: "IV Salbutamol",
    option_d: "Intramuscular Epinephrine (Adrenaline)",
    correct_option: "D",
    explanation: "Intramuscular Epinephrine into the mid-outer thigh is the immediate first-line treatment for anaphylaxis.\nReference: WAO Anaphylaxis Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "An elderly woman falls on an outstretched hand (FOOSH) and sustains a wrist fracture with dorsal displacement of the distal radius ('dinner fork deformity'). What is the diagnosis?",
    option_a: "Colles' Fracture",
    option_b: "Scaphoid Fracture",
    option_c: "Smith's Fracture",
    option_d: "Galeazzi Fracture",
    correct_option: "A",
    explanation: "Colles' fracture is a extra-articular distal radius fracture with dorsal displacement producing the dinner-fork shape.\nReference: Rockwood and Green's Fractures.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which ECG change is indicative of hyperkalemia?",
    option_a: "Prominent U waves",
    option_b: "Tall Peaked T-waves and PR interval prolongation",
    option_c: "QT interval shortening only",
    option_d: "ST segment elevation in all leads",
    correct_option: "B",
    explanation: "Hyperkalemia classically manifests on ECG as tall, narrow, peaked T waves, followed by PR prolongation and QRS widening.\nReference: Marriott's Practical Electrocardiography, 13th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "An incomplete cervical spinal cord injury patient exhibits high-pitched bowel sounds, abdominal distension, and sudden dysautonomia. What is the most initial diagnostic step to exclude acute fecal impaction?",
    option_a: "Nasogastric tube decompression",
    option_b: "Abdominal X-ray (KUB)",
    option_c: "Emergency CT Abdomen",
    option_d: "Digital Rectal Examination (PR)",
    correct_option: "D",
    explanation: "Digital rectal examination is the immediate diagnostic step in spinal cord injury patients presenting with bowel distension or autonomic dysreflexia to evaluate for and disimpact fecal mass in the rectal vault.\nReference: Spinal Cord Medicine (Kirshblum & Campagnolo); Paralysis Society Clinical Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient recovering from traumatic brain injury exhibits marked anterograde amnesia and inability to form new declarative memories. Damage to which limbic structure is primarily responsible?",
    option_a: "Amygdala",
    option_b: "Corpus Callosum",
    option_c: "Hippocampus",
    option_d: "Caudate Nucleus",
    correct_option: "C",
    explanation: "The hippocampus (medial temporal lobe structure) is essential for the consolidation of short-term memory into long-term declarative memory. Damage leads to anterograde amnesia.\nReference: Kandel's Principles of Neural Science; Bear's Neuroscience: Exploring the Brain.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 68-year-old male presents with gradual onset of cognitive impairment, gait apraxia, urinary incontinence, and erectile dysfunction. MRI reveals ventriculomegaly disproportionate to cortical atrophy. Which condition should be suspected?",
    option_a: "Normal Pressure Hydrocephalus (NPH)",
    option_b: "Amyotrophic Lateral Sclerosis",
    option_c: "Alzheimer's Disease",
    option_d: "Parkinson's Disease",
    correct_option: "A",
    explanation: "The classic triad of NPH is gait disturbance, cognitive decline ('dementia'), and urinary incontinence ('Wet, Wobbly, Wacky'). Autonomic dysfunction including ED frequently co-occurs.\nReference: Adams and Victor's Principles of Neurology, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Arthrocentesis of a swollen knee joint demonstrates intracellular crystals under polarized light microscopy. What crystal morphology and birefringence are characteristic of Pseudogout (CPPD)?",
    option_a: "Envelope-shaped crystals with no birefringence",
    option_b: "Biconcave disc-shaped non-birefringent crystals",
    option_c: "Rhomboid-shaped crystals with positive birefringence",
    option_d: "Needle-shaped crystals with negative birefringence",
    correct_option: "C",
    explanation: "Calcium Pyrophosphate Deposition (CPPD / Pseudogout) crystals are typically short, rhomboid-shaped, and display weak positive birefringence under polarized microscopy. Gout crystals are needle-shaped and strongly negatively birefringent.\nReference: Kelley and Firestein's Textbook of Rheumatology, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "During sudden cardiac arrest resuscitation, an Automated External Defibrillator (AED) indicates 'Check Pads' due to a patient's extremely hairy chest preventing electrode adherence. What is the immediate correct action?",
    option_a: "Increase the shock energy setting manually",
    option_b: "Apply water over the chest hair to increase conductivity",
    option_c: "Rapidly shave the chest hair at pad placement sites using the razor in the AED kit",
    option_d: "Move the pads to the upper arms",
    correct_option: "C",
    explanation: "Excess chest hair prevents full contact between the AED adhesive pad and skin, creating air gaps. The recommended action is to quickly shave the pad areas using the prep razor in the AED carrying case (or use a secondary set of pads to rip hair off).\nReference: AHA (American Heart Association) Guidelines for CPR and ECC.",
    tag: "Past Year Question"
  },
  {
    question_text: "A T4 complete paraplegic patient complains of sudden lightheadedness, dizziness, and dimming vision when moved from a supine to a seated upright position during transfer training. What is the underlying cause?",
    option_a: "Autonomic dysreflexia",
    option_b: "Hypoglycemic crisis",
    option_c: "Orthostatic (postural) hypotension",
    option_d: "Benign paroxysmal positional vertigo",
    correct_option: "C",
    explanation: "Orthostatic hypotension is common in high SCI (above T6) due to loss of sympathetic supraspinal vasoconstrictor tone and venous pooling in lower limbs and splanchnic beds upon sitting/standing.\nReference: Braddom's Physical Medicine and Rehabilitation, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is a primary therapeutic goal of Functional Electrical Stimulation (FES / MES) applied to a denervated or weak limb in upper motor neuron stroke recovery?",
    option_a: "Eradicate deep tendon reflexes permanently",
    option_b: "Prevent disuse muscle atrophy and maintain joint range of motion",
    option_c: "Cause complete muscle denervation",
    option_d: "Direct ablation of sensory nociceptors",
    correct_option: "B",
    explanation: "FES/MES activates motor nerves to produce functional movement, which retards disuse atrophy, facilitates neuromuscular re-education, improves local circulation, and reduces joint contractures.\nReference: Therapeutic Electricity and Actinic Radiation (Stillwell); Physical Medicine & Rehab Board Review.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which neuropathological hallmark feature is characteristic of Parkinson's disease?",
    option_a: "Widespread demyelination of spinal cord dorsal columns",
    option_b: "Atrophy of anterior horn cells in the spinal cord",
    option_c: "Deposition of beta-amyloid plaques in the frontal cortex",
    option_d: "Progressive loss of dopaminergic neurons in the Substantia Nigra pars compacta with intracellular Lewy bodies",
    correct_option: "D",
    explanation: "Parkinson's disease is characterized by degeneration of dopamine-producing neurons in the substantia nigra pars compacta of the basal ganglia, accompanied by alpha-synuclein-containing Lewy bodies.\nReference: Bradley's Neurology in Clinical Practice, 8th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 65-year-old patient presents with progressive exertional dyspnea, orthopnea, and bilateral ankle edema. Which initial diagnostic triad is essential for evaluating suspected Heart Failure?",
    option_a: "Serum Creatinine, Holter monitor, and Exercise Stress Test",
    option_b: "D-Dimer, Arterial Blood Gas, and Echocardiogram only",
    option_c: "Serum B-type Natriuretic Peptide (BNP), Electrocardiogram (ECG), and Chest Radiograph",
    option_d: "Troponin I, Coronary Angiography, and CT Pulmonary Angiogram",
    correct_option: "C",
    explanation: "ESC and AHA Heart Failure guidelines recommend plasma BNP/NT-proBNP level, 12-lead ECG, and chest radiography as primary baseline diagnostic investigations, followed by transthoracic echocardiography.\nReference: 2021 ESC Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical rating scale is standardly used by clinicians to grade skeletal muscle strength on a numerical continuum from 0 (no contraction) to 5 (normal power)?",
    option_a: "Fugl-Meyer Assessment Scale",
    option_b: "Medical Research Council (MRC) Muscle Scale",
    option_c: "Functional Independence Measure (FIM)",
    option_d: "Modified Ashworth Scale (MAS)",
    correct_option: "B",
    explanation: "The MRC scale rates muscle power from Grade 0 (no movement) up to Grade 5 (normal strength against full resistance). MAS evaluates spasticity, not muscle strength.\nReference: AIDS to the Examination of the Peripheral Nervous System (Brain).",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the primary immunopathophysiology of Myasthenia Gravis?",
    option_a: "Mutations in the dystrophin gene at Xp21",
    option_b: "Autoantibody-mediated destruction/blockade of postsynaptic Nicotinic Acetylcholine Receptors (AChR)",
    option_c: "Demyelination of peripheral motor nerve axons",
    option_d: "Autoantibody attack against presynaptic Voltage-Gated Calcium Channels (VGCC)",
    correct_option: "B",
    explanation: "Myasthenia Gravis is an autoimmune disorder caused by autoantibodies directed against postsynaptic acetylcholine receptors (or MuSK) at the neuromuscular junction, impairing neuromuscular transmission.\nReference: Harrison's Principles of Internal Medicine, 21st Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 60-year-old diabetic patient presents with insidiously worsening shoulder pain and equal loss of active AND passive shoulder abduction, external rotation, and internal rotation. Which structure is primarily involved?",
    option_a: "Acromioclavicular ligament sprain",
    option_b: "Supraspinatus tendon tear",
    option_c: "Subacromial bursa (Isolated Bursitis)",
    option_d: "Glenohumeral joint capsule (Adhesive Capsulitis)",
    correct_option: "D",
    explanation: "Equal restriction of both ACTIVE and PASSIVE joint ranges of motion in a capsular pattern (external rotation > abduction > internal rotation) in a diabetic patient is pathognomonic for Adhesive Capsulitis (Frozen Shoulder) of the glenohumeral joint capsule.\nReference: Rockwood and Matsen's The Shoulder, 5th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient suffers a stab wound resulting in hemisection of the right side of the spinal cord at T10. What classical pattern of neurological deficits characterizes this Brown-Séquard syndrome?",
    option_a: "Loss of pain and temperature bilaterally with intact motor function",
    option_b: "Contralateral motor loss with ipsilateral pain and temperature loss",
    option_c: "Ipsilateral motor loss and loss of proprioception/vibration with contralateral loss of pain and temperature sensation",
    option_d: "Bilateral loss of motor function with complete preservation of tactile sensation",
    correct_option: "C",
    explanation: "Spinal cord hemisection (Brown-Séquard syndrome) cuts uncrossed corticospinal tracts (ipsilateral motor weakness) and uncrossed dorsal columns (ipsilateral loss of proprioception/vibration), while interrupting decussated spinothalamic fibers (contralateral loss of pain/temperature 1-2 segments below).\nReference: Spinal Cord Medicine (Kirshblum); Neuroanatomy through Clinical Cases (Blumenfeld).",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with vertigo, ipsilateral facial numbness, ipsilateral Horner syndrome (ptosis, miosis, anhidrosis), dysphagia, and contralateral loss of pain and temperature in the body. Which brainstem stroke syndrome is present?",
    option_a: "Lateral Medullary Syndrome (Wallenberg Syndrome)",
    option_b: "Midbrain Syndrome (Weber Syndrome)",
    option_c: "Anterior Spinal Artery Syndrome",
    option_d: "Medial Pontine Syndrome (Millard-Gubler)",
    correct_option: "A",
    explanation: "Wallenberg syndrome (Lateral Medullary stroke, usually PICA occlusion) damages the sympathetic fibers (Horner syndrome), nucleus ambiguus (dysphagia/hoarseness), trigeminal nucleus (ipsilateral face sensory loss), and spinothalamic tract (contralateral body pain/temp loss).\nReference: Stroke: Pathophysiology, Diagnosis, and Management (Grotta); Blumenfeld's Neuroanatomy.",
    tag: "Past Year Question"
  },
  {
    question_text: "Voluntary fine motor initiation originates from pyramidal neurons located predominantly in which cortical brain region?",
    option_a: "Primary Motor Cortex (Precentral Gyrus / Brodmann Area 4)",
    option_b: "Superior Temporal Gyrus",
    option_c: "Occipital Cortex (Brodmann Area 17)",
    option_d: "Postcentral Gyrus (Brodmann Area 3, 1, 2)",
    correct_option: "A",
    explanation: "The primary motor cortex (precentral gyrus, BA 4) contains upper motor neuron cell bodies (Betz cells) that give rise to the corticospinal tract for voluntary motor execution.\nReference: Guyton and Hall Textbook of Medical Physiology, 14th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 50-year-old poorly controlled diabetic farmer sustains a minor puncture wound on his leg while working. 36 hours later, he presents in septic shock with rapidly spreading skin erythema, violet discoloration, cutaneous bullae, and severe pain out of proportion. What is the diagnosis?",
    option_a: "Mild Staphylococcal Cellulitis",
    option_b: "Necrotizing Fasciitis",
    option_c: "Superficial Impetigo",
    option_d: "Erythema Nodosum",
    correct_option: "B",
    explanation: "Necrotizing fasciitis is a life-threatening, rapidly progressive soft tissue infection characterized by severe pain out of proportion to skin signs, bullae, skin necrosis/discoloration, crepitus, and systemic toxicity.\nReference: Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases.",
    tag: "Past Year Question"
  },
  {
    question_text: "A transtibial amputee with underlying diabetes presents with acute stump swelling, localized bone tenderness, and non-healing ulceration suspected of chronic osteomyelitis. What is the standard initial imaging modality?",
    option_a: "Indium-labeled white blood cell scan",
    option_b: "Computed Tomographic Angiography (CTA)",
    option_c: "Positron Emission Tomography (PET) scan",
    option_d: "Plain Radiograph (X-ray) of the residual limb",
    correct_option: "D",
    explanation: "Plain radiography is always the initial imaging modality of choice to assess suspected osteomyelitis, cortical erosions, periosteal reaction, sequestrum, or bony deformities in diabetic foot/stump ulceration.\nReference: Diagnostic Imaging: Orthopaedics (Manaster); ACR Appropriateness Criteria.",
    tag: "Past Year Question"
  },
  {
    question_text: "Following severe TBI, a patient exhibits persistent hypovolemia, orthostatic hypotension, hyponatremia, and excessive natriuresis. Which syndrome is the primary cause?",
    option_a: "Syndrome of Inappropriate Antidiuretic Hormone (SIADH)",
    option_b: "Cushing's Disease",
    option_c: "Central Diabetes Insipidus",
    option_d: "Cerebral Salt Wasting (CSW) Syndrome",
    correct_option: "D",
    explanation: "CSW involves renal sodium wasting resulting in true HYPOVOLEMIA and hyponatremia (causing orthostatic hypotension). SIADH features euvolemia or mild hypervolemia without orthostatic volume depletion.\nReference: The NeuroICU Book (Kiwon Lee); Marino's The ICU Book.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with metastatic lung cancer develops acute urinary retention (AUR) secondary to thoracic spinal cord compression. What is the immediate supportive management step while arranging definitive radiotherapy/decompression?",
    option_a: "Fluid restriction to 500 mL/day",
    option_b: "High-dose oral loop diuretics",
    option_c: "Insertion of an indwelling urinary catheter (CBD)",
    option_d: "Immediate administration of tamsulosin alone",
    correct_option: "C",
    explanation: "Acute urinary retention requires immediate bladder decompression via urethral catheterization (CBD insertion) to alleviate pain, prevent acute renal failure and bladder detrusor overdistension injury.\nReference: Oxford Textbook of Palliative Medicine, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 28-year-old paraplegic patient with intact upper limb strength (ASIA A T10) wishes to participate independently in community activities and sports. Which type of manual wheelchair is most appropriate?",
    option_a: "High-back reclining wheelchair with headrest",
    option_b: "Power-operated joystick wheelchair",
    option_c: "Heavy-duty transport wheelchair",
    option_d: "Ultralightweight manual wheelchair (LWWC)",
    correct_option: "D",
    explanation: "Active paraplegic individuals with full upper extremity strength achieve maximum functional independence, ease of propulsion, and energy efficiency using an ultralightweight manual wheelchair.\nReference: Prescription of Assistive Technology (AAOS); Braddom's Physical Medicine and Rehabilitation.",
    tag: "Past Year Question"
  },
  {
    question_text: "Following a ruptured anterior communicating artery aneurysm subarachnoid hemorrhage (SAH), a patient develops acute lethargy and memory decline. CT shows generalized enlargement of all four ventricles without cortical atrophy. What complication has occurred?",
    option_a: "Cerebral venous sinus thrombosis",
    option_b: "Hydrocephalus ex-vacuo",
    option_c: "Acute Communicating Hydrocephalus",
    option_d: "Epidural Hematoma",
    correct_option: "C",
    explanation: "Blood products in the subarachnoid space impair arachnoid villi resorption of CSF, leading to acute communicating hydrocephalus requiring CSF drainage (EVD or VP shunt). Hydrocephalus ex-vacuo refers to passive ventricular enlargement secondary to brain atrophy.\nReference: Greenberg's Handbook of Neurosurgery, 9th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with acute rhabdomyolysis and AKI develops a serum potassium level of 6.8 mmol/L with peaked T-waves on ECG. What is the immediate first-line IV drug administered to stabilize the cardiac membrane?",
    option_a: "IV Regular Insulin with Dextrose",
    option_b: "10% IV Calcium Gluconate",
    option_c: "IV Furosemide",
    option_d: "Oral Sodium Polystyrene Sulfonate (Kayexalate)",
    correct_option: "B",
    explanation: "Intravenous Calcium Gluconate (or Calcium Chloride) antagonizes hyperkalemia-induced membrane excitability, membrane depolarization, and fatal arrhythmias. It acts within minutes to stabilize myocardium but does not lower potassium levels.\nReference: Tintinalli's Emergency Medicine, 9th Edition; Rose & Post's Clinical Physiology of Acid-Base and Electrolyte Disorders.",
    tag: "Past Year Question"
  },
  {
    question_text: "In bedridden patients, elevating the head of the bed to a 60-90 degree upright sitting position significantly increases tissue breakdown over which anatomical location due to combined pressure and shear forces?",
    option_a: "Medial Malleolus",
    option_b: "Sacrum and Coccyx",
    option_c: "Ischial tuberosities only",
    option_d: "Occiput",
    correct_option: "B",
    explanation: "High Fowler position (60-90° head-of-bed elevation) causes the pelvis to slide downward, generating maximal pressure and shear distortion over the sacral skin microvasculature.\nReference: National Pressure Injury Advisory Panel (NPIAP) Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "On evaluating lower limb spasticity using the Modified Ashworth Scale (MAS), a clinician notes a slight increase in muscle tone, manifested by a catch, followed by minimal resistance throughout the remainder (less than half) of the ROM. How is this graded?",
    option_a: "Grade 3",
    option_b: "Grade 1+",
    option_c: "Grade 4",
    option_d: "Grade 0",
    correct_option: "B",
    explanation: "MAS Grade 1+ is defined as: 'Slight increase in muscle tone, manifested by a catch, followed by minimal resistance throughout the remainder (less than half) of the ROM.' Grade 1 has a catch and release at the end of ROM.\nReference: Bohannon and Smith (1987) Modified Ashworth Scale; Braddom's PM&R.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the genetic mode of inheritance of Duchenne Muscular Dystrophy (DMD)?",
    option_a: "Autosomal dominant",
    option_b: "Mitochondrial inheritance",
    option_c: "Autosomal recessive",
    option_d: "X-linked recessive",
    correct_option: "D",
    explanation: "DMD is caused by mutations in the dystrophin gene located on the X chromosome (Xp21), exhibiting classic X-linked recessive inheritance affecting males.\nReference: Emery's Elements of Medical Genetics, 15th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 10-year-old boy presents with subacute hematogenous osteomyelitis of the distal femur. X-rays reveal a segment of devascularized dead necrotic bone encased by a thick shell of reactive subperiosteal new bone formation. How are these two pathological features named?",
    option_a: "Callus and Fibroma",
    option_b: "Sequestrum (dead bone) and Involucrum (new reactive bone shell)",
    option_c: "Cloaca (dead bone) and Brodie's abscess (new bone)",
    option_d: "Osteoma and Osteoid osteoma",
    correct_option: "B",
    explanation: "In chronic osteomyelitis, Sequestrum represents devascularized, necrotic bone separated from living bone, while Involucrum represents the surrounding shell of reactive subperiosteal new bone.\nReference: Tachdjian's Pediatric Orthopaedics, 6th Edition; Apley & Solomon's System of Orthopaedics.",
    tag: "Past Year Question"
  },
  {
    question_text: "A stroke survivor completes physical rehabilitation and successfully returns to his previous competitive employment role (Return to Work - RTW). Under the WHO ICF classification, work resumption falls under which domain?",
    option_a: "Environmental Factor",
    option_b: "Body Function",
    option_c: "Participation",
    option_d: "Activity",
    correct_option: "C",
    explanation: "Under the ICF model, 'Participation' represents involvement in life situations, including employment, community life, and social integration. 'Activity' refers to execution of specific tasks (e.g. walking).\nReference: World Health Organization ICF Manual (WHO 2001).",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the primary clinical purpose of the National Institutes of Health Stroke Scale (NIHSS)?",
    option_a: "To evaluate long-term cardiac ejection fraction",
    option_b: "To objectively quantify acute neurological deficit severity and predict patient outcomes",
    option_c: "To measure absolute intracranial pressure",
    option_d: "To grade peripheral nerve regeneration speed",
    correct_option: "B",
    explanation: "The NIHSS is a 15-item validated tool used to quantify stroke severity (scores 0-42) in acute stroke evaluation, guide thrombolysis decisions, and predict clinical prognosis.\nReference: AHA/ASA Guidelines for the Early Management of Patients With Acute Ischemic Stroke.",
    tag: "Past Year Question"
  },
  {
    question_text: "An 80-year-old bedridden nursing home resident with a history of severe chronic constipation presents with marked abdominal distention. Plain abdominal X-ray shows a massively dilated, inverted U-shaped loop of colon rising out of the pelvis (the 'coffee bean sign'). What is the diagnosis?",
    option_a: "Small Bowel Intussusception",
    option_b: "Toxic Megacolon",
    option_c: "Appendiceal Abscess",
    option_d: "Sigmoid Volvulus",
    correct_option: "D",
    explanation: "Sigmoid volvulus occurs when a hypermobile, elongated sigmoid colon twists around its mesentery. It classically affects elderly, institutionalized patients with chronic constipation and presents on plain radiograph as a dilated 'coffee bean' loop.\nReference: Maingot's Abdominal Operations, 13th Edition; Sabiston Textbook of Surgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "Three months following severe TBI, a patient demonstrates progressive cognitive deterioration, urinary incontinence, and gait apraxia. Non-contrast CT brain shows ventricular enlargement disproportionate to cortical sulcal effacement. What condition is present?",
    option_a: "Subdural Empyema",
    option_b: "Diffuse Astrocytoma",
    option_c: "Post-Traumatic Hydrocephalus",
    option_d: "Cerebral Amyloid Angiopathy",
    correct_option: "C",
    explanation: "Post-traumatic hydrocephalus is a recognized complication of TBI due to arachnoid villi fibrosis or subarachnoid hemorrhage blood products obstructing CSF resorption, manifesting as cognitive decline and ventriculomegaly.\nReference: Greenberg's Handbook of Neurosurgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the standard postoperative physical therapy protocol regarding joint mobility following uncomplicated Total Knee Arthroplasty (TKR)?",
    option_a: "Bed rest without knee flexion for 14 days",
    option_b: "Strict knee immobilization in extension for 6 weeks",
    option_c: "Early active/passive Range of Motion (ROM) and early weight-bearing as tolerated",
    option_d: "Complete non-weight bearing for 3 months",
    correct_option: "C",
    explanation: "Early ROM exercises and immediate postoperative weight-bearing ambulation (day 0 or day 1) are standard practice after TKR to prevent arthrofibrosis, deep vein thrombosis, and loss of functional mobility.\nReference: Orthopaedic Knowledge Update (OKU); Campbell's Operative Orthopaedics.",
    tag: "Past Year Question"
  },
  {
    question_text: "A post-stroke patient exhibits severe apathy, loss of initiative (abulia), and contralateral lower extremity weakness greater than upper extremity weakness. Vascular occlusion of which cerebral artery is responsible?",
    option_a: "Anterior Cerebral Artery (ACA)",
    option_b: "Vertebral Artery",
    option_c: "Posterior Cerebral Artery (PCA)",
    option_d: "Middle Cerebral Artery (MCA)",
    correct_option: "A",
    explanation: "ACA infarction damages the medial frontal cortex and anterior cingulate gyrus (causing apathy/abulia) as well as the medial motor strip (causing leg-predominant motor weakness).\nReference: Blumenfeld's Neuroanatomy through Clinical Cases, 3rd Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A heavy smoker with COPD admits that smoking is damaging his lungs and considers quitting within the next few months, but states he cannot stop right now due to current job stress. According to the Transtheoretical Model of Change, which stage is he in?",
    option_a: "Precontemplation Stage",
    option_b: "Contemplation Stage",
    option_c: "Action Stage",
    option_d: "Maintenance Stage",
    correct_option: "B",
    explanation: "In the Contemplation stage, the individual is aware of the problem, recognizes the need for change, and is considering taking action within the next 6 months, but remains ambivalent and has not committed to immediate action.\nReference: Prochaska and DiClemente's Transtheoretical Model of Behavior Change.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 32-year-old patient presents with acute, rapidly progressive, ascending symmetric motor weakness and areflexia following a diarrheal illness. Electrophysiological testing confirms Guillain-Barré Syndrome (AIDP). What is the classic targeted pathological process?",
    option_a: "Primary destruction of anterior horn cell bodies in the spinal cord",
    option_b: "Postsynaptic acetylcholine receptor degradation",
    option_c: "Degeneration of corticospinal tracts",
    option_d: "Autoimmune demyelination of peripheral nerves with relative preservation of central axons",
    correct_option: "D",
    explanation: "Acute Inflammatory Demyelinating Polyneuropathy (AIDP), the most common form of GBS, involves autoimmune attack against myelin sheaths of peripheral motor and sensory nerves, causing conduction block.\nReference: Adams and Victor's Principles of Neurology, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Histopathological examination of an extra-axial dural-based brain tumor reveals whorled patterns of spindle-shaped cells and abundant calcified Psammoma bodies. What is the diagnosis?",
    option_a: "Glioblastoma Multiforme",
    option_b: "Ependymoma",
    option_c: "Schwannoma",
    option_d: "Meningioma",
    correct_option: "D",
    explanation: "Meningiomas characteristically exhibit whorled nests of meningothelial cells and laminated calcified Psammoma bodies on microscopy. Schwannomas show Antoni A/B regions and Verocay bodies.\nReference: Robbins and Cotran Pathologic Basis of Disease, 10th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Direct trauma to the lateral pelvis leads to weakness of hip abduction and a positive Trendelenburg sign. Which peripheral nerve supplies the gluteus medius and gluteus minimus muscles?",
    option_a: "Inferior Gluteal Nerve",
    option_b: "Femoral Nerve",
    option_c: "Superior Gluteal Nerve",
    option_d: "Sciatic Nerve",
    correct_option: "C",
    explanation: "The Superior Gluteal Nerve (L4-S1) innervates the gluteus medius, gluteus minimus, and tensor fasciae latae. The Inferior Gluteal Nerve (L5-S2) innervates the gluteus maximus.\nReference: Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the primary cause of rapid neurological deterioration and herniation within 3 to 5 days following a complete hemispheric Middle Cerebral Artery (MCA) ischemic stroke?",
    option_a: "Central pontine myelinolysis",
    option_b: "Malignant cerebral edema and mass effect",
    option_c: "Acute hyperkalemia",
    option_d: "Spinal shock",
    correct_option: "B",
    explanation: "Malignant MCA infarction leads to severe cytotoxic and vasogenic cerebral edema peaking between 48 to 120 hours, causing brain tissue midline shift, uncal herniation, and elevated ICP.\nReference: Stroke: Pathophysiology, Diagnosis, and Management (Grotta).",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with traumatic brain injury displays left hemispatial neglect, failing to dress the left side of his body or read text on the left half of a page. Injury to which cortical region typically causes this classic syndrome?",
    option_a: "Left Temporal Lobe",
    option_b: "Anterior Cingulate Gyrus",
    option_c: "Right Posterior Parietal Cortex",
    option_d: "Bilateral Occipital Poles",
    correct_option: "C",
    explanation: "Hemispatial neglect (contralateral spatial neglect) most commonly and severely occurs following damage to the non-dominant (right) posterior parietal cortex, which attends to both right and left spatial domains.\nReference: Blumenfeld's Neuroanatomy through Clinical Cases.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 60-year-old patient who suffered an aneurysmal subarachnoid hemorrhage 6 months ago presents with the clinical triad of magnetic gait impairment, progressive dementia, and urinary incontinence. What condition has developed?",
    option_a: "Creutzfeldt-Jakob disease",
    option_b: "Subacute sclerosing panencephalitis",
    option_c: "Alzheimer's disease",
    option_d: "Chronic Post-Hemorrhagic Normal Pressure Hydrocephalus (NPH)",
    correct_option: "D",
    explanation: "Impaired CSF absorption by fibrosed arachnoid villi post-SAH is a classic cause of secondary NPH, producing the classic triad of gait imbalance, cognitive decline, and urinary incontinence.\nReference: Adams and Victor's Principles of Neurology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 55-year-old male amputee diagnosed with Major Depressive Disorder (MDD) has been taking an SSRI for 8 weeks with complete resolution of depressive symptoms. He asks to discontinue the medication immediately. What is the evidence-based recommendation for continuation therapy?",
    option_a: "Switch immediately to electroconvulsive therapy",
    option_b: "Reduce the dose by half for 3 days and then stop",
    option_c: "Continue antidepressant treatment for at least 6 to 9 months following complete symptom remission",
    option_d: "Stop the medication immediately today",
    correct_option: "C",
    explanation: "Clinical guidelines (APA, NICE) recommend continuing antidepressant therapy for at least 6 to 9 months post-remission during the continuation phase to prevent relapse of major depression.\nReference: APA Practice Guidelines for the Treatment of Patients With Major Depressive Disorder; DSM-5-TR.",
    tag: "Past Year Question"
  },
  {
    question_text: "In patients with severe bilateral knee osteoarthritis, which muscle weakness is the single strongest modifiable risk factor associated with difficulty descending and climbing stairs?",
    option_a: "Tibialis Anterior weakness",
    option_b: "Quadriceps Femoris weakness",
    option_c: "Adductor Longus spasm",
    option_d: "Gastrocnemius tightness",
    correct_option: "B",
    explanation: "Quadriceps muscle weakness impairs eccentrically controlled knee flexion during stair descent and concentrically generated power during ascent, making it the primary target in knee OA rehabilitation.\nReference: Kisner & Colby's Therapeutic Exercise; American College of Rheumatology (ACR) Osteoarthritis Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "In a spinal cord injury patient (T6 ASIA A), detrusor muscle contraction during reflex bladder voiding is primarily mediated by which neural pathway?",
    option_a: "Sacral Parasympathetic efferent fibers (S2-S4 pelvic splanchnic nerves)",
    option_b: "Vagus nerve (CN X)",
    option_c: "Somatic Pudendal nerve (S2-S4)",
    option_d: "Thoracolumbar Sympathetic fibers (T10-L2 hypogastric nerve)",
    correct_option: "A",
    explanation: "Detrusor contraction is driven by parasympathetic preganglionic neurons in the sacral spinal cord (S2-S4), releasing acetylcholine onto muscarinic M3 receptors on the bladder wall.\nReference: Campbell-Walsh-Wein Urology, 12th Edition; Braddom's PM&R.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with an acute ischemic stroke presents with non-fluent, expressive speech halting, impaired repetition, but intact auditory comprehension. Occlusion of which artery division is responsible?",
    option_a: "Inferior division of the Left MCA",
    option_b: "Superior division of the Left Middle Cerebral Artery (MCA)",
    option_c: "Posterior Cerebral Artery main trunk",
    option_d: "Anterior Inferior Cerebellar Artery (AICA)",
    correct_option: "B",
    explanation: "Broca's expressive aphasia (located in the inferior frontal gyrus, Brodmann areas 44/45) is supplied by the superior division of the left (dominant) MCA. Inferior division strokes cause Wernicke's receptive aphasia.\nReference: Blumenfeld's Neuroanatomy through Clinical Cases.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presenting with acute rotational vertigo (spinning sensation) and pontine/medullary infarction exhibits lower cranial nerve involvement. Which sign indicates dysfunction of Cranial Nerves IX and X?",
    option_a: "Bitemporal hemianopia",
    option_b: "Tongue deviation toward the non-lesioned side",
    option_c: "Absent gag reflex and soft palate/uvula deviation away from the lesion side",
    option_d: "Loss of vision in the left upper field",
    correct_option: "C",
    explanation: "Glossopharyngeal (CN IX) and Vagus (CN X) nerves supply sensory and motor innervation to the palate and pharynx. Lesions cause diminished gag reflex and palate elevation failure, pulling the uvula TOWARD the normal side.\nReference: DeJong's The Neurologic Examination, 8th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the primary mechanical biomechanical function of a rigid, solid Ankle-Foot Orthosis (Solid AFO)?",
    option_a: "To allow unrestricted ankle dorsiflexion while blocking knee flexion",
    option_b: "To assist active plantarflexion during late push-off phase",
    option_c: "To immobilize the ankle joint and restrict both plantarflexion and dorsiflexion",
    option_d: "To substitute for knee extensor weakness",
    correct_option: "C",
    explanation: "A solid AFO holds the foot and ankle in a fixed neutral position, preventing sagital motion (both dorsiflexion and plantarflexion) as well as coronal inversion/eversion to ensure stance-phase stability.\nReference: Orthotics and Prosthetics in Rehabilitation (Lusardi); Braddom's PM&R.",
    tag: "Past Year Question"
  },
  {
    question_text: "In children with Duchenne Muscular Dystrophy (DMD), what tissue alteration accounts for the characteristic pseudohypertrophy of the calf muscles and contractures (equinus/lordosis)?",
    option_a: "Accumulation of glycogen within lysosomal vacuoles",
    option_b: "Deposition of amyloidoses in skeletal muscle",
    option_c: "Replacement of degenerated muscle fibers with adipose and fibrotic connective tissue",
    option_d: "True physiological hypertrophy of muscle fibers",
    correct_option: "C",
    explanation: "In DMD, lack of dystrophin leads to progressive muscle cell necrosis. The apparent enlargement ('pseudohypertrophy') of the gastrocnemius is not true muscle growth, but replacement of muscle by fat and fibrous tissue.\nReference: Nelson Textbook of Pediatrics; Robbins Pathology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 65-year-old male with metastatic prostate cancer presents with severe low back pain. Which red flag symptom distinguishes Cauda Equina Syndrome from simple lumbar nerve root impingement (radiculopathy)?",
    option_a: "Decreased knee jerk reflex on one side",
    option_b: "Perineal (saddle) anesthesia and acute urinary/fecal incontinence",
    option_c: "Unilateral L5 dermatomal numbness down the lateral leg",
    option_d: "Localized tenderness over the lumbar spine",
    correct_option: "B",
    explanation: "Cauda Equina Syndrome is a surgical emergency characterized by compression of multiple lumbosacral nerve roots, causing saddle anesthesia (S3-S5), urinary retention/incontinence, and fecal incontinence.\nReference: Rothman-Simeone The Spine, 7th Edition; Harrison's Internal Medicine.",
    tag: "Past Year Question"
  },
  {
    question_text: "The cell bodies of preganglionic sympathetic neurons are located in which specific gray matter region of the spinal cord (T1 to L2 levels)?",
    option_a: "Substantia Gelatinosa",
    option_b: "Posterior (Dorsal) Horn",
    option_c: "Lateral Horn (Intermediolateral Cell Column)",
    option_d: "Anterior (Ventral) Horn",
    correct_option: "C",
    explanation: "Preganglionic sympathetic cell bodies reside in the lateral gray horn (intermediolateral cell column) present in spinal cord segments T1 through L2.\nReference: Moore's Clinically Oriented Anatomy; Guyton & Hall Physiology.",
    tag: "Past Year Question"
  },
  {
    question_text: "An elderly patient sustains a hyperextension cervical spine injury following a fall. He presents with Central Cord Syndrome. What is the characteristic motor clinical manifestation?",
    option_a: "Motor weakness significantly more severe in the upper extremities than in the lower extremities",
    option_b: "Ipsilateral motor loss with contralateral sensory loss",
    option_c: "Complete motor loss in the lower extremities with total upper extremity sparing",
    option_d: "Total loss of proprioception with intact motor function",
    correct_option: "A",
    explanation: "Central Cord Syndrome (most common incomplete SCI) damages the inner cervical spinal cord fibers. Because upper extremity corticospinal tracts are located centrally, arm weakness is greater than leg weakness.\nReference: Spinal Cord Medicine: Principles and Practice; ASIA Learning Manual.",
    tag: "Past Year Question"
  },
  {
    question_text: "A post-stroke patient experiences difficulty buttoning a shirt and avoids attending social community gatherings. According to the ICF model, how is 'avoiding social gatherings' categorized?",
    option_a: "Environmental Barrier",
    option_b: "Body Structure Impairment",
    option_c: "Activity Limitation",
    option_d: "Participation Restriction",
    correct_option: "D",
    explanation: "Buttoning a shirt is an 'Activity' (task execution). Attending social gatherings represents involvement in life situations, so avoiding or being restricted from gatherings is a 'Participation Restriction'.\nReference: World Health Organization (WHO) ICF Classification System.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with an ankle sprain takes high-dose ibuprofen (NSAID) and experiences acute bronchospasm and dyspnea. What biochemical mechanism triggers NSAID-Exacerbated Respiratory Disease (NERD)?",
    option_a: "Inhibition of Cyclooxygenase-1 (COX-1) leading to overproduction of Cysteinyl Leukotrienes",
    option_b: "Direct activation of H1-histamine receptors",
    option_c: "Blockade of beta-2 adrenergic receptors in bronchial smooth muscle",
    option_d: "Induction of IgE-mediated anaphylaxis",
    correct_option: "A",
    explanation: "COX-1 inhibition by NSAIDs shunts arachidonic acid metabolism down the 5-lipoxygenase pathway, causing marked accumulation of pro-inflammatory cysteinyl leukotrienes (LTC4, LTD4, LTE4) and bronchospasm.\nReference: Goodman & Gilman's The Pharmacological Basis of Therapeutics, 13th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "The Asymmetric Tonic Neck Reflex (ATNR) is a primitive reflex. Persistence of ATNR beyond what age is considered abnormal and indicative of an Upper Motor Neuron (UMN) brain lesion?",
    option_a: "3 years of age",
    option_b: "2 weeks of age",
    option_c: "7 years of age",
    option_d: "6 months of age",
    correct_option: "D",
    explanation: "The ATNR ('fencer posture') normally emerges in utero and integrates by 4 to 6 months of age as cortical inhibition matures. Persistence beyond 6 months signals developmental delay or UMN damage (e.g., Cerebral Palsy).\nReference: Campbell's Physical Therapy for Children, 5th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A non-contrast brain CT scan following head trauma reveals a hyperdense, biconvex (lens-shaped) extra-axial collection that does not cross skull suture lines. What is the diagnosis?",
    option_a: "Epidural (Extradural) Hematoma",
    option_b: "Intraparenchymal Contusion",
    option_c: "Subarachnoid Hemorrhage",
    option_d: "Subdural Hematoma",
    correct_option: "A",
    explanation: "Epidural hematomas (typically middle meningeal artery tears) produce a hyperdense, biconvex/lenticular shape restricted by skull suture attachments. Subdural hematomas produce crescentic shapes crossing sutures.\nReference: Core Radiology (Mandell); Greenberg's Neurosurgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "According to Brain Trauma Foundation guidelines for severe TBI management in the ICU, what are the recommended target thresholds for Cerebral Perfusion Pressure (CPP) and Intracranial Pressure (ICP)?",
    option_a: "Target CPP < 40 mmHg and keep ICP < 10 mmHg",
    option_b: "Target CPP > 100 mmHg and keep ICP < 35 mmHg",
    option_c: "Target CPP between 20 – 30 mmHg regardless of ICP",
    option_d: "Target CPP between 60 – 70 mmHg and keep ICP < 22 mmHg",
    correct_option: "D",
    explanation: "Guidelines recommend maintaining CPP between 60-70 mmHg (avoiding aggressive hyperperfusion >70 or ischemia <60) and treating ICP elevation above 22 mmHg.\nReference: Brain Trauma Foundation Guidelines for the Management of Severe TBI, 4th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Carpal Tunnel Syndrome results from entrapment of which nerve beneath the flexor retinaculum at the wrist?",
    option_a: "Median Nerve",
    option_b: "Ulnar Nerve",
    option_c: "Musculocutaneous Nerve",
    option_d: "Radial Nerve",
    correct_option: "A",
    explanation: "Carpal tunnel syndrome is the most common entrapment neuropathy, caused by compression of the median nerve within the carpal tunnel, causing paresthesias in the thumb, index, middle, and radial half of ring finger.\nReference: Green's Operative Hand Surgery, 7th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the primary metabolic advantage of replacing refined grains (white rice) with whole grains (brown rice) in diabetic dietary management?",
    option_a: "Absolute elimination of all dietary carbohydrates",
    option_b: "Lower Glycemic Index and higher dietary fiber content, reducing postprandial blood glucose spikes",
    option_c: "Direct stimulation of pancreatic beta-cell insulin secretion",
    option_d: "Complete blockade of intestinal lipid absorption",
    correct_option: "B",
    explanation: "Brown rice contains intact bran and germ layers rich in soluble/insoluble fiber, yielding a lower glycemic index that slows gastric emptying and postprandial glucose absorption.\nReference: American Diabetes Association (ADA) Standards of Medical Care in Diabetes.",
    tag: "Past Year Question"
  },
  {
    question_text: "Under the WHO ICF Model, which of the following represents an 'Environmental Factor'?",
    option_a: "Muscle spasticity grade",
    option_b: "Availability of wheelchair ramps and family social support",
    option_c: "Patient coping style and age",
    option_d: "Ability to perform self-catheterization",
    correct_option: "B",
    explanation: "Environmental Factors include external physical architectural features (ramps, handrails), social attitudes, and support systems. Coping style is a Personal Factor; spasticity is a Body Structure/Function impairment.\nReference: World Health Organization ICF Classification Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "A post-stroke patient exhibits a 'wet, gargly' voice quality after swallowing water and frequent coughing during meals. What is the immediate safety management step?",
    option_a: "Place patient in flat supine position during feeding",
    option_b: "Continue thin fluid oral intake with encouragement",
    option_c: "Make patient Nil By Mouth (NBM) and request a formal Speech and Language Therapy (SALT) swallowing assessment",
    option_d: "Prescribe immediate oral sedation",
    correct_option: "C",
    explanation: "A wet/gargly voice quality indicates pooling of liquids in the vocal cords and high risk of silent/active aspiration. The patient must be made NBM immediately pending formal SALT assessment.\nReference: Stroke Association & NICE Guidelines for Dysphagia in Acute Stroke.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which autologous vessel graft is considered the gold standard conduit for bypass of the Left Anterior Descending (LAD) coronary artery in CABG surgery?",
    option_a: "Radial Vein",
    option_b: "Femoral Artery",
    option_c: "Cephalic Vein",
    option_d: "Left Internal Mammary Artery (LIMA / Internal Thoracic Artery)",
    correct_option: "D",
    explanation: "The Left Internal Mammary Artery (LIMA) anastomosed to the LAD artery achieves superior long-term patency rates (>90% at 10 years) compared to saphenous vein grafts.\nReference: Sabiston and Spencer's Surgery of the Chest, 9th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What initial blood test is most sensitive as a screening tool for suspected Duchenne Muscular Dystrophy (DMD) in a child presenting with proximal muscle weakness?",
    option_a: "Serum Alkaline Phosphatase",
    option_b: "Serum Creatine Kinase (CK)",
    option_c: "Serum Lactate Dehydrogenase (LDH)",
    option_d: "Erythrocyte Sedimentation Rate (ESR)",
    correct_option: "B",
    explanation: "Serum CK levels are dramatically elevated (often 10 to 100 times upper limit of normal) in early DMD due to progressive muscle fiber necrosis, serving as the essential initial screening test.\nReference: Nelson Textbook of Pediatrics, 21st Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Botulinum Toxin Type A reduces focal muscle spasticity by cleaving which target protein at the presynaptic neuromuscular junction?",
    option_a: "SNAP-25 protein (preventing Acetylcholine exocytosis)",
    option_b: "Acetylcholinesterase enzyme",
    option_c: "Voltage-gated sodium channels",
    option_d: "Muscarinic M3 receptor",
    correct_option: "A",
    explanation: "Botulinum toxin A enters presynaptic cholinergic nerve terminals and cleaves SNAP-25 (a SNARE protein complex component), inhibiting vesicular release of acetylcholine into the neuromuscular junction.\nReference: Goodman & Gilman's The Pharmacological Basis of Therapeutics.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 70-year-old male presents with exertional angina and syncope. Auscultation reveals a harsh crescendo-decrescendo systolic ejection murmur heard best at the right upper sternal border with radiation to the carotids. What valvular lesion is present?",
    option_a: "Mitral Stenosis (MS)",
    option_b: "Mitral Regurgitation (MR)",
    option_c: "Aortic Regurgitation (AR)",
    option_d: "Aortic Stenosis (AS)",
    correct_option: "D",
    explanation: "A crescendo-decrescendo systolic ejection murmur at the right 2nd intercostal space radiating to the carotid arteries is the classic auscultatory sign of calcific Aortic Stenosis.\nReference: Braunwald's Heart Disease: A Textbook of Cardiovascular Medicine, 12th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with lateral wrist pain over the radial styloid. Finkelstein test (passive ulnar deviation with thumb tucked in fist) is strongly positive. Which splint and diagnosis match this presentation?",
    option_a: "De Quervain's Tenosynovitis — Thumb Spica Splint",
    option_b: "Carpal Tunnel Syndrome — Neutral Wrist Volar Splint",
    option_c: "Scaphoid Fracture — Figure-of-Eight Splint",
    option_d: "Trigger Thumb — Extension Ring Splint",
    correct_option: "A",
    explanation: "A positive Finkelstein test confirms De Quervain's tenosynovitis (inflammation of abductor pollicis longus and extensor pollicis brevis tendons). Conservative management involves a Thumb Spica Splint.\nReference: Green's Operative Hand Surgery; Physical Medicine Board Review.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with cold intolerance, weight gain, constipation, dry skin, delayed relaxation phase of deep tendon reflexes, and elevated TSH. What neuroendocrine condition is present?",
    option_a: "Primary Hypothyroidism",
    option_b: "Primary Hyperparathyroidism",
    option_c: "Hyperthyroidism",
    option_d: "Cushing's Syndrome",
    correct_option: "A",
    explanation: "Elevated serum TSH with low free T4 accompanied by metabolic slowing, cold intolerance, weight gain, and delayed reflex relaxation ('hung-up' reflexes) defines primary hypothyroidism.\nReference: Williams Textbook of Endocrinology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with severe ischemic cardiomyopathy (LVEF 25%) presents with severe dyspnea, orthopnea, bilateral pulmonary rales, and pink frothy sputum. What is the immediate primary intravenous drug indicated to relieve pulmonary congestion?",
    option_a: "Subcutaneous Low Molecular Weight Heparin",
    option_b: "Oral Spironolactone",
    option_c: "Intravenous Loop Diuretic (Furosemide)",
    option_d: "Oral Beta-blocker (Metoprolol)",
    correct_option: "C",
    explanation: "Acute Pulmonary Edema (APO) secondary to acute decompensated heart failure requires immediate IV loop diuretics (furosemide) to induce rapid venodilation and diuresis, lowering pulmonary capillary wedge pressure.\nReference: 2021 ESC Heart Failure Guidelines; Harrison's Internal Medicine.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which non-pharmacological electrical stimulation modality is frequently applied post-Total Knee Arthroplasty (TKR) to provide localized non-invasive pain relief via the Gate Control Theory of Pain?",
    option_a: "High-voltage Direct Current Ablation",
    option_b: "Transcutaneous Electrical Nerve Stimulation (TENS)",
    option_c: "Micro-current Gene Therapy",
    option_d: "Continuous Neuromuscular Blockade",
    correct_option: "B",
    explanation: "TENS stimulates large-diameter A-beta sensory nerve fibers, which activates inhibitory interneurons in the dorsal horn of the spinal cord, blocking A-delta and C nociceptive signal transmission (Gate Control Theory).\nReference: Wall & Melzack's Textbook of Pain; Braddom's PM&R.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 52-year-old asymptomatic patient has elevated blood pressure readings (146/92 mmHg) recorded during two separate routine clinic visits. What is the most recommended next step to confirm true persistent hypertension and exclude 'white-coat' hypertension?",
    option_a: "Hospital admission to the coronary care unit",
    option_b: "24-hour Ambulatory Blood Pressure Monitoring (ABPM) or 7-day Home Blood Pressure Monitoring (HBPM)",
    option_c: "Immediate initiation of triple antihypertensive drug therapy",
    option_d: "Immediate referral for renal artery stenting",
    correct_option: "B",
    explanation: "Guidelines (NICE, ACC/AHA) recommend out-of-office blood pressure monitoring using 24-hr ABPM or HBPM to confirm the diagnosis of hypertension prior to starting lifelong medication, ruling out white-coat effect.\nReference: 2017 ACC/AHA High Blood Pressure Guidelines; NICE Hypertension Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "Parasympathetic postganglionic nerve fibers initiate detrusor muscle contraction during micturition through activation of which specific receptor subtype?",
    option_a: "Nicotinic N1 Receptors",
    option_b: "Muscarinic M3 Receptors",
    option_c: "Beta-2 Adrenergic Receptors",
    option_d: "Alpha-1 Adrenergic Receptors",
    correct_option: "B",
    explanation: "Parasympathetic pelvic nerves release acetylcholine, which binds to M3 muscarinic receptors on detrusor smooth muscle cells, triggering IP3-mediated intracellular calcium release and bladder contraction.\nReference: Campbell-Walsh-Wein Urology, 12th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Electrodiagnostic testing (NCS/EMG) in acute peripheral axonotmesis demonstrates sharp waves and fibrillation potentials in resting muscle. What pathophysiological event causes these spontaneous denervation potentials?",
    option_a: "Muscle membrane instability following loss of motor axonal innervation and upregulation of acetylcholine sensitivity",
    option_b: "Hyper-synchronous motor unit firing from upper motor neuron disinhibition",
    option_c: "Antibodies attacking presynaptic calcium channels",
    option_d: "Complete blockade of muscle sodium channels",
    correct_option: "A",
    explanation: "Fibrillations and positive sharp waves arise from denervated muscle fibers that develop intrinsic membrane instability and spontaneous depolarization 2-3 weeks post-axonal injury due to extrajunctional ACh receptor spread.\nReference: Electromyography and Neuromuscular Disorders (Preston & Shapiro).",
    tag: "Past Year Question"
  },
  {
    question_text: "A 35-year-old female presents with heat intolerance, weight loss, palmar erythema, fine tremors, and persistent sinus tachycardia. Which laboratory serum profile confirms primary hyperthyroidism?",
    option_a: "Suppressed (low) TSH with elevated Free T4 and/or Free T3",
    option_b: "Elevated TSH with low Free T4",
    option_c: "Elevated TSH with elevated Free T4",
    option_d: "Normal TSH with low Free T3",
    correct_option: "A",
    explanation: "Primary hyperthyroidism (e.g., Graves' disease) is characterized by elevated circulating thyroid hormones (Free T4/T3), which exert negative feedback on the anterior pituitary, resulting in suppressed (<0.01 mIU/L) serum TSH.\nReference: Williams Textbook of Endocrinology, 14th Edition; Thyroid Disease Guidelines (ATA).",
    tag: "Past Year Question"
  },
  {
    question_text: "Overdose of Tricyclic Antidepressants (TCAs, e.g., Amitriptyline) classically produces anticholinergic symptoms. Which clinical manifestation is expected?",
    option_a: "Pupillary Mydriasis (dilation), dry mouth, and urinary retention",
    option_b: "Bronchorrhea and lacrimation",
    option_c: "Profuse salivation and bradycardia",
    option_d: "Pupillary Miosis (pinpoint constriction), diaphoresis, and diarrhea",
    correct_option: "A",
    explanation: "TCA toxicity causes central and peripheral anticholinergic blockade ('blind as a bat [mydriasis], dry as a bone [dry mouth/skin], red as a beet, hot as a hare, mad as a hatter, urinary retention'). Miosis is seen in opioid/cholinergic overdose.\nReference: Goldfrank's Toxicologic Emergencies, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A young male presents with sudden upper limb pain followed by loss of biceps (C5) and brachioradialis (C6) deep tendon reflexes, while preserving the triceps reflex (C7) and full muscle power. What diagnosis is suspected?",
    option_a: "De Quervain's Tenosynovitis",
    option_b: "Brachial Neuritis (Parsonage-Turner Syndrome / Neuralgic Amyotrophy)",
    option_c: "Complete C7 Radiculopathy",
    option_d: "Multiple Myeloma",
    correct_option: "B",
    explanation: "Parsonage-Turner Syndrome is an acute idiopathic brachial plexopathy presenting with severe patchy shoulder/arm pain followed by isolated multifocal motor deficits and loss of upper trunk reflexes (C5-C6), sparing C7 (triceps).\nReference: Adams and Victor's Principles of Neurology.",
    tag: "Past Year Question"
  },
  {
    question_text: "When utilizing a Pneumatic Post-Amputation Mobility (PPAM) aid in lower limb amputee rehabilitation to assist early gait training and edema reduction, when is fitting best initiated?",
    option_a: "Within 5 to 7 days post-operatively once primary wound healing is established",
    option_b: "Immediately on the operating table prior to wound closure",
    option_c: "Only after full prosthetic socket fabrication is complete",
    option_d: "At 6 months post-amputation only",
    correct_option: "A",
    explanation: "PPAM aids are inflatable early mobility devices applied typically between post-op day 5 to 7 to control edema, shape the residual limb, and allow early partial weight-bearing gait.\nReference: Atlas of Amputations and Limb Deficiencies (AAOS); Braddom's PM&R.",
    tag: "Past Year Question"
  },
  {
    question_text: "The Galeazzi (Allis) sign is evaluated in infants to screen for Developmental Dysplasia of the Hip (DDH). How is a positive test demonstrated?",
    option_a: "Asymmetry of anterior chest wall folds",
    option_b: "Palpable clunk during hip abduction",
    option_c: "Flexion contracture of the elbow",
    option_d: "Apparent inequality of knee heights when the infant is supine with hips and knees flexed to 90 degrees",
    correct_option: "D",
    explanation: "The Galeazzi sign compares knee heights in supine position with feet flat on the table and knees flexed. A lower knee height on the affected side indicates femoral head displacement or femoral shortening.\nReference: Tachdjian's Pediatric Orthopaedics, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A spinal cord injury patient prescribed Carbamazepine for neuropathic pain requires mandatory baseline and periodic monitoring of which laboratory investigation due to drug toxicity risks?",
    option_a: "Erythrocyte Sedimentation Rate",
    option_b: "Urine Myoglobin",
    option_c: "Full Blood Count (FBC / CBC) for aplastic anemia and agranulocytosis",
    option_d: "Serum Amylase level",
    correct_option: "C",
    explanation: "Carbamazepine carries Black Box warnings for severe hematological toxicities including aplastic anemia, agranulocytosis, and leukopenia, necessitating baseline and periodic FBC monitoring.\nReference: Goodman & Gilman's Pharmacological Basis of Therapeutics.",
    tag: "Past Year Question"
  },
  {
    question_text: "In a patient with acute high spinal cord injury, what is frequently the earliest clinical indicator of Pulmonary Embolism (PE)?",
    option_a: "Severe pleuritic chest pain in all cases",
    option_b: "Markedly elevated blood pressure",
    option_c: "Copious purulent sputum production",
    option_d: "Sudden unexplained dyspnea, tachypnea, or arterial oxygen desaturation",
    correct_option: "D",
    explanation: "Because sensory perception below the lesion level is absent in high SCI, classic pleuritic chest pain may be absent; unexplained acute dyspnea, tachypnea, or hypoxia is often the primary presenting sign of PE.\nReference: Spinal Cord Medicine: Principles and Practice (Lin & Cardenas).",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient experiencing hyperventilation secondary to severe anxiety faints. What typical Arterial Blood Gas (ABG) disturbance is present prior to syncope?",
    option_a: "Low pH and High pCO2 (Acute Respiratory Acidosis)",
    option_b: "Elevated pH and Low pCO2 (Acute Respiratory Alkalosis)",
    option_c: "Low pH and Low Bicarbonate (Metabolic Acidosis)",
    option_d: "Low pH and High Bicarbonate",
    correct_option: "B",
    explanation: "Hyperventilation excessively clears carbon dioxide (hypocapnia), causing acute respiratory alkalosis (pH > 7.45, pCO2 < 35 mmHg). Cerebral vasoconstriction from hypocapnia leads to syncope.\nReference: West's Respiratory Physiology.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical statement regarding post-stroke seizures is CORRECT?",
    option_a: "Prophylactic lifelong antiepileptic therapy is mandatory for all stroke patients",
    option_b: "Post-stroke seizures are significantly more common following hemorrhagic stroke than ischemic stroke",
    option_c: "Post-stroke seizures occur exclusively in lacunar infarcts",
    option_d: "Ischemic strokes carry a 90% risk of status epilepticus",
    correct_option: "B",
    explanation: "Cortical irritation by blood breakdown products (hemosiderin) makes hemorrhagic stroke significantly more epileptogenic (10-20% incidence) than ischemic stroke (3-5%).\nReference: Stroke: Pathophysiology, Diagnosis, and Management (Grotta).",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient initiated on Fludrocortisone therapy develops progressive proximal muscle weakness. What immediate diagnostic test should be ordered to identify the cause?",
    option_a: "Serum Electrolytes (checking for Hypokalemia)",
    option_b: "Muscle Biopsy",
    option_c: "MRI of the thigh muscles",
    option_d: "Brain CT scan",
    correct_option: "A",
    explanation: "Fludrocortisone is a potent mineralocorticoid that promotes renal sodium retention and potassium excretion. Severe hypokalemia causes hypokalemic myopathy presenting as proximal muscle weakness.\nReference: Williams Textbook of Endocrinology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient experiencing acute myocardial infarction reports a true severe allergy (anaphylaxis) to Aspirin. Which antiplatelet drug should be administered immediately as an alternative?",
    option_a: "Furosemide",
    option_b: "Sublingual Nitroglycerin",
    option_c: "Clopidogrel",
    option_d: "Morphine",
    correct_option: "C",
    explanation: "In patients with true aspirin hypersensitivity or contraindication presenting with acute coronary syndrome, Clopidogrel (P2Y12 inhibitor) is the direct recommended oral antiplatelet alternative.\nReference: AHA/ACC Guidelines for Management of ST-Elevation Myocardial Infarction.",
    tag: "Past Year Question"
  },
  {
    question_text: "What classic temporal sequence of consciousness characterizes Epidural Hematoma following temporal bone fracture?",
    option_a: "Gradual onset of dementia over 6 months",
    option_b: "Sudden onset of hemiplegia without any altered consciousness",
    option_c: "Continuous coma lasting several weeks without improvement",
    option_d: "Transient loss of consciousness, followed by a lucid interval of mental clarity, then rapid neurological deterioration",
    correct_option: "D",
    explanation: "Laceration of the middle meningeal artery produces an initial loss of consciousness, followed by a 'lucid interval' as blood accumulates, ending in rapid herniation and decline.\nReference: Greenberg's Handbook of Neurosurgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which nursing positioning maneuver effectively lowers Intracranial Pressure (ICP) by promoting venous drainage from the head?",
    option_a: "Elevation of the head of the bed to 30 degrees with neck in neutral alignment",
    option_b: "Extreme neck flexion and rotation",
    option_c: "Flat supine position",
    option_d: "Trendelenburg position (head down 30 degrees)",
    correct_option: "A",
    explanation: "Head elevation to 30 degrees facilitates jugular venous outflow, reducing intracranial blood volume and lowering ICP without compromising cerebral perfusion pressure.\nReference: Brain Trauma Foundation Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "In acute traumatic spinal cord injury management, which suite of interventions is evidence-based to minimize secondary spinal cord injury progression?",
    option_a: "High-dose aspirin and routine hyperventilation",
    option_b: "Immediate aggressive physical therapy exercises",
    option_c: "Strict bed rest without immobilization",
    option_d: "Strict spinal immobilization, maintaining mean arterial pressure (MAP 85-90 mmHg), and surgical decompression",
    correct_option: "D",
    explanation: "Modern acute SCI management emphasizes rigid immobilization, hemodynamic optimization (MAP 85-90 mmHg to ensure spinal perfusion), oxygenation, and early surgical decompression.\nReference: AANS/CNS Joint Guidelines for Management of Acute Cervical Spine and SCI.",
    tag: "Past Year Question"
  },
  {
    question_text: "Semmes-Weinstein 5.07 (10-gram) monofilament testing on the plantar surface of the foot specifically assesses which sensory modality?",
    option_a: "Temperature discrimination",
    option_b: "Sharp pain perception",
    option_c: "Proprioception",
    option_d: "Loss of Protective Sensation (LOPS)",
    correct_option: "D",
    explanation: "Inability to perceive the 10g monofilament indicates Loss of Protective Sensation, placing diabetic patients at high risk for neuropathic foot ulceration.\nReference: ADA Standards of Medical Care in Diabetes.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical entity is classified as a Parkinson-Plus syndrome, characterized by vertical supranuclear gaze palsy, axial rigidity, and early postural instability with falls?",
    option_a: "Progressive Supranuclear Palsy (PSP)",
    option_b: "Essential Tremor",
    option_c: "Huntington's Disease",
    option_d: "Tourette Syndrome",
    correct_option: "A",
    explanation: "PSP (Steele-Richardson-Olszewski syndrome) features vertical gaze limitation (downward gaze affected first), prominent axial rigidity, pseudobulbar palsy, and early backward falls.\nReference: Bradley's Neurology in Clinical Practice.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 5-year-old child falls 4 feet, presents alert, irritable with a chin laceration, but moves all 4 limbs actively with intact sensation. According to pediatric cervical spine trauma rules (PECARN/NEXUS), what is the appropriate initial management?",
    option_a: "Clinical evaluation and cervical observation",
    option_b: "Immediate CT scan of the entire spine",
    option_c: "Routine MRI spine for all 5-year-olds",
    option_d: "Immediate lumbar puncture",
    correct_option: "A",
    explanation: "Low-risk falls in asymptomatic children without focal neurological deficits, midline cervical tenderness, or high-risk mechanisms do not warrant immediate neuroimaging; initial clinical assessment and observation are recommended.\nReference: PECARN Pediatric Cervical Spine Injury Clinical Decision Rule.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which anatomical statement regarding thoracic vertebrae is FALSE?",
    option_a: "Transverse processes feature articular facets for rib tubercles",
    option_b: "Spinous processes are long and slope inferiorly",
    option_c: "Zygapophyseal (facet) joints lie in the coronal plane, providing primary extension and flexion",
    option_d: "Vertebral bodies feature costal demifacets",
    correct_option: "C",
    explanation: "Thoracic facet joints lie in the coronal plane, which permits rotation and lateral flexion but strictly RESTRICTS flexion and extension.\nReference: Gray's Anatomy, 42nd Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical sign is NOT associated with lower motor neuron Cauda Equina Syndrome?",
    option_a: "Saddle Anesthesia",
    option_b: "Positive Babinski Reflex (Extensor Plantar Response)",
    option_c: "Neurogenic Bladder dysfunction",
    option_d: "Hyporeflexia of ankles",
    correct_option: "B",
    explanation: "Cauda Equina Syndrome involves compression of lumbosacral nerve roots (LMN lesion), causing hyporeflexia, saddle anesthesia, and bladder dysfunction. Babinski sign is an Upper Motor Neuron sign.\nReference: Rothman-Simeone The Spine.",
    tag: "Past Year Question"
  },
  {
    question_text: "Under the ISPO international classification of congenital limb deficiencies, complete absence of the radial ray is classified as a:",
    option_a: "Longitudinal Deficiency of the Radius",
    option_b: "Transverse Amputation of the Forearm",
    option_c: "Intercalary Lower Limb Deficit",
    option_d: "Phocomelia of the Humerus",
    correct_option: "A",
    explanation: "ISPO classifies limb malformations as either Transverse (complete gap across width) or Longitudinal (absence of element along long axis, such as radial hemimelia).\nReference: Atlas of Amputations and Limb Deficiencies (AAOS).",
    tag: "Past Year Question"
  },
  {
    question_text: "Established risk factors for Developmental Dysplasia of the Hip (DDH) include all of the following EXCEPT:",
    option_a: "Polyhydramnios during pregnancy",
    option_b: "Female sex",
    option_c: "Firstborn status",
    option_d: "Breech presentation",
    correct_option: "A",
    explanation: "OLIGOHYDRAMNIOS (reduced amniotic fluid) causes mechanical intrauterine crowding, increasing DDH risk. Polyhydramnios does not cause mechanical hip compression.\nReference: Tachdjian's Pediatric Orthopaedics.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the primary mechanism of action of Clopidogrel?",
    option_a: "Thromboxane A2 synthetase inhibition",
    option_b: "Blockade of Glycoprotein IIb/IIIa receptors",
    option_c: "Direct inhibition of Cyclooxygenase-1",
    option_d: "Irreversible inhibition of the platelet P2Y12 Adenosine Diphosphate (ADP) receptor",
    correct_option: "D",
    explanation: "Clopidogrel is a thienopyridine prodrug whose active metabolite irreversibly blocks P2Y12 ADP receptors on platelets, preventing activation of GP IIb/IIIa complex.\nReference: Goodman & Gilman's Pharmacological Basis of Therapeutics.",
    tag: "Past Year Question"
  },
  {
    question_text: "In a pulseless cardiac arrest patient presenting with Asystole on ECG, which intervention is CONTRAINDICATED / NOT indicated?",
    option_a: "Electrical Defibrillation (Deliver Shock)",
    option_b: "Intravenous Epinephrine (1 mg every 3-5 mins)",
    option_c: "Intravenous Isotonic Crystalloid Fluid Bolus",
    option_d: "High-quality CPR",
    correct_option: "A",
    explanation: "Defibrillation is indicated ONLY for shockable rhythms (VF and pulseless VT). Delivering shocks for non-shockable rhythms (Asystole/PEA) delays CPR and worsens outcomes.\nReference: AHA Advanced Cardiovascular Life Support (ACLS) Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which feature correctly describes Cranial (Central) Diabetes Insipidus?",
    option_a: "Total lack of response to exogenous Desmopressin",
    option_b: "Significant increase in urine osmolality following exogenous Desmopressin (DDAVP) administration",
    option_c: "Hypuria and fluid overload",
    option_d: "Low serum osmolality with concentrated urine",
    correct_option: "B",
    explanation: "Cranial DI is caused by lack of pituitary ADH secretion. Exogenous DDAVP replaces ADH, resulting in concentrated urine (increased urine osmolality), distinguishing it from nephrogenic DI.\nReference: Williams Textbook of Endocrinology.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which physical examination maneuver is the classic provocative test for De Quervain's Tenosynovitis?",
    option_a: "Cozen's Test",
    option_b: "Phalen's Maneuver",
    option_c: "Finkelstein's Test",
    option_d: "Tinel's Sign",
    correct_option: "C",
    explanation: "Finkelstein's test (passive ulnar deviation of wrist while thumb is flexed inside fist) elicits sharp pain over the 1st dorsal compartment tendons (APL and EPB).\nReference: Magee's Orthopedic Physical Assessment.",
    tag: "Past Year Question"
  },
  {
    question_text: "All of the following are classic Extrapyramidal signs EXCEPT:",
    option_a: "Clasp-knife rigidity",
    option_b: "Delayed relaxation phase of deep tendon reflexes (Woltman sign)",
    option_c: "Choreoathetosis",
    option_d: "Resting tremor",
    correct_option: "B",
    explanation: "Delayed relaxation of tendon reflexes is pathognomonic for Hypothyroidism (myxedema). Extrapyramidal signs arise from basal ganglia disease (rigidity, chorea, tremor).\nReference: DeJong's The Neurologic Examination.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 10-month-old infant presents with global developmental delay, inability to sit unsupported, severe generalized hypotonia, tongue fasciculations, and absent DTRs. What is the diagnosis?",
    option_a: "Spastic Quadriplegic Cerebral Palsy",
    option_b: "Duchenne Muscular Dystrophy",
    option_c: "Spinal Muscular Atrophy Type I (Werdnig-Hoffmann Disease)",
    option_d: "Congenital Myasthenia Gravis",
    correct_option: "C",
    explanation: "SMA Type I (autosomal recessive survival motor neuron 1 gene mutation) presents in early infancy with severe lower motor neuron degeneration: floppy infant, tongue fasciculations, loss of reflexes, and progressive weakness.\nReference: Nelson Textbook of Pediatrics.",
    tag: "Past Year Question"
  },
  {
    question_text: "All of the following represent contraindications to IV recombinant tissue plasminogen activator (rTPA) in acute ischemic stroke EXCEPT:",
    option_a: "Prophylactic Low Molecular Weight Heparin administered 14 days ago",
    option_b: "Blood glucose < 2.7 mmol/L (50 mg/dL)",
    option_c: "Active internal bleeding or intracranial hemorrhage",
    option_d: "History of prior intracranial hemorrhage",
    correct_option: "A",
    explanation: "Prophylactic LMWH given 14 days prior is long cleared and is NOT a contraindication. Full therapeutic LMWH within 24 hours or acute bleeding ARE contraindications.\nReference: AHA/ASA Guidelines for Early Management of Ischemic Stroke.",
    tag: "Past Year Question"
  },
  {
    question_text: "During quiet, relaxed standing, which muscle group demonstrates continuous postural tonic activity to counteract forward body sway over the ankle joint?",
    option_a: "Gluteus Maximus",
    option_b: "Quadriceps Femoris",
    option_c: "Soleus / Gastrocnemius (Calf Postural Muscles)",
    option_d: "Rectus Abdominis",
    correct_option: "C",
    explanation: "The body line of gravity falls anterior to the ankle joint during standing, creating a dorsiflexion torque. Plantarflexors (soleus and gastrocnemius) contract tonically to maintain upright equilibrium.\nReference: Kapanji's Physiology of the Joints; Neumann's Kinesiology of the Musculoskeletal System.",
    tag: "Past Year Question"
  },
  {
    question_text: "A positive Trendelenburg sign (pelvic drop during single-leg stance) indicates weakness of hip abductors innervated by which nerve?",
    option_a: "Obturator Nerve",
    option_b: "Superior Gluteal Nerve",
    option_c: "Femoral Nerve",
    option_d: "Sciatic Nerve",
    correct_option: "B",
    explanation: "The Superior Gluteal Nerve (L4-S1) supplies gluteus medius and minimus. Weakness leads to contralateral pelvic drop during stance phase.\nReference: Moore's Clinically Oriented Anatomy.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which functional muscle action during the initial contact (heel strike) phase of human gait is CORRECT?",
    option_a: "Extensor Digitorum Longus is active only during toe off",
    option_b: "Tibialis Anterior contracts eccentrically to prevent foot slap",
    option_c: "Quadriceps muscle is completely relaxed during loading",
    option_d: "Gastrocnemius contracts concentrically at initial contact",
    correct_option: "B",
    explanation: "At heel strike, Tibialis Anterior contracts eccentrically to lower the forefoot smoothly to the ground, controlling plantarflexion.\nReference: Perry's Gait Analysis: Normal and Pathological Function.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which fine motor achievement is characteristic of a typical 9-month-old infant?",
    option_a: "Inferior / Early Pincer Grasp (thumb and index finger grip)",
    option_b: "Copying a circle",
    option_c: "Building a tower of 6 cubes",
    option_d: "Hand dominance",
    correct_option: "A",
    explanation: "At 9 months, infants develop an inferior pincer grasp (pad-to-pad index finger and thumb). Tower of two cubes occurs at 15 months.\nReference: Nelson Textbook of Pediatrics.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the most common primary malignant bone tumor in children and young adolescents?",
    option_a: "Ewing Sarcoma",
    option_b: "Osteosarcoma",
    option_c: "Chondrosarcoma",
    option_d: "Multiple Myeloma",
    correct_option: "B",
    explanation: "Osteosarcoma is the most common primary malignant bone malignancy in adolescents (peak incidence 10-20 years), classically arising in metaphyses of long bones.\nReference: Robbins and Cotran Pathologic Basis of Disease, 10th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient 2 days post-lower limb amputation with an uncomplicated healing surgical wound reports localized pain at the residual limb. What is the most likely cause?",
    option_a: "Sciatic Nerve Neuroma",
    option_b: "Chronic Phantom Limb Pain",
    option_c: "Acute Acute Post-operative Surgical Nociceptive Pain",
    option_d: "Deep Bone Osteomyelitis",
    correct_option: "C",
    explanation: "In the immediate post-operative period (day 2), pain at the stump is overwhelmingly expected acute surgical nociceptive pain secondary to tissue transection.\nReference: Braddom's Physical Medicine and Rehabilitation.",
    tag: "Past Year Question"
  },
  {
    question_text: "In a comatose patient, decerebrate posturing (extensor posturing of both upper and lower extremities) indicates a brainstem lesion located:",
    option_a: "In the sacral spinal cord",
    option_b: "Below the Red Nucleus (midbrain/pons level)",
    option_c: "Above the Red Nucleus (corticospinal tract / thalamus)",
    option_d: "In the lumbar plexus",
    correct_option: "B",
    explanation: "Decerebrate posturing (extension of arms and legs) results from lesions below the red nucleus (upper brainstem), uncoupling rubrospinal flexion. Decorticate (arm flexion) indicates lesions above the red nucleus.\nReference: Adams and Victor's Principles of Neurology.",
    tag: "Past Year Question"
  },
  {
    question_text: "Compression of the nerve root exiting between the C5 and C6 cervical vertebrae involves which nerve root?",
    option_a: "C6 Nerve Root",
    option_b: "C7 Nerve Root",
    option_c: "C5 Nerve Root",
    option_d: "C4 Nerve Root",
    correct_option: "A",
    explanation: "Cervical nerve roots exit ABOVE their corresponding numbered vertebrae (C1-C7 exit above C1-C7; C8 exits between C7 and T1). Thus, C6 exits between C5 and C6.\nReference: Moore's Clinically Oriented Anatomy.",
    tag: "Past Year Question"
  },
  {
    question_text: "A stroke lesion involving the optic radiation fibers traveling through the Left Temporal Lobe (Meyer's Loop) produces which visual field defect?",
    option_a: "Bitemporal Hemianopia",
    option_b: "Right Superior Homonymous Quadrantanopia ('Pie in the Sky')",
    option_c: "Total visual loss in left eye",
    option_d: "Right Inferior Homonymous Quadrantanopia ('Pie on the Floor')",
    correct_option: "B",
    explanation: "Meyer's loop carries inferior retinal fibers (superior visual field) through the temporal lobe to the occipital cortex. Left temporal lesions cause Right Superior Quadrantanopia.\nReference: Blumenfeld's Neuroanatomy through Clinical Cases.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which cognitive deficit on bedside examination points directly to Frontal Lobe executive dysfunction?",
    option_a: "Bitemporal hemianopia",
    option_b: "Intact short-term memory",
    option_c: "Isolated loss of high-frequency hearing",
    option_d: "Inability to generate a list of words within a category (impaired verbal fluency)",
    correct_option: "D",
    explanation: "Executive dysfunction from prefrontal lesions manifests as impaired category generation (verbal fluency), perseveration, and poor planning.\nReference: Lezak's Neuropsychological Assessment, 5th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which statement regarding Extrapyramidal Involuntary Movements is CORRECT?",
    option_a: "Tardive dyskinesia only occurs after 5 minutes of drug exposure",
    option_b: "Chorea is completely cured by high-dose L-dopa",
    option_c: "Dystonia never occurs with neuroleptic drugs",
    option_d: "Parkinsonian resting tremor is typically suppressed or diminished by voluntary movement",
    correct_option: "D",
    explanation: "Parkinsonian tremor is a 4-6 Hz resting tremor that decreases during voluntary goal-directed action (unlike intention tremor).\nReference: Bradley's Neurology in Clinical Practice.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical feature is UNCHARACTERISTIC of Parkinson-Plus syndromes (e.g., PSP, MSA) and instead suggests idiopathic Parkinson's disease?",
    option_a: "Prominent early autonomic failure",
    option_b: "Asymmetric limb rigidity far greater than axial/trunk rigidity",
    option_c: "Severe early postural instability with frequent backward falls",
    option_d: "Early vertical gaze palsy",
    correct_option: "B",
    explanation: "Idiopathic Parkinson's disease presents with asymmetric limb involvement and good L-dopa response. Parkinson-plus syndromes feature symmetrical axial rigidity, early falls, autonomic failure, and poor L-dopa response.\nReference: Adams and Victor's Principles of Neurology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with right hand grip weakness and numbness in the 4th and 5th digits. Sensation on the dorsal aspect of the medial hand is entirely NORMAL. Where is the ulnar nerve lesion?",
    option_a: "In the brachial plexus upper trunk",
    option_b: "At the C8 nerve root level",
    option_c: "At the elbow within the Cubital Tunnel (proximal lesion)",
    option_d: "At the wrist within Guyon's Canal (distal ulnar nerve lesion)",
    correct_option: "D",
    explanation: "The Dorsal Cutaneous Branch of the ulnar nerve branches off in the distal forearm (proximal to wrist). If dorsal hand sensation is preserved, the lesion must be distal to the forearm (i.e. inside Guyon's canal).\nReference: Green's Operative Hand Surgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which primary afferent nerve fiber type transmits slow, unlocalized, dull, burning nociceptive pain signals to the spinal cord?",
    option_a: "Ia Muscle Spindle Fibers",
    option_b: "Large myelinated A-beta Fibers",
    option_c: "Unmyelinated C Fibers",
    option_d: "Small myelinated A-delta Fibers",
    correct_option: "C",
    explanation: "Unmyelinated C fibers (slow conduction 0.5-2 m/s) transmit dull, burning, slow pain. A-delta fibers (5-30 m/s) transmit sharp, fast, localized pain.\nReference: Guyton and Hall Textbook of Medical Physiology, 14th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Deep Brain Stimulation (DBS) for medication-refractory Essential Tremor targets which specific anatomical nucleus?",
    option_a: "Ventral Intermediate Nucleus (Vim) of the Thalamus",
    option_b: "Putamen",
    option_c: "Caudate Nucleus",
    option_d: "Subthalamic Nucleus (STN) for pure dystonia",
    correct_option: "A",
    explanation: "The Vim nucleus of the thalamus is the primary target for DBS in essential tremor, suppressing disabling intention tremors.\nReference: Greenberg's Handbook of Neurosurgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which antiemetic medication acts as a central dopamine D2 receptor antagonist and can trigger Drug-Induced Parkinsonism?",
    option_a: "Metoclopramide",
    option_b: "Hyoscine",
    option_c: "Ondansetron",
    option_d: "Domperidone",
    correct_option: "A",
    explanation: "Metoclopramide crosses the blood-brain barrier and blocks central dopamine D2 receptors, frequently causing acute dystonia, parkinsonism, and tardive dyskinesia.\nReference: Goodman & Gilman's Pharmacological Basis of Therapeutics.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which statement regarding Orthoses is FALSE?",
    option_a: "An orthosis can restrict or assist joint motion",
    option_b: "A prosthesis (not an orthosis) replaces a missing limb segment",
    option_c: "An orthosis is an externally applied device used to modify structural characteristics",
    option_d: "An orthosis is designed to replace a missing anatomical body part",
    correct_option: "D",
    explanation: "A PROSTHESIS replaces a missing body part. An ORTHOSIS is an external brace that supports, aligns, or improves function of an existing body part.\nReference: Atlas of Amputations and Limb Deficiencies (AAOS).",
    tag: "Past Year Question"
  },
  {
    question_text: "Which baseline blood test has the LEAST diagnostic utility in evaluating uncomplicated primary Postmenopausal Osteoporosis?",
    option_a: "25-Hydroxyvitamin D level",
    option_b: "Renal Function Tests",
    option_c: "Serum Calcium and Phosphate",
    option_d: "Full Blood Count (FBC)",
    correct_option: "D",
    explanation: "Full Blood Count is non-specific and generally normal in primary osteoporosis (though useful to exclude myeloma/malignancy in secondary osteoporosis). DEXA, Vitamin D, and Calcium are standard.\nReference: NOF Guidelines for Osteoporosis.",
    tag: "Past Year Question"
  },
  {
    question_text: "A female presents with acute wrist joint swelling, fever, and severe pain 3 weeks following a streptococcal chest infection. What is the essential initial diagnostic step?",
    option_a: "Plain Radiograph of the wrist",
    option_b: "Oral antibiotic trial",
    option_c: "Serum ESR alone",
    option_d: "Diagnostic Joint Aspiration (Arthrocentesis) and Synovial Fluid Analysis",
    correct_option: "D",
    explanation: "Acute mono/oligoarthritis with fever requires emergency joint aspiration to rule out Septic Arthritis (cell count, Gram stain, culture, crystal analysis) before diagnosing post-infectious reactive arthritis.\nReference: Kelley and Firestein's Textbook of Rheumatology.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which intervention regarding Intracranial Pressure (ICP) management is CORRECT?",
    option_a: "Hypoventilation reduces ICP",
    option_b: "Normal baseline ICP in adults is defined as > 25 mmHg",
    option_c: "Analgesia should be withheld in severe TBI to prevent masking signs",
    option_d: "Elevating the head of the bed to 30 degrees lowers ICP by enhancing jugular venous outflow",
    correct_option: "D",
    explanation: "Head elevation to 30° promotes venous drainage from the brain, reducing ICP. Hypoventilation causes hypercapnia, leading to cerebral vasodilation and INCREASED ICP. Normal ICP is 5-15 mmHg.\nReference: Brain Trauma Foundation Guidelines for Management of Severe TBI.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical deficit on mental status testing points directly to Prefrontal / Frontal Lobe executive dysfunction?",
    option_a: "Inability to generate a category word list (impaired verbal fluency)",
    option_b: "Isolated loss of high-frequency hearing",
    option_c: "Pure sensory inattention",
    option_d: "Bitemporal hemianopia",
    correct_option: "A",
    explanation: "Category generation (e.g. naming as many animals as possible in 1 minute) evaluates verbal fluency, executive control, and working memory mediated by the prefrontal cortex.\nReference: Lezak's Neuropsychological Assessment, 5th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which involuntary movement pattern is classified as an Extrapyramidal sign?",
    option_a: "Choreoathetosis",
    option_b: "Delayed relaxation phase of deep tendon reflexes",
    option_c: "Clasp-knife spasticity",
    option_d: "Intention tremor",
    correct_option: "A",
    explanation: "Extrapyramidal signs arise from basal ganglia dysfunction and include chorea, athetosis, dystonia, resting tremor, and rigidity. Clasp-knife spasticity is a Pyramidal (UMN) sign.\nReference: DeJong's The Neurologic Examination, 8th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical statement regarding involuntary movement disorders is CORRECT?",
    option_a: "Tardive dyskinesia never occurs with antipsychotic use",
    option_b: "Dystonia occurs only when neuroleptics are abruptly stopped",
    option_c: "Pseudoathetosis is caused by loss of joint position sense (proprioception)",
    option_d: "Parkinsonian resting tremor is aggravated by voluntary movement",
    correct_option: "C",
    explanation: "Pseudoathetosis refers to slow, writhing involuntary movements of the fingers/hands caused by severe loss of proprioceptive sensory input (e.g. in posterior column or peripheral nerve lesions). Parkinsonian tremor is suppressed during voluntary movement.\nReference: Bradley's Neurology in Clinical Practice, 8th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical feature is UNCHARACTERISTIC of Parkinson-Plus syndromes (e.g., PSP, MSA) and suggests idiopathic Parkinson's disease instead?",
    option_a: "Asymmetric limb rigidity and resting tremor far greater than axial rigidity",
    option_b: "Vertical supranuclear gaze palsy",
    option_c: "Early severe postural instability with falls",
    option_d: "Early autonomic failure (orthostatic hypotension)",
    correct_option: "A",
    explanation: "Idiopathic Parkinson's disease typically begins asymmetrically in the limbs with classic resting tremor. Parkinson-Plus syndromes present with symmetrical involvement, prominent axial rigidity, early postural falls, gaze palsies, and autonomic dysfunction.\nReference: Adams and Victor's Principles of Neurology, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which combination of clinical features is core to the diagnosis of Delirium?",
    option_a: "Acute-onset disorientation with altered sleep-wake cycle and fluctuating attention",
    option_b: "Frontal disinhibition without cognitive disturbance",
    option_c: "Progressive irreversible memory loss over 5 years",
    option_d: "Isolated visual agnosia with intact orientation",
    correct_option: "A",
    explanation: "Delirium is characterized by an acute onset, fluctuating course, inattention, disorientation, and disruption of the sleep-wake cycle.\nReference: DSM-5-TR Diagnostic Criteria for Delirium.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with reduced grip strength in the right hand and numbness in the 4th and 5th digits. Which statement regarding clinical localization is CORRECT?",
    option_a: "Loss of sensation on the medial aspect of the forearm indicates a C7 radiculopathy",
    option_b: "Presence of a left Horner syndrome supports a diagnosis of Syringomyelia",
    option_c: "Dissociated sensory loss (loss of pain/temperature with preserved light touch) in a cape distribution supports Syringomyelia",
    option_d: "Ulnar neuropathy at the wrist is supported by sensory loss over the dorsum of the hand",
    correct_option: "C",
    explanation: "Syringomyelia disrupts decussating spinothalamic fibers in the anterior white commissure, producing dissociated sensory loss (loss of pain and temperature with intact tactile/vibration sense). The dorsal cutaneous branch of the ulnar nerve arises in the forearm, so wrist lesions (Guyon's canal) spare dorsal hand sensation.\nReference: Adams and Victor's Principles of Neurology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 26-year-old female presents with anisocoria (right pupil larger than left). The right pupil shows absent direct and consensual light reflexes, but responds slowly to accommodation, remaining constricted (tonic). What is the diagnosis?",
    option_a: "Complete Cranial Nerve III Palsy",
    option_b: "Horner's Syndrome",
    option_c: "Argyll Robertson Pupil",
    option_d: "Adie's Tonic Pupil",
    correct_option: "D",
    explanation: "Adie's tonic pupil (benign ciliary ganglion postganglionic parasympathetic denervation) features a dilated pupil with light-near dissociation (poor light reaction, slow tonic accommodation response). Argyll Robertson pupils are bilateral, small, and accommodate but do not react to light.\nReference: Kanski's Clinical Ophthalmology, 9th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 71-year-old male with a 20-year history of Rheumatoid Arthritis presents with recurrent falls, urinary incontinence, difficulty recalling events, and a magnetic gait (holding his wife to walk). What is the diagnosis?",
    option_a: "Multi-infarct Dementia",
    option_b: "Alzheimer's Disease",
    option_c: "Parkinson's Disease",
    option_d: "Normal Pressure Hydrocephalus (NPH)",
    correct_option: "D",
    explanation: "NPH is characterized by the classic clinical triad: Gait disturbance ('magnetic' apraxia), Cognitive impairment, and Urinary incontinence ('Wet, Wobbly, Wacky').\nReference: Adams and Victor's Principles of Neurology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient exhibits a Trendelenburg gait (pelvis drops on the unsupported non-stance side during single-leg stance). Injury to which peripheral nerve is responsible?",
    option_a: "Superior Gluteal Nerve",
    option_b: "Inferior Gluteal Nerve",
    option_c: "Femoral Nerve",
    option_d: "Obturator Nerve",
    correct_option: "A",
    explanation: "The Superior Gluteal Nerve (L4-S1) supplies the hip abductors (gluteus medius and minimus). Weakness on the stance side causes contralateral pelvic drop (Trendelenburg sign).\nReference: Moore's Clinically Oriented Anatomy, 8th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A right-handed patient suffers an ischemic stroke involving the dominant left angular and supramarginal gyri. Which constellation of deficits (Gerstmann Syndrome) is expected?",
    option_a: "Bitemporal hemianopia and hyperphagia",
    option_b: "Wernicke's Receptive Aphasia and visual field cut",
    option_c: "Left-Right Disorientation, Finger Agnosia, Acalculia, and Agraphia",
    option_d: "Broca's Expressive Aphasia and right hemiplegia",
    correct_option: "C",
    explanation: "Gerstmann Syndrome is caused by lesions of the dominant inferior parietal lobule (angular gyrus) and features 4 cardinal signs: Finger agnosia, Left-Right disorientation, Acalculia, and Agraphia.\nReference: Blumenfeld's Neuroanatomy through Clinical Cases.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical statement regarding Sulfonylureas (e.g., Gliclazide) in Type 2 Diabetes management is CORRECT?",
    option_a: "They decrease endogenous pancreatic insulin secretion",
    option_b: "They cause severe weight loss in all patients",
    option_c: "They primary work by suppressing hepatic gluconeogenesis",
    option_d: "They cause weight gain when used as monotherapy or in combination with biguanides",
    correct_option: "D",
    explanation: "Sulfonylureas stimulate pancreatic beta-cell insulin release by closing ATP-sensitive potassium channels. Increased insulin levels promote weight gain and hypoglycemia.\nReference: Goodman & Gilman's Pharmacological Basis of Therapeutics, 13th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the primary scientific purpose of incorporating a Placebo arm in controlled clinical trial designs?",
    option_a: "To differentiate true pharmacological effects from psychological and non-specific intervention responses",
    option_b: "To guarantee that all trial participants receive active treatment",
    option_c: "To reduce clinical trial financial expenditure",
    option_d: "To eliminate the need for ethical board review",
    correct_option: "A",
    explanation: "Placebo controls allow researchers to isolate the true biological efficacy of an active intervention from non-specific psychological responses, expectation bias, and natural disease regression.\nReference: Basic & Clinical Biostatistics (Dawson & Trapp).",
    tag: "Past Year Question"
  },
  {
    question_text: "Which metabolic adverse effect is characteristically associated with long-term loop and thiazide diuretic therapy?",
    option_a: "Hypoglycemia",
    option_b: "Hypokalemia and Hyperuricemia (precipitating gout)",
    option_c: "Severe Hyperkalemia",
    option_d: "Metabolic Acidosis",
    correct_option: "B",
    explanation: "Both thiazide and loop diuretics cause urinary potassium wasting (hypokalemia) and compete with uric acid for renal tubular secretion, elevating serum uric acid and triggering gout.\nReference: Goodman & Gilman's Pharmacological Basis of Therapeutics.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 72-year-old male with hypertension, gout, GERD, and CKD (Serum Creatinine 160 µmol/L) requires review. Which medication does NOT require renal dose adjustment in mild-to-moderate CKD?",
    option_a: "Lisinopril",
    option_b: "Lansoprazole",
    option_c: "Metformin",
    option_d: "Allopurinol",
    correct_option: "B",
    explanation: "Lansoprazole (a proton pump inhibitor) undergoes extensive hepatic metabolism, so dose adjustment is not required in renal impairment. Allopurinol, Lisinopril, and Metformin require dose reductions as renal function declines.\nReference: Renal Drug Handbook, 5th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 57-year-old female with Polymyalgia Rheumatica has taken Prednisone 10 mg daily for 5 months. DEXA scan reveals T-scores of -1.6 at L2 and -1.7 at the Femoral Neck. What is the management?",
    option_a: "Calcium, Vitamin D, and Oral Bisphosphonate therapy",
    option_b: "Repeat DEXA scan in 6 months without medication",
    option_c: "Calcium and Vitamin D supplementation alone",
    option_d: "No treatment required as T-score is above -2.5",
    correct_option: "A",
    explanation: "ACR Guidelines for Glucocorticoid-Induced Osteoporosis recommend initiating bisphosphonate therapy alongside Calcium and Vitamin D in postmenopausal women taking ≥ 7.5 mg prednisone daily for ≥ 3 months with osteopenia (T-score ≤ -1.5).\nReference: 2017 ACR Guideline for Prevention and Treatment of Glucocorticoid-Induced Osteoporosis.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which muscle acts to externally (laterally) rotate the hip as well as assist in thigh adduction?",
    option_a: "Tensor Fasciae Latae",
    option_b: "Obturator Externus",
    option_c: "Gluteus Minimus",
    option_d: "Semitendinosus",
    correct_option: "B",
    explanation: "Obturator externus originates from the external surface of the obturator membrane and inserts into the trochanteric fossa, acting as a lateral rotator and adductor of the hip.\nReference: Moore's Clinically Oriented Anatomy, 8th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which bursa is primarily involved in producing pain symptoms in Shoulder Subacromial Impingement Syndrome?",
    option_a: "Olecranon Bursa",
    option_b: "Subcoracoid Bursa",
    option_c: "Subacromial (Subdeltoid) Bursa",
    option_d: "Ischial Bursa",
    correct_option: "C",
    explanation: "Subacromial bursitis and supraspinatus tendinopathy are the main anatomical drivers of painful arc symptoms in subacromial shoulder impingement.\nReference: Rockwood and Matsen's The Shoulder, 5th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "According to the Framingham Criteria for Heart Failure, which finding is classified as a MAJOR criterion?",
    option_a: "Orthopnea or Paroxysmal Nocturnal Dyspnea",
    option_b: "Nocturnal cough alone",
    option_c: "Bilateral pedal edema alone",
    option_d: "Exertional dyspnea alone",
    correct_option: "A",
    explanation: "Framingham Major Criteria: PND/Orthopnea, neck vein distension, rales, cardiomegaly, acute pulmonary edema, S3 gallop, increased venous pressure (> 16 cmH2O), positive hepatojugular reflux. Ankle edema and exertional dyspnea are minor criteria.\nReference: Braunwald's Heart Disease, 12th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical condition represents an ABSOLUTE contraindication to intravenous tissue plasminogen activator (rtPA) in acute ischemic stroke?",
    option_a: "Mild essential hypertension",
    option_b: "History of prior Intracranial Hemorrhage",
    option_c: "Blood glucose of 6.5 mmol/L",
    option_d: "Patient age of 70 years",
    correct_option: "B",
    explanation: "Any prior history of intracranial hemorrhage, active internal bleeding, or CT evidence of acute hemorrhage are absolute contraindications to rtPA due to high risk of fatal bleeding.\nReference: AHA/ASA Early Management of Ischemic Stroke Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "Suprapubic Catheterization (SPC) is ABSOLUTELY CONTRAINDICATED in which of the following scenarios?",
    option_a: "Benign Prostatic Hyperplasia",
    option_b: "Severe Urethral Stricture",
    option_c: "Acute Urinary Retention",
    option_d: "Known Bladder Carcinoma or non-distended empty bladder",
    correct_option: "D",
    explanation: "SPC is contraindicated in bladder carcinoma (risk of tumor track seeding) and non-distended/unpalpable bladder (high risk of bowel perforation).\nReference: Campbell-Walsh-Wein Urology, 12th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient taking long-term opioids for chronic primary tension headache expresses fear of addiction. What is the evidence-based recommendation?",
    option_a: "Continue opioids on a PRN basis indefinitely",
    option_b: "Taper and discontinue opioids as they are not indicated for primary headache disorders",
    option_c: "Increase opioid dose to achieve pain cure",
    option_d: "Add oral naloxone daily",
    correct_option: "B",
    explanation: "Opioids are strictly not recommended for primary headache disorders (migraine, tension) due to risks of medication overuse headache (MOH), dependency, hyperalgesia, and lack of long-term efficacy.\nReference: AHS / EFNS Guidelines for Headache Management.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which statement regarding the Ankle-Brachial Systolic Index (ABSI / ABPI) measurement is CORRECT?",
    option_a: "ABPI cannot be performed in diabetic patients",
    option_b: "Ankle systolic blood pressure is detected using a continuous-wave Doppler probe over distal arteries",
    option_c: "An ABPI of 1.10 indicates severe lower limb ischemia",
    option_d: "ABPI > 1.40 confirms severe venous insufficiency",
    correct_option: "B",
    explanation: "ABPI measurement uses a pneumatic cuff and a continuous-wave Doppler ultrasound probe placed over the dorsalis pedis or posterior tibial artery to detect the precise systolic return pressure.\nReference: Rutherford's Vascular Surgery and Endovascular Therapy.",
    tag: "Past Year Question"
  },
  {
    question_text: "A diabetic hypertensive septic patient on Frusemide and Enalapril presents with dehydration and AKI (Urea 22 mmol/L, Creatinine 210 µmol/L, BP 130/80 mmHg). What is the immediate correct step?",
    option_a: "Continue current medications without change",
    option_b: "Discontinue Frusemide and start IV Dopamine infusion",
    option_c: "Discontinue Frusemide and Enalapril, and initiate IV fluid resuscitation with daily blood monitoring",
    option_d: "Continue Frusemide and start high-dose IV steroids",
    correct_option: "C",
    explanation: "In prerenal AKI secondary to sepsis/volume depletion, nephrotoxic and hemodynamically active drugs (ACE inhibitors and loop diuretics) must be held immediately, and isotonic IV fluids administered.\nReference: KDIGO Clinical Practice Guideline for Acute Kidney Injury.",
    tag: "Past Year Question"
  },
  {
    question_text: "A healthcare worker with a previously negative Mantoux tuberculin skin test now demonstrates a 10 mm induration. Chest X-ray is clear. What does this represent?",
    option_a: "Tuberculin conversion indicating recent latent Mycobacterium tuberculosis infection",
    option_b: "Full recovery from active pulmonary TB",
    option_c: "False-positive result from viral infection",
    option_d: "Seroconversion due solely to previous testing",
    correct_option: "A",
    explanation: "An increase in Mantoux induration size of ≥ 10 mm within 2 years (tuberculin conversion) indicates recent infection with M. tuberculosis, requiring evaluation for latent TB infection (LTBI) treatment.\nReference: CDC Guidelines for Prevention and Treatment of Tuberculosis.",
    tag: "Past Year Question"
  },
  {
    question_text: "An anxious individual hyperventilates and collapses. What is the expected Arterial Blood Gas (ABG) disturbance prior to the event?",
    option_a: "High pH and Low pCO2 (Acute Respiratory Alkalosis)",
    option_b: "Low pH and High pCO2 (Acute Respiratory Acidosis)",
    option_c: "Low pH and Low pCO2 (Metabolic Acidosis)",
    option_d: "High pH and High pCO2",
    correct_option: "A",
    explanation: "Hyperventilation excessively clears carbon dioxide, producing acute respiratory alkalosis (pH > 7.45, pCO2 < 35 mmHg). Cerebral vasoconstriction leads to transient syncope.\nReference: West's Respiratory Physiology: Essentials, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A diabetic patient presents with severe hypoglycemia (DXT 1.3 mmol/L) and active seizures. Intravenous access cannot be established. What is the immediate drug of choice?",
    option_a: "Oral glucose gel forced into mouth",
    option_b: "Subcutaneous Insulin",
    option_c: "Intramuscular Adrenaline",
    option_d: "Intramuscular (IM) Glucagon 1 mg",
    correct_option: "D",
    explanation: "In unconscious or seizing hypoglycemic patients without IV access, IM Glucagon (1 mg) is the immediate first-line rescue medication. Oral administration is contraindicated due to aspiration risk.\nReference: ADA Standards of Medical Care in Diabetes.",
    tag: "Past Year Question"
  },
  {
    question_text: "In a severe COPD patient (FEV1 < 37%) who has successfully quit smoking, which non-pharmacological/pharmacological intervention is proven to prolong survival in severe resting hypoxemia?",
    option_a: "Oral Prednisolone daily",
    option_b: "Long-Term Oxygen Therapy (LTOT)",
    option_c: "Ipratropium bromide",
    option_d: "Salmeterol inhalation",
    correct_option: "B",
    explanation: "Only two interventions are proven to reduce mortality in COPD: Smoking Cessation and Long-Term Oxygen Therapy (LTOT) in patients with severe resting hypoxemia (PaO2 ≤ 55 mmHg).\nReference: GOLD COPD Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical feature strongly supports a diagnosis of Post-Polio Syndrome (PPS)?",
    option_a: "Weakness occurring immediately after 2 days of bed rest",
    option_b: "New progressive muscle weakness arising decades later in muscle groups most severely affected during the initial acute paralytic illness",
    option_c: "Symmetrical weakness exclusively in unaffected muscles",
    option_d: "Weakness caused by sudden weight gain alone",
    correct_option: "B",
    explanation: "Post-Polio Syndrome involves new insidious neuromuscular weakness, fatigue, and pain occurring 15-40 years after acute paralytic poliomyelitis, predominantly affecting previously involved muscle groups due to motor unit degeneration.\nReference: Braddom's Physical Medicine and Rehabilitation, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Sustained motor weakness persisting beyond 2 months following a focal nerve compression injury is pathologically caused by:",
    option_a: "Isolated transient neurapraxia without structural change",
    option_b: "Multifocal demyelination without axonal involvement",
    option_c: "Focal demyelination accompanied by underlying Wallerian degeneration (Axonotmesis)",
    option_d: "Axonal stenosis without nerve fiber injury",
    correct_option: "C",
    explanation: "Prolonged deficit beyond 8 weeks following nerve compression indicates axonal disruption (axonotmesis) with subsequent Wallerian degeneration, requiring axon regeneration (1 mm/day) for recovery.\nReference: Preston & Shapiro's Electromyography and Neuromuscular Disorders.",
    tag: "Past Year Question"
  },
  {
    question_text: "In acute spinal cord injury bladder management, when is it appropriate to transition from an indwelling catheter to Clean Intermittent Catheterization (CIC)?",
    option_a: "When spinal shock resolves, bladder reflexivity returns, and fluid intake is regulated",
    option_b: "Only after 5 years post-injury",
    option_c: "Immediately in the emergency room",
    option_d: "When IV fluids are running at 300 mL/hr",
    correct_option: "A",
    explanation: "CIC is initiated once the patient is hemodynamically stable, off high-volume IV fluids (fluid intake regulated to ~2 L/day), and emerging from spinal shock, to maintain catheter volumes < 500 mL.\nReference: Spinal Cord Medicine: Principles and Practice (Lin & Cardenas).",
    tag: "Past Year Question"
  },
  {
    question_text: "In a Boutonnière deformity of the digit, what are the specific anatomical positions of the interphalangeal joints?",
    option_a: "PIP joint Flexion and DIP joint Hyperextension",
    option_b: "PIP joint Extension and DIP joint Hyperextension",
    option_c: "PIP joint Extension and DIP joint Flexion",
    option_d: "PIP joint Flexion and DIP joint Flexion",
    correct_option: "A",
    explanation: "Rupture of the central slip of the extensor tendon over the PIP joint allows lateral bands to slip volarward, causing PIP joint Flexion and compensatory DIP joint Hyperextension. (Swan-neck is PIP hyperextension + DIP flexion).\nReference: Green's Operative Hand Surgery, 7th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the single most critical biomechanical intervention required to achieve healing in a neuropathic plantar Diabetic Foot Ulcer?",
    option_a: "Topical antiseptic application alone",
    option_b: "Chemical corn removal",
    option_c: "Offloading the pressure area (e.g., total contact casting / offloading boots)",
    option_d: "Systemic oral antibiotics in non-infected ulcers",
    correct_option: "C",
    explanation: "Plantar diabetic ulcers are driven by repetitive microtrauma over insensate pressure points. Effective pressure offloading (Total Contact Cast or removable cast walker) is the cornerstone of healing.\nReference: IWGDF Guidelines on the Prevention and Management of Diabetic Foot Disease.",
    tag: "Past Year Question"
  },
  {
    question_text: "Thermal energy transfer during hydrotherapy in a agitated water bath occurs primarily via which physical mechanism?",
    option_a: "Conduction alone",
    option_b: "Convection",
    option_c: "Radiation",
    option_d: "Conversion",
    correct_option: "B",
    explanation: "Convection involves heat transfer between a solid surface and a moving fluid (water/air). Agitated water in hydrotherapy transfers heat by convection.\nReference: Cameron's Physical Agents in Rehabilitation.",
    tag: "Past Year Question"
  },
  {
    question_text: "A CT brain scan demonstrates a large hyperdense, biconvex (lenticular) extra-axial collection in the left temporoparietal region. What clinical deficits are expected?",
    option_a: "Right hemiparesis and Expressive / Global Aphasia",
    option_b: "Left hemiparesis and Left Hemispatial Neglect",
    option_c: "Right hemiparesis and ataxia",
    option_d: "Left hemiparesis and dysphagia",
    correct_option: "A",
    explanation: "A left-sided epidural hematoma exerts mass effect over the left cerebral hemisphere (motor strip and language centers), resulting in right-sided motor weakness (right hemiparesis) and aphasia.\nReference: Core Radiology (Mandell); Greenberg's Neurosurgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "A secretary complains of paresthesia and numbness over the thumb, index, and middle fingers aggravated by typing. What condition is present?",
    option_a: "Rheumatoid Arthritis",
    option_b: "Carpal Tunnel Syndrome (Median Nerve Entrapment)",
    option_c: "De Quervain's Tenosynovitis",
    option_d: "Cubital Tunnel Syndrome",
    correct_option: "B",
    explanation: "Median nerve entrapment under the flexor retinaculum at the wrist causes Carpal Tunnel Syndrome, manifesting with palmar paresthesias in the radial 3.5 digits.\nReference: Green's Operative Hand Surgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which mode of exercise training exerts the GREATEST osteogenic stimulus on bone mineral density formation?",
    option_a: "Weight-bearing resistance training (Weight Lifting)",
    option_b: "Gentle Tai Chi stretching",
    option_c: "Non-weight bearing Cycling",
    option_d: "Swimming",
    correct_option: "A",
    explanation: "Bone remodeling obeys Wolff's Law. High-impact and high-load resistance weight lifting generates mechanical strain that stimulates osteoblast bone formation far more than non-weight bearing activities (swimming/cycling).\nReference: NOF Clinician's Guide to Prevention and Treatment of Osteoporosis.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which oral-motor skill developmental milestone is CORRECT in pediatric feeding?",
    option_a: "Ability to eat solid steak at 4 months",
    option_b: "Absence of tongue protrusion reflex at 1 week",
    option_c: "Complete labial seal around a cup at 2 months",
    option_d: "Mature rotary chewing and coordinated jaw movement during swallowing",
    correct_option: "D",
    explanation: "Rotary chewing and coordinated jaw/tongue movements mature progressively between 12 and 24 months, enabling safe handling of varied food textures.\nReference: Nelson Textbook of Pediatrics.",
    tag: "Past Year Question"
  },
  {
    question_text: "A diabetic female presents with an eczematous, sloughy ulcer over the medial malleolus. Palpable foot pulses are present and ABPI is 0.95. What is the primary cause?",
    option_a: "Severe Arterial Insufficiency",
    option_b: "Pressure Injury Grade IV",
    option_c: "Venous Insufficiency (Venous Stasis Ulcer)",
    option_d: "Pure Diabetic Neuropathic Ulcer",
    correct_option: "C",
    explanation: "Location over the medial malleolus, stasis eczema, and slough in the presence of normal arterial perfusion (ABPI 0.95 and palpable pulses) confirms a venous stasis ulcer.\nReference: Rutherford's Vascular Surgery and Endovascular Therapy.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical neuro-urological finding distinguishes an Upper Motor Neuron Conus Medullaris lesion from a Lower Motor Neuron Cauda Equina Syndrome?",
    option_a: "Radicular pain in L5/S1 dermatomes",
    option_b: "Saddle anesthesia",
    option_c: "Intact anal sphincter tone and preserved bulbocavernosus reflex",
    option_d: "Completely lax anal tone",
    correct_option: "C",
    explanation: "Conus Medullaris lesions involve sacral spinal cord segments (S2-S4) and may retain spinal reflex arcs (intact bulbocavernosus reflex / tone), whereas Cauda Equina Syndrome injures lumbosacral nerve roots (LMN), abolishing reflexes and causing lax anal sphincter tone.\nReference: Spinal Cord Medicine (Kirshblum & Campagnolo).",
    tag: "Past Year Question"
  },
  {
    question_text: "In patients with high Spinal Cord Injury, what is frequently the FIRST clinical sign of Pulmonary Embolism (PE)?",
    option_a: "Severe pleuritic chest pain",
    option_b: "Bradycardia alone",
    option_c: "Syncope",
    option_d: "Acute unexplained Shortness of Breath (dyspnea) or hypoxia",
    correct_option: "D",
    explanation: "High SCI impairs sensory transmission below the lesion, so classic pleuritic chest pain is often absent; acute unexplained dyspnea, tachypnea, or desaturation is the primary early warning sign.\nReference: Spinal Cord Medicine: Principles and Practice.",
    tag: "Past Year Question"
  },
  {
    question_text: "Salicylate (Aspirin) toxicity and elevated plasma drug levels are exacerbated by concurrent administration of which uricosuric agent that competes for renal secretion?",
    option_a: "Cloxacillin",
    option_b: "Acetaminophen",
    option_c: "Probenecid",
    option_d: "Indomethacin",
    correct_option: "C",
    explanation: "Probenecid competes with salicylates for organic anion transport in the renal proximal tubule, inhibiting salicylate excretion and raising plasma levels.\nReference: Goodman & Gilman's Pharmacological Basis of Therapeutics.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which physical finding indicates active healing in a chronic wound?",
    option_a: "Purulent exudate",
    option_b: "Epithelialization and pink granulation tissue at wound margins",
    option_c: "Undermining edges with slough",
    option_d: "Dry necrotic eschar",
    correct_option: "B",
    explanation: "Advancing epithelial margins over healthy, vascular red/pink granulation tissue is the cardinal sign of wound healing.\nReference: Sabiston Textbook of Surgery, 21st Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A MRI demonstrates C5/C6 intervertebral disc herniation compressing the C6 nerve root. Which sensory region will exhibit diminished sensation?",
    option_a: "Lateral aspect of the forearm, thumb, and index finger",
    option_b: "5th digit (pinky finger)",
    option_c: "Medial aspect of the forearm",
    option_d: "Lateral aspect of the upper arm over deltoid",
    correct_option: "A",
    explanation: "The C6 dermatome covers the lateral forearm, thumb, and index finger. C5 covers the lateral upper arm; C7 covers the middle finger; C8 covers the 5th digit and medial hand.\nReference: Moore's Clinically Oriented Anatomy, 8th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Abrupt cessation or rapid reduction of which antispasticity treatment can precipitate a life-threatening withdrawal syndrome (hyperpyrexia, severe spasticity, rhabdomyolysis, and MODS)?",
    option_a: "Intrathecal Baclofen (ITB)",
    option_b: "Diazepam",
    option_c: "Oral Carbamazepine",
    option_d: "Myonal (Eperisone)",
    correct_option: "A",
    explanation: "Abrupt Intrathecal Baclofen withdrawal causes rebound spasticity, hyperthermia, autonomic instability, rhabdomyolysis, and multi-organ failure, constituting a medical emergency.\nReference: Braddom's Physical Medicine and Rehabilitation, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which epidemiological feature regarding stroke in young adults (age < 45) is CORRECT?",
    option_a: "Hemorrhagic stroke and non-atherosclerotic etiologies (e.g. arterial dissection, vasculitis, hypercoagulability) represent a higher proportion compared to elderly strokes",
    option_b: "Atherosclerosis is the primary cause in over 90% of young strokes",
    option_c: "Young stroke patients have 0% recovery potential",
    option_d: "Cardioembolism never occurs in young adults",
    correct_option: "A",
    explanation: "In young adults, non-atherosclerotic mechanisms (arterial dissection, patent foramen ovale, hypercoagulable states, vasculitis) and intracranial hemorrhage represent a much higher proportion of strokes than in older populations.\nReference: Stroke: Pathophysiology, Diagnosis, and Management (Grotta).",
    tag: "Past Year Question"
  },
  {
    question_text: "A carpenter presents with lower back pain that is specifically provoked when extending his lumbar spine backward. Which deep intrinsic segmental spinal muscle group is primarily involved?",
    option_a: "Rhomboid Major",
    option_b: "Deltoid",
    option_c: "Trapezius",
    option_d: "Multifidus (and lumbar facet joints)",
    correct_option: "D",
    explanation: "The multifidus muscles stabilize and extend the lumbar spine. Lumbar extension stresses the posterior elements (multifidus, facet joints, and pars interarticularis).\nReference: Moore's Clinically Oriented Anatomy, 8th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which anatomical structure provides static deepening and stabilization of the glenohumeral joint socket?",
    option_a: "Glenoid Labrum and surrounding Rotator Cuff musculature",
    option_b: "Deltoid Muscle Belly",
    option_c: "Coracoclavicular Ligament alone",
    option_d: "Subacromial Bursa alone",
    correct_option: "A",
    explanation: "The glenoid labrum is a fibrocartilaginous ring that deepens the shallow glenoid fossa, providing primary static stability, complemented by dynamic stabilization from rotator cuff tendons.\nReference: Rockwood and Matsen's The Shoulder, 5th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "All of the following clinical conditions are associated with Down Syndrome (Trisomy 21) EXCEPT:",
    option_a: "Pes Cavus (high-arched foot)",
    option_b: "Increased risk of Acute Leukemia",
    option_c: "Early-onset Alzheimer's Disease",
    option_d: "Congenital Heart Defects (e.g. AVSD)",
    correct_option: "A",
    explanation: "Down syndrome is characterized by generalized ligamentous laxity causing Pes Planus (flat feet), NOT Pes Cavus (high arches). Leukemia, early Alzheimer's, AVSDs, and hypotonia are well-known associations.\nReference: Nelson Textbook of Pediatrics, 21st Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical statement regarding Median Nerve entrapment in Carpal Tunnel Syndrome (CTS) is CORRECT?",
    option_a: "Adductor Pollicis is innervated by the median nerve",
    option_b: "Flexor Pollicis Brevis (superficial head) is innervated by the median nerve, but thenar skin sensation is spared because the Palmar Cutaneous Branch passes superficial to the carpal tunnel",
    option_c: "Phalen's test requires full wrist extension for 10 minutes",
    option_d: "Palmar thenar eminence sensory loss is present in all cases",
    correct_option: "B",
    explanation: "The Palmar Cutaneous Branch of the median nerve branches proximal to the flexor retinaculum and passes superficial to it, sparing sensation over the thenar eminence in carpal tunnel syndrome.\nReference: Green's Operative Hand Surgery, 7th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 69-year-old male presents with 6 months of progressive lower back pain radiating to both buttocks. Pain is exacerbated during walking, eased when walking uphill or pushing a shopping cart, but worsened when walking downhill. Resting in a seated position relieves symptoms. What is the diagnosis?",
    option_a: "Lumbar Spinal Canal Stenosis (Neurogenic Claudication)",
    option_b: "Osteoporotic Vertebral Fracture",
    option_c: "Acute Sciatica",
    option_d: "Peripheral Vascular Disease",
    correct_option: "A",
    explanation: "Relief of leg pain with spinal flexion ('shopping cart sign', walking uphill) and worsening with spinal extension (walking downhill) is pathognomonic for Neurogenic Claudication secondary to Lumbar Spinal Stenosis.\nReference: Rothman-Simeone The Spine, 7th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which vascular mechanism accounts for the majority of Posterior Circulation Ischemic Strokes (PICA, AICA, PCA, Vertebrobasilar territories)?",
    option_a: "Air Embolism",
    option_b: "Pure Fat Embolism",
    option_c: "Vertebrobasilar Atherosclerosis and Cardioembolism",
    option_d: "Isolated Venous Thrombosis",
    correct_option: "C",
    explanation: "Posterior circulation strokes stem primarily from vertebrobasilar large-vessel atherosclerosis, arterial dissection, and cardiac emboli.\nReference: Stroke: Pathophysiology, Diagnosis, and Management (Grotta).",
    tag: "Past Year Question"
  },
  {
    question_text: "All of the following statements regarding Rheumatoid Arthritis (RA) are correct EXCEPT:",
    option_a: "Symmetric involvement of small joints (MCP, PIP) is typical",
    option_b: "Large joints such as knees, shoulders, and ankles can be involved",
    option_c: "Subcutaneous Rheumatoid Nodules support the diagnosis",
    option_d: "Bouchard's Nodes are a classic diagnostic physical sign of RA",
    correct_option: "D",
    explanation: "Bouchard's nodes (PIP joints) and Heberden's nodes (DIP joints) are physical signs of Osteoarthritis, NOT Rheumatoid Arthritis.\nReference: Kelley and Firestein's Textbook of Rheumatology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A male patient presents with acute knee joint pain and effusion. Arthrocentesis and imaging demonstrate linear cartilage calcification (chondrocalcinosis) and rhomboid-shaped positively birefringent crystals. What is the diagnosis?",
    option_a: "Acute Gout",
    option_b: "Pseudogout (Calcium Pyrophosphate Deposition - CPPD)",
    option_c: "Primary Osteoarthritis",
    option_d: "Psoriatic Monoarthropathy",
    correct_option: "B",
    explanation: "Chondrocalcinosis on X-ray and rhomboid-shaped, weakly positively birefringent CPPD crystals on polarized microscopy establish the diagnosis of Pseudogout.\nReference: Kelley and Firestein's Textbook of Rheumatology.",
    tag: "Past Year Question"
  },
  {
    question_text: "A stroke patient with a suprapontine cerebral lesion develops urinary incontinence. What pattern of neurogenic bladder is present?",
    option_a: "Detrusor Hyperreflexia (Overactivity) with preserved voluntary control loss but intact sphincter coordination",
    option_b: "Detrusor Hyperreflexia with Detrusor-Sphincter Dyssynergia (DSD)",
    option_c: "Flaccid Areflexic Bladder",
    option_d: "Complete urinary retention without detrusor tone",
    correct_option: "A",
    explanation: "Suprapontine lesions remove voluntary cortical inhibition of the micturition reflex, leading to Detrusor Hyperreflexia/Overactivity, but sphincter synergy remains intact (DSD occurs in infrapontine spinal cord lesions).\nReference: Campbell-Walsh-Wein Urology, 12th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 23-year-old male sustains a stab wound causing hemisection of the right side of the spinal cord at C6 (Brown-Séquard Syndrome). Which neurological finding is expected below the lesion?",
    option_a: "Total paralysis of the diaphragm",
    option_b: "Loss of pain and temperature sensation on the left side of the body",
    option_c: "Absent sensation to light touch in the left hand",
    option_d: "Paralysis of the left upper limb",
    correct_option: "B",
    explanation: "Right hemisection cuts uncrossed corticospinal and dorsal columns (causing ipsilateral right motor weakness and proprioception loss) and decussated spinothalamic tracts (causing contralateral left pain/temperature loss). C6 hemisection leaves the C3-C5 diaphragm intact.\nReference: Spinal Cord Medicine (Kirshblum & Campagnolo).",
    tag: "Past Year Question"
  },
  {
    question_text: "A 71-year-old male on Warfarin for Atrial Fibrillation collapses with right hemiplegia and global aphasia. What finding represents an ABSOLUTE CONTRAINDICATION to IV thrombolysis (rtPA)?",
    option_a: "Family history of hemorrhagic stroke in a brother",
    option_b: "History of elective hernia repair 3 months ago",
    option_c: "Active Intracranial Hemorrhage on non-contrast head CT",
    option_d: "Time of symptom onset within 2 hours",
    correct_option: "C",
    explanation: "Presence of active intracranial hemorrhage on non-contrast head CT is an absolute contraindication to thrombolysis. (Therapeutic INR > 1.7 on warfarin is also a major contraindication).\nReference: AHA/ASA Early Management of Ischemic Stroke Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "A 31-year-old female presents with progressive difficulty walking, lower back pain, distal paresthesias moving up to her elbows, and absent deep tendon reflexes following a diarrheal illness 4 weeks ago. What is the diagnosis?",
    option_a: "Guillain-Barré Syndrome (GBS / AIDP)",
    option_b: "Multiple Sclerosis",
    option_c: "Diabetic Polyneuropathy",
    option_d: "Myasthenia Gravis",
    correct_option: "A",
    explanation: "GBS presents as an acute, ascending, symmetric flaccid polyradiculoneuropathy with areflexia, typically following a gastrointestinal (e.g. Campylobacter jejuni) or respiratory infection.\nReference: Adams and Victor's Principles of Neurology, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with a Right Superior Homonymous Quadrantanopia ('pie in the sky'). Where is the lesion located?",
    option_a: "Left Optic Nerve",
    option_b: "Left Parietal Lobe",
    option_c: "Left Temporal Lobe (Meyer's loop)",
    option_d: "Optic Chiasm",
    correct_option: "C",
    explanation: "Meyer's loop passes through the temporal lobe carrying inferior retinal fibers (superior visual field). A left temporal lesion produces a Right Superior Quadrantanopia.\nReference: Blumenfeld's Neuroanatomy through Clinical Cases.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient post-MI has a lipid profile showing Total Cholesterol 5.6 mmol/L and Triglycerides 2.8 mmol/L. What is the immediate recommended management?",
    option_a: "Initiate Simvastatin combined with Gemfibrozil immediately",
    option_b: "Initiate High-Intensity Statin Therapy (e.g. Atorvastatin 40-80 mg or Rosuvastatin 20-40 mg)",
    option_c: "Advice lifestyle changes only and recheck in 6 weeks",
    option_d: "Do not start statin therapy",
    correct_option: "B",
    explanation: "ACC/AHA Guidelines mandate high-intensity statin therapy for secondary prevention in all patients with established clinical Atherosclerotic Cardiovascular Disease (ACS/MI) regardless of baseline LDL.\nReference: 2018 ACC/AHA Cholesterol Clinical Practice Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which statement regarding Autosomal Recessive inheritance is CORRECT?",
    option_a: "Affected mothers pass the disease phenotype to 100% of sons only",
    option_b: "Two carrier parents have a 50% chance of having an affected child",
    option_c: "Neurofibromatosis Type 1 is autosomal recessive",
    option_d: "The clinical disease phenotype is expressed only when the individual is homozygous for the mutant allele",
    correct_option: "D",
    explanation: "Autosomal recessive diseases require two copies of the mutated gene (homozygous state) to express the clinical phenotype. Two heterozygous carrier parents have a 25% chance per pregnancy of having an affected child.\nReference: Emery's Elements of Medical Genetics, 15th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A male patient presents with a 3-week history of worsening headache, progressive confusion, and fluctuating drowsiness following a minor head trauma. What CT scan finding is expected?",
    option_a: "Epidural Hematoma",
    option_b: "Subarachnoid Hemorrhage",
    option_c: "Intraventricular Hemorrhage",
    option_d: "Chronic Subdural Hematoma (SDH) as a crescentic hypodense/isodense collection",
    correct_option: "D",
    explanation: "Chronic Subdural Hematoma results from bridging vein tears and presents insidiously weeks after minor head trauma in elderly or anticoagulated individuals with headache, confusion, and fluctuating alertness.\nReference: Greenberg's Handbook of Neurosurgery, 9th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the single most sensitive cognitive domain feature distinguishing acute Delirium from Chronic Dementia?",
    option_a: "Presence of confusion",
    option_b: "Acute, fluctuating disturbance in Attention and Level of Consciousness",
    option_c: "Long-term memory loss",
    option_d: "Dyscalculia",
    correct_option: "B",
    explanation: "Delirium features acute onset, fluctuating course, and prominent inattention/altered consciousness. Dementia is chronic, progressive, and attention is typically preserved in early stages.\nReference: DSM-5-TR Diagnostic Criteria.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient presents with parkinsonian rigidity and resting tremor, but fails to respond to L-dopa therapy and develops progressive vertical supranuclear gaze palsy and early falls. What is the diagnosis?",
    option_a: "Multiple System Atrophy (MSA)",
    option_b: "Corticobasal Degeneration",
    option_c: "Progressive Supranuclear Palsy (PSP)",
    option_d: "Dementia with Lewy Bodies",
    correct_option: "C",
    explanation: "PSP is a Parkinson-Plus tauopathy featuring L-dopa non-responsive parkinsonism, prominent axial rigidity, early backward falls, pseudobulbar palsy, and vertical supranuclear gaze impairment.\nReference: Bradley's Neurology in Clinical Practice, 8th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "According to the ASIA International Standards for Neurological Classification of SCI (ISNCSCI), which muscle is the key muscle for grading the L4 motor level?",
    option_a: "Peroneus Longus",
    option_b: "Extensor Hallucis Longus (L5)",
    option_c: "Tibialis Anterior (Ankle Dorsiflexors)",
    option_d: "Gastrocnemius (S1)",
    correct_option: "C",
    explanation: "ASIA Key Muscles: L2 (Hip flexors - Iliopsoas), L3 (Knee extensors - Quadriceps), L4 (Ankle dorsiflexors - Tibialis Anterior), L5 (Long toe extensors - EHL), S1 (Ankle plantarflexors - Gastrocnemius/Soleus).\nReference: ASIA ISNCSCI Assessment Reference Guide.",
    tag: "Past Year Question"
  },
  {
    question_text: "A baseball player presents with severe heel pain diagnosed as Plantar Fasciitis. What is the most effective initial conservative management strategy?",
    option_a: "Minimally invasive plantar fascia release surgery",
    option_b: "Immobilization in a knee-high cast for 3 months",
    option_c: "Immediate cortisone steroid injection into heel pad",
    option_d: "Eccentric stretching exercises of the Achilles tendon / plantar fascia and orthotic heel cups",
    correct_option: "D",
    explanation: "First-line conservative management for plantar fasciitis includes plantar fascia and gastrocnemius/Achilles eccentric stretching exercises, activity modification, night splints, and cushioned orthotics.\nReference: AAOS Clinical Practice Guidelines on Plantar Fasciitis.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which statement regarding primary afferent pain fibers is CORRECT?",
    option_a: "Unmyelinated C-fibers carry slow, dull, burning, prolonged pain signals",
    option_b: "Small unmyelinated C-fibers carry sharp, fast, localized pain",
    option_c: "Pain signals bypass the spinal cord dorsal horn entirely",
    option_d: "A-beta fibers are primary nociceptors",
    correct_option: "A",
    explanation: "Unmyelinated C-fibers (conduction velocity 0.5-2 m/s) transmit slow, dull, burning, prolonged pain. A-delta fibers transmit fast, sharp, localized pain.\nReference: Guyton and Hall Textbook of Medical Physiology, 14th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A female patient with a history of transradial amputation develops an elbow flexion contracture with passive ROM limited to 75 degrees. What intervention should be implemented to reduce the contracture?",
    option_a: "Active and passive range of motion stretching combined with low-load prolonged extension splinting",
    option_b: "Immediate early prosthetic fitting without stretching",
    option_c: "Tight elastic bandaging of the stump",
    option_d: "Complete immobilization in a flexed sling",
    correct_option: "A",
    explanation: "Joint contractures are managed by low-load prolonged stretching, active/passive ROM exercises, dynamic extension splinting, and soft tissue mobilization to remodel collagen fibers.\nReference: Atlas of Amputations and Limb Deficiencies (AAOS).",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient with epigastric pain and weight loss undergoes OGDS showing low-grade Gastric Mucosa-Associated Lymphoid Tissue (MALT) Lymphoma. Biopsy is positive for Helicobacter pylori. What is the initial treatment?",
    option_a: "Emergency total gastrectomy",
    option_b: "Proton Pump Inhibitor (PPI) combined with H. pylori Eradication Antibiotic Therapy",
    option_c: "External beam abdominal radiotherapy",
    option_d: "Immediate systemic intravenous chemotherapy",
    correct_option: "B",
    explanation: "Eradication of Helicobacter pylori using triple/quadruple therapy (PPI + antibiotics) results in complete remission in up to 80% of stage I low-grade gastric MALT lymphomas.\nReference: Sleisenger and Fordtran's Gastrointestinal and Liver Disease, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A post-operative patient suddenly collapses. ECG monitor displays a sinus rhythm at 80 bpm, but no central carotid pulse is palpable (Pulseless Electrical Activity - PEA). Which intervention is CONTRAINDICATED / NOT performed?",
    option_a: "Intravenous Isotonic Crystalloid Fluid Bolus",
    option_b: "Intravenous Epinephrine 1 mg every 3-5 minutes",
    option_c: "High-quality CPR",
    option_d: "Electrical Defibrillation (Delivering a Shock)",
    correct_option: "D",
    explanation: "Defibrillation is indicated ONLY for shockable rhythms (VF and pulseless VT). Delivering shocks in non-shockable rhythms (PEA/Asystole) is ineffective and delays CPR.\nReference: AHA ACLS Guidelines.",
    tag: "Past Year Question"
  },
  {
    question_text: "During MMSE cognitive testing, asking a patient to perform serial 7s (subtracting 7 from 100) or spell the word 'WORLD' backward evaluates which cognitive domain?",
    option_a: "Attention and Working Memory / Concentration",
    option_b: "Long-term Episodic Memory",
    option_c: "Expressive Language",
    option_d: "Visuospatial Construction",
    correct_option: "A",
    explanation: "Serial 7s and spelling 'WORLD' backward assess working memory, sustained attention, and mental concentration.\nReference: Folstein Mini-Mental State Examination Manual.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which statement accurately defines Spondylosis?",
    option_a: "Anterior slippage of one vertebra over another",
    option_b: "A fracture or defect in the pars interarticularis",
    option_c: "Degenerative osteophyte formation and osteoarthritis of the spinal column",
    option_d: "Inflammatory fusion of sacroiliac joints",
    correct_option: "C",
    explanation: "Spondylosis refers to age-related degenerative spinal osteoarthrosis (osteophyte formation, disc space narrowing, facet hypertrophy). Spondylolysis is a pars defect; Spondylolisthesis is vertebral slippage.\nReference: Rothman-Simeone The Spine, 7th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Consolidation of short-term declarative memory into long-term memory occurs primarily within which limbic structure?",
    option_a: "Amygdala",
    option_b: "Fornix",
    option_c: "Hippocampus",
    option_d: "Medial Nucleus of Thalamus",
    correct_option: "C",
    explanation: "The hippocampus (medial temporal lobe) is essential for memory consolidation. Bilateral damage causes severe anterograde amnesia.\nReference: Kandel's Principles of Neural Science, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Deep Brain Stimulation (DBS) target for medication-refractory Essential Tremor is located within which brain nucleus?",
    option_a: "Caudate Nucleus",
    option_b: "Ventral Intermediate Nucleus (Vim) of the Thalamus",
    option_c: "Subthalamic Nucleus",
    option_d: "Globus Pallidus Internus",
    correct_option: "B",
    explanation: "DBS targeting the Vim nucleus of the thalamus is highly effective for severe refractory intention and postural tremors in Essential Tremor.\nReference: Greenberg's Handbook of Neurosurgery.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which side effect is characteristically associated with Tizanidine, an alpha-2 adrenergic agonist used in spasticity management?",
    option_a: "Somnolence (sedation), dry mouth, and hypotension",
    option_b: "Severe cardiotoxicity",
    option_c: "Abnormal renal function tests",
    option_d: "Severe hyperkalemia",
    correct_option: "A",
    explanation: "Tizanidine is a central alpha-2 agonist that decreases spasticity by increasing presynaptic inhibition. Its primary adverse effects are somnolence, dry mouth, weakness, and hypotension.\nReference: Goodman & Gilman's Pharmacological Basis of Therapeutics.",
    tag: "Past Year Question"
  },
  {
    question_text: "Goals of Intrathecal Baclofen (ITB) therapy in post-stroke spastic hypertonia include all of the following EXCEPT:",
    option_a: "Improved positioning and hygiene",
    option_b: "Prevention of contractures and skin breakdown",
    option_c: "Easing caregiver burden and transfer time",
    option_d: "Immediate initiation of independent community ambulation in complete paralysis",
    correct_option: "D",
    explanation: "ITB reduces severe spastic tone to improve positioning, comfort, hygiene, and reduce caregiver burden. It cannot restore voluntary motor power or initiate ambulation in completely paralyzed limbs.\nReference: Braddom's Physical Medicine and Rehabilitation, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which statement regarding Glenohumeral Subluxation following stroke is CORRECT?",
    option_a: "It is always accompanied by severe joint pain",
    option_b: "It requires emergency surgical shoulder fusion in all cases",
    option_c: "It occurs late in the recovery phase",
    option_d: "It is strongly associated with flaccid hemiplegia during the acute stage",
    correct_option: "D",
    explanation: "Glenohumeral subluxation occurs early in stroke during the flaccid phase when supraspinatus and deltoid muscle tone is absent, allowing gravity to pull the humerus downward.\nReference: Braddom's Physical Medicine and Rehabilitation, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "In acute stroke rehabilitation patients, malnutrition and hypoalbuminemia are associated with:",
    option_a: "Reduced mortality",
    option_b: "Better functional outcomes",
    option_c: "Shorter length of stay",
    option_d: "Higher clinical complication rates (e.g. pressure injuries, infection) and poorer functional recovery",
    correct_option: "D",
    explanation: "Malnutrition and low serum albumin correlate with impaired wound healing, increased infection risk, higher complication rates, and poorer functional outcomes in stroke rehabilitation.\nReference: NICE Guidelines for Stroke Rehabilitation.",
    tag: "Past Year Question"
  },
  {
    question_text: "Common medical complications encountered during acute post-stroke inpatient rehabilitation include all of the following EXCEPT:",
    option_a: "Patient falls",
    option_b: "Urinary tract and pulmonary infections",
    option_c: "Severe Aplastic Anemia in 90% of stroke patients",
    option_d: "Deep Vein Thrombosis (DVT)",
    correct_option: "C",
    explanation: "Common post-stroke complications include infections (UTI/aspiration pneumonia), falls, DVT/PE, pressure injuries, depression, and pain. Aplastic anemia is not a common stroke complication.\nReference: Braddom's Physical Medicine and Rehabilitation, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "All of the following clinical features are associated with poor driving performance evaluation post-stroke EXCEPT:",
    option_a: "Right hemisphere stroke location with visuospatial neglect",
    option_b: "Isolated mild expressive Aphasia with intact visuospatial judgment",
    option_c: "Impulsivity and poor judgment",
    option_d: "Visual perceptual deficits",
    correct_option: "B",
    explanation: "Visuospatial neglect, perceptual deficits, executive dysfunction, and impulsivity (often seen in right hemisphere strokes) are strong predictors of poor driving performance. Mild expressive aphasia with preserved visuospatial skills is not inherently prohibitive.\nReference: Stroke Rehabilitation: A Function-Based Approach, 5th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "All of the following clinical findings are features of Lateral Medullary Syndrome (Wallenberg Syndrome) EXCEPT:",
    option_a: "Ipsilateral Horner's Syndrome",
    option_b: "Dysphagia and vocal cord paralysis (CN IX, X)",
    option_c: "Contralateral Hemiplegia (corticospinal weakness)",
    option_d: "Ipsilateral facial sensory deficit (trigeminal nucleus)",
    correct_option: "C",
    explanation: "Lateral Medullary Syndrome (PICA stroke) affects lateral structures (spinothalamic tract, inferior cerebellar peduncle, nucleus ambiguus, sympathetic fibers) but SPARES the medial corticospinal tract. Hemiplegia occurs in Medial Medullary Syndrome.\nReference: Blumenfeld's Neuroanatomy through Clinical Cases, 3rd Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "A patient diagnosed with Alexia has lost the cognitive ability to:",
    option_a: "Recognize familiar faces",
    option_b: "Write words",
    option_c: "Read written text",
    option_d: "Perform mathematical calculations",
    correct_option: "C",
    explanation: "Alexia is the inability to read written language. Agraphia is the inability to write. Acalculia is inability to perform math. Prosopagnosia is inability to recognize faces.\nReference: Lezak's Neuropsychological Assessment, 5th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Uncal herniation (transtentorial herniation) compresses which cranial nerve as it exits the midbrain?",
    option_a: "Cranial Nerve III (Oculomotor Nerve)",
    option_b: "Cranial Nerve X",
    option_c: "Cranial Nerve I",
    option_d: "Cranial Nerve VII",
    correct_option: "A",
    explanation: "Herniation of the medial temporal uncus over the tentorial incisura compresses the ipsilateral CN III, leading to pupil dilation (mydriasis) and ptosis.\nReference: Greenberg's Handbook of Neurosurgery, 9th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the recommended first-line non-pharmacological environmental intervention for acute post-traumatic agitation following TBI?",
    option_a: "Applying 4-point physical restraints immediately",
    option_b: "Placing the patient in a quiet, low-stimulation room and limiting visitors",
    option_c: "Calling hospital security force",
    option_d: "High-dose IM Haloperidol",
    correct_option: "B",
    explanation: "First-line management for post-traumatic agitation involves environmental modification: reducing stimulation (quiet room, low lighting), limiting visitors, maintaining consistent routines, and eliminating physical restraints if safe.\nReference: Brain Injury Medicine: Principles and Practice (Zafonte).",
    tag: "Past Year Question"
  },
  {
    question_text: "Which description accurately characterizes 'Locked-In' Syndrome (typically caused by a ventral pontine lesion)?",
    option_a: "Paralyzed (quadriplegic) with preserved consciousness, sensation, vertical eye movement, and blinking",
    option_b: "Intact motor power with complete receptive aphasia",
    option_c: "Comatose without eye opening",
    option_d: "Unconscious with flat EEG",
    correct_option: "A",
    explanation: "Locked-In Syndrome (ventral pontine lesion disrupting corticospinal/corticobulbar tracts) spares consciousness, tegmental sensory pathways, and vertical eye movements (midbrain CN III/IV).\nReference: Adams and Victor's Principles of Neurology, 11th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Gerstmann's Syndrome caused by a dominant parietal angular gyrus lesion includes all of the following cardinal symptoms EXCEPT:",
    option_a: "Agraphia",
    option_b: "Alexia with Agraphia",
    option_c: "Acalculia",
    option_d: "Finger Agnosia",
    correct_option: "B",
    explanation: "Gerstmann Syndrome strictly consists of 4 features: Agraphia, Acalculia, Finger Agnosia, and Left-Right Disorientation. Alexia is not part of pure Gerstmann syndrome.\nReference: Lezak's Neuropsychological Assessment, 5th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "All of the following are examples of Frontal-Subcortical Dementias EXCEPT:",
    option_a: "Vascular Dementia",
    option_b: "Parkinson's Disease Dementia",
    option_c: "Frontotemporal Dementia (Pick's Disease - Cortical Dementia)",
    option_d: "Normal Pressure Hydrocephalus",
    correct_option: "C",
    explanation: "Frontotemporal Dementia is classified as a primary CORTICAL dementia (along with Alzheimer's). NPH, Vascular, and Parkinson's dementia are subcortical/frontal-subcortical dementias.\nReference: Bradley's Neurology in Clinical Practice, 8th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "What is the most common anatomical site for Heterotopic Ossification (HO) formation following severe Traumatic Brain Injury?",
    option_a: "Shoulder",
    option_b: "Elbow",
    option_c: "Knee",
    option_d: "Hip Joint",
    correct_option: "D",
    explanation: "The hip is the most frequent site of Heterotopic Ossification post-TBI (followed by elbow, shoulder, and knee). Post-SCI, hip is also most common.\nReference: Braddom's Physical Medicine and Rehabilitation, 6th Edition.",
    tag: "Past Year Question"
  },
  {
    question_text: "Which clinical assessment tool is specifically validated to measure Post-Traumatic Amnesia (PTA) duration during recovery from TBI?",
    option_a: "Functional Independence Measure (FIM)",
    option_b: "Glasgow Outcome Scale (GOS)",
    option_c: "Galveston Orientation and Amnesia Test (GOAT)",
    option_d: "Mini-Mental State Examination (MMSE)",
    correct_option: "C",
    explanation: "The GOAT (and O-Log) is specifically designed and validated to track resolution of Post-Traumatic Amnesia and orientation recovery post-TBI.\nReference: Brain Injury Medicine: Principles and Practice (Zafonte).",
    tag: "Past Year Question"
  },
 {
    "question_text": "A 45-year-old man with stroke has weakness of the right arm, difficulty of dressing and an inability to return to work as a carpenter. According to the International Classification of Functioning, Disability and Health framework, his inability to return to work is best classified as",
    "option_a": "activity limitation",
    "option_b": "personal factor",
    "option_c": "impairment",
    "option_d": "participation restriction",
    "correct_option": "D",
    "explanation": "In the ICF, participation is involvement in a life situation. Employment is coded in ICF Chapter d8 (Major life areas — work and employment). A problem with involvement in that life situation is a participation restriction. A. Activity limitation — an activity is execution of a task by the individual (e.g. dressing, reaching). \"Difficulty dressing\" in this stem is the activity limitation; returning to work is the societal role. B. Personal factor — age, sex, coping style, education, past experience. Not a functioning problem. C. Impairment — a problem in body function or structure. The right arm weakness is the impairment.\nReference: WHO ICF (2001), Chapters d5 (self-care) and d8 (major life areas); Braddom Ch. 1 \"Physician-Patient Interaction and Assessment\"; WHO ICF Beginner's Guide (searchable PDF: \"How to use the ICF – WHO practical manual\").",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which is cleaved specifically by botulinum neurotoxin type A?",
    "option_a": "Soluble N-ethylmaleimide Attachment Protein-25",
    "option_b": "Synaptic vesicle protein 2",
    "option_c": "Syntaxin",
    "option_d": "Synaptobrevin or Vesicle Associated Membrane Protein",
    "correct_option": "A",
    "explanation": "BoNT/A and BoNT/E cleave SNAP-25. Cleavage prevents SNARE complex assembly, so acetylcholine vesicles cannot fuse with the presynaptic membrane — chemodenervation. B. SV2 — SV2 is the receptor by which BoNT/A enters the nerve terminal, not the cleavage substrate. Classic trap. C. Syntaxin — cleaved by BoNT/C (along with SNAP-25). D. Synaptobrevin/VAMP — cleaved by BoNT/B, D, F and G (and by tetanus toxin). Memory aid: A cleaves SNAP-25; B cleaves VAMB (VAMP).\nReference: StatPearls, \"Botulinum Toxin\"; Rossetto O, Pirazzini M, Montecucco C. Nat Rev Microbiol 2014;12:535–49 (searchable on PubMed: \"Botulinum neurotoxins: genetic, structural and mechanistic insights\").",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 60-year-old woman undergoes total knee replacement for osteoarthritis. Which rehabilitation intervention is most important in the early post-operative phase?",
    "option_a": "Early range of motion and quadriceps strengthening",
    "option_b": "Functional mobility and gait re-training",
    "option_c": "Prolonged knee immobilisation",
    "option_d": "Non-weight-bearing restriction for 6 weeks",
    "correct_option": "A",
    "explanation": "The dominant early risks after TKR are loss of knee flexion/extension range (arthrofibrosis) and rapid quadriceps inhibition/atrophy. Early ROM and quadriceps activation on day 0–1 are the priority interventions; weight-bearing as tolerated is standard. B. Functional mobility and gait re-training — important and usually started the same day, but gait is limited by the ROM and quads deficits; it is the consequence target, not the most important early intervention. This is the closest distractor. C. Prolonged immobilisation — directly causes stiffness and arthrofibrosis. Contraindicated. D. Non-weight-bearing for 6 weeks — not indicated for a routine primary TKR; WBAT is standard.\nReference: Braddom Ch. 43 \"Osteoarthritis\"/ lower limb joint replacement rehabilitation; AAOS \"Total Knee Replacement\" OrthoInfo patient/clinician pages (orthoinfo.aaos.org).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A patient with paraplegia and a normal body build has good upper-limb strength and can independently self-propel a wheelchair for community mobility. Which wheelchair type is most appropriate?",
    "option_a": "Lightweight manual wheelchair",
    "option_b": "Standard manual wheelchair",
    "option_c": "Powered wheelchair",
    "option_d": "Heavy-duty manual wheelchair",
    "correct_option": "A",
    "explanation": "An active self-propelling paraplegic user with good upper limbs needs the lowest possible rolling mass and an adjustable rear-axle position to reduce the propulsion forces that cause shoulder overuse injury. That is a lightweight (or ultralight) rigid/folding manual chair. B. Standard manual wheelchair — heavy (≈16–20 kg), fixed axle, designed for institutional/occasional transport use. Higher propulsion effort and higher upper-limb injury risk for a full-time user. C. Powered wheelchair — indicated when upper limb strength/endurance is insufficient. Would cause unnecessary deconditioning here. D. Heavy-duty — indicated for bariatric users or very high-impact use; unnecessary for a \"normal body build\".\nReference: Braddom Ch. 17 \"Wheelchairs and Seating Systems\"; Paralyzed Veterans of America / Consortium for Spinal Cord Medicine, \"Preservation of Upper Limb Function Following Spinal Cord Injury\" (free PDF, searchable).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 58-year-old man, 4 weeks after a stroke, has right upper limb spasticity and reduced dexterity. He reports difficulty buttoning his shirt and has stopped attending his weekly social gatherings due to embarrassment. Which of the following best represents a participation restriction?",
    "option_a": "Difficulty buttoning his shirt",
    "option_b": "Stopping attendance at religious gatherings",
    "option_c": "Reduced dexterity in the hand",
    "option_d": "Spasticity of the right upper limb",
    "correct_option": "B",
    "explanation": "Community, social and civic life, including religion and spirituality, is ICF Chapter d9 — a life situation. Withdrawal from it is a participation restriction. A. Difficulty buttoning his shirt — an activity limitation (self-care task, d5). C. Reduced dexterity — impairment of body function (b7 neuromusculoskeletal). D. Spasticity — impairment of body function (b735 muscle tone functions).\nReference: WHO ICF (2001) Chapter d9; Braddom Ch. 1.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 35-year-old chef presents with pain over the radial aspect of the wrist, which is aggravated by thumb movement. Finkelstein's test is positive. Which type of orthosis is most appropriate for the condition?",
    "option_a": "Wrist cock-up splint",
    "option_b": "Short opponens splint",
    "option_c": "Finger gutter splint",
    "option_d": "Long opponens splint",
    "correct_option": "D",
    "explanation": "This is de Quervain tenosynovitis (stenosing tenosynovitis of APL and EPB in the first dorsal compartment). Effective immobilisation must include the wrist in ~15–20° extension plus the thumb CMC and MCP in palmar abduction, because the tendons cross the radial styloid and are loaded by wrist motion. A long opponens splint is forearm-based and includes the wrist — hence it is the thumb spica used for de Quervain. A. Wrist cock-up — immobilises the wrist but leaves the thumb free; the thumb motion is the provocative one. B. Short opponens — hand-based, positions the thumb but does not cross the wrist. Used for thumb CMC osteoarthritis and median nerve palsy (to maintain the thumb web space). It undertreats de Quervain. C. Finger gutter splint — for digital/phalangeal injury; irrelevant. Note: Some question banks key this as \"short opponens\" on the logic that the thumb is the problem. The clinical literature and hand-therapy standard is the forearm-based (long) thumb spica. If your faculty's key says B, the difference is exactly the wrist component — argue it on that basis.\nReference: StatPearls, \"De Quervain Tenosynovitis\"; Braddom Ch. 8 \"Upper Limb Orthoses\" (opponens splint nomenclature: short = hand-based, long = forearm-based); American Society of Hand Therapists orthosis nomenclature.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 65-year-old man presents 2 weeks after a left hemispheric ischaemic stroke. He has right- sided hemiparesis, mild upper-limb spasticity and impaired balance during transfers. He is alert, follows commands and is medically stable. The rehabilitation team wishes to quantify motor recovery of the affected upper limb to guide therapy and monitor changes over time. Which outcome measure is the most appropriate?",
    "option_a": "Fugl-Meyer Assessment",
    "option_b": "Modified Rankin Scale",
    "option_c": "Modified Barthel Index",
    "option_d": "National Institute of Health Stroke Scale",
    "correct_option": "A",
    "explanation": "The FMA-UE is the reference-standard impairment-level measure of post-stroke motor recovery. It is ordinal, hierarchical (follows Brunnstrom synergy recovery), responsive to change, and is the measure used to define \"motor recovery\" in stroke trials. B. Modified Rankin Scale — global disability/handicap, 0–6. Far too coarse to track limb motor change. C. Modified Barthel Index — ADL independence (activity level), not limb motor impairment. D. NIHSS — acute stroke severity/triage tool; the motor arm item is only 0–4 and is not designed to track rehabilitation progress.\nReference: Shirley Ryan AbilityLab \"Rehabilitation Measures Database\" (sralab.org/rehabilitation-measures) — entry \"Fugl-Meyer Assessment of Motor Recovery after Stroke\"; Braddom Ch. 44 \"Stroke Syndromes\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which of the following best describes a gait stride?",
    "option_a": "Time during which both feet are in contact with the ground",
    "option_b": "Distance between corresponding heel strikes of the same foot",
    "option_c": "Distance from heel strike of one foot to heel strike of the opposite foot",
    "option_d": "Period when the foot is in the air for limb advancement",
    "correct_option": "B",
    "explanation": "A stride = one full gait cycle = ipsilateral heel strike to the next ipsilateral heel strike. Normal ≈ 1.4–1.6 m. A. That defines double limb support (≈10% of the cycle at each of two occurrences, ≈20% total). C. That defines step length (≈half of stride length). D. That defines the swing phase (≈40% of the cycle).\nReference: Perry J, Burnfield JM. Gait Analysis: Normal and Pathological Function, 2nd ed., Ch. 1; Cuccurullo (NCBI Bookshelf), \"Gait\" chapter.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 55-year-old woman with knee osteoarthritis reports difficulty climbing stairs and walking long distances. She recently installed handrails at home, which improved her mobility. Installation of handrails is best classified under which component of the International Classification of Functioning, Disability and Health?",
    "option_a": "Participation",
    "option_b": "Environmental",
    "option_c": "Activity",
    "option_d": "Personal",
    "correct_option": "B",
    "explanation": "ICF environmental factors (e-codes) cover the physical, social and attitudinal world. Assistive products and technology for personal use in daily living, including home adaptations, are coded e115/e155 (design and construction of buildings for private use). A handrail is a facilitator in the environment. A. Participation — a life situation, not a physical object. C. Activity — task execution (stair climbing is the activity; the rail is not). D. Personal — an internal contextual factor (age, motivation, education). A physical rail is external.\nReference: WHO ICF (2001), Environmental Factors chapters e1 and e155.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A rehabilitation physician is assessing a 52-year-old stroke survivor with left upper limb spasticity. During passive movement of the patient's left elbow from full extension to full flexion, the physician notes a catch in the movement followed by minimal resistance throughout less than half of the remaining range of motion. The limb can be moved through its full range without difficulty. According to the Modified Ashworth Scale, which grade most accurately describes the level of spasticity?",
    "option_a": "Grade 1+",
    "option_b": "Grade 3",
    "option_c": "Grade 2",
    "option_d": "Grade 1",
    "correct_option": "A",
    "explanation": "Modified Ashworth Scale: Grade: 0; Description: No increase in tone. Grade: 1; Description: Catch and release, or minimal resistance at end of range. Grade: 1+; Description: Catch followed by minimal resistance through less than half of the remaining ROM. Grade: 2; Description: Marked increase through most of ROM, but part easily moved. Grade: 3; Description: Considerable increase, passive movement difficult. Grade: 4; Description: Rigid in flexion or extensionThe stem reproduces 1+ almost verbatim. B. Grade 3 — passive movement would be difficult; the stem says it moves through full range without difficulty. C. Grade 2 — resistance would be through most of the ROM, not less than half. D. Grade 1 — catch and release only, or minimal resistance only at end range, with no sustained resistance component.\nReference: Bohannon RW, Smith MB. Phys Ther 1987;67:206–7 (searchable on PubMed: \"Interrater reliability of a modified Ashworth scale of muscle spasticity\"); Shirley Ryan AbilityLab Rehabilitation Measures Database, \"Modified Ashworth Scale\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which is the main biomechanical feature of a solid ankle-foot orthosis?",
    "option_a": "Allows controlled dorsiflexion but blocks plantarflexion",
    "option_b": "Allows free dorsiflexion while limiting plantarflexion",
    "option_c": "Provides dynamic spring-assisted dorsiflexion during the swing phase",
    "option_d": "Restricts both dorsiflexion and plantarflexion at the ankle joint",
    "correct_option": "D",
    "explanation": "A solid (rigid) AFO has no joint and a trimline anterior to the malleoli, so it blocks ankle motion in both directions. It therefore controls equinus in stance, clears the foot in swing, and — with an appropriately stiff footplate — stabilises the knee. A. Describes a plantarflexion stop (e.g. hinged AFO with posterior stop) — free dorsiflexion is exactly what a solid AFO does not allow. B. Also describes an articulated AFO with a plantarflexion stop. C. Describes a posterior leaf spring AFO — flexible, trimline posterior to the malleoli, springs the foot up in swing.\nReference: Braddom Ch. 9 \"Lower Limb Orthoses\"; Cuccurullo (NCBI Bookshelf), \"Orthotics\" chapter.",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which is the most important in preparing an amputee's residual limb for prosthetic fitting?",
    "option_a": "Regular compression dressing",
    "option_b": "Immobilisation of the stump",
    "option_c": "Daily moisturising of the skin",
    "option_d": "Application of rigid bracing",
    "correct_option": "A",
    "explanation": "Oedema control is the rate-limiting step to fitting. Elastic bandaging, shrinker socks or a removable rigid dressing reduce volume, shape the limb into a conical/cylindrical form, protect the wound, and desensitise the limb. B. Immobilisation — causes contracture (knee flexion in transtibial, hip flexion/abduction in transfemoral), which is a major cause of failed prosthetic fitting. C. Daily moisturising — good skin care, genuinely useful, but adjunctive; it does not shape the limb. D. Rigid bracing — not the terminology used; a removable rigid dressing is a form of compression/protection, but \"rigid bracing\" as written is not standard limb preparation.\nReference: Braddom Ch. 10 \"Lower Limb Amputation and Gait\"; VA/DoD Clinical Practice Guideline for Rehabilitation of Lower Limb Amputation (free PDF, healthquality.va.gov).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 25-year-old male with a complete T12 spinal cord injury presents with significant ankle instability and severe spasticity in his gastrocnemius-soleus complex. On assessment, he has no active dorsiflexion and plantarflexion. Which type of ankle-foot orthosis (AFO) is most appropriate for the stance phase?",
    "option_a": "Dynamic AFO",
    "option_b": "Posterior leaf spring AFO",
    "option_c": "Hinged AFO",
    "option_d": "Solid AFO",
    "correct_option": "D",
    "explanation": "With flaccid/absent ankle control plus spasticity plus medio-lateral instability, the orthosis must provide maximum triplanar control and a stable base in stance. Only a solid AFO does this. A. Dynamic AFO — designed to assist/permit motion; will not control severe spasticity or ML instability. B. Posterior leaf spring — flexible, gives swing-phase dorsiflexion assist only; provides essentially no medio-lateral stability and will deform under spastic plantarflexion. C. Hinged AFO — allows sagittal motion; appropriate when there is some voluntary control and no significant spasticity, and needs adequate ML stability elsewhere.\nReference: Braddom Ch. 9 \"Lower Limb Orthoses\"; Cuccurullo (NCBI Bookshelf), \"Orthotics\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which is the main function of a prosthetic suspension system?",
    "option_a": "Weight distribution",
    "option_b": "Shock absorption",
    "option_c": "Improve cosmetic appearance",
    "option_d": "Prevent prosthesis from slipping off",
    "correct_option": "D",
    "explanation": "Suspension (suction, pin/lock with liner, sleeve, supracondylar/cuff strap, silesian belt, TES belt) is by definition the mechanism that holds the prosthesis on the residual limb through the swing phase and resists pistoning. A. Weight distribution — that is the job of the socket (total surface bearing or specific pressure-tolerant loading). B. Shock absorption — the job of the foot/pylon components (e.g. SACH heel, vertical shock pylon) and the liner. C. Cosmesis — the job of the cosmetic cover.\nReference: Braddom Ch. 10; Cuccurullo (NCBI Bookshelf), \"Prosthetics\" chapter.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 60 year old woman, with chronic knee osteoarthritis with a history of bilateral total knee replacement reports persistent pain in her knees rated 5/10. She has tried taking PCM with minimal relief and wishes to avoid oral meds due to gastric upset. Which physical modality is most appropriate for her pain management?",
    "option_a": "Transcutaneous electrical nerve stimulation",
    "option_b": "Ultrasound therapy in continuous mode",
    "option_c": "Shortwave diathermy",
    "option_d": "Hot pack application",
    "correct_option": "A",
    "explanation": "TENS is non-pharmacological, self-administered, has essentially no systemic side effects, and is the appropriate modality when oral analgesia is limited by GI intolerance. It is also the only listed option that is safe over a metal implant. B. Continuous ultrasound and C. Shortwave diathermy are contraindicated over metallic implants (deep heating causes selective heating of metal and tissue burns). She has bilateral prostheses. D. Hot packs — superficial heat is safe but gives only brief, low-grade relief; it is the weakest option for persistent moderate pain. Note: The implant detail is the whole point of this question — don't miss it.\nReference: Braddom Ch. 15 \"Physical Agent Modalities\" (contraindications to deep heat: metal implants, malignancy, ischaemia, insensate skin); StatPearls, \"Transcutaneous Electrical Nerve Stimulation (TENS)\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which statement best describes the clinical application of the International Classification of Functioning (ICF)?",
    "option_a": "Summarising diagnosis, comorbidities and disease severity in a structured framework to guide rehabilitation planning",
    "option_b": "Describing health in a structured framework to track progress and compare outcomes between visits",
    "option_c": "Describing health and functioning to assist rehabilitation targets using a standardised framework",
    "option_d": "Summarising key barriers and support in the environment to guide intervention planning",
    "correct_option": "C",
    "explanation": "The ICF is a classification of functioning and disability — not of disease. Its clinical purpose is to provide a common, standardised language for describing functioning so that problems can be identified and rehabilitation goals/targets set (the basis of the Rehab-Cycle and ICF Core Sets). A. Diagnosis, comorbidity and disease severity are the domain of the ICD, the ICF's companion classification — not the ICF. B. Tracking progress and comparing outcomes is a legitimate secondary use, and this is the strongest distractor; but it describes measurement over time rather than the framework's core clinical application, and \"describing health\" alone omits functioning. D. Environmental barriers and facilitators are only one component (e-codes) of the ICF; this describes a part, not the whole.\nReference: WHO ICF (2001), Introduction §4 \"Applications of ICF\"; Rauch A, Cieza A, Stucki G. \"How to apply the ICF for rehabilitation management in clinical practice.\" Eur J Phys Rehabil Med 2008 (PubMed).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 60-year-old woman undergoing rehabilitation after a stroke demonstrates pelvic drop on the right side when standing on her left leg during walking. Which muscle is responsible for stabilising the pelvis during the stance phase of gait?",
    "option_a": "Adductor magnus",
    "option_b": "Gluteus maximus",
    "option_c": "Gluteus medius",
    "option_d": "Iliopsoas",
    "correct_option": "C",
    "explanation": "The hip abductors (gluteus medius, with minimus and TFL) of the stance limb generate the abduction moment that prevents the contralateral (swing-side) pelvis from dropping. Weak left gluteus medius → the right pelvis drops = Trendelenburg sign. A. Adductor magnus — hip adductor/extensor; does not stabilise the pelvis in the frontal plane in this way. B. Gluteus maximus — hip extensor; weakness gives a gluteus maximus lurch (posterior trunk lean at initial contact), not pelvic drop. D. Iliopsoas — hip flexor; weakness impairs limb advancement in swing.\nReference: Perry & Burnfield, Gait Analysis, Ch. on hip; StatPearls, \"Trendelenburg Gait\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 70-year-old man presents with bilateral ankles in plantar flexion after being immobilised in bed for several months following a severe stroke. On examination, both ankles are in 20° of plantarflexion during both slow and fast passive range of motions. Which is the most appropriate initial treatments?",
    "option_a": "Oral anti-spasticity medication",
    "option_b": "Prolonged low-load stretching using splinting",
    "option_c": "Repeated rapid stretching exercises",
    "option_d": "Intramuscular botulinum toxin-A injection",
    "correct_option": "B",
    "explanation": "Resistance that does not change with the velocity of stretch is not spasticity — it is a fixed contracture (soft tissue/structural shortening). Contracture responds to prolonged low-load stretch: serial casting, splinting, positioning, tilt table standing. A. Oral anti-spasticity medication — treats velocity-dependent hypertonia. There is none here, and systemic agents (baclofen, tizanidine) would only sedate him. C. Repeated rapid stretching — rapid stretch provokes the stretch reflex and risks muscle/tendon injury; ineffective for collagen remodelling, which requires low-load, long-duration stress. D. Botulinum toxin-A — chemodenervation of a muscle that is not overactive. No benefit in a purely fixed contracture.\nReference: Braddom Ch. 30 \"Spasticity\" (spasticity is velocity-dependent by Lance's definition) and Ch. 15; StatPearls, \"Contractures\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which is the most appropriate goal of neuromuscular electrical stimulation in a foot drop post stroke?",
    "option_a": "Provide pain relief after therapeutic and functional weight bearing",
    "option_b": "Reduce joint stiffness and contractures",
    "option_c": "Promote muscle relaxation and flexibility",
    "option_d": "Improve voluntary muscle contraction and prevent atrophy",
    "correct_option": "D",
    "explanation": "NMES applied to the common peroneal nerve/tibialis anterior produces supramaximal motor-level stimulation. Its therapeutic goals are motor re-education (strengthening the link between voluntary effort and contraction), prevention of disuse atrophy, and maintenance of dorsiflexion range — with the functional electrical stimulation variant additionally providing swing-phase clearance. A. Pain relief — that is sensory-level stimulation (TENS), a different parameter set and a different goal. B. Reduce stiffness and contracture — a secondary effect at best; stretching/splinting is the primary treatment. C. Promote relaxation and flexibility — describes low-intensity/sensory stimulation or thermal modalities, not motor-level NMES.\nReference: Braddom Ch. 15 \"Physical Agent Modalities\" / electrical stimulation; StatPearls, \"Functional Electrical Stimulation\"; AHA/ASA Guidelines for Adult Stroke Rehabilitation and Recovery (Stroke 2016) — searchable on ahajournals.org.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 55-year-old man presents after sustaining a cervical hyperextension injury following a fall. On examination, motor power of the upper limbs is generally 1-2/5, whereas the lower limbs are generally 3-4/5. There is diminished pain and crude touch sensation from C5 to C8 dermatomes bilaterally, while sensation from T1 downward is preserved. Which pattern of spinal cord injury best explains the finding?",
    "option_a": "Brown-Séquard syndrome",
    "option_b": "Anterior cord syndrome",
    "option_c": "Central cord syndrome",
    "option_d": "Posterior cord syndrome",
    "correct_option": "C",
    "explanation": "The hallmark is upper limbs weaker than lower limbs after a hyperextension injury (classically an elderly patient with cervical spondylosis, but any age). The centrally-placed cervical fibres of the corticospinal tract and the decussating spinothalamic fibres in the anterior commissure are damaged, giving the \"cape\" or suspended sensory loss with sacral sparing. It is the commonest incomplete cord syndrome. A. Brown-Séquard — hemisection: ipsilateral motor and dorsal column loss, contralateral pain/temperature loss. This stem is symmetrical. B. Anterior cord syndrome — loss of motor and pain/temperature below the level with preserved proprioception/vibration; typically flexion injury or anterior spinal artery infarct. It does not produce UL-worse-than-LL. D. Posterior cord syndrome — rare; isolated dorsal column loss (proprioception, vibration) with preserved power and pain/temperature.\nReference: Braddom Ch. 49 \"Spinal Cord Injury\"; StatPearls, \"Central Cord Syndrome\"; ASIA ISNCSCI reference material (asia-spinalinjury.org).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 24-year-old man is admitted to the rehabilitation unit following a stab injury to the mid- thoracic spine. On neurological examination, he exhibits 0/5 power in the right lower limb with associated hyperreflexia and an upgoing plantar response. He has a loss of proprioception and vibration sense in the right leg. On the left side, he has full motor power but demonstrates a complete loss of pain and temperature sensation starting 3 levels below the injury site. Which of the following best describes the anatomical extent of the spinal cord lesion?",
    "option_a": "Anterior cord syndrome",
    "option_b": "Posterior cord syndrome",
    "option_c": "Brown-Séquard syndrome",
    "option_d": "Central cord syndrome",
    "correct_option": "C",
    "explanation": "Classic cord hemisection. - Ipsilateral (right): corticospinal tract → UMN weakness, hyperreflexia, upgoing plantar; dorsal columns → loss of proprioception and vibration. - Contralateral (left): spinothalamic tract → loss of pain and temperature, beginning 1–2 (up to 3) levels below the lesion because fibres ascend before decussating in the anterior white commissure (Lissauer's tract). Penetrating trauma (stab) is the commonest cause of a true Brown-Séquard. A. Anterior cord — proprioception would be preserved; deficits bilateral. B. Posterior cord — no motor deficit; no pain/temperature loss. D. Central cord — bilateral, UL > LL, cape distribution, not a hemisection pattern.\nReference: StatPearls, \"Brown-Sequard Syndrome\"; Braddom Ch. 49.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 38-year-old is admitted to an inpatient rehabilitation program 6 months after a severe traumatic brain injury. Over the last 2 weeks, the clinical team has observed significant stagnation in progress and a noticeable deterioration in his cognitive and behavioural function. A non-contrast CT brain reveals uniform ventricular dilation, marked sulcal effacement and periventricular lucency. Which is the most likely diagnosis?",
    "option_a": "Post-traumatic hydrocephalus",
    "option_b": "Intracranial infection",
    "option_c": "Hydrocephalus ex vacuo",
    "option_d": "Metabolic encephalopathy",
    "correct_option": "A",
    "explanation": "Three findings together make this active (communicating) hydrocephalus, not atrophy: 1. Uniform/symmetrical ventricular enlargement including temporal horns, 2. Sulcal effacement — the sulci are compressed, indicating raised volume/pressure, 3. Periventricular lucency — transependymal CSF resorption. Clinically: plateau or regression in rehabilitation progress, the classic presentation of PTH. C. Hydrocephalus ex vacuo — the crucial contrast. Ventricles enlarge passively to fill space lost to atrophy, so sulci are widened, not effaced, and there is no transependymal oedema. B. Intracranial infection — would expect fever, meningism, raised inflammatory markers, meningeal enhancement. D. Metabolic encephalopathy — would not produce structural CT findings.\nReference: Radiopaedia, \"Post-traumatic hydrocephalus\" and \"Hydrocephalus ex vacuo\"; Braddom Ch. 43 \"Traumatic Brain Injury\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "An older woman presents with a sensation of spinning, as if she is pulled to the right. Examination reveals right-sided limb ataxia, as well as reduced pain and temperature sensation on the right side of the face and the left side of the body. Which other finding is likely present in the patient?",
    "option_a": "Right hemiparesis",
    "option_b": "Deviated tongu",
    "option_c": "Hemianopia",
    "option_d": "Absent gag reflex",
    "correct_option": "D",
    "explanation": "This is lateral medullary (Wallenberg) syndrome — PICA or vertebral artery territory. The crossed sensory pattern (ipsilateral face via spinal trigeminal nucleus, contralateral body via spinothalamic tract) is pathognomonic. The nucleus ambiguus lies in the same territory, producing dysphagia, hoarseness, and a loss of the gag reflex ipsilaterally. Ipsilateral Horner syndrome and vestibular nuclear involvement (the \"pulling\" sensation, lateropulsion) complete the picture. A. Right hemiparesis — the corticospinal tract is in the medial medulla and is characteristically spared in Wallenberg; the absence of weakness is a diagnostic feature. B. Deviated tongue — hypoglossal nucleus/nerve, medial medullary (Dejerine) syndrome. C. Hemianopia — occipital/PCA territory, not medulla.\nReference: StatPearls, \"Lateral Medullary Syndrome (Wallenberg Syndrome)\"; Braddom Ch. 44 \"Stroke Syndromes\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A patient is noted to have ptosis of his right eyelid. When the eyes are opened, his pupil is noted to be dilated and faced downward and out. He is also noted to have weakness of his left side with signs of ataxia. Which condition is he likely to be suffering from?",
    "option_a": "Weber syndrome",
    "option_b": "Medial medullary syndrome",
    "option_c": "Wallenberg syndrome",
    "option_d": "Millard-Gubler syndrome",
    "correct_option": "A",
    "explanation": "A midbrain (cerebral peduncle) lesion in the PCA/basilar perforator territory. It damages the ipsilateral CN III fascicle (right eye down-and-out, ptosis, mydriasis) and the cerebral peduncle carrying corticospinal fibres (contralateral, i.e. left, hemiparesis). Adjacent red nucleus/substantia nigra involvement gives the ataxic or extrapyramidal features (overlapping with Benedikt syndrome). B. Medial medullary syndrome — CN XII palsy (tongue deviation), contralateral hemiparesis and dorsal column loss. No CN III. C. Wallenberg — lateral medullary, no CN III palsy, no hemiparesis. D. Millard-Gubler — pons: CN VI (lateral rectus palsy, esotropia) and CN VII ipsilaterally, with contralateral hemiparesis. No pupil involvement. Memory aid: Midbrain = III, Pons = VI/VII, Medulla = XII.\nReference: StatPearls, \"Weber Syndrome\"; Braddom Ch. 44.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 68-year-old hypertensive man is brought to the emergency department with a sudden onset of right-sided weakness involving the face, arm and leg, associated with difficulty in speaking. He has no loss of consciousness. His blood pressure is 178/96 mmHg Neurological examination confirms right hemiplegia, right facial weakness and expressive dysphasia. He can understand commands but struggles to form words. Cranial nerve examination is otherwise normal. Which vascular territory is most likely affected in the patient?",
    "option_a": "Left middle cerebral artery",
    "option_b": "Left posterior cerebral artery",
    "option_c": "Left anterior cerebral artery",
    "option_d": "Left vertebral artery",
    "correct_option": "A",
    "explanation": "Broca's area (inferior frontal gyrus, pars opercularis/triangularis) is supplied by the superior division of the left MCA. Non-fluent/expressive dysphasia with preserved comprehension plus contralateral face-arm-predominant hemiplegia is the textbook left MCA syndrome. B. Left PCA — occipital and medial temporal: contralateral homonymous hemianopia, alexia without agraphia, memory impairment. Not dense hemiplegia with dysphasia. C. Left ACA — medial frontal/parasagittal: leg-predominant contralateral weakness, abulia, urinary incontinence. The face and arm would be relatively spared. D. Left vertebral artery — posterior circulation; brainstem/cerebellar signs, not cortical dysphasia.\nReference: StatPearls, \"Middle Cerebral Artery Stroke\"; Braddom Ch. 44 (vascular territory syndromes).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 25-year-old woman sustains a moderate traumatic brain injury following a road traffic accident 24 months ago. She subsequently develops low mood and behavioural changes. She has been taking oral risperidone regularly for the past 12 months. During a routine follow-up, persistent, non-rhythmic involuntary movements involving the head, trunk and limbs, such as lip smacking and rapid blinking is observed. The movements are present at rest and worsen with emotional stress. She denies any inner sense of restlessness. On examination, there is no muscle rigidity, bradykinesia, fever or autonomic instability. Which is the most likely diagnosis?",
    "option_a": "Drug-induced Parkinsonism",
    "option_b": "Neuroleptic malignant disorder",
    "option_c": "Akathisia",
    "option_d": "Tardive dyskinesia",
    "correct_option": "D",
    "explanation": "All the defining features are present: late onset (>3 months of antipsychotic exposure, here 12 months), orobuccolingual stereotypy (lip smacking, blinking), choreoathetoid non-rhythmic movements of trunk and limbs, worsening with emotional stress, and absence of parkinsonism. Mechanism: chronic D2 blockade → postsynaptic dopamine receptor upregulation/supersensitivity. A. Drug-induced parkinsonism — would show bradykinesia, rigidity and resting tremor; the stem explicitly excludes rigidity and bradykinesia. Also typically onset within weeks–3 months. B. Neuroleptic malignant syndrome — hyperthermia, lead-pipe rigidity, autonomic instability, raised CK, altered consciousness. Explicitly excluded in the stem. C. Akathisia — a subjective inner restlessness with an urge to move. The stem explicitly says she denies this.\nReference: StatPearls, \"Tardive Dyskinesia\"; Braddom Ch. 43 (neurobehavioural pharmacology after TBI).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 62-year-old man was admitted 6 hours ago with a sudden onset of right-sided weakness and slurred speech. The CT scan of the brain showed a large left MCA infarct without midline shift. He is started on aspirin and admitted to the stroke unit. Over the past hour, he has become drowsy. On examination, his Glasgow Coma Scale has dropped from 14 to 8. His right pupil is now dilated and sluggish and he has developed worsening right hemiplegia. Which is the most likely cause of the acutctneurological deterioration?",
    "option_a": "Hypoglycaemia",
    "option_b": "Recurrent ischaemic stroke",
    "option_c": "Acute delirium",
    "option_d": "Cerebral edema",
    "correct_option": "D",
    "explanation": "This is malignant MCA infarction. Cytotoxic oedema peaks at 2–5 days but can begin within hours in large infarcts, producing mass effect, uncal herniation and CN III compression. Declining GCS plus a new dilated, sluggish pupil is transtentorial herniation until proven otherwise. Management: urgent CT, osmotherapy, neurosurgical referral for decompressive hemicraniectomy. A. Hypoglycaemia — always check the glucose, but it does not produce a unilateral fixed dilated pupil. B. Recurrent ischaemic stroke — would not typically cause anisocoria and a 6-point GCS drop in one hour; and he is already anticoagulated/antiplatelet-treated and being monitored. C. Acute delirium — a diagnosis of exclusion; never explains focal pupillary signs. Note on the pupil side: the stem says the right pupil dilated with a left MCA infarct — anatomically the herniating side should be the left. Treat this as a typo in the paper; the pathophysiology (herniation from oedema) is unchanged.\nReference: AHA/ASA \"Guidelines for the Early Management of Patients With Acute Ischemic Stroke\" (Stroke 2019, ahajournals.org); StatPearls, \"Malignant Middle Cerebral Artery Infarction\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A patient who underwent surgical treatment for aneurysmal subarachnoid haemorrhage is undergoing inpatient rehabilitation. Over several weeks, he develops a gradual decline in mobility and cognition, with increasing difficulty of walking and urinary urgency, but no new focal limb weakness. Which condition is most likely responsible?",
    "option_a": "Communicating hydrocephalus with raised intracranial pressure",
    "option_b": "Secondary normal pressure hydrocephalus",
    "option_c": "Recurrent intracranial haemorrhage causing mass effect",
    "option_d": "Delayed cerebral vasospasm causing cerebral ischaemia",
    "correct_option": "B",
    "explanation": "Blood products obstruct the arachnoid granulations, impairing CSF resorption. Weeks-to-months later this produces the Hakim triad — gait apraxia (\"magnetic\" gait), cognitive decline, urinary urgency/incontinence — with normal or only intermittently raised opening pressure. It is the commonest delayed neurological complication of aneurysmal SAH and is treatable with shunting. A. Communicating hydrocephalus with raised ICP — acute obstructive/communicating hydrocephalus presents days after SAH with headache, vomiting, reduced consciousness and papilloedema, not an insidious weeks-long triad. C. Recurrent haemorrhage with mass effect — sudden onset, headache, focal deficit, reduced consciousness. D. Delayed cerebral vasospasm — peaks day 4–14, producing new focal deficits and reduced consciousness. The timeframe here (several weeks) and the absence of focal weakness both argue against it.\nReference: StatPearls, \"Normal Pressure Hydrocephalus\"; AHA/ASA \"Guidelines for the Management of Aneurysmal Subarachnoid Hemorrhage\" (Stroke).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 25-year-old male who sustains a severe traumatic brain injury is being stabilised in the intensive care unit. His CT scan shows a midline shift of 8 mm and an acute subdural haematoma. Which is the most critical physiological threshold to prevent secondary brain injury during the acute phase?",
    "option_a": "Mean arterial pressure > 100 mmHg",
    "option_b": "Intracranial pressure < 30 mmHg",
    "option_c": "Systolic blood pressure < 110 mmHg",
    "option_d": "Cerebral perfusion pressure between 60 to 70 mmHg",
    "correct_option": "D",
    "explanation": "CPP = MAP − ICP. The Brain Trauma Foundation guidelines (4th edition) recommend a CPP target of 60–70 mmHg for survival and favourable outcome. CPP is the parameter that directly determines cerebral blood flow, and is therefore the single most critical threshold for preventing secondary ischaemic injury. A. MAP > 100 mmHg — MAP in isolation is meaningless without knowing ICP; aggressive MAP augmentation risks ARDS (the \"CPP > 70\" strategy was abandoned for this reason). B. ICP < 30 mmHg — the guideline treatment threshold is > 22 mmHg, not 30. This threshold is too permissive. C. SBP < 110 mmHg — backwards. Hypotension is catastrophic in TBI; the guideline is to maintain SBP ≥ 100 mmHg (age 50–69) or ≥ 110 mmHg (age 15–49 or > 70).\nReference: Brain Trauma Foundation, \"Guidelines for the Management of Severe Traumatic Brain Injury,\" 4th ed., Neurosurgery 2017 (free at braintrauma.org).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 72-year-old male with advanced Parkinson's disease is admitted to the rehabilitation ward following a hip fracture. Due to postoperative ileus, his oral carbidopa and levodopa was held for 48 hours. The nursing staff reports the patient is now minimally responsive, with lead- pipe rigidity in all extremities, a body temperature of 39 °C and autonomic instability. Which is the most likely diagnosis?",
    "option_a": "Neuroleptic malignant syndrome",
    "option_b": "Serotonin syndrome",
    "option_c": "Acute ischaemic stroke",
    "option_d": "Parkinsonism-hyperpyrexia syndrome",
    "correct_option": "D",
    "explanation": "Also called neuroleptic malignant-like syndrome or acute akinesia. It is precipitated by abrupt withdrawal or reduction of dopaminergic therapy — exactly what happened here (ileus → drugs held). Clinically indistinguishable from NMS: hyperthermia, severe rigidity, altered consciousness, autonomic instability, raised CK. Treatment: restart dopaminergic therapy urgently (NG tube, rotigotine patch, apomorphine), plus supportive cooling and hydration. A. Neuroleptic malignant syndrome — same phenotype, but NMS is caused by adding a dopamine antagonist. Here the cause is withdrawal of a dopamine agonist. The distinction matters because it dictates the treatment (give dopamine back, rather than stop the offending drug). This is the intended discriminator. B. Serotonin syndrome — requires serotonergic drug exposure and features clonus, hyperreflexia, mydriasis, diarrhoea, not lead-pipe rigidity. C. Acute ischaemic stroke — does not cause symmetrical lead-pipe rigidity in all four limbs with fever. Clinical pearl: Never stop Parkinson's medication because of nil-by-mouth. Convert the route.\nReference: StatPearls, \"Parkinsonism Hyperpyrexia Syndrome\"; Newman EJ et al. \"Parkinson's disease hyperpyrexia syndrome,\" Neurocrit Care (PubMed searchable).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 68-year-old man is admitted to the rehabilitation ward following an acute left hemispheric stroke. He is alert but has right-sided weakness and mild dysarthria. During meals, he coughs frequently and has a wet-sounding voice after swallowing. Which is the most appropriate initial management?",
    "option_a": "Start oral feeding with a normal diet",
    "option_b": "Insert a nasogastric tube for feeding",
    "option_c": "Initiate thickened fluids under supervision",
    "option_d": "Nil by mouth and refer for swallowing assessment",
    "correct_option": "D",
    "explanation": "Coughing during meals and a wet/gurgly voice after swallowing are cardinal signs of aspiration. Guideline standard is that every acute stroke patient is kept nil by mouth until a swallow screen is passed, with a formal assessment (speech-language therapist ± videofluoroscopy or FEES) before an oral diet is prescribed. This prevents aspiration pneumonia, the leading medical cause of death after stroke. A. Normal diet — actively dangerous. B. NG tube — premature. You do not commit a patient to enteral feeding before the swallow has been characterised; many are safe on modified consistencies. C. Thickened fluids under supervision — the right idea but the wrong sequence. Consistency modification is prescribed after assessment, not empirically; thickened fluids can still be aspirated and reduce hydration.\nReference: AHA/ASA \"Guidelines for Adult Stroke Rehabilitation and Recovery\" (Stroke 2016); NICE NG128 \"Stroke and transient ischaemic attack in over 16s\" (nice.org.uk).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 30-year-old woman, post-stroke 1 year ago, presents with a 3-day history of dysuria and urinary frequency. She denies fever, flank pain, nausea or vaginal discharge. On examination, she is afebrile and haemodynamically stable. Renal punch is negative. Urinalysis shows positive nitrites and leukocyte esterase with a negative urine pregnancy test. Which is the most appropriate initial management?",
    "option_a": "Administer intravenous antibiotics",
    "option_b": "Start oral potassium citrate",
    "option_c": "Increase fluid intake to 2.5 L per day",
    "option_d": "Prescribe oral nitrofurantoin",
    "correct_option": "D",
    "explanation": "Uncomplicated lower UTI (acute cystitis) — afebrile, no flank pain, negative renal punch, no systemic features. Nitrofurantoin 100 mg BD for 5 days is a recommended first-line agent (alongside trimethoprim-sulfamethoxazole and fosfomycin) because of high urinary concentrations, low collateral ecological damage and low resistance rates. A. IV antibiotics — reserved for pyelonephritis, sepsis, or inability to tolerate oral therapy. She has none of these. B. Potassium citrate — urinary alkalinisation; used for uric acid stones and (as an unproven symptomatic measure) cystitis. It does not treat the infection. C. Increased fluid intake — reasonable adjunct and preventive advice, but not treatment for a confirmed symptomatic UTI. Caveat to remember: avoid nitrofurantoin if eGFR < 30–45 mL/min, and it does not treat upper tract infection.\nReference: IDSA/ESCMID \"International Clinical Practice Guidelines for the Treatment of Acute Uncomplicated Cystitis and Pyelonephritis\"; Malaysian National Antimicrobial Guideline (pharmacy.moh.gov.my).",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which neuroendocrine abnormality is most associated with reduced bone density?",
    "option_a": "Elevated adrenocorticotropic hormone",
    "option_b": "Hyperprolactinemia",
    "option_c": "Growth hormone deficiency",
    "option_d": "Hyperthyroidism",
    "correct_option": "B",
    "explanation": "Prolactin excess suppresses hypothalamic GnRH pulsatility → hypogonadotrophic hypogonadism → oestrogen/testosterone deficiency, which is the dominant driver of bone loss. Reduced BMD is a well-documented and early complication of prolactinoma, often presenting in young adults, and improves with dopamine agonist therapy that restores gonadal function. C. GH deficiency — genuinely reduces BMD (impaired IGF-1-mediated osteoblast activity) and is the strongest competing answer, particularly in a post-TBI hypopituitarism context. The effect, however, is generally less pronounced than that of frank sex steroid deficiency. A. Elevated ACTH — causes bone loss indirectly via cortisol excess (Cushing's). The option as written names the pituitary hormone, not the effector, and the stem asks for the abnormality \"most associated\". D. Hyperthyroidism — does increase bone turnover and fracture risk, but it is a thyroid, not a neuroendocrine (hypothalamic-pituitary) abnormality as the stem frames it. Note: If this paper sits in a post-TBI hypopituitarism block, C (GH deficiency) is defensible. Check the section context with your examiner.\nReference: Endocrine Society Clinical Practice Guideline, \"Diagnosis and Treatment of Hyperprolactinemia\" (J Clin Endocrinol Metab, free at academic.oup.com); StatPearls, \"Hyperprolactinemia\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which crystals are seen in pseudogout?",
    "option_a": "Calcium oxalate",
    "option_b": "Urate crystals",
    "option_c": "Needle-shaped negative birefringent",
    "option_d": "Rhomboid positive birefringent",
    "correct_option": "D",
    "explanation": "Pseudogout = calcium pyrophosphate dihydrate (CPPD) deposition disease. Under polarised light with a red compensator, CPPD crystals are rhomboid/rod-shaped and positively birefringent (blue when parallel to the compensator axis). C. Needle-shaped, negatively birefringent — that is monosodium urate = true gout. The classic paired distractor. A. Calcium oxalate — bipyramidal/envelope-shaped; seen in urine and in oxalosis-associated arthropathy (dialysis patients), not pseudogout. B. \"Urate crystals\" — gout again. Memory aid: Pseudogout = Positive, rhomboid. Gout = negative, needle.\nReference: StatPearls, \"Calcium Pyrophosphate Deposition Disease\"; ACR/EULAR CPPD classification criteria (Arthritis Rheumatol 2023).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 30-year-old woman presents with palpitations, weight loss, heat intolerance and tremors. On examination, she has a fine tremor and resting tachycardia. Which is the most appropriate initial investigation?",
    "option_a": "Thyroid ultrasound",
    "option_b": "Serum TSH and free T4",
    "option_c": "Thyroid antibody testing",
    "option_d": "Radioactive iodine uptake scan",
    "correct_option": "B",
    "explanation": "Biochemical confirmation always precedes anatomical or aetiological work-up. TSH is the most sensitive single test (suppressed in primary hyperthyroidism because of the log-linear TSH–T4 relationship); free T4 confirms and grades the severity. A. Thyroid ultrasound — assesses structure (nodules, goitre), not function. It cannot diagnose thyrotoxicosis. C. Thyroid antibody testing (TRAb/anti-TPO) — helps determine the cause once thyrotoxicosis is confirmed. Second-line. D. Radioactive iodine uptake scan — also an aetiological test (Graves vs toxic nodule vs thyroiditis), performed after biochemistry, and contraindicated in pregnancy.\nReference: American Thyroid Association \"Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis\" (thyroid.org, free); StatPearls, \"Hyperthyroidism\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 28-year-old male is 4 weeks post-severe traumatic brain injury and has recently been transferred to the sub-acute rehabilitation ward. His recovery has plateaued. He exhibits persistent orthostatic hypotension despite adequate hydration, unexplained weight loss and profound fatigue that limits his participation in physical therapy. Laboratory investigations reveal a serum sodium of 131 mmol/L and a serum potassium of 4.2 mmol/L. His 8 a.m. cortisol level is 80 nmol/L (low). Which finding would most specifically points toward a secondary rather than a primary cause in the patient?",
    "option_a": "Development of orthostatic hypotension",
    "option_b": "Absence of hyperkalaemia and skin hyperpigmentation",
    "option_c": "Improvement of fatigue with glucocorticoid replacement",
    "option_d": "Presence of hyponatremia",
    "correct_option": "B",
    "explanation": "Both features follow directly from the anatomy of the axis: - Hyperkalaemia requires aldosterone deficiency. Aldosterone is controlled by the renin-angiotensin system, not ACTH — so in secondary (pituitary) insufficiency the zona glomerulosa is intact, aldosterone is preserved, and potassium is normal (here 4.2 mmol/L). - Hyperpigmentation requires high ACTH (the POMC precursor stimulates melanocortin-1 receptors). In secondary insufficiency ACTH is low, so there is no pigmentation. Post-TBI hypopituitarism is a recognised and under-diagnosed cause of rehabilitation plateau. A. Orthostatic hypotension — occurs in both forms (cortisol is permissive for vascular catecholamine responsiveness). Non-discriminating. C. Improvement with glucocorticoid replacement — occurs in both. Non-discriminating. D. Hyponatraemia — occurs in both: in primary via aldosterone deficiency and salt wasting; in secondary via loss of cortisol's inhibition of ADH release. This is the trap answer.\nReference: Endocrine Society Clinical Practice Guideline, \"Diagnosis and Treatment of Primary Adrenal Insufficiency\" (JCEM, free); StatPearls, \"Adrenal Insufficiency\"; Braddom Ch. 43 (endocrine complications of TBI).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 24-year-old man is referred for inpatient rehabilitation following a haemorrhagic stroke. His blood pressure is noted to remain persistently elevated despite initiation of antihypertensive therapy. Further history obtained from his wife reveals that over the past several months before admission, he frequently experienced episodic headaches, palpitations, excessive sweating and anxiety attacks that were resolved spontaneously. Physical examination reveals multiple light-brown skin patches over the trunk and several soft, nodular cutaneous lesions distributed over his back and upper limbs. Which is the most sensitive investigation to establish the underlying diagnosis?",
    "option_a": "Plasma cortisol level",
    "option_b": "Plasma free metanephrine level",
    "option_c": "24-hour urinary catecholamine",
    "option_d": "24-hour urinary cortisol",
    "correct_option": "B",
    "explanation": "The stem describes phaeochromocytoma in neurofibromatosis type 1 (café-au-lait macules + soft nodular neurofibromas). Plasma free metanephrines have the highest sensitivity (96–99%) of all biochemical tests, because catecholamines are metabolised to metanephrines continuously within the tumour, independent of episodic secretion. That is exactly why they outperform catecholamine measurement in a patient with paroxysmal symptoms. C. 24-hour urinary catecholamines — more specific but less sensitive; can be falsely normal between paroxysms. The stem asks for the most sensitive. A. Plasma cortisol and D. 24-hour urinary cortisol — tests for Cushing syndrome. Cushing does not cause episodic headache/palpitations/sweating, and does not fit the NF1 phenotype.\nReference: Endocrine Society Clinical Practice Guideline, \"Pheochromocytoma and Paraganglioma\" (JCEM 2014, free); Lenders JWM et al. JAMA 2002 \"Biochemical diagnosis of pheochromocytoma: which test is best?\" (PubMed).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 65-year-old man with advanced chronic obstructive pulmonary disease (COPD) is admitted for community-acquired pneumonia. He is referred for pulmonary rehabilitation assessment. Arterial blood gas analysis shows: pH 7.36. (7.35 - 7.45) PaCO: 60 mmHg (35 - 45) miHg HCO5: 33 mmol/L (22 - 26) mmol/L Which physiological mechanism best explains the near-normal pH in this patient?",
    "option_a": "Increased pulmonary ventilation leading to elimination of excess carbon dioxide",
    "option_b": "Increased renal reabsorption and generation of bicarbonate in response to chronic hypercapnia",
    "option_c": "Immediate intracellular buffering by phosphate as the main compensatory mechanism",
    "option_d": "Increased renal excretion of bicarbonate to compensate for respiratory acidosis",
    "correct_option": "B",
    "explanation": "This is chronic compensated respiratory acidosis. The kidney responds to sustained hypercapnia over 3–5 days by increasing proximal tubular HCO₃⁻ reabsorption and distal H⁺ (as NH₄⁺) excretion, generating new bicarbonate. Expected compensation: HCO₃⁻ rises ~3.5–4 mmol/L for every 10 mmHg rise in PaCO₂. Here PaCO₂ is 20 mmHg above normal → expected HCO₃⁻ ≈ 24 + 7–8 = 31–32; measured 33. The compensation is appropriate and chronic. A. Increased ventilation eliminating CO₂ — his PaCO₂ is elevated; ventilation is the problem, not the compensation. C. Intracellular phosphate buffering — immediate (seconds–minutes) buffering does occur (haemoglobin and protein are more important than phosphate), but it is quantitatively minor and cannot account for an HCO₃⁻ of 33. D. Increased renal excretion of bicarbonate — that would worsen an acidosis. Backwards. Clinical corollary: in this patient, target SpO₂ 88–92%; uncontrolled high-flow O₂ risks worsening hypercapnia.\nReference: StatPearls, \"Respiratory Acidosis\"; GOLD Report (goldcopd.org, free annual update); Braddom Ch. 34 \"Pulmonary Rehabilitation\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 42-year-old man with newly diagnosed smear-positive pulmonary tuberculosis is started on standard first-line anti-tuberculosis therapy consisting of isoniazid, rifampicin, pyrazinamide and ethambutol. After 3 weeks of treatment, he develops yellowing of the eyes, dark urine, nausea and mild fatigue. Laboratory tests show markedly elevated alanine aminotransferase and aspartate aminotransferase with a hepatocellular pattern of liver injury. Which anti- tuberculosis drug causes the most severe hepatotoxicity?",
    "option_a": "Pyrazinamide",
    "option_b": "Ethambutol",
    "option_c": "Isoniazid",
    "option_d": "Rifampicin",
    "correct_option": "A",
    "explanation": "All three of isoniazid, rifampicin and pyrazinamide are hepatotoxic, but pyrazinamide causes the most severe and most dose-related hepatotoxicity, and is usually the drug that must be dropped permanently after severe drug-induced liver injury. Its toxicity rises steeply with dose. C. Isoniazid — the most common cause of anti-TB hepatitis (age-related, ~0.5–2%), and the usual answer if the question asks \"most frequent\". The stem asks for most severe. Read the question carefully — this is the entire discriminator. D. Rifampicin — typically causes a cholestatic picture and unconjugated hyperbilirubinaemia (competition for bilirubin uptake/conjugation), not the hepatocellular pattern described. B. Ethambutol — the classic toxicity is retrobulbar optic neuritis (red-green colour vision loss); it is not meaningfully hepatotoxic.\nReference: ATS/CDC/IDSA \"Official Statement: Hepatotoxicity of Antituberculosis Therapy\" (Am J Respir Crit Care Med 2006, free at atsjournals.org); WHO Consolidated Guidelines on Tuberculosis; LiverTox (NCBI Bookshelf) — free monographs per drug.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 30-year-old presents with symmetric ascending paraesthesia and progressive weakness of the limbs following a mild respiratory illness 2 weeks prior. Physical examination reveals generalised areflexia and muscle aching. Cerebrospinal fluid analysis demonstrates albumin cytologic dissociation. Which of the following is typically spared in the condition?",
    "option_a": "Extraocular muscle motor function",
    "option_b": "Respiratory muscle function power",
    "option_c": "Distal limb sensory perception",
    "option_d": "Autonomic nervous system stability",
    "correct_option": "A",
    "explanation": "In classic AIDP, the ocular motor nerves are characteristically spared. Ophthalmoplegia defines the Miller Fisher variant (ophthalmoplegia, ataxia, areflexia, anti-GQ1b antibodies), which is precisely a variant and not the typical presentation described here (ascending paraesthesia, symmetrical weakness, areflexia, albuminocytological dissociation after an antecedent infection). B. Respiratory muscle function — involved in ~25–30%; up to 20% require ventilation. This is the main cause of death and the reason for serial FVC monitoring (20/30/40 rule). C. Distal limb sensory perception — paraesthesia is in the stem itself; sensory involvement is typical. D. Autonomic stability — dysautonomia (arrhythmia, labile BP, ileus, urinary retention) occurs in up to two-thirds and is a major cause of mortality.\nReference: StatPearls, \"Guillain-Barre Syndrome\"; Willison HJ, Jacobs BC, van Doorn PA. Lancet 2016 \"Guillain-Barré syndrome\" (PubMed); Braddom Ch. 41.",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which muscle group is most important for generating the expiratory force required for coughing?",
    "option_a": "Sternocleidomastoid muscles",
    "option_b": "Abdominal muscles",
    "option_c": "Internal intercostal muscles",
    "option_d": "Diaphragm muscle",
    "correct_option": "B",
    "explanation": "The expulsive phase of cough requires a rapid rise in intra-abdominal and intrathoracic pressure. The abdominal muscles (rectus abdominis, external and internal obliques, transversus abdominis — innervated T6–T12/L1) are the principal generators. This is why patients with injuries above T6–T12 have a weak or absent cough despite an intact diaphragm. C. Internal intercostals — contribute to expiration but generate far less pressure; a supporting, not principal, role. A. Sternocleidomastoid — an accessory muscle of inspiration. D. Diaphragm — the principal muscle of inspiration; it provides the inspiratory volume that precedes the cough, but relaxes during the expulsive phase.\nReference: Braddom Ch. 49 \"Spinal Cord Injury\" (respiratory management) and Ch. 34; StatPearls, \"Physiology, Cough\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 65-year-old male with a history of chronic systolic heart failure (LVEF 30%) and hypertension is admitted for intensive stroke rehabilitation. Suddenly, he develops severe dyspnoea, orthopnoea and anxiety. Physical exam reveals a blood pressure of 210/110 mmHg, heart rate of 110 beats per minute and bilateral crackles halfway up the lung fields. After starting high-flow oxygen, his oxygen saturation improved to 95%. Which is the most next appropriate immediate intervention to stabilise this patient?",
    "option_a": "Sublingual or intravenous nitroglycerin",
    "option_b": "Intravenous bolus of furosemide",
    "option_c": "Oral metoprolol tartrate",
    "option_d": "Intravenous bolus of morphine sulfate",
    "correct_option": "A",
    "explanation": "This is SCAPE (sympathetic crashing acute pulmonary oedema) — hypertensive acute pulmonary oedema. The pathophysiology is fluid redistribution driven by massive afterload, not total-body fluid overload. The immediate priority is afterload and preload reduction with nitrates, which works within minutes. High-dose nitrates plus non-invasive ventilation are the evidence-based first moves. B. IV furosemide — appropriate and standard, but its venodilatory effect is modest and diuresis takes 20–30 minutes; in SCAPE the patient is often not volume-overloaded, and diuresis alone under-treats the afterload. It is the second agent, not the first. C. Oral metoprolol — contraindicated in acute decompensated heart failure. Negative inotropy in a patient with LVEF 30% and acute pulmonary oedema can precipitate cardiogenic shock. D. IV morphine — historical practice, now discouraged. Registry data (ADHERE) associate morphine with increased need for ventilation, ICU admission and mortality.\nReference: ESC \"Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure\" (Eur Heart J 2021, free at escardio.org); AHA/ACC/HFSA 2022 Heart Failure Guideline; StatPearls, \"Flash Pulmonary Edema\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A patient presents with exertional dyspnoea and syncope. There is a systolic murmur radiating to the carotids. Which is the diagnosis?",
    "option_a": "Mitral regurgitation",
    "option_b": "Mitral stenosis",
    "option_c": "Aortic regurgitation",
    "option_d": "Aortic stenosis",
    "correct_option": "D",
    "explanation": "The classic triad of AS is angina, syncope and dyspnoea (exertional). The murmur is a harsh crescendo-decrescendo ejection systolic murmur at the right second intercostal space radiating to the carotids, with a slow-rising, low-volume pulse (pulsus parvus et tardus) and a soft/absent A2 in severe disease. A. Mitral regurgitation — pansystolic murmur at the apex radiating to the axilla, not the carotids. B. Mitral stenosis — a diastolic murmur (mid-diastolic rumble with opening snap) — wrong part of the cycle. C. Aortic regurgitation — an early diastolic decrescendo murmur at the left sternal edge with a collapsing pulse and wide pulse pressure.\nReference: StatPearls, \"Aortic Stenosis\"; ACC/AHA \"Guideline for the Management of Patients With Valvular Heart Disease\" (2020, free).",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which investigation is highly sensitive to confirm acute heart failure?",
    "option_a": "Plasma natriuretic peptide",
    "option_b": "Chest radiograph",
    "option_c": "Serial cardiac troponin",
    "option_d": "Bedside electrocardiogram",
    "correct_option": "A",
    "explanation": "BNP/NT-proBNP has very high sensitivity and negative predictive value (>95% at the rule-out cut-offs: BNP < 100 pg/mL, NT-proBNP < 300 pg/mL). It is recommended by both ESC and NICE as the first-line test to rule out heart failure in acute breathlessness. B. Chest radiograph — specific when classic (Kerley B lines, upper lobe diversion, bat-wing oedema) but insensitive; up to 20% of acute HF patients have a normal CXR. C. Serial troponin — a marker of myocardial injury; often mildly elevated in HF but neither sensitive nor specific for the diagnosis. D. ECG — a normal ECG makes HF less likely (good NPV), but it identifies no specific HF finding; it is used to look for the cause (ischaemia, AF, LVH).\nReference: ESC Acute and Chronic Heart Failure Guidelines 2021; NICE NG106 \"Chronic heart failure in adults\" and CG187 (nice.org.uk).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 64-year-old man collapses during treadmill training in the cardiac rehabilitation gym. He is unresponsive and does not breathe normally. High-quality cardiopulmonary resuscitation is initiated and an automated external defibrillator is applied. The device repeatedly announces, \"Check pads,\" and fails to analyse the rhythm. The patient has dense chest hair and perspiration, with a transdermal glyceryl trinitrate patch on the left anterior chest. Which is the most appropriate immediate action?",
    "option_a": "Dry the chest, shave the pad area and reapply pads",
    "option_b": "Press the pads firmly and reattempt rhythm analysis",
    "option_c": "Change to anteroposterior pad placement",
    "option_d": "Remove the transdermal patch and reapply pads",
    "correct_option": "A",
    "explanation": "\"Check pads\"/\"check electrodes\" signals a high impedance / poor pad-skin contact problem. Moisture and thick hair are the two commonest mechanical causes and both are corrected by the same manoeuvre: wipe the chest dry and shave the pad sites, then apply new pads. This restores conduction and permits analysis. D. Remove the transdermal GTN patch — this must also be done (remove the patch, wipe the residue) to avoid arcing, burns and reduced energy delivery. But it is not the cause of the \"check pads\" message here, and the stem asks for the single most appropriate immediate action addressing the failure to analyse. In practice, do both in the same 10 seconds. B. Press the pads firmly — pressing does not overcome hair or moisture, and interrupts compressions for no gain. C. Anteroposterior placement — an option for some situations (implanted devices, known problems), but pointless with wet, hairy skin; the same impedance problem follows the pads. Exam pearl: an AED on a hairy chest is the textbook \"razor in the AED kit\" question.\nReference: European Resuscitation Council Guidelines 2021, \"Adult Basic Life Support\" (free at cprguidelines.eu); AHA 2020 Guidelines for CPR and ECC (Circulation).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 50-year-old man with hypertension and hyperlipidaemia attends a primary care clinic for dietary counselling. His dietary habits include frequent consumption of white rice with minimal vegetables, regular intake of sweetened beverages and a preference for red meat over fish. Based on the Malaysian Healthy Plate concept and current dietar recommendations, which single modification would most improve his cardiovascular and metabolic health?",
    "option_a": "Replace carbonated drinks with fruit juices",
    "option_b": "Continue using coconut oil but reduce portion sizes",
    "option_c": "Replace white rice with whole grains",
    "option_d": "Increase intake of chicken and red meat instead of fish",
    "correct_option": "C",
    "explanation": "The Suku Suku Separuh concept (¼ carbohydrate, ¼ protein, ½ fruit and vegetables) explicitly recommends that at least half of the grain quarter be whole grains. Replacing refined white rice with whole grains lowers glycaemic load, increases fibre, and has consistent evidence for reducing cardiovascular and type 2 diabetes risk. Given that his stated habit is \"white rice with minimal vegetables\", this is the highest-yield single change. A. Fruit juices instead of carbonated drinks — fruit juice has a comparable free-sugar load and lacks the fibre of whole fruit. Not a meaningful improvement; the recommendation is plain water. B. Continue coconut oil, reduce portions — coconut oil is ~90% saturated fat and raises LDL-C. In a hyperlipidaemic patient the recommendation is to replace it with unsaturated oils, not merely use less. D. More chicken and red meat instead of fish — directly contrary to guidance. Fish (especially oily fish, ≥2 servings/week) is recommended over red meat for cardiovascular health.\nReference: Malaysian Dietary Guidelines and \"Suku Suku Separuh\" (Malaysian Healthy Plate), Ministry of Health Malaysia / Nutrition Division (nutrition.moh.gov.my — free); Malaysian CPG on Management of Dyslipidaemia (moh.gov.my).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 42-year-old woman presents with progressive blurry vision, which started a month ago. Examination reveals changes in her optic nerve. An MRI brain shows a well-circumscribed enhancing mass originating from the dura mater. Histological examination reveals a whorl-like structure and psammoma bodies. Which is the most likely diagnosis?",
    "option_a": "Meningioma",
    "option_b": "Schwannoma",
    "option_c": "Astrocytoma",
    "option_d": "Ependymoma",
    "correct_option": "A",
    "explanation": "Two pathognomonic histological features: whorl formation (concentric spindle cell arrangement) and psammoma bodies (laminated calcific concretions). Arises from arachnoid cap cells of the dura — hence \"well-circumscribed, dura-based, avidly enhancing\" with a dural tail on MRI. Optic nerve compression fits a sphenoid wing, tuberculum sellae or olfactory groove location. B. Schwannoma — arises from the nerve sheath (classically CN VIII at the cerebellopontine angle); histology shows Antoni A and B areas with Verocay bodies, not whorls. C. Astrocytoma — intra-axial, infiltrative, poorly circumscribed; GFAP-positive glial cells, and in glioblastoma, pseudopalisading necrosis and microvascular proliferation. D. Ependymoma — intraventricular or spinal; perivascular pseudorosettes and true ependymal rosettes.\nReference: Radiopaedia, \"Meningioma\"; StatPearls, \"Meningioma\"; WHO Classification of Tumours of the CNS, 5th ed.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 58-year-old male with metastatic lung cancer reports a 48-hour history of \"electric-shock\" sensations radiating down his legs when flexing his neck and has been unable to void for the past 6 hours. On examination, the bladder is tender and palpable; he has 4/5 strength in hip flexors bilaterally and 1+ patellar reflexes. Which is the most appropriate immediate management for the patient?",
    "option_a": "Insert continuous bladder drainage",
    "option_b": "Start analgesics for neuropathic pain",
    "option_c": "Initiate intravenous corticosteroids",
    "option_d": "Order an urgent CT scan of the entire spine",
    "correct_option": "C",
    "explanation": "This is metastatic spinal cord compression (MSCC) — a neuro-oncological emergency. High-dose corticosteroids (dexamethasone 16 mg/day, often with a 8–10 mg loading dose) should be given immediately on clinical suspicion, before and without waiting for imaging. Steroids reduce vasogenic oedema and can preserve neurological function during the hours it takes to arrange MRI and oncology/neurosurgical review. Neurological status at the time of treatment is the single strongest predictor of final outcome — every hour matters. A. Bladder drainage — must also be done (a tender palpable bladder needs catheterising), and is genuinely urgent for comfort and renal protection. But it treats a symptom; it does nothing to preserve the cord. The definitive answer to \"most appropriate immediate management\" is the intervention that changes neurological outcome. B. Neuropathic analgesia — supportive only. D. Urgent CT of the whole spine — wrong modality. The investigation of choice is urgent whole-spine MRI within 24 hours (NICE: within 24 h, or sooner if neurology is progressing). CT is a fallback only if MRI is contraindicated. Also, imaging follows steroids, not the reverse.\nReference: NICE NG234 (formerly CG75) \"Spinal metastases and metastatic spinal cord compression\" (nice.org.uk, free); StatPearls, \"Metastatic Spinal Cord Compression\"; Braddom Ch. 53 \"Rehabilitation of Patients with Cancer\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 62-year-old man undergoes total gastrectomy for gastric carcinoma. 6 months later, he is presents with fatigue. Blood investigations show macrocytic anaemia with hypersegmented neutrophils. Which mechanism best explains his condition?",
    "option_a": "Failure of intrinsic factor production",
    "option_b": "Reduced pancreatic protease activity",
    "option_c": "Decreased ileal absorption of vitamin B12",
    "option_d": "Impaired cleavage of vitamin B12 from dietary proteins",
    "correct_option": "A",
    "explanation": "Parietal cells in the gastric body and fundus produce intrinsic factor. Total gastrectomy removes them entirely, so IF cannot be secreted, and B12 cannot be absorbed at the ileal cubilin/amnionless receptor. The result is B12 deficiency → megaloblastic (macrocytic) anaemia with hypersegmented neutrophils. It manifests after hepatic B12 stores deplete — typically 2–5 years, though earlier with pre-existing low stores. D. Impaired cleavage of B12 from dietary protein — this does happen post-gastrectomy (loss of gastric acid and pepsin, which liberate B12 from food protein), and is the mechanism of food-bound B12 malabsorption in atrophic gastritis and PPI use. But after total gastrectomy, the absolute loss of intrinsic factor is the dominant and complete mechanism — cleavage failure alone would still permit absorption of crystalline B12. This is the intended discriminator. B. Reduced pancreatic protease activity — pancreatic proteases release B12 from haptocorrin in the duodenum; a real mechanism in chronic pancreatitis, not gastrectomy. C. Decreased ileal absorption — the mechanism in Crohn's disease or ileal resection. The ileum here is intact; the problem is upstream.\nReference: StatPearls, \"Vitamin B12 Deficiency\"; Stabler SP. \"Vitamin B12 deficiency,\" N Engl J Med 2013 (PubMed).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 70 year old man with underlying chronic kidney disease on regular dialysis comes for diabetic foot ulcer management. He reports generalised pruritus for 3 months, disturbing sleep and he has dry skin. Phosphate binders have been optimised and serum phosphate is now within the target range. Which pharmacological therapy is most appropriate next?",
    "option_a": "Start systemic corticosteroid",
    "option_b": "Start oral antihistamine",
    "option_c": "Prescribe an opioid analgesic",
    "option_d": "Initiate gabapentin therapy",
    "correct_option": "D",
    "explanation": "This is chronic kidney disease-associated pruritus (CKD-aP / uraemic pruritus). Pathogenesis involves peripheral neuropathy and central opioid receptor imbalance — it is largely a neuropathic, not histaminergic, itch. Gabapentin (typically 100 mg post-dialysis, titrated cautiously) has the best randomised evidence of the listed options. (Difelikefalin, a kappa-opioid agonist, is the newer licensed agent where available.) B. Oral antihistamine — the instinctive answer and the wrong one. Uraemic pruritus is not histamine-mediated; antihistamines are largely ineffective and any benefit is sedation. The stem's \"phosphate already optimised\" is the clue that you must move beyond the standard first steps. A. Systemic corticosteroid — no role; unacceptable long-term toxicity for a chronic symptom. C. Opioid analgesic — mu-opioid agonists worsen pruritus. Actively counterproductive. Dosing caution: gabapentin is renally cleared — dose reduction and post-dialysis administration are mandatory to avoid myoclonus and sedation.\nReference: KDIGO Clinical Practice Guideline (CKD-MBD and CKD-aP literature, kdigo.org); StatPearls, \"Uremic Pruritus\"; Simonsen E et al. \"Treatment of Uremic Pruritus: A Systematic Review,\" Am J Kidney Dis 2017 (PubMed).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 55-year-old patient with acute renal failure secondary to rhabdomyolysis has a serum potassium level of 6.8 mmol/L. The electrocardiogram shows tall, tented T waves and a widened QRS complex. Which is the most appropriate next line of management?",
    "option_a": "Intravenous infusion of insulin and dextrose",
    "option_b": "Oral sodium polystyrene sulfonate",
    "option_c": "Intravenous calcium gluconate 10%",
    "option_d": "Urgent haemodialysis",
    "correct_option": "C",
    "explanation": "ECG changes mean the myocardium is at immediate risk of sine-wave rhythm, VF and asystole. Calcium stabilises the cardiac membrane within 1–3 minutes by restoring the threshold potential gradient. It does not lower the serum potassium — but that is not the priority in the first 5 minutes; preventing arrhythmic death is. Sequence: stabilise (calcium) → shift (insulin-dextrose ± salbutamol) → remove (dialysis/binders). A. Insulin and dextrose — the correct second step; onset 15–30 minutes, shifts K⁺ intracellularly for 4–6 hours. Too slow to be first when the QRS is already widening. B. Sodium polystyrene sulfonate — hours to act, modest and debated efficacy, risk of colonic necrosis. Never the acute answer. D. Urgent haemodialysis — the definitive treatment in rhabdomyolysis-associated AKI and certainly needed here, but it takes time to arrange. Stabilise first.\nReference: UK Renal Association / Renal Association \"Clinical Practice Guidelines: Treatment of Acute Hyperkalaemia in Adults\" (free PDF, ukkidney.org); StatPearls, \"Hyperkalemia\"; European Resuscitation Council 2021 guidelines (special circumstances).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 25-year-old man develops major depressive disorder following a road traffic accident that resulted in lower limb amputation. He achieves remission after antidepressant therapy and is actively engaged in prosthetic training to improve functional recovery. He demands to discontinue the antidepressant, given the improvement of the symptoms. Which is the most appropriate advice?",
    "option_a": "Discontinue once functional recovery is achieved",
    "option_b": "Continue indefinitely",
    "option_c": "Continue for at least 1 to 3 months after remission",
    "option_d": "Continue for at least 6 to 9 months after remission",
    "correct_option": "D",
    "explanation": "Standard practice for a first episode of major depressive disorder is a continuation phase of at least 6–9 months (commonly quoted as 6–12 months) after achieving remission, at the same dose that produced the response. Stopping at remission roughly doubles the relapse rate, because remission of symptoms precedes recovery of the underlying episode. He should be reassured, not simply refused — explain the rationale, plan a review, and taper when the time comes. C. 1 to 3 months — well short of the evidence-based continuation phase; high relapse risk. A. Discontinue once functional recovery is achieved — functional recovery and biological recovery are not the same thing; this is precisely the reasoning the guideline exists to counter. B. Continue indefinitely — maintenance therapy for years is reserved for recurrent depression (≥2–3 episodes), residual symptoms, severe episodes, or high-risk features. Not indicated for a first episode.\nReference: NICE NG222 \"Depression in adults: treatment and management\" (nice.org.uk, free); APA \"Practice Guideline for the Treatment of Patients With Major Depressive Disorder\"; Malaysian CPG on Management of Major Depressive Disorder (moh.gov.my).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 52-year-old man with chronic obstructive pulmonary disease attends a primary care clinic for routine follow-up. He has smoked 20 cigarettes daily for the past 30 years. During smoking cessation counselling, he states, \"I know smoking is worsening my breathing. I've thought about quitting but because of work stress, I don't think I can stop anytime soon.\" Which stage of behaviour change best describes this patient's readiness to stop smoking?",
    "option_a": "Precontemplation",
    "option_b": "Preparation",
    "option_c": "Contemplation",
    "option_d": "Action",
    "correct_option": "C",
    "explanation": "Prochaska and DiClemente's Transtheoretical Model: Stage: Precontemplation; Definition: No intention to change in the next 6 months; often unaware or resistant. Stage: Contemplation; Definition: Aware of the problem and intends to change within 6 months, but ambivalent and not ready to act. Stage: Preparation; Definition: Intends to act within 30 days; has taken some step (set a quit date, obtained NRT). Stage: Action; Definition: Overt behaviour change < 6 months. Stage: Maintenance; Definition: Sustained change > 6 monthsHe acknowledges harm (\"I know smoking is worsening my breathing\") and has considered change (\"I've thought about quitting\") but is not ready to act — textbook contemplation with the ambivalence made explicit. A. Precontemplation — he would deny the problem or have no intention at all. He clearly recognises the harm. B. Preparation — requires a concrete near-term intention or a preparatory step; he explicitly states the opposite. D. Action — no behaviour change has occurred. Clinical corollary: the matched intervention is motivational interviewing to resolve ambivalence, not a quit date.\nReference: Prochaska JO, DiClemente CC, Norcross JC. Am Psychol 1992 \"In search of how people change\" (PubMed); StatPearls, \"Behavior Modification\"; Malaysian CPG on Treatment of Tobacco Use Disorder (moh.gov.my).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 40-year-old woman presents to a primary care clinic with a 3-week history of low mood, loss of interest in daily activities, poor sleep and reduced energy. She reports increasing work-related stress and admits to occasional thoughts that \"life isn't worth living,\" but denies active suicidal intent or a specific plan. She has screened positive on the Whooley Questions. Which is the most appropriate next step in her assessment?",
    "option_a": "Start antidepressant therapy immediately",
    "option_b": "Perform a suicide risk and clinical assessment",
    "option_c": "Referral to a counsellor",
    "option_d": "Reassure the patient and advise follow-up in 3 months",
    "correct_option": "B",
    "explanation": "The Whooley questions are a two-item screen, not a diagnosis. A positive screen mandates a full clinical assessment — and when any suicidal ideation is disclosed, even passive, a structured risk and safety assessment comes first. This establishes the diagnosis, severity, risk level and immediate safety plan, all of which determine every subsequent management decision. A. Start antidepressant immediately — treating before assessing severity and risk. You do not know yet whether this is mild depression (where psychological therapy is first-line), or whether she needs urgent psychiatric input. C. Referral to a counsellor — may well be appropriate after assessment, but deferring the assessment to someone else while risk is undefined is unsafe. D. Reassure and follow up in 3 months — negligent in the presence of disclosed suicidal ideation.\nReference: NICE NG222 \"Depression in adults\" and NG225 \"Self-harm: assessment, management and preventing recurrence\" (nice.org.uk); Whooley MA et al. J Gen Intern Med 1997 (PubMed).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 52-year-old man attends a routine health check. His blood pressure readings on 2 separate visits are 148/92 mmHg and 150/94 mmHg respectively. He has no symptoms and no history of cardiovascular disease. Which is the most appropriate next step to confirm the diagnosis of hypertension?",
    "option_a": "Home blood pressure monitoring for 1 week",
    "option_b": "Perform a 24-hour urine collection for protein",
    "option_c": "Perform ambulatory blood pressure monitoring",
    "option_d": "Repeat clinic blood pressure measurement after 1 month",
    "correct_option": "C",
    "explanation": "Clinic readings in this range (stage 1 hypertension) have a high rate of white-coat hypertension (~20–25%). Out-of-office measurement is required to confirm the diagnosis, and ABPM is the reference standard — it gives the largest number of readings, captures nocturnal dipping status, and predicts cardiovascular outcome better than clinic measurement. NICE explicitly recommends ABPM to confirm the diagnosis when clinic BP is 140/90–180/120 mmHg. A. Home BP monitoring for 1 week — a legitimate and guideline-endorsed alternative when ABPM is declined or unavailable, and the more practical option in many Malaysian settings. But as the single best confirmatory test, ABPM outranks it. Reasonable second choice. B. 24-hour urine protein — an end-organ damage assessment performed after diagnosis, not a diagnostic test for hypertension. D. Repeat clinic BP in 1 month — more of the same flawed measurement; does not resolve white-coat effect and delays diagnosis.\nReference: NICE NG136 \"Hypertension in adults: diagnosis and management\" (nice.org.uk, free); Malaysian CPG on Management of Hypertension, 5th ed. (moh.gov.my); ESC/ESH Hypertension Guidelines 2023/2024.",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which of the following best defines frailty?",
    "option_a": "Dependency in activities of daily living",
    "option_b": "Age above 75 years",
    "option_c": "Reduced physiological reserve and increased vulnerability to stressors",
    "option_d": "Presence of multiple chronic disease",
    "correct_option": "C",
    "explanation": "Frailty is a state of increased vulnerability resulting from cumulative decline across multiple physiological systems, such that a minor stressor (a new drug, a UTI, a hospital admission) produces a disproportionate deterioration in health status. Operationalised either as a phenotype (Fried: unintentional weight loss, exhaustion, weakness, slow gait speed, low physical activity — ≥3 of 5) or as an accumulated deficit index (Rockwood). A. ADL dependency — that is disability, an outcome of frailty. A frail person can be fully independent until a stressor arrives; conversely a person with stable paraplegia may be ADL-dependent but not frail. Keeping these concepts separate is the point of the question. B. Age above 75 — frailty is age-associated but not age-defined. Many over-75s are robust; frailty occurs in younger people with multimorbidity. D. Multiple chronic diseases — that is multimorbidity, an overlapping but distinct construct.\nReference: Clegg A, Young J, Iliffe S, Rikkert MO, Rockwood K. \"Frailty in elderly people,\" Lancet 2013 (PubMed — a standard citation); Fried LP et al. J Gerontol A Biol Sci Med Sci 2001; BGS \"Fit for Frailty\" (bgs.org.uk, free).",
    tag: "Past Year Question"
  },
  {
    "question_text": "In the history taking for a child with a disability, birth history often includes assessment of the APGAR score at birth. Which is not a component of the APGAR score?",
    "option_a": "Heart rate",
    "option_b": "Respiratory rate",
    "option_c": "Muscle tone",
    "option_d": "Skin colour",
    "correct_option": "B",
    "explanation": "APGAR assesses Appearance (colour), Pulse (heart rate), Grimace (reflex irritability), Activity (muscle tone) and Respiration (respiratory effort — absent / slow and irregular / good crying). The respiratory component is scored as effort and quality of cry, not as a counted rate. A. Heart rate — Pulse; the single most important component (absent / <100 / >100). C. Muscle tone — Activity. D. Skin colour — Appearance. Note: this question turns entirely on the distinction between respiratory effort and respiratory rate. A candidate who reads too fast will pick a real component.\nReference: American Academy of Pediatrics / ACOG joint statement, \"The Apgar Score\" (Pediatrics, free at publications.aap.org); StatPearls, \"APGAR Score\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 9-year-old boy with Duchenne muscular dystrophy walks on his toes and demonstrates lumbar lordosis during ambulation. On examination, passive ankle dorsiflexion is markedly reduced and the heel cannot be brought fully to the floor even when the knee is flexed. Which main mechanism is responsible for the ankle deformity?",
    "option_a": "Degeneration of ankle articular cartilage",
    "option_b": "Spastic overactivity of the gastrocnemius muscle",
    "option_c": "Sensory loss causing abnormal foot loading",
    "option_d": "Replacement of elastic muscle fibres with fibrotic tissue",
    "correct_option": "D",
    "explanation": "In DMD, absent dystrophin leads to repeated sarcolemmal injury, myofibre necrosis and progressive replacement of muscle with fibrous and adipose tissue (pseudohypertrophy). The gastrocnemius-soleus becomes structurally shortened and inextensible — a true myostatic contracture. The key clinical clue is that dorsiflexion remains restricted even with the knee flexed, which takes the two-joint gastrocnemius off stretch and therefore localises the restriction to fixed soleus/Achilles shortening rather than dynamic gastrocnemius tightness. B. Spastic overactivity of gastrocnemius — DMD is a myopathy, a lower motor unit / muscle disorder. There is no upper motor neuron lesion and therefore no spasticity. This is the main trap. A. Cartilage degeneration — an osteoarthritic mechanism; irrelevant at 9 years and does not cause fixed equinus. C. Sensory loss — sensation is entirely normal in DMD; it is a pure motor disorder.\nReference: StatPearls, \"Duchenne Muscular Dystrophy\"; Birnkrant DJ et al. \"DMD Care Considerations Working Group,\" Lancet Neurol 2018 (free, PubMed); Braddom Ch. 40 \"Myopathic Disorders\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which of the following best describes Duchenne muscular dystrophy (DMD)?",
    "option_a": "X-linked recessive neuromuscular disorder due to dystrophin deficiency",
    "option_b": "Autosomal recessive neuromuscular disorder due to dystrophin deficiency",
    "option_c": "Autosomal dominant neuromuscular disorder due to dystrophin deficiency",
    "option_d": "X-linked dominant neuromuscular disorder due to dystrophin deficiency",
    "correct_option": "A",
    "explanation": "The DMD gene at Xp21 is the largest human gene (79 exons, 2.4 Mb). Deletions/duplications causing a frameshift abolish dystrophin → Duchenne; in-frame mutations produce a truncated but partly functional protein → the milder Becker phenotype (the reading-frame rule). Inheritance is X-linked recessive: affected boys, carrier mothers (who may show mild weakness or cardiomyopathy), ~⅓ of cases from de novo mutation. B. Autosomal recessive — that inheritance pattern describes the limb-girdle muscular dystrophies (most types) and SMA, not DMD. C. Autosomal dominant — describes myotonic dystrophy (DM1, DMPK CTG repeat) and FSHD. D. X-linked dominant — describes Rett syndrome and Alport syndrome (some forms); an X-linked dominant DMD would affect females equally, which it does not.\nReference: StatPearls, \"Duchenne Muscular Dystrophy\"; GeneReviews (NCBI Bookshelf), \"Dystrophinopathies\" — free and authoritative.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 5-year-old boy presents with tiptoe walking and getting up from the floor. On examination, calf hypertrophy is noticed. Which is the most appropriate initial laboratory screening test to support the diagnosis?",
    "option_a": "Electromyography",
    "option_b": "Genetic testing",
    "option_c": "Serum creatine kinase",
    "option_d": "Muscle biopsy",
    "correct_option": "C",
    "explanation": "CK is the appropriate first-line screening test: cheap, fast, universally available, and grossly elevated (often 10–100× normal, typically >10,000 U/L) in DMD from birth. A normal CK essentially excludes DMD. A markedly raised CK then justifies proceeding to confirmatory genetic testing. B. Genetic testing — the confirmatory test (MLPA for deletions/duplications, then sequencing), and now the definitive diagnostic standard. But the question asks for the initial laboratory screening test; genetic testing is more costly and slower and is ordered on the strength of a raised CK. A. EMG — invasive, painful in a child, and non-specific (shows myopathic units); largely superseded. D. Muscle biopsy — invasive; now reserved for cases where genetic testing is non-diagnostic. Not a screen.\nReference: Birnkrant DJ et al., DMD Care Considerations (Lancet Neurol 2018) — diagnostic pathway figure; StatPearls, \"Duchenne Muscular Dystrophy\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 9-month-old infant is brought for developmental assessment. The mother reports difficulty sitting and that the child stiffens when picked up. On examination, a persistent asymmetric tonic neck reflex is noted. Which is the clinical significance of the finding?",
    "option_a": "Upper motor neuron dysfunction due to impaired cortical inhibition",
    "option_b": "Normal persistence of a primitive reflex in late infancy",
    "option_c": "Benign developmental delay without neurological abnormality",
    "option_d": "Lower motor neuron lesion affecting proximal muscles",
    "correct_option": "A",
    "explanation": "The asymmetric tonic neck reflex normally appears around birth and integrates (disappears) by 4–6 months as maturing corticospinal/cortical pathways inhibit brainstem-mediated primitive reflexes. Persistence at 9 months, with hypertonia (\"stiffens when picked up\") and failure to sit, indicates a UMN lesion — in practice, this is the early presentation of cerebral palsy. Persistent ATNR is also functionally disabling: it blocks midline hand use, symmetrical rolling and sitting balance. B. Normal persistence in late infancy — it is not normal after ~6 months. This is the discriminator the question is testing. C. Benign developmental delay — \"benign\" cannot be reconciled with abnormal tone plus an abnormal reflex; these are hard neurological signs. D. Lower motor neuron lesion — would produce hypotonia, areflexia and weakness (e.g. SMA), the opposite of stiffening.\nReference: Braddom Ch. 51 \"Cerebral Palsy\"; StatPearls, \"Primitive Reflexes\"; AACPDM resources (aacpdm.org).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 10-year-old boy presents with persistent pain and swelling over the distal femur for 14 days, associated with low-grade fever. On examination, there is localised tenderness and reduced range of motion of the knee. A plain radiograph is performed. Which is the most likely radiographic finding at this stage?",
    "option_a": "Periosteal new bone formation",
    "option_b": "Sequestrum formation",
    "option_c": "Soft tissue swelling",
    "option_d": "Involucrum formation",
    "correct_option": "A",
    "explanation": "The radiographic timeline of acute haematogenous osteomyelitis: Time: Days 1–3; Radiographic finding: Soft tissue swelling, loss of fat planes (may be the only finding). Time: ~10–14 days; Radiographic finding: Periosteal reaction / periosteal new bone; lytic change needs 30–50% bone loss. Time: 2–3 weeks+; Radiographic finding: Frank lytic destruction. Time: 3–6 weeks+; Radiographic finding: Sequestrum (dead bone). Time: ~Weeks–months; Radiographic finding: Involucrum (new bone shell around sequestrum)At 14 days, periosteal new bone is the expected finding, and the metaphysis of the distal femur is the classic site (sluggish flow in metaphyseal sinusoids). C. Soft tissue swelling — correct for the first few days, and the strongest distractor. By day 14 it is no longer the most likely new finding. The \"14 days\" in the stem is doing all the work. B. Sequestrum and D. Involucrum — features of chronic osteomyelitis, weeks to months later.\nReference: Radiopaedia, \"Osteomyelitis\" (imaging timeline); StatPearls, \"Acute Hematogenous Osteomyelitis\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which of the following best describes shear in the development of pressure injury?",
    "option_a": "Excessive movement between 2 body surfaces",
    "option_b": "Rubbing of the skin against an external surface, causing superficial skin damage",
    "option_c": "Continuous compression of soft tissue between a bony prominence and an external surface",
    "option_d": "Downward sliding of skin layers while deeper tissues remain fixed",
    "correct_option": "D",
    "explanation": "Shear is a parallel (tangential) force generated when adjacent tissue layers move in opposite directions — classically when the head of the bed is elevated and the skeleton slides down while the skin is held by friction against the sheet. This distorts and kinks the perforating vessels in the deep fascia, causing deep tissue ischaemia out of proportion to the surface appearance — the basis of deep tissue injury and undermined sacral ulcers. B. Rubbing against an external surface causing superficial damage — that is friction, which causes abrasions and blisters, not deep injury. Friction and shear are related (friction enables shear) but are distinct forces. C. Continuous compression between bony prominence and external surface — that is pressure, the other principal aetiological force. A. Excessive movement between 2 body surfaces — vague and does not describe any defined force in the pressure injury literature. Note on the wording: strictly, the conventional description is that the skeleton/deep tissue slides while the skin stays fixed. Option D states the relationship in the reverse direction, but it is the only option describing relative parallel displacement between tissue layers, which is the defining characteristic of shear. It is the intended answer.\nReference: EPUAP/NPIAP/PPPIA \"Prevention and Treatment of Pressure Ulcers/Injuries: Clinical Practice Guideline\" 2019 (internationalguideline.com — free quick reference guide); Braddom Ch. 55 \"Pressure Injuries\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 68-year-old man is admitted to the medical ward following a treatment for Severe community-acquired pneumonia. He has been bedridden for several days and is receiving opioid analgesia for pleuritic chest pain. On day 5 of admission, he develops progressive abdominal distension, nausea and has not passed stool or flatus for 2 days. On examination, his abdomen is distended but non-tender. Bowel sounds are absent. An abdominal radiograph shows diffuse gaseous distension of both small and large bowel loops without air-fluid levels or a transition point. Which is the most likely diagnosis?",
    "option_a": "Paralytic ileus",
    "option_b": "Sigmoid volvulus",
    "option_c": "Acute mesenteric ischaemia",
    "option_d": "Mechanical small bowel obstruction",
    "correct_option": "A",
    "explanation": "Three findings clinch it: 1. Absent bowel sounds (mechanical obstruction gives high-pitched, tinkling sounds early), 2. Diffuse gaseous distension of both small and large bowel, including gas all the way to the rectum, 3. No transition point and no air-fluid levels. Risk factors are all present: immobility, opioids, recent severe illness, probable electrolyte disturbance. D. Mechanical small bowel obstruction — would show dilated small bowel with a collapsed distal colon, a transition point, multiple air-fluid levels, and hyperactive/tinkling then absent sounds. The explicit absence of these is the discriminator. B. Sigmoid volvulus — a massively dilated single loop with the coffee bean/inverted-U sign arising from the pelvis, not diffuse distension. C. Acute mesenteric ischaemia — pain out of proportion to a soft abdomen, metabolic acidosis with raised lactate, rapid systemic deterioration. He is non-tender and stable.\nReference: StatPearls, \"Ileus\"; Radiopaedia, \"Paralytic ileus\" vs \"Small bowel obstruction\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 60-year-old man with chronic incomplete spinal cord injury presents with abdominal distension, vomiting, absolute constipation and high-pitched bowel sounds. Which is the immediate management step?",
    "option_a": "Perform a rectal examination",
    "option_b": "Urgent referral to the surgical team",
    "option_c": "Insert nasogastric tube",
    "option_d": "Order an urgent abdominal X-ray",
    "correct_option": "C",
    "explanation": "High-pitched bowel sounds with vomiting and absolute constipation indicate mechanical obstruction. The immediate management step is decompression and prevention of aspiration — \"drip and suck\": nil by mouth, IV fluids, and an NG tube on free drainage to decompress the proximal bowel. In a patient with SCI the aspiration risk is higher (impaired cough, possible impaired sensation masking the severity), making early NG decompression more, not less, urgent. A. Rectal examination — mandatory and should be done, but it is part of assessment, not management; the stem asks for the immediate management step. (It is, however, the step people most often skip — in a chronic SCI patient with neurogenic bowel, faecal impaction is a leading differential.) B. Urgent surgical referral — necessary, and should happen in parallel, but referral is not itself a resuscitative manoeuvre; you stabilise while you refer. D. Urgent abdominal X-ray — an investigation, not management. Note: if your faculty's key says A, the reasoning will be that in neurogenic bowel you must first exclude impaction/pseudo-obstruction before anything else. Both defences are clinically sound; the discriminator is whether the examiner reads \"management\" strictly. Worth flagging.\nReference: Braddom Ch. 49 (neurogenic bowel); Consortium for Spinal Cord Medicine, \"Neurogenic Bowel Management in Adults with Spinal Cord Injury\" (free PDF); StatPearls, \"Small Bowel Obstruction\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 60-year-old man is admitted to the rehabilitation ward following a recent transtibial amputation for diabetic foot infection. On day 4 of admission, he develops abdominal distension, colicky abdominal pain, vomiting and an inability to pass stool or flatus for the past 24 hours. He is suspected for acute intestinal obstruction. Which is the immediate imaging investigation to evaluate the patient?",
    "option_a": "Abdominal ultrasound",
    "option_b": "M CT scan of the abdomen",
    "option_c": "Colonoscopy",
    "option_d": "Plain abdominal radiograph",
    "correct_option": "D",
    "explanation": "The erect/supine plain abdominal film is the immediate, bedside-available first-line investigation in suspected obstruction. It is fast, cheap, requires no contrast or transfer, and demonstrates dilated loops, air-fluid levels, valvulae conniventes vs haustra, and free gas on an erect chest film. B. CT abdomen — has superior sensitivity/specificity and is the definitive modality (it identifies the level, cause, and signs of strangulation), but it is not the immediate investigation: it requires transfer, contrast (a consideration in a diabetic on possible metformin with uncertain renal function), and scheduling. The question's word is \"immediate\". A. Abdominal ultrasound — degraded by bowel gas, which is exactly what is present; operator dependent. C. Colonoscopy — contraindicated in suspected acute obstruction (perforation risk), except for the specific therapeutic indication of sigmoid volvulus decompression.\nReference: StatPearls, \"Small Bowel Obstruction\"; ACR Appropriateness Criteria, \"Suspected Small-Bowel Obstruction\" (acr.org, free).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 65-year-old man with a history of prostate cancer prisents with acute lower back pain and difficulty of walking. On examination, there is reduced power in both lower limbs. Which finding is more suggestive of nerve root compression than the cauda equina syndrome?",
    "option_a": "Urinary retention or incontinence",
    "option_b": "Radiation of pain to the right buttock",
    "option_c": "Bilateral lower limb weakness",
    "option_d": "Numbness over the perineal region",
    "correct_option": "B",
    "explanation": "Unilateral, dermatomal radiating pain reflects compression of a single nerve root (radiculopathy). Cauda equina syndrome by definition involves multiple sacral roots bilaterally, and is characterised by the red flags: bilateral sciatica, saddle anaesthesia, bladder/bowel dysfunction and reduced anal tone. A. Urinary retention or incontinence — the cardinal CES feature (painless retention with overflow; the single most important red flag). C. Bilateral lower limb weakness — indicates multi-root, bilateral involvement. D. Perineal numbness — saddle anaesthesia (S2–S4), essentially pathognomonic for CES. Clinical caution: this patient has prostate cancer with acute back pain and bilateral weakness — in real life, this is metastatic cord/cauda compression until proven otherwise and needs urgent MRI and dexamethasone.\nReference: StatPearls, \"Cauda Equina and Conus Medullaris Syndromes\"; NICE NG59 \"Low back pain and sciatica in over 16s\" (nice.org.uk).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 50-year-old office worker with carpal tunnel syndrome has persistent symptoms despite 3 months of wrist splinting and activity modification. There is no thenar wasting. Which is the most appropriate next step?",
    "option_a": "Hand strengthening exercises",
    "option_b": "Surgical decompression",
    "option_c": "Corticosteroid injection",
    "option_d": "Continue splinting for another 6 months",
    "correct_option": "C",
    "explanation": "The management ladder in CTS is: activity modification and night splinting → local corticosteroid injection → surgical decompression. Injection is the appropriate next step for mild-to-moderate CTS that has failed conservative measures. There is good randomised evidence of short- to medium-term symptom relief, and a good response also has predictive value for surgical success. B. Surgical decompression — indicated for severe CTS: thenar wasting, fixed sensory loss, denervation on EMG, or failure of injection. The stem explicitly states there is no thenar wasting, which is the clue placed there to exclude this option. A. Hand strengthening exercises — CTS is a compressive neuropathy; strengthening does not decompress the tunnel and may aggravate symptoms. D. Continue splinting for another 6 months — 3 months of failed splinting has already defined this as refractory. Persisting risks permanent axonal loss.\nReference: AAOS Clinical Practice Guideline, \"Management of Carpal Tunnel Syndrome\" (orthoguidelines.org, free); StatPearls, \"Carpal Tunnel Syndrome\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 58-year-old man with poorly controlled diabetes mellitus presents with rapidly worsening pain in his left lower limb 18 hours after sustaining a deep laceration while working on his farm. On examination, the affected area is swollen with dusky skin discolouration. There are haemorrhagic bullae and a foul-smelling discharge. Crepitus is palpable over the affected region. He is febrile, tachycardic and appears toxic. Which is the most likely diagnosis?",
    "option_a": "Erysipelas",
    "option_b": "Necrotising fasciitis",
    "option_c": "Gas gangrene",
    "option_d": "Cellulitis",
    "correct_option": "B",
    "explanation": "This presentation — a diabetic patient with a deep, contaminated wound, rapidly worsening pain, dusky/haemorrhagic skin discolouration and foul-smelling discharge with systemic toxicity — is a necrotising soft tissue infection. Diabetic (Type I, polymicrobial) necrotising fasciitis commonly produces gas-forming crepitus and a foul discharge as gas-producing organisms track along the fascial planes, which accounts for the crepitus without requiring a clostridial infection. Gas gangrene (clostridial myonecrosis) is a very close differential given the crepitus and foul discharge, but the haemorrhagic bullae and dusky skin change described are the more classically emphasised features of necrotising fasciitis. In practice the two conditions are managed identically — emergency surgical debridement plus broad-spectrum antibiotics — so the diagnostic label should never delay urgent surgical referral.\nReference: StatPearls, \"Necrotizing Fasciitis\" and \"Gas Gangrene\"; IDSA \"Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections\" (Clin Infect Dis 2014, free).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 25 year old man, presents with sever leg pain after a tibial fracture. The pain is disproportionate and worsens with passive toe stretching. Which is the most appropriate next step?",
    "option_a": "Elevate the limb",
    "option_b": "Give analgesia and observe",
    "option_c": "Apply a tight bandage T",
    "option_d": "Immediate fasciotomy",
    "correct_option": "D",
    "explanation": "Acute compartment syndrome — the two earliest and most reliable clinical signs are pain out of proportion to the injury and pain on passive stretch of the muscles within the compartment. The tibia is the commonest site. Muscle necrosis begins within ~4–6 hours of raised compartment pressure, and the damage is irreversible. Emergency fasciotomy is the only definitive treatment and must not await the late \"P\"s (pallor, paralysis, pulselessness, poikilothermia), which indicate limb loss is imminent. A. Elevate the limb — harmful. Elevation above heart level lowers the arteriovenous perfusion gradient and worsens ischaemia. The limb should be kept at heart level. B. Analgesia and observe — dangerous; escalating opioid requirement is itself a warning sign of compartment syndrome, and observing burns the ischaemic window. C. Apply a tight bandage — directly contraindicated; all constrictive dressings and casts must be split or removed.\nReference: StatPearls, \"Acute Compartment Syndrome\"; AAOS OrthoInfo, \"Compartment Syndrome\"; BOA/BAPRAS Standards for Trauma (boa.ac.uk).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 65-year-old woman with known bilateral knee osteoarthritis complains of worsening difficulty walking over the past year. Her knee pain is controlled with analgesics but she reports increasing difficulty climbing stairs and rising from a chair. Which secondary musculoskeletal complication best explains her difficulties?",
    "option_a": "Quadriceps muscle weakness",
    "option_b": "Progressive ligament instability",
    "option_c": "Meniscal degeneration",
    "option_d": "Knee joint effusion",
    "correct_option": "A",
    "explanation": "The critical detail is that her pain is controlled — so the functional decline is not pain-driven. Stair climbing and rising from a chair are the two tasks most dependent on eccentric and concentric quadriceps strength. In knee OA, arthrogenic muscle inhibition plus disuse produces marked quadriceps atrophy, which is both a consequence and a driver of progression, and it is the single most modifiable secondary complication — which is why quadriceps strengthening is the core evidence-based intervention in every knee OA guideline. B. Ligament instability — would present with giving way, buckling and a positive laxity examination, not a gradual functional decline. C. Meniscal degeneration — common and often incidental in OA; would cause mechanical symptoms (locking, catching) and pain. D. Joint effusion — causes pain, swelling and reflex quadriceps inhibition, but is usually episodic and would be evident on examination.\nReference: OARSI Guidelines for the non-surgical management of knee OA (oarsi.org, free); ACR/AF Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee (Arthritis Rheumatol 2019, free); Braddom Ch. 43.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 28-year-old man with a complete C6 spinal cord injury presents with difficulty clearing respiratory secretions. On examination, his cough is weak despite adequate lung expansion. Which explains the above scenario?",
    "option_a": "Impaired coordination of respiratory muscles due to disrupted spinal reflexes",
    "option_b": "Paralysis of the diaphragm leading to reduced inspiratory capacity",
    "option_c": "Reduced chest wall compliance due to intercostal muscle paralysis",
    "option_d": "Loss of expiratory muscle function causes reduced intrathoracic pressure",
    "correct_option": "D",
    "explanation": "The phrase \"despite adequate lung expansion\" tells you inspiration is intact — as expected, since the diaphragm (C3–C5) is preserved at C6. The deficit is in the expulsive phase: the abdominal muscles (T6–T12) and internal intercostals are paralysed below C6, so the patient cannot generate the rapid rise in intrathoracic and intra-abdominal pressure needed for an effective cough. Hence secretion retention, atelectasis and pneumonia — the leading cause of morbidity and mortality in cervical SCI. Management: assisted cough (quad cough), mechanical insufflation-exsufflation, abdominal binder. B. Diaphragmatic paralysis — the diaphragm is innervated C3–C5 and therefore intact at C6; and the stem explicitly says lung expansion is adequate. Direct contradiction. C. Reduced chest wall compliance — intercostal paralysis does reduce compliance and contributes to restrictive physiology over time, but it is a contributing, chronic factor, not the mechanism of a weak cough with preserved inspiration. A. Impaired coordination due to disrupted spinal reflexes — vague; the problem is paralysis of specific muscle groups, not discoordination.\nReference: Braddom Ch. 49 \"Spinal Cord Injury\" (respiratory function by level); Consortium for Spinal Cord Medicine, \"Respiratory Management Following Spinal Cord Injury\" (free PDF).",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which renal stone is radiolucent on X-ray?",
    "option_a": "Uric acid nephrolithiasis",
    "option_b": "Calcium oxalate",
    "option_c": "Struvite",
    "option_d": "Calcium phosphate",
    "correct_option": "A",
    "explanation": "Uric acid stones are radiolucent on plain KUB because they contain no calcium and therefore do not attenuate X-rays. They account for ~5–10% of stones, form in persistently acidic urine (pH < 5.5), and are associated with gout, metabolic syndrome, chronic diarrhoea and high purine intake. They are visible on non-contrast CT (the modality of choice) and, importantly, are the stone type amenable to medical dissolution by urinary alkalinisation with potassium citrate. B. Calcium oxalate — the commonest stone and the most radio-opaque. C. Struvite — magnesium ammonium phosphate; radio-opaque, associated with urease-producing organisms (Proteus, Klebsiella), forms staghorn calculi in alkaline urine. D. Calcium phosphate — radio-opaque; associated with distal renal tubular acidosis and hyperparathyroidism. Memory aid: the only common radiolucent stones are uric acid, xanthine, indinavir and pure matrix stones. Cystine is faintly opaque (\"ground glass\").\nReference: StatPearls, \"Nephrolithiasis\"; Radiopaedia, \"Renal calculi\"; AUA/EAU urolithiasis guidelines (auanet.org / uroweb.org).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 25-year-old man sustains a traumatic brain injury after a road traffic accident. His CT scan of the brain is shown below. Which is the most likely diagnosis?",
    "option_a": "Extradural haematoma",
    "option_b": "Subdural haematoma",
    "option_c": "Cortical contusion",
    "option_d": "Subarachnoid haemorrhage",
    "correct_option": "A",
    "explanation": "The CT shows a well-defined, lens-shaped (biconvex) hyperdense extra-axial collection that does not cross suture lines — the classic appearance of an extradural (epidural) haematoma. It typically arises from a tear of the middle meningeal artery following a temporal bone fracture, and is limited in its spread because the dura remains tethered to the skull at the suture lines. Extradural haematomas classically present with a lucid interval before neurological deterioration as the haematoma expands. This is distinguished from a subdural haematoma, which instead forms a crescentic (concave), less sharply marginated collection that CAN cross suture lines, arising from torn bridging cortical veins.\nReference: Radiopaedia, \"Extradural haemorrhage\" and \"Subdural haemorrhage\" (side-by-side comparison images); StatPearls, \"Epidural Hematoma\".",
    "image_url": "images/medex_q75_ct_brain.jpg",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 68-year-old man presents to the emergency department with acute abdominal distension, severe abdominal pain and absolute constipation for 24 hours. He has a long history of chronic constipation and lives in a long-term care facility. On examination, the abdomen is markedly distended and tympanic, with mild diffuse tenderness and no signs of peritonitis. He is haemodynamically stable. His abdominal X-ray is shown below. Which is the most likely diagnosis?",
    "option_a": "Intussusception",
    "option_b": "Toxic megacolon",
    "option_c": "Caecal volvulus",
    "option_d": "Sigmoid volvulus",
    "correct_option": "D",
    "explanation": "Both clinical and radiological features align. Clinical: elderly institutionalised patient, chronic constipation, high-fibre/low-mobility state, acute distension with absolute constipation and a tympanic non-peritonitic abdomen — the classic demographic. Radiological: a massively dilated, gas-filled inverted-U / \"coffee bean\" loop arising from the pelvis and extending to the right upper quadrant, with the \"northern exposure\" sign (the apex lying above the transverse colon) and loss of haustra. C. Caecal volvulus — a younger patient; the dilated loop points toward the left upper quadrant with the \"embryo\" sign, and there is associated small bowel dilatation with a collapsed distal colon. B. Toxic megacolon — requires underlying colitis (IBD or C. difficile) with systemic toxicity: fever, tachycardia, raised WCC. It shows a dilated transverse colon with mucosal thumbprinting and loss of haustra, in an unwell patient. He is haemodynamically stable with no colitis history. A. Intussusception — a paediatric diagnosis predominantly; in adults it is rare, usually has a pathological lead point, and presents with a target/doughnut sign on ultrasound or CT, not this appearance. Management pearl: flexible sigmoidoscopic decompression with flatus tube is first-line if there are no signs of ischaemia or peritonitis; elective sigmoid resection follows because recurrence is high.\nReference: Radiopaedia, \"Sigmoid volvulus\" (coffee bean sign, northern exposure sign); StatPearls, \"Sigmoid Volvulus\".",
    "image_url": "images/medex_q76_abdominal_xray.jpg",
    tag: "Past Year Question"
  },
  {
    "question_text": "Susceptibility-weighted MRI demonstrating microhaemorrhages in the corpus callosum most strongly suggests injury due to",
    "option_a": "hypoxic encephalopathy",
    "option_b": "rotational acceleration forces",
    "option_c": "linear translational acceleration",
    "option_d": "direct coup impact",
    "correct_option": "B",
    "explanation": "This is diffuse axonal injury (DAI). Angular/rotational acceleration-deceleration generates shear strain at interfaces of differing tissue density — precisely at the grey-white junction, corpus callosum (especially splenium) and dorsolateral rostral brainstem, which are the three graded sites of DAI (Adams grades I–III). Susceptibility-weighted imaging is the most sensitive sequence for the associated haemorrhagic shear lesions, detecting far more than conventional gradient-echo or CT. A. Hypoxic encephalopathy — produces bilateral symmetrical injury in watershed zones, basal ganglia, hippocampi and cortical laminar necrosis; not callosal microbleeds. C. Linear translational acceleration — produces focal contact injuries: contusions, extradural and subdural haematomas. Experimental work (Gennarelli, Adams) specifically showed that linear acceleration alone does not produce DAI — angular acceleration is required. This is the discriminator. D. Direct coup impact — a focal contact mechanism producing contusion at the impact site, not deep callosal shear.\nReference: Radiopaedia, \"Diffuse axonal injury\"; StatPearls, \"Diffuse Axonal Injury\"; Braddom Ch. 43 \"Traumatic Brain Injury\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A post-stroke patient has increased muscle tone in the left elbow flexors. Resistance to passive movement increases with faster stretch velocity and there is a catch followed by release during rapid passive extension of the elbow. Which of the following best describes the pathophysiological mechanism described above?",
    "option_a": "Loss of descending inhibitory control",
    "option_b": "Structural shortening of muscles",
    "option_c": "Primary disease of the neuromuscular junction",
    "option_d": "Degeneration of lower motor neurons",
    "correct_option": "A",
    "explanation": "Lance's definition: spasticity is a velocity-dependent increase in tonic stretch reflexes with exaggerated tendon jerks, resulting from hyperexcitability of the stretch reflex, as one component of the upper motor neurone syndrome. The mechanism is loss of descending inhibitory input — principally via the dorsal reticulospinal tract (inhibitory, running in the dorsolateral funiculus), leaving the facilitatory medial reticulospinal and vestibulospinal drive unopposed. This reduces presynaptic and reciprocal Ia inhibition, so the segmental stretch reflex becomes hyperexcitable. B. Structural shortening of muscles — that is contracture, which produces velocity-independent resistance. The stem explicitly states the resistance varies with velocity. C. Primary NMJ disease — myasthenia produces fatigable weakness, never hypertonia. D. Degeneration of lower motor neurons — LMN lesions produce flaccidity, hypotonia and areflexia.\nReference: Lance JW, in Spasticity: Disordered Motor Control (1980) — the standard definition; Braddom Ch. 30 \"Spasticity\"; StatPearls, \"Spasticity\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 32-year-old woman presents with a 3-month history of drooping eyelids that worsens as the day progresses. She also reports double vision in the evenings and difficulty in chewing during meals. Her symptoms improve after resting. On examination, she has bilateral ptosis that worsens after sustained upward gaze for 60 seconds. Pupillary reflexes are normal. There is no muscle wasting or fasciculations. Which pathophysiological mechanism most likely explains the patient's symptoms?",
    "option_a": "Antibodies against acetylcholine receptors at the neuromuscular junction cause impaired neuromuscular transmission",
    "option_b": "Degeneration of anterior horn cells causing lower motor neuron weakness",
    "option_c": "Loss of dopaminergic neurons in the substantia nigra, causing extrapyramidal motor symptoms",
    "option_d": "Demyelination of peripheral nerves, causing slowed nerve conduction velocity",
    "correct_option": "A",
    "explanation": "Myasthenia gravis. Anti-AChR antibodies (~85% of generalised MG) act by three mechanisms: complement-mediated destruction of the postsynaptic membrane, cross-linking and accelerated internalisation of receptors, and direct receptor blockade. The reduced safety factor of transmission explains the hallmark fatigability — worsening with sustained activity and through the day, improving with rest. Normal pupils are an important stem detail: pupillary muscle is smooth muscle and is spared (unlike in botulism, where pupils are affected). B. Anterior horn cell degeneration — motor neurone disease: would show wasting and fasciculations, both explicitly excluded in the stem, and there is no fatigability pattern. C. Substantia nigra dopaminergic loss — Parkinson disease: bradykinesia, rigidity, resting tremor. No ptosis-diplopia-chewing pattern. D. Peripheral demyelination — CIDP/GBS: areflexia, sensory involvement, distal weakness; not fatigable ocular-bulbar weakness.\nReference: StatPearls, \"Myasthenia Gravis\"; Gilhus NE. \"Myasthenia Gravis,\" N Engl J Med 2016 (PubMed); Braddom Ch. 41.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 30-year-old male patient sustain a complete spinal cord injury at the T6 level after a motor vehicle accident. He complains of frequent involuntary urinary leakage and urgency. Urodynamic studies reveal uninhibited detrusor contractions with low bladder capacity. Which of the following best describes the physiological mechanism described above？",
    "option_a": "Loss of supraspinal inhibition on the sacral micturition reflex",
    "option_b": "Disruption of the sacral micturition centre",
    "option_c": "Inhibition of pelvic and pudendal nuclei",
    "option_d": "Excess sympathetic outflow from the thoracolumbar cord",
    "correct_option": "A",
    "explanation": "The pontine micturition centre (Barrington's nucleus) normally exerts descending control over the sacral micturition reflex arc (S2–S4). A suprasacral cord lesion (T6 here) disconnects the sacral reflex arc from pontine control while leaving the arc itself intact. After spinal shock resolves, a spinal (uninhibited) reflex bladder emerges: neurogenic detrusor overactivity, small capacity, high storage pressures, urgency and reflex incontinence — usually with detrusor-sphincter dyssynergia, which is why upper tract protection (urodynamics, anticholinergics/botulinum toxin, clean intermittent catheterisation) is essential. B. Disruption of the sacral micturition centre — a conus/cauda (sacral) lesion gives the opposite picture: an areflexic, acontractile, large-capacity bladder with overflow incontinence. C. Inhibition of pelvic and pudendal nuclei — would reduce detrusor contraction, contradicting the urodynamic finding of uninhibited contractions. D. Excess sympathetic outflow (T11–L2) — sympathetic activity promotes storage (detrusor relaxation via β3, bladder neck contraction via α1). Excess would cause retention, not overactivity.\nReference: Braddom Ch. 49 \"Spinal Cord Injury\" (neurogenic bladder) and Ch. 21 \"Neurogenic Bladder\"; StatPearls, \"Neurogenic Bladder\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "In moderate traumatic brain injury, impaired cerebral autoregulation primarily increases the risk of",
    "option_a": "seizure propagation",
    "option_b": "hypoxic-ischaemic injury",
    "option_c": "chronic subdural haematoma",
    "option_d": "hydrocephalus",
    "correct_option": "B",
    "explanation": "Intact autoregulation maintains near-constant cerebral blood flow across a MAP of roughly 50–150 mmHg. When it is lost after TBI, CBF becomes passively dependent on systemic blood pressure: any fall in MAP translates directly into cerebral hypoperfusion and ischaemia, and any rise causes hyperaemia, raised ICP and oedema. This is the core mechanism of secondary brain injury, and the reason CPP and blood pressure targets exist. A. Seizure propagation — post-traumatic seizures relate to cortical irritation from blood products, contusion and penetrating injury, not autoregulatory failure. C. Chronic subdural haematoma — a consequence of bridging vein injury and brain atrophy, unrelated to autoregulation. D. Hydrocephalus — results from impaired CSF circulation or resorption.\nReference: Brain Trauma Foundation Guidelines, 4th ed. (2017); Czosnyka M, Miller C. \"Monitoring of Cerebral Autoregulation,\" Neurocrit Care 2014 (PubMed); Braddom Ch. 43.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 70-year-old male is 4 weeks post-aneurysmal subarachnoid haemorrhage. During inpatient rehabilitation, the therapist notices a plateau in cognitive progress, new urinary incontinence and a worsening gait. A non-contrast CT brain shows ventriculomegaly out of proportion to cortical sulcal atrophy. A diagnostic high-volume lumbar puncture of 30 mL results in an immediate, transient improvement in gait velocity. Which mechanism best explains the complication?",
    "option_a": "Arachnoid granulation dysfunction",
    "option_b": "Cerebral vasospasm",
    "option_c": "Obstruction of the aqueduct of Sylvius",
    "option_d": "Hydrocephalus ex-vacuo",
    "correct_option": "A",
    "explanation": "This is secondary (post-haemorrhagic) normal pressure hydrocephalus. Blood breakdown products cause fibrosis and obstruction of the arachnoid granulations over the superior sagittal sinus, impairing CSF resorption into the venous system. Because flow through the ventricular system is unobstructed, this is communicating hydrocephalus. The positive high-volume tap test (transient gait improvement after removing 30–50 mL CSF) is both diagnostically supportive and the best predictor of shunt responsiveness. B. Cerebral vasospasm — peaks day 4–14, causes focal ischaemic deficits, and would not be relieved by a lumbar puncture. The timeframe is also wrong. C. Aqueductal obstruction — would produce non-communicating hydrocephalus with dilated lateral and third ventricles but a normal fourth ventricle, and an LP would be dangerous (herniation risk), not therapeutic. D. Hydrocephalus ex vacuo — ventriculomegaly proportionate to atrophy with widened sulci; the stem explicitly says \"out of proportion to cortical sulcal atrophy\", and ex vacuo would not respond to CSF removal.\nReference: StatPearls, \"Normal Pressure Hydrocephalus\"; Radiopaedia, \"Normal pressure hydrocephalus\"; International NPH Guidelines (Relkin N et al., Neurosurgery 2005 — PubMed).",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which physiological contributes to erectile dysfunction, depression, decreased cognitive ability and osteoporosis in elderly men?",
    "option_a": "Atherosclerotic changes resulting in impaired circulation to the gonads",
    "option_b": "Changes in thermoregulation, causing increased temperature in the gonads",
    "option_c": "Reduced the ability of Leydig cells to produce testosterone",
    "option_d": "Diminished hypothalamic secretion of the luteinising hormone",
    "correct_option": "C",
    "explanation": "Age-related late-onset hypogonadism is predominantly primary (testicular): the number and secretory capacity of Leydig cells decline, with reduced steroidogenic enzyme activity and reduced responsiveness to LH. The biochemical signature is a falling total and free testosterone with rising (or inappropriately normal) LH and FSH, plus increasing SHBG. Testosterone deficiency explains all four listed consequences — erectile dysfunction, low mood, reduced cognition, and reduced BMD via increased bone resorption (partly through reduced aromatisation to oestradiol). D. Diminished hypothalamic LH secretion — a secondary/central mechanism. It contributes in obesity, illness and opioid use, but the dominant age-related change is testicular, evidenced by the rise in gonadotrophins with age. A. Atherosclerotic impairment of gonadal circulation — vascular disease contributes to erectile dysfunction specifically (penile arterial insufficiency) but does not explain osteoporosis or the global hormonal picture. B. Thermoregulatory change — affects spermatogenesis (which is temperature-sensitive), not testosterone production or bone density.\nReference: Endocrine Society Clinical Practice Guideline, \"Testosterone Therapy in Men With Hypogonadism\" (JCEM 2018, free); StatPearls, \"Male Hypogonadism\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 38-year-old woman with an ankle sprain is started on Diclofenac. After a week, she notices that her asthmatic symptoms worsen. Which mechanism best explains her symptom?",
    "option_a": "Increased thromboxane A2 synthesis",
    "option_b": "Increased leukotriene A4 production",
    "option_c": "Reduced prostacyclin 12 synthesis",
    "option_d": "Reduced prostaglandin H2 synthesis",
    "correct_option": "B",
    "explanation": "NSAID-exacerbated respiratory disease (NERD / AERD / Samter's triad). Cyclo-oxygenase inhibition blocks the prostaglandin pathway, and arachidonic acid is shunted down the 5-lipoxygenase pathway, generating leukotriene A4 and hence the cysteinyl leukotrienes LTC4, LTD4 and LTE4. These are extremely potent bronchoconstrictors, mucus secretagogues and vascular permeability agents. Loss of the bronchoprotective PGE₂ brake compounds the effect. Treatment: avoid all non-selective COX inhibitors; leukotriene receptor antagonists are logically and clinically effective. A. Increased thromboxane A2 — TXA₂ is a COX product and is therefore reduced, not increased, by diclofenac. C. Reduced prostacyclin (PGI₂) — also a COX product and genuinely reduced; but PGI₂ is a vasodilator/antiplatelet mediator, and its loss explains NSAID cardiovascular risk, not bronchospasm. D. Reduced prostaglandin H2 synthesis — true (PGH₂ is the COX product), but it is a restatement of the drug's action, not the mechanism of bronchoconstriction. The bronchospasm is caused by what the shunted substrate produces.\nReference: StatPearls, \"Aspirin-Exacerbated Respiratory Disease\"; Laidlaw TM, Boyce JA. J Allergy Clin Immunol (PubMed); GINA Report (ginasthma.org, free).",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which position produces the highest pressure over the sacral area?",
    "option_a": "Full lateral (90° side-lying) position with the head of the bed flat",
    "option_b": "Supine position with the head of the bed elevated to 45°",
    "option_c": "30° lateral tilt position with the head of the bed flat",
    "option_d": "Supine position with the head of the bed flat at 180°",
    "correct_option": "B",
    "explanation": "Elevating the head of the bed does two things simultaneously: it concentrates body weight onto the sacrum and coccyx (the interface area shrinks while load increases), and it causes the torso to slide down, generating shear as the skin is held by friction while the skeleton migrates. Interface pressure studies consistently show sacral pressure rising steeply above ~30° of head elevation. This is precisely why guidelines cap elevation at ≤30° except when clinically necessary (feeding, ventilation, aspiration risk). A. Full 90° lateral — takes the sacrum off-load entirely, but concentrates pressure on the greater trochanter and lateral malleolus, which is why 90° side-lying is discouraged. C. 30° lateral tilt, bed flat — the recommended repositioning posture: it offloads the sacrum and the trochanter by loading the soft tissue of the buttock. The lowest-risk option listed. D. Supine, bed flat — distributes weight over the largest surface (sacrum, heels, scapulae, occiput). Sacral pressure exists but is substantially lower than at 45° and there is minimal shear.\nReference: EPUAP/NPIAP/PPPIA International Pressure Ulcer Guideline 2019 (free Quick Reference Guide at internationalguideline.com) — repositioning and 30° recommendations; Braddom Ch. 55.",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which cells play the most important role in coordinating the wound healing process by releasing growth factors that stimulate fibroblast proliferation and angiogenesis?",
    "option_a": "Fibroblasts",
    "option_b": "Platelets",
    "option_c": "Neutrophils",
    "option_d": "Macrophages",
    "correct_option": "D",
    "explanation": "The macrophage is the orchestrator (conductor) of wound healing. Arriving from ~48–96 hours, it phagocytoses debris and then secretes the key growth factors — TGF-β, PDGF, VEGF, FGF and IL-1 — which recruit and stimulate fibroblast proliferation and collagen synthesis and drive angiogenesis. Experimental macrophage depletion severely impairs healing; neutrophil depletion does not. The M1→M2 phenotype switch governs the transition from inflammation to proliferation. A. Fibroblasts — the effector cells that respond: they synthesise collagen and ECM and differentiate into myofibroblasts for contraction. They are directed by, rather than directing, the process. B. Platelets — critical initiators: haemostasis plus early release of PDGF and TGF-β from alpha granules in the first minutes to hours. But their role is transient and it is the macrophage that sustains and coordinates the proliferative phase. C. Neutrophils — first responders for debridement and bacterial killing (day 1–3); largely dispensable for healing itself and, if persistent, they perpetuate a chronic inflammatory, non-healing wound.\nReference: StatPearls, \"Wound Healing Phases\"; Gurtner GC et al. \"Wound repair and regeneration,\" Nature 2008 (PubMed); Braddom Ch. 55.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 24-year-old man undergoes nerve conduction studies following a peripheral nerve injury. During paired electrical stimulation, a second stimulus delivered immediately after the initial action potential fails to produce another response, irrespective of stimulus intensity. However, when the interval between stimuli is modestly prolonged, a second action potential is generated. Which mechanism best accounts for the observation?",
    "option_a": "Depletion of acetylcholine at the neuromuscular junction",
    "option_b": "Increased activity of the sodium-potassium ATPase pump",
    "option_c": "Inactivation of voltage-gated sodium channels",
    "option_d": "Persistent opening of potassium channels",
    "correct_option": "C",
    "explanation": "This describes the absolute refractory period transitioning into the relative refractory period. - Absolute refractory: essentially all voltage-gated Na⁺ channels are in the inactivated state (inactivation gate closed). They cannot reopen until the membrane repolarises, so no stimulus of any intensity can generate an action potential — exactly what the stem specifies. - Relative refractory: as repolarisation proceeds, Na⁺ channels progressively recover from inactivation, so a stronger stimulus (or a longer interval) can fire an action potential. A. ACh depletion at the NMJ — would be a synaptic phenomenon; the stem describes nerve conduction studies with paired stimuli, i.e. axonal membrane behaviour. ACh depletion also would not fully recover in milliseconds. B. Increased Na⁺/K⁺ ATPase activity — restores long-term ionic gradients over seconds to minutes; far too slow, and it does not determine refractoriness. D. Persistent K⁺ channel opening — delayed rectifier K⁺ efflux causes the afterhyperpolarisation and contributes to the relative refractory period, but it does not produce the absolute refractoriness irrespective of stimulus intensity. Na⁺ channel inactivation does.\nReference: StatPearls, \"Physiology, Refractory Period\"; Hall JE. Guyton and Hall Textbook of Medical Physiology, Ch. 5; Preston DC, Shapiro BE. Electromyography and Neuromuscular Disorders.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 26-year-old man with a complete T4 spinal cord injury complains of dizziness and light- headedness when he is transferred from supine to sitting position during rehabilitation sessions. His symptoms improve when he is lying flat. On examination, his supine blood pressure is 110/70 mmHg and his sitting blood pressure is 105/59 mmHg. Which primary mechanism best explains his problem?",
    "option_a": "Paralysis of the lower limb resulting in reduced skeletal muscle pump and venous pooling",
    "option_b": "Reduced venous return leading to decreased preload and cardiac output",
    "option_c": "Reduced baroreceptor sensitivity resulting in impaired blood pressure sensing",
    "option_d": "Loss of sympathetic vasoconstriction resulting in venous pooling in the lower limbs",
    "correct_option": "D",
    "explanation": "Orthostatic hypotension in SCI. The sympathetic outflow arises from T1–L2; a complete lesion at T4 disconnects most of the splanchnic (T6–L2) and lower limb vasomotor supply from supraspinal control. On sitting, the baroreflex detects the fall in pressure and attempts to respond, but the efferent sympathetic limb cannot reach the vessels — so there is no reflex vasoconstriction of the capacitance vessels or splanchnic bed. Blood pools, venous return falls, and pressure drops. The primary and initiating lesion is the loss of sympathetic vasoconstrictor outflow. A. Reduced skeletal muscle pump — a genuine contributory factor (the calf pump normally augments venous return), but secondary; it does not explain the failure of reflex vasoconstriction, which is the primary defect. B. Reduced venous return → reduced preload and cardiac output — an accurate description of the haemodynamic consequence, not the mechanism. The question asks why venous return falls. C. Reduced baroreceptor sensitivity — the afferent limb and the baroreceptors themselves are intact; the lesion is efferent. This is the classic trap. Management note: abdominal binder, compression stockings, gradual tilt-table progression, adequate hydration/salt, and if needed midodrine or fludrocortisone.\nReference: Braddom Ch. 49 \"Spinal Cord Injury\" (cardiovascular complications); Consortium for Spinal Cord Medicine, \"Early Acute Management in Adults with SCI\" (free PDF); StatPearls, \"Orthostatic Hypotension\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "The normal process of micturition requires coordinated activity between the detrusor muscle and urethral sphincters. Which neural mechanism is primarily responsible for initiating detrusor muscle contraction during normal voiding?",
    "option_a": "Activation of parasympathetic fibres from S2 to S4 causing detrusor contraction",
    "option_b": "Activation of sympathetic fibres from T11 to L2 causing detrusor contraction",
    "option_c": "Activation of somatic fibres from the pudendal nerve, causing external sphincter contraction",
    "option_d": "Inhibition of parasympathetic outflow from the sacral spinal cord",
    "correct_option": "A",
    "explanation": "Voiding is parasympathetic. Preganglionic fibres from the sacral intermediolateral cell column (S2–S4) travel in the pelvic splanchnic nerves (nervi erigentes), synapse in the bladder wall ganglia, and release acetylcholine acting on M3 muscarinic receptors to contract the detrusor. This occurs simultaneously with pontine-coordinated relaxation of the external urethral sphincter (withdrawal of pudendal somatic output) and of the internal sphincter. B. Sympathetic T11–L2 causing detrusor contraction — sympathetic activity is the storage mechanism: β3-adrenergic detrusor relaxation plus α1-mediated bladder neck contraction. The option states the opposite effect. C. Pudendal-mediated external sphincter contraction — that is continence/storage; during voiding, pudendal output is inhibited so the sphincter relaxes. D. Inhibition of parasympathetic outflow — this is what happens during storage, preventing detrusor contraction. Backwards. Memory aid: S2, 3, 4 keeps the urine off the floor — and empties the bladder when it's time.\nReference: Braddom Ch. 21 \"Neurogenic Bladder\"; StatPearls, \"Physiology, Micturition\"; Fowler CJ, Griffiths D, de Groat WC. \"The neural control of micturition,\" Nat Rev Neurosci 2008 (PubMed).",
    tag: "Past Year Question"
  },
  {
    "question_text": "A man with a history of a traumatic brain injury is being evaluated for progressive stiffness in his right arm. During the physical examination, the physician performs a rapid, passive extension of the patient's right elbow. The physician notes a sudden catch followed by a release of resistance, which is significantly more pronounced when the movement is performed quickly. No resistance is noted during the slow, passive range of motion. Which physiological phenomena is the primary cause of the clinical finding?",
    "option_a": "Persistent inward currents in the dorsal horn interneurons",
    "option_b": "Hyperexcitability of the alpha motor neuron",
    "option_c": "Overactivity of the gamma motor neuron efferent drive",
    "option_d": "Enhanced disynaptic reciprocal inhibition of the antagonist muscle",
    "correct_option": "B",
    "explanation": "The clinical phenomenon is a hyperexcitable segmental stretch reflex. Rapid stretch activates muscle spindle Ia afferents, which excite the alpha motor neuron monosynaptically. Following an upper motor neuron lesion, the loss of descending inhibition leaves the alpha motor neuron pool hyperexcitable — through reduced presynaptic and reciprocal Ia inhibition and the development of persistent inward currents in the motor neurons themselves. The result is an exaggerated reflex contraction (the catch) that is velocity-dependent and is absent on slow stretch, which does not recruit the dynamic Ia response. C. Overactivity of the gamma efferent drive — this is the classical textbook explanation, and many older question banks key it. However, microneurographic studies in spastic patients have failed to demonstrate increased fusimotor drive; contemporary reviews attribute spasticity to altered motor neuron excitability and reduced spinal inhibition rather than gamma overactivity. If your faculty's key says C, this is the reason — flag it and cite the discrepancy; it is a legitimate and well-documented point of disagreement in the PM&R literature. - A. Persistent inward currents in dorsal horn interneurons — PICs are real and relevant to spasticity, but they occur in motor neurons (and are mediated by descending monoaminergic drive), not dorsal horn interneurons. - D. Enhanced reciprocal inhibition — reciprocal inhibition is reduced, not enhanced, in spasticity; enhancing it would decrease tone.\nReference: Braddom Ch. 30 \"Spasticity\"; Nielsen JB, Crone C, Hultborn H. \"The spinal pathophysiology of spasticity,\" Eur J Appl Physiol 2007 (PubMed); Trompetto C et al. \"Pathophysiology of spasticity,\" BioMed Res Int 2014 (free full text, PubMed Central).",
    tag: "Past Year Question"
  },
  {
    "question_text": "Based on the anatomy illustrated below, the arrow shows a graft used to bypass a blockage in the left anterior descending artery. Which graft is the preferred choice?",
    "option_a": "Radial artery",
    "option_b": "Left internal mammary artery",
    "option_c": "Great saphenous vein",
    "option_d": "Short saphenous vein",
    "correct_option": "B",
    "explanation": "LIMA-to-LAD is the single most important and best-evidenced conduit choice in cardiac surgery. Its advantages: it is left in situ (pedicled, with its native inflow from the left subclavian, so only one anastomosis is needed), it lies anatomically adjacent to the LAD, and it has exceptional long-term patency — approximately 90% at 10 years, compared with ~50–60% for saphenous vein grafts. Arterial conduits resist atherosclerosis because of endothelial nitric oxide production and a lack of vein-graft-type intimal hyperplasia. LIMA-to-LAD confers a proven survival benefit and is a class I recommendation. C. Great saphenous vein — the standard conduit for non-LAD targets; easily harvested and long, but suffers progressive vein graft disease with much poorer long-term patency. A. Radial artery — a good second arterial conduit (better than vein for targets with high-grade stenosis) but requires proximal aortic anastomosis, is prone to spasm, and needs an Allen test. Second-line to LIMA. D. Short saphenous vein — rarely used; short, awkward to harvest, inferior calibre.\nReference: ACC/AHA \"Guideline for Coronary Artery Revascularization\" (Circulation 2021, free); Loop FD et al. N Engl J Med 1986 — the landmark internal mammary survival paper (PubMed); StatPearls, \"Coronary Artery Bypass Grafting\".",
    "image_url": "images/medex_q91_cabg_diagram.jpg",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which nerve fibres are primarily stimulated by conventional high-frequency transcutaneous electrical nerve stimulation?",
    "option_a": "A-delta fibres",
    "option_b": "A-alpha fibres",
    "option_c": "C fibres",
    "option_d": "A-beta fibres",
    "correct_option": "D",
    "explanation": "Conventional (high-frequency, low-intensity) TENS delivers 50–100 Hz at a comfortable, non-painful paraesthetic intensity. This selectively recruits large-diameter, myelinated, low-threshold A-beta mechanoreceptor afferents. Their input activates inhibitory interneurons in the substantia gelatinosa (lamina II) of the dorsal horn, closing the \"gate\" on nociceptive transmission from A-delta and C fibres — the Melzack and Wall gate control theory. Onset is rapid, effect is segmental, and analgesia stops soon after the stimulator is switched off. A. A-delta fibres and C. C fibres — these are the nociceptive afferents that TENS is intended to inhibit. (Note: acupuncture-like TENS — low frequency 2–4 Hz, high intensity — does recruit A-delta fibres and small motor afferents to trigger descending endogenous opioid analgesia, with slower onset and longer-lasting effect. That is the distinction the examiner may be testing.) B. A-alpha fibres — large motor efferents (and Ia afferents); recruiting these produces muscle contraction, which is NMES, not sensory TENS.\nReference: Braddom Ch. 15 \"Physical Agent Modalities\"; StatPearls, \"Transcutaneous Electrical Nerve Stimulation\"; Melzack R, Wall PD. Science 1965 \"Pain mechanisms: a new theory\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A patient sustains a fracture of the fibular neck following a fall. On examination, he has foot drop, an inability to dorsiflex the ankle and reduced sensation over the dorsum of the foot. Which nerve is most likely injured?",
    "option_a": "Common peroneal nerve",
    "option_b": "Superficial peroneal nerve",
    "option_c": "Deep peroneal nerve",
    "option_d": "Tibial nerve",
    "correct_option": "A",
    "explanation": "The common peroneal (fibular) nerve winds around the fibular neck, where it is superficial and tethered — the commonest site of compressive or traumatic peripheral nerve injury in the lower limb. A lesion here affects both divisions: - Deep peroneal → tibialis anterior and toe extensors (foot drop, loss of dorsiflexion) + sensation in the first web space; - Superficial peroneal → peronei (loss of eversion) + sensation over the dorsum of the foot and lateral leg. The stem gives foot drop plus dorsal foot sensory loss — the combination requires a lesion proximal to the bifurcation, i.e. the common peroneal nerve at the fibular neck. C. Deep peroneal nerve — would cause foot drop with sensory loss confined to the first web space only, and eversion would be preserved. The dorsal foot sensory loss excludes it. B. Superficial peroneal nerve — would cause loss of eversion and dorsal foot numbness but no foot drop (dorsiflexion intact). D. Tibial nerve — plantarflexion and inversion weakness with sole sensory loss; produces a calcaneal gait, not foot drop.\nReference: StatPearls, \"Common Peroneal Nerve Injury\"; Braddom Ch. 41 \"Mononeuropathies of the Lower Limb\"; Preston & Shapiro, Electromyography and Neuromuscular Disorders.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 55-year-old man presents with an abnormal gait following hip surgery. When asked to stand on his left leg, his pelvis drops on the right side. Which nerve is most likely injured?",
    "option_a": "Inferior gluteal nerve",
    "option_b": "Superior gluteal nerve",
    "option_c": "Femoral nerve",
    "option_d": "Obturator nerve",
    "correct_option": "B",
    "explanation": "The superior gluteal nerve (L4, L5, S1) supplies gluteus medius, gluteus minimus and tensor fasciae latae — the hip abductors that stabilise the pelvis in single-limb stance. It exits the greater sciatic foramen above piriformis and runs between gluteus medius and minimus, where it is vulnerable to a lateral (Hardinge/transgluteal) surgical approach or a misplaced intramuscular injection. Injury produces a positive Trendelenburg sign with the pelvis dropping on the unsupported (contralateral) side. A. Inferior gluteal nerve — supplies gluteus maximus; injury causes difficulty rising from sitting, stair climbing and a gluteus maximus lurch (posterior trunk lean), not pelvic drop. C. Femoral nerve — quadriceps and hip flexion; injury causes knee buckling and loss of the knee jerk. D. Obturator nerve — hip adductors; injury causes a wide-based, circumducting gait and medial thigh sensory loss.\nReference: StatPearls, \"Anatomy, Bony Pelvis and Lower Limb: Superior Gluteal Nerve\"; Perry & Burnfield, Gait Analysis.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 72-year-old with Parkinson's disease is evaluated for a complaint of severe limb stiffness. On physical examination, there is increased resistance to passive elongation that remains constant throughout the range of motion and is independent of the velocity of the stretch. Which brain structure is most likely involved in the clinical condition？",
    "option_a": "The cerebellar hemispheres",
    "option_b": "The basal ganglia system",
    "option_c": "The primary motor cortex",
    "option_d": "The spinal anterior horn",
    "correct_option": "B",
    "explanation": "The description is of rigidity (lead-pipe, or cogwheel when tremor is superimposed) — velocity-independent, present throughout the range, and equal in agonists and antagonists. This is a basal ganglia (extrapyramidal) sign: degeneration of dopaminergic neurons in the substantia nigra pars compacta reduces striatal dopamine, over-inhibiting the thalamocortical motor loop via the indirect pathway. A. Cerebellar hemispheres — produce hypotonia, intention tremor, dysmetria, dysdiadochokinesia and ataxia; not rigidity. C. Primary motor cortex — an upper motor neuron lesion here produces spasticity (velocity-dependent) and weakness. The velocity-independence is precisely what distinguishes it from spasticity, which is velocity-dependent. D. Spinal anterior horn — lower motor neuron: flaccidity, wasting, fasciculations, areflexia. Key exam table: Spasticity: Yes; Rigidity: No. Spasticity: Clasp-knife, antigravity muscles; Rigidity: Uniform, agonist = antagonist. Spasticity: Corticospinal / UMN; Rigidity: Basal ganglia\nReference: Braddom Ch. 30 and Ch. 46 \"Movement Disorders\"; StatPearls, \"Parkinson Disease\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "A patient with traumatic brain injury demonstrates left-sided neglect, ignoring objects on the left side of space. Which brain region is most likely injured?",
    "option_a": "Right anterior parietal cortex",
    "option_b": "Right posterior parietal cortex",
    "option_c": "Right occipital cortex",
    "option_d": "Right anterior temporal cortex",
    "correct_option": "B",
    "explanation": "Spatial attention is right-hemisphere dominant: the right parietal lobe attends to both hemifields, while the left attends predominantly to the right. Damage to the right inferior/posterior parietal cortex (especially the temporoparietal junction and inferior parietal lobule) therefore produces contralateral left hemispatial neglect with no left-hemisphere system able to compensate — which is why neglect after right hemisphere damage is common, severe and persistent, and rare after left. Neglect is one of the strongest negative predictors of rehabilitation outcome. A. Right anterior parietal cortex — primary somatosensory cortex (postcentral gyrus); damage causes contralateral sensory loss and astereognosis, not neglect. C. Right occipital cortex — causes left homonymous hemianopia. The distinction matters clinically: a patient with hemianopia is aware of the deficit and turns to compensate; a patient with neglect is not aware and does not. D. Right anterior temporal cortex — memory, emotional processing and semantic functions.\nReference: Braddom Ch. 44 and Ch. 47 \"Cognitive Rehabilitation\"; StatPearls, \"Hemispatial Neglect\"; Corbetta M, Shulman GL. Annu Rev Neurosci 2011 (PubMed).",
    tag: "Past Year Question"
  },
  {
    "question_text": "Cognitive slowing after TBI is most strongly correlated with damage to",
    "option_a": "thalamus",
    "option_b": "hippocampus",
    "option_c": "corpus callosum",
    "option_d": "amygdala",
    "correct_option": "C",
    "explanation": "Processing speed depends on the efficiency of white matter conduction across distributed cortical networks, not on any single grey matter structure. The corpus callosum is the largest white matter tract and a primary site of diffuse axonal injury. DTI studies after TBI consistently show that reduced fractional anisotropy in the corpus callosum — particularly the genu and splenium — correlates most strongly with slowed processing speed and with impaired performance on timed tasks. A. Thalamus — the strongest competing answer; thalamic volume loss after TBI does correlate with cognitive outcome, and thalamocortical disconnection contributes to slowing. But the correlation is mediated largely through the white matter connections, and callosal integrity is the more consistently reported correlate of processing speed specifically. B. Hippocampus — declarative memory, not speed. Anterograde amnesia and post-traumatic amnesia duration relate to hippocampal and medial temporal injury. D. Amygdala — emotional processing, fear conditioning, and post-TBI emotional dysregulation; not processing speed.\nReference: Kinnunen KM et al. \"White matter damage and cognitive impairment after traumatic brain injury,\" Brain 2011 (free full text, PubMed); Braddom Ch. 43 and Ch. 47.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A patient with moderate traumatic brain injury demonstrates marked difficulty initiating activities, reduced spontaneity and appears apathetic despite intact comprehension and motor function. Which brain region damage most likely explains these symptoms？",
    "option_a": "Orbitofrontal cortex",
    "option_b": "Anterior cingulate cortex",
    "option_c": "Primary motor cortex",
    "option_d": "Dorsolateral prefrontal cortex",
    "correct_option": "B",
    "explanation": "The anterior cingulate cortex (with the supplementary motor area and medial frontal cortex) drives initiation, motivation and the generation of self-directed behaviour — the \"medial frontal/apathetic\" syndrome of the three classic frontal-subcortical circuits. Damage produces abulia, and in its extreme form akinetic mutism: the patient can move and can understand, but does not initiate. The dissociation in the stem — intact comprehension, intact motor function, absent initiation — is the diagnostic signature. D. Dorsolateral prefrontal cortex — the dysexecutive syndrome: impaired working memory, set-shifting (perseveration on the Wisconsin Card Sort), planning and problem-solving. The strongest distractor, but these patients have reduced organisation, not reduced drive. A. Orbitofrontal cortex — the disinhibition syndrome: impulsivity, socially inappropriate behaviour, emotional lability, poor judgement — the behavioural opposite of the stem. C. Primary motor cortex — would cause hemiparesis; the stem explicitly states motor function is intact. Exam table — the three frontal-subcortical circuits: Circuit: Dorsolateral prefrontal; Syndrome: Dysexecutive; Hallmark: Poor planning, perseveration. Circuit: Orbitofrontal; Syndrome: Disinhibited; Hallmark: Impulsive, socially inappropriate. Circuit: Anterior cingulate; Syndrome: Apathetic / akinetic; Hallmark: Absent initiation and drive\nReference: Cummings JL. \"Frontal-subcortical circuits and human behavior,\" Arch Neurol 1993 (PubMed — the standard citation); Braddom Ch. 43 and Ch. 47; StatPearls, \"Abulia\".",
    tag: "Past Year Question"
  },
  {
    "question_text": "Which is the location of the preganglionic sympathetic neurons in the gray matter of the spinal cord?",
    "option_a": "Posterior horn",
    "option_b": "Anterior horn",
    "option_c": "Central core",
    "option_d": "Lateral horn",
    "correct_option": "D",
    "explanation": "Preganglionic sympathetic cell bodies lie in the intermediolateral cell column (IML), which forms the lateral horn of the grey matter and is present only from T1 to L2/L3 — the thoracolumbar outflow. Their axons leave via the ventral root and white rami communicantes to reach the sympathetic chain. (The parasympathetic sacral outflow S2–S4 occupies an analogous intermediolateral position but the sacral cord has no anatomically distinct lateral horn.) A. Posterior (dorsal) horn — sensory: receives primary afferent input (Rexed laminae I–VI, including the substantia gelatinosa). B. Anterior (ventral) horn — somatic motor: alpha and gamma motor neurons (lamina IX). C. Central core — around the central canal (lamina X); not the sympathetic cell column. Clinical link: this is why a complete cord lesion above T6 disrupts splanchnic sympathetic control and causes both orthostatic hypotension and autonomic dysreflexia.\nReference: StatPearls, \"Neuroanatomy, Spinal Cord Morphology\" / \"Autonomic Nervous System\"; Braddom Ch. 49.",
    tag: "Past Year Question"
  },
  {
    "question_text": "A 55-year-old woman with long-standing diabetes presents with progressive right shoulder pain and stiffness for over 3 months. Pain is worse at night and limits dressing and grooming There is no history of trauma. On examination, active and passive shoulder movements are both restricted. External rotation is most severely limited, followed by abduction and internal rotation. Strength testing is difficult due to pain. Which anatomical structure is primarily responsible for these condition?",
    "option_a": "Supraspinatus tendon",
    "option_b": "Glenohumeral joint capsule",
    "option_c": "Subacromial bursa",
    "option_d": "Coracohumeral ligament",
    "correct_option": "B",
    "explanation": "This is adhesive capsulitis (frozen shoulder) — up to 5× more common in diabetes, and often bilateral in that group. The two diagnostic pillars are in the stem: 1. Both active and passive movement are restricted — this locates the problem in the joint itself, not in a contractile (tendon/muscle) structure. 2. A capsular pattern of restriction: external rotation > abduction > internal rotation. Pathology: fibroproliferative contracture and chronic inflammation of the glenohumeral joint capsule, with the rotator interval, coracohumeral ligament and anterior capsule most affected, producing a globally contracted capsule with reduced joint volume on arthrography. D. Coracohumeral ligament — anatomically the most specific structure limiting external rotation, thickened in the rotator interval and the target of arthroscopic release. It is the most defensible alternative answer. However, the clinical picture described — global capsular pattern affecting all planes — reflects contracture of the whole capsule, of which the CHL is one component. The question asks for the structure \"primarily responsible\" for the condition, which is the capsule. A. Supraspinatus tendon — rotator cuff tendinopathy/tear gives painful arc, weakness on resisted testing, and preserved passive range. The passive restriction here excludes it. C. Subacromial bursa — subacromial impingement/bursitis: painful arc 60–120°, positive Neer and Hawkins-Kennedy, but passive range preserved. B is the standard answer.\nReference: StatPearls, \"Adhesive Capsulitis\"; Neviaser AS, Hannafin JA. \"Adhesive capsulitis: a review of current treatment,\" Am J Sports Med 2010 (PubMed); Braddom Ch. 40 \"Shoulder Pain\".",
    tag: "Past Year Question"
  }
];
