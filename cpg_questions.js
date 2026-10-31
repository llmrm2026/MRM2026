// CPG-MCQs — questions drawn only from Clinical Practice Guidelines.
// These appear in the "CPG-MCQs" section and are NOT part of the master Question Bank.
//
// Same format as questions.js. Set `tag` to the guideline's short name
// (e.g. "CPG Management of Stroke 2020"); every distinct tag becomes its own
// filter on the CPG-MCQs page, so keep the spelling identical across questions.
//
// {
//   question_text: "…",
//   option_a: "…", option_b: "…", option_c: "…", option_d: "…",
//   correct_option: "B",
//   explanation: "Rationale: …\nReference: …",
//   tag: "CPG Management of Stroke 2020"
// },
const cpgBank = [
  {
    question_text: "A 68-kg patient with a definite-onset ischaemic stroke arrives 2 hours after onset and is eligible for intravenous alteplase. How should alteplase be given according to the CPG?",
    option_a: "0.6 mg/kg (41 mg), 15% as a bolus and the rest infused over 1 hour",
    option_b: "0.9 mg/kg (61 mg), 10% as a bolus and the rest infused over 1 hour",
    option_c: "0.25 mg/kg (17 mg) as a single intravenous bolus over 5 seconds",
    option_d: "0.9 mg/kg (61 mg) as a continuous infusion over 24 hours",
    correct_option: "B",
    explanation: "Rationale: Alteplase is given at 0.9 mg/kg (maximum 90 mg), with 10% as a bolus and the remainder infused over 1 hour, for onset within 4.5 hours. 0.25 mg/kg as a single bolus is the tenecteplase regimen.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 9.1, p. 29.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "A patient wakes up with stroke symptoms; last known well was 7 hours ago. According to the CPG, intravenous alteplase may still be considered up to 9 hours if which imaging finding is present?",
    option_a: "A hyperdense MCA sign on non-contrast CT",
    option_b: "An ASPECTS score below 6",
    option_c: "A significant penumbra-core mismatch on CT perfusion",
    option_d: "No haemorrhage on non-contrast CT, without further imaging",
    correct_option: "C",
    explanation: "Rationale: Beyond 4.5 hours and up to 9 hours (known onset or wake-up stroke), thrombolysis can be guided by CT perfusion showing a significant penumbra-core mismatch (II,B). For uncertain onset, MRI DWI-FLAIR mismatch can also be used.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 9.1, p. 29.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "A patient with a proximal M1 occlusion arrives 10 hours after stroke onset. What does the CPG say about endovascular thrombectomy (EVT)?",
    option_a: "EVT is indicated in selected patients up to 24 hours from onset with evidence of large vessel occlusion",
    option_b: "EVT is contraindicated beyond 6 hours from stroke onset",
    option_c: "EVT requires prior alteplase, so it cannot be offered without thrombolysis",
    option_d: "EVT after 6 hours is limited to posterior circulation occlusions",
    correct_option: "A",
    explanation: "Rationale: EVT is indicated for large vessel occlusion within 6 hours of onset (I,A), and in selected patients arriving after 6 hours and up to 24 hours with evidence of large vessel occlusion (I,A), typically selected with perfusion or clinical-imaging mismatch.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 10.1, p. 30.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "A patient with acute ischaemic stroke who is not receiving thrombolysis has a blood pressure of 196/104 mmHg. According to the CPG, what is the appropriate management?",
    option_a: "Lower BP by 25% within the first hour with IV labetalol",
    option_b: "Start oral amlodipine to reach < 140/90 mmHg within 24 hours",
    option_c: "Do not treat; this level of hypertension is acceptable in the acute phase",
    option_d: "Give sublingual nifedipine",
    correct_option: "C",
    explanation: "Rationale: Hypertension should not be treated if systolic BP is below 220 mmHg or diastolic below 120 mmHg; mild hypertension of 160–180/90–100 mmHg is desirable. When lowering is needed, an initial reduction of about 15% is probably safe, and reduction should not be drastic.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 8.1, p. 28.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "What blood glucose range does the CPG recommend after an acute ischaemic stroke?",
    option_a: "6.0–10.0 mmol/L, avoiding hypoglycaemia",
    option_b: "4.0–7.5 mmol/L (tight control) in the first hours",
    option_c: "4.0–6.0 mmol/L with an insulin infusion",
    option_d: "10.0–14.0 mmol/L to avoid hypoglycaemia",
    correct_option: "A",
    explanation: "Rationale: Hyperglycaemia should be treated to keep glucose between 6.0 and 10.0 mmol/L while avoiding hypoglycaemia. Very tight targets (4.0–7.5 mmol/L) should be avoided in the first hours of acute ischaemic stroke (I,A).\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 8.1, p. 28.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "Regarding mobilisation after acute stroke, which approach does the CPG specifically advise against?",
    option_a: "Mobilising early to prevent complications",
    option_b: "High-dose, very early mobilisation within 24 hours of stroke onset",
    option_c: "Out-of-bed activity once the patient is medically stable",
    option_d: "Positioning and passive range-of-motion exercises on day 1",
    correct_option: "B",
    explanation: "Rationale: Early mobilisation to prevent complications is recommended, but high-dose, very early mobilisation within 24 hours of onset should not be performed, as it can reduce the odds of a favourable outcome at 3 months.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 8.1, p. 28.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "An immobile patient with acute ischaemic stroke is on aspirin and adequate hydration. Which additional DVT prophylaxis does the CPG recommend?",
    option_a: "Graduated elastic compression stockings",
    option_b: "Prophylactic subcutaneous enoxaparin for all patients",
    option_c: "Intermittent pneumatic compression",
    option_d: "Early IVC filter insertion",
    correct_option: "C",
    explanation: "Rationale: For immobile stroke patients without contraindications, intermittent pneumatic compression (IPC) plus routine care (aspirin and hydration) is recommended over routine care alone (I,A). Elastic compression stockings should not be used in ischaemic stroke (I,A), and the benefit of prophylactic heparin is not well established.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 8.1, p. 29.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "A patient has a single, self-limiting seizure 6 hours after an ischaemic stroke. What does the CPG recommend?",
    option_a: "Start long-term levetiracetam",
    option_b: "Start phenytoin prophylaxis for 3 months",
    option_c: "Load with IV valproate and continue for 1 year",
    option_d: "No long-term anticonvulsant; monitor for recurrent seizures",
    correct_option: "D",
    explanation: "Rationale: A single, self-limiting seizure at onset or within 24 hours of ischaemic stroke (an 'immediate' post-stroke seizure) should not be treated with long-term anticonvulsants, and prophylactic anti-seizure medication is not recommended. The patient should be monitored for recurrence.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 8.1, p. 29.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "A stroke patient fails the water swallowing test and is likely to need enteral feeding for only 1–2 weeks. Which statement reflects the CPG?",
    option_a: "Insert a PEG straight away, as PEG is superior to nasogastric feeding",
    option_b: "Feeding should be withheld for 14 days to reduce aspiration risk",
    option_c: "Insert a nasogastric tube; PEG is preferred when prolonged enteral feeding is required",
    option_d: "Parenteral nutrition is preferred over tube feeding",
    correct_option: "C",
    explanation: "Rationale: A nasogastric tube is inserted if the patient fails the swallowing test. PEG is superior to nasogastric feeding only if prolonged enteral feeding is required. Enteral feeding (oral or tube) should start within 7 days of admission (I,A).\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 8.1, p. 28.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "A 52-year-old with a very large middle cerebral artery territory infarct is deteriorating with signs of raised intracranial pressure. Within what time from symptom onset does the CPG recommend decompressive hemicraniectomy?",
    option_a: "6 hours",
    option_b: "12 hours",
    option_c: "7 days",
    option_d: "48 hours",
    correct_option: "D",
    explanation: "Rationale: Hemicraniectomy and surgical decompression within 48 hours of symptom onset is recommended to control intracranial pressure and prevent herniation in very large hemispheric infarcts (I,A). Patients over 60 may be considered in selected cases.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 8.1, p. 28.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "A patient presents with a minor ischaemic stroke. What does the CPG recommend regarding dual antiplatelet therapy (clopidogrel and aspirin)?",
    option_a: "Recommended for 21 days",
    option_b: "Recommended for 12 months",
    option_c: "Not recommended; aspirin monotherapy is preferred",
    option_d: "Recommended lifelong",
    correct_option: "A",
    explanation: "Rationale: Combination clopidogrel and aspirin is recommended in patients with minor ischaemic stroke and high-risk TIA for 21 days (I,A), followed by single antiplatelet therapy.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 5.3, p. 23.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "What LDL-C target does the stroke CPG recommend for all patients with a previous ischaemic stroke?",
    option_a: "< 2.6 mmol/L",
    option_b: "< 1.8 mmol/L",
    option_c: "< 3.4 mmol/L",
    option_d: "< 4.2 mmol/L",
    correct_option: "B",
    explanation: "Rationale: Lipid reduction should be considered in all patients with previous ischaemic stroke, with an LDL-C target below 1.8 mmol/L (I,A). In primary prevention, < 3.4 mmol/L applies to intermediate and low risk and < 4.2 mmol/L to those with no risk.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 5.3, p. 23.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "According to the CPG, oral anticoagulation to prevent cardioembolic stroke is recommended for non-valvular AF in which group?",
    option_a: "Men and women with a CHA2DS2-VASc score of 1 or more",
    option_b: "Men with a score of 3 or more and women with a score of 2 or more",
    option_c: "All patients over 75 years, regardless of score",
    option_d: "Men with a CHA2DS2-VASc score of 2 or more and women with a score of 3 or more",
    correct_option: "D",
    explanation: "Rationale: OAC is recommended for all NVAF men with a CHA2DS2-VASc score of 2 or more, and women with a score of 3 or more (I,A). DOACs are preferred over warfarin for NVAF, and antiplatelets are not recommended for stroke prevention in NVAF.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 5.4, p. 23.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "A patient with an acute cardioembolic stroke due to AF is now neurologically and medically stable. Imaging shows no substantial haemorrhage. When may adjusted-dose warfarin be commenced, according to the CPG?",
    option_a: "Immediately on admission, with heparin bridging",
    option_b: "Within 2–4 days of becoming stable",
    option_c: "After 3 months",
    option_d: "After 1–2 weeks, whether or not there is haemorrhage",
    correct_option: "B",
    explanation: "Rationale: Adjusted-dose warfarin may be started within 2–4 days once the patient is neurologically and medically stable (II-2,C). It may be delayed for 1–2 weeks if there has been substantial haemorrhage. Urgent routine anticoagulation to improve neurological outcome is not recommended (I,A).\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 5.5, p. 25.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "A patient has a TIA with 80% stenosis of the ipsilateral internal carotid artery. According to the CPG, what is the recommendation for carotid endarterectomy?",
    option_a: "Not recommended; best medical therapy is preferred for symptomatic stenosis",
    option_b: "Indicated, after waiting 3 months to allow plaque stabilisation",
    option_c: "Indicated, with earlier intervention (within 2 weeks) being more beneficial",
    option_d: "Indicated, but antiplatelets must be stopped 2 weeks before surgery",
    correct_option: "C",
    explanation: "Rationale: Endarterectomy is indicated for most patients with 70–99% stenosis after a recent ischaemic event, in centres with complication rates below 6% (I,A). Earlier intervention within 2 weeks is more beneficial (II-1,B). Patients should stay on antiplatelets before and after surgery, and surgery is not recommended for stenosis below 50%.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 5.6, p. 25.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "Which tool does the CPG recommend for screening post-stroke delirium?",
    option_a: "Mini-Mental State Examination (MMSE)",
    option_b: "4AT",
    option_c: "Glasgow Coma Scale",
    option_d: "Geriatric Depression Scale",
    correct_option: "B",
    explanation: "Rationale: All post-stroke patients should be screened for delirium throughout hospitalisation, and screening with the 4AT tool is recommended (II-2,B), alongside a multi-component prevention and management intervention.\nReference: Malaysian CPG Management of Ischaemic Stroke 2020 (3rd Ed.), Table 12.1, p. 31.",
    tag: "CPG Ischaemic Stroke 2020"
  },
  {
    question_text: "A patient's BP remains uncontrolled despite an ACE inhibitor, a calcium channel blocker and a thiazide-like diuretic at optimal doses. Adherence is confirmed and secondary causes have been considered. Which fourth drug does the CPG recommend adding?",
    option_a: "Spironolactone",
    option_b: "A second ACE inhibitor",
    option_c: "Methyldopa",
    option_d: "An ARB, as dual RAS blockade",
    correct_option: "A",
    explanation: "Rationale: Resistant hypertension is BP not controlled on three or more drugs including a diuretic, after excluding non-adherence and secondary hypertension. Spironolactone is added as the fourth drug (A). Dual RAS blockade should be avoided.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Resistant hypertension, p. 21.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "What daily salt intake does the CPG recommend for patients with hypertension?",
    option_a: "< 6 g of sodium (about 15 g of salt)",
    option_b: "< 4 g of sodium (about 10 g of salt)",
    option_c: "< 1 g of sodium (about 2.5 g of salt)",
    option_d: "< 2 g of sodium, or < 5 g of salt (about 1 teaspoon)",
    correct_option: "D",
    explanation: "Rationale: Salt intake should be reduced to less than 2 g of sodium, or less than 5 g of salt a day, equivalent to about 1 teaspoonful of salt (A).\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Non-pharmacological management, p. 15.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A patient with severe hypertension (hypertensive urgency, no acute organ damage) has not responded to 2 hours of adequate rest. What does the CPG recommend?",
    option_a: "IV labetalol infusion to normalise BP to < 140/90 mmHg within 1 hour",
    option_b: "Sublingual nifedipine to bring BP down rapidly in the clinic",
    option_c: "Start combination oral therapy, aiming for a 25% BP reduction within 24 hours",
    option_d: "Admit to ICU for a sodium nitroprusside infusion and arterial line",
    correct_option: "C",
    explanation: "Rationale: In hypertensive urgencies, BP should not be lowered rapidly (within minutes to hours), as this may precipitate ischaemic events. Patients who respond to rest are discharged with a Hypertensive Urgency Discharge Plan. Those who do not respond start combination oral therapy targeting a 25% reduction within 24 hours.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Severe hypertension, p. 17.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "In a hypertensive emergency complicated by aortic dissection, to what level does the CPG recommend reducing systolic BP?",
    option_a: "< 160 mmHg",
    option_b: "< 140 mmHg",
    option_c: "< 180 mmHg",
    option_d: "< 120 mmHg",
    correct_option: "D",
    explanation: "Rationale: SBP is reduced to below 120 mmHg in aortic dissection. In severe pre-eclampsia/eclampsia and phaeochromocytoma crisis, SBP is reduced to below 140 mmHg in the first hour.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Severe hypertension, p. 17.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A patient with type 2 diabetes and no proteinuria has a consistent BP of 146/84 mmHg. Which statement reflects the CPG?",
    option_a: "Start drug treatment, preferably an ACE inhibitor, aiming for BP < 140/80 mmHg",
    option_b: "Lifestyle changes for 6 months before drug treatment",
    option_c: "Start a β-blocker as first line",
    option_d: "Treat when BP exceeds 160/100 mmHg",
    correct_option: "A",
    explanation: "Rationale: In diabetes, drug treatment is started if BP is consistently above 140/80 mmHg (A). ACE inhibitors are used in diabetes without proteinuria (ARBs if ACEI-intolerant), and the target is below 140/80 mmHg. A lower target of < 130/80 mmHg may be considered in younger patients.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Hypertension and diabetes, p. 17.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A patient with CKD has proteinuria of 1.8 g/24 hours. What BP target does the CPG recommend?",
    option_a: "< 150/90 mmHg",
    option_b: "< 140/90 mmHg",
    option_c: "< 130/80 mmHg",
    option_d: "< 110/70 mmHg",
    correct_option: "C",
    explanation: "Rationale: With proteinuria above 1 g/24 hours, BP should be lowered to below 130/80 mmHg. With proteinuria below 1 g/24 hours, the target is below 140/90 mmHg.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Hypertension and renal disease, p. 17.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A patient with CKD and persistent proteinuria remains above BP goal on an ACE inhibitor. Which addition does the CPG recommend?",
    option_a: "An ARB, to provide dual RAS blockade",
    option_b: "A non-dihydropyridine calcium channel blocker",
    option_c: "An α-blocker",
    option_d: "A direct renin inhibitor with the ACE inhibitor",
    correct_option: "B",
    explanation: "Rationale: RAS blockers are the initial therapy for micro- or macroalbuminuria. A non-dihydropyridine CCB is added if the BP goal is not achieved and proteinuria persists (A). Dual RAS blockade should be avoided in CKD (A).\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Hypertension and renal disease, p. 18.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "In a hypertensive patient with peripheral arterial disease (PAD), which antihypertensive class does the CPG advise against as the first choice?",
    option_a: "β-blockers",
    option_b: "ACE inhibitors",
    option_c: "Calcium channel blockers",
    option_d: "Thiazide diuretics",
    correct_option: "A",
    explanation: "Rationale: Any antihypertensive except β-blockers may be used as first choice in PAD (C). ACE inhibitors are given to prevent vascular events (B), and BP is treated to below 140/90 mmHg.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Hypertension and heart disease, p. 18.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A hypertensive patient has left ventricular hypertrophy on ECG. Which drug class does the CPG name as the treatment of choice, and what is the BP target?",
    option_a: "β-blocker; < 140/90 mmHg",
    option_b: "Thiazide diuretic; < 150/90 mmHg",
    option_c: "Calcium channel blocker; < 140/90 mmHg",
    option_d: "ARB; < 130/80 mmHg",
    correct_option: "D",
    explanation: "Rationale: ARBs are the treatment of choice in hypertensive patients with LVH on ECG (A), and BP should be treated to below 130/80 mmHg in patients with LVH (B).\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Hypertension and heart disease, p. 18.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "For secondary prevention after stroke, which antihypertensive combination does the hypertension CPG prefer?",
    option_a: "β-blocker and calcium channel blocker",
    option_b: "ACE inhibitor and diuretic",
    option_c: "ARB and ACE inhibitor",
    option_d: "α-blocker and diuretic",
    correct_option: "B",
    explanation: "Rationale: BP should be lowered to below 140/90 mmHg in both normotensive and hypertensive patients for secondary stroke prevention, and the combination of an ACE inhibitor and a diuretic is preferred (A).\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Hypertension and stroke, p. 19.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "What BP target does the hypertension CPG recommend for secondary prevention after a lacunar stroke?",
    option_a: "< 150/90 mmHg",
    option_b: "< 140/90 mmHg",
    option_c: "< 130/80 mmHg",
    option_d: "< 120/70 mmHg",
    correct_option: "C",
    explanation: "Rationale: BP should be lowered to below 130/80 mmHg for secondary prevention in lacunar stroke (A). For secondary prevention in general, the target is below 140/90 mmHg.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Hypertension and stroke, p. 19.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "According to the hypertension CPG, in the first 2 weeks after acute ischaemic stroke (with no hypertensive emergency), systolic BP should not be lowered below which level?",
    option_a: "180 mmHg",
    option_b: "140 mmHg",
    option_c: "160 mmHg",
    option_d: "120 mmHg",
    correct_option: "A",
    explanation: "Rationale: The hypertension CPG advises not lowering SBP below 180 mmHg in the first 2 weeks after acute ischaemic stroke unless a hypertensive emergency co-exists, and avoiding abrupt lowering with sublingual nifedipine.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Hypertension and stroke, p. 19.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "What systolic BP target does the CPG recommend for hypertensive patients aged over 80 years?",
    option_a: "< 120 mmHg",
    option_b: "< 130 mmHg",
    option_c: "< 140 mmHg",
    option_d: "< 150 mmHg",
    correct_option: "D",
    explanation: "Rationale: The target SBP is below 150 mmHg for those over 80 (A), and below 140 mmHg for those aged 65–80 (B); < 130 mmHg may be considered in fit 65–80-year-olds. Less strict targets and de-prescribing are considered for frail, functionally or cognitively impaired patients.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Hypertension in the older adult, p. 19.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "Which is the first-line antihypertensive in pregnancy, according to the CPG?",
    option_a: "Labetalol",
    option_b: "Nifedipine",
    option_c: "Methyldopa",
    option_d: "Enalapril",
    correct_option: "C",
    explanation: "Rationale: Methyldopa is first line and labetalol the alternative first line, with nifedipine second line. RAS blockers should be avoided in women of childbearing potential unless adequate precautions against pregnancy are taken.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Hypertension in women, p. 20.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "For a pregnant woman with one high-risk factor for pre-eclampsia, what aspirin regimen does the CPG recommend?",
    option_a: "300 mg daily from 28 weeks until 36 weeks",
    option_b: "75 mg in the morning from 20 weeks until delivery",
    option_c: "100–150 mg at bedtime from 6 weeks until 12 weeks",
    option_d: "100–150 mg at bedtime from 12–16 weeks until delivery",
    correct_option: "D",
    explanation: "Rationale: Aspirin 100–150 mg taken at bedtime is started from 12–16 weeks and continued until delivery in women with one or more high-risk factors, or two or more moderate-risk factors, for pre-eclampsia (A). Low-dose calcium (500–1000 mg daily) is also given from early pregnancy.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Hypertension in women, p. 20.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "According to the CPG, risk-based screening for prediabetes and/or T2DM in adults should be performed from what age, and how often?",
    option_a: "From age 40, every 3 years",
    option_b: "From age 18, every 5 years",
    option_c: "From age 30, repeated annually",
    option_d: "From age 50, every 2 years",
    correct_option: "C",
    explanation: "Rationale: Risk-based screening for prediabetes and/or T2DM in adults should be performed in individuals over 30 years of age and repeated annually.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Section 2 summary of updates, p. 22.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "An asymptomatic 45-year-old has a fasting venous plasma glucose of 7.4 mmol/L on routine screening. What does the CPG require to confirm T2DM?",
    option_a: "Nothing further, as a single fasting value ≥ 7.0 mmol/L is diagnostic",
    option_b: "A 75 g OGTT, which is required in all asymptomatic patients",
    option_c: "Three abnormal fasting results over a 3-month period",
    option_d: "A second abnormal result, from the same sample (e.g. plus HbA1c) or a separate sample",
    correct_option: "D",
    explanation: "Rationale: In symptomatic individuals, one abnormal result (plasma glucose or HbA1c) is diagnostic. In asymptomatic individuals, 2 abnormal results are needed, either from the same sample (e.g. plasma glucose plus HbA1c) or from 2 separate samples.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Section 2, p. 22.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "What are the venous plasma glucose cut-offs for diagnosing T2DM in the CPG?",
    option_a: "Fasting ≥ 6.1 mmol/L or random ≥ 7.8 mmol/L",
    option_b: "Fasting ≥ 7.8 mmol/L or random ≥ 12.0 mmol/L",
    option_c: "Fasting ≥ 5.6 mmol/L or random ≥ 11.1 mmol/L",
    option_d: "Fasting ≥ 7.0 mmol/L or random ≥ 11.1 mmol/L",
    correct_option: "D",
    explanation: "Rationale: Diabetes is diagnosed with fasting venous plasma glucose ≥ 7.0 mmol/L or random ≥ 11.1 mmol/L (Table 2-3). FPG of 6.1–6.9 mmol/L indicates prediabetes/IFG. A 2-hour OGTT value ≥ 11.1 mmol/L also confirms diabetes.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Table 2-3, p. 25.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "What HbA1c cut-off does the Malaysian CPG use to diagnose T2DM?",
    option_a: "≥ 6.3% (≥ 45 mmol/mol)",
    option_b: "≥ 6.5% (≥ 48 mmol/mol)",
    option_c: "≥ 7.0% (≥ 53 mmol/mol)",
    option_d: "≥ 5.7% (≥ 39 mmol/mol)",
    correct_option: "A",
    explanation: "Rationale: The CPG uses HbA1c ≥ 6.3% (≥ 45 mmol/mol) for T2DM (Table 2-5). Local data (MSSM 2009) showed 6.3% gave the best combined sensitivity and specificity for all three major ethnic groups, while 6.5% gave unacceptably low sensitivity (36.7%).\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Table 2-5, p. 26.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "According to the CPG, what HbA1c range defines prediabetes?",
    option_a: "5.0% to 5.6%",
    option_b: "5.7% to 6.2%",
    option_c: "6.0% to 6.4%",
    option_d: "6.3% to 6.9%",
    correct_option: "B",
    explanation: "Rationale: Individuals with HbA1c between 5.7% and 6.2% are deemed to have prediabetes. If HbA1c is used to diagnose prediabetes, it is best followed by an OGTT to classify IFG and/or IGT.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Section 2, p. 26.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "In which patient is HbA1c NOT appropriate for diagnosing diabetes, according to the CPG?",
    option_a: "A 35-year-old with a BMI of 32",
    option_b: "A 50-year-old with a family history of T2DM",
    option_c: "A 45-year-old woman taking iron supplements",
    option_d: "A 60-year-old with hypertension",
    correct_option: "C",
    explanation: "Rationale: HbA1c is not appropriate for diagnosis in adolescents under 18, patients on drugs that cause a rapid glucose rise (e.g. steroids, antipsychotics), patients on iron supplements (which may falsely lower HbA1c), and those with acute pancreatic damage or haematological/genetic factors affecting HbA1c.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Section 2, p. 27.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "A 52-year-old with a 2-year history of T2DM has no CVD, a long life expectancy and minimal hypoglycaemia risk. What HbA1c target does the CPG advocate?",
    option_a: "≤ 6.5%",
    option_b: "< 7.0%",
    option_c: "< 8.0%",
    option_d: "< 8.5%",
    correct_option: "A",
    explanation: "Rationale: An HbA1c target below 7.0% applies to most patients. A stricter target of ≤ 6.5% is advocated for patients with shorter T2DM duration, no significant CVD, longer life expectancy and minimal hypoglycaemia risk. Targets should be individualised to minimise hypoglycaemia.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Table 3-5, p. 42.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "What post-prandial glucose target does the CPG recommend, and when should it be measured?",
    option_a: "4.4–8.5 mmol/L, at least 90 minutes after meals",
    option_b: "4.4–7.0 mmol/L, 30 minutes after meals",
    option_c: "< 11.1 mmol/L, 2 hours after meals",
    option_d: "6.0–10.0 mmol/L, 15 minutes after meals",
    correct_option: "A",
    explanation: "Rationale: The post-prandial target is 4.4–8.5 mmol/L, measured at least 90 minutes after meals. The fasting/pre-prandial target is 4.4–7.0 mmol/L.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Table 3-5, p. 42.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "Which exercise prescription matches the CPG's recommendation for people with T2DM?",
    option_a: "90 minutes/week of light walking, with no resistance training",
    option_b: "At least 150 min/week moderate (or 75 min/week vigorous) aerobic activity, plus at least 2 resistance sessions/week",
    option_c: "Resistance training daily, with aerobic exercise avoided because of hypoglycaemia",
    option_d: "30 minutes of vigorous activity once a week",
    correct_option: "B",
    explanation: "Rationale: Both aerobic and resistance exercise are beneficial, and doing both is optimal. Patients should do at least 150 min/week of moderate or 75 min/week of vigorous aerobic activity, plus at least 2 resistance sessions per week. Up to 300 min/week of moderate activity is encouraged for greater HbA1c and CV benefit.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Section 3.5, p. 51.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "According to the CPG, a total diet replacement achieving what weight loss can lead to diabetes remission?",
    option_a: "Up to 3% of body weight (about 3 kg)",
    option_b: "Up to 5% of body weight (about 5 kg)",
    option_c: "Up to 15% of body weight (about 15 kg)",
    option_d: "At least 40% of body weight",
    correct_option: "C",
    explanation: "Rationale: A total diet replacement with weight loss of up to 15% of body weight (about 15 kg) can lead to diabetes remission. For prevention in prediabetes, the target is weight loss of at least 7%.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Section 3.5, p. 44.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "A patient with T2DM and diabetic kidney disease has an eGFR of 38 mL/min/1.73m². What does the CPG advise regarding metformin?",
    option_a: "Stop metformin immediately",
    option_b: "Continue at full dose",
    option_c: "Switch to a sulphonylurea, as metformin is unsafe in CKD",
    option_d: "Continue, reducing the dose by 50%",
    correct_option: "D",
    explanation: "Rationale: Metformin remains first-line in DKD unless eGFR is below 30. A 50% dose reduction is required at eGFR 30–44. At 45–59, full dose can continue, with reduction considered if the patient is predisposed to hypoperfusion or hypoxaemia.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Section 5.2, p. 144.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "A patient on insulin has frequent hypoglycaemia and asks about returning to driving. What does the CPG advise for patients at risk of hypoglycaemia?",
    option_a: "Driving is safe provided a snack is eaten before every journey",
    option_b: "Restrictions apply to Level 3 events, not to Level 1 or 2",
    option_c: "No activity restrictions are needed if CGM is used",
    option_d: "They should be discouraged from driving, cycling, swimming or operating heavy machinery",
    correct_option: "D",
    explanation: "Rationale: Patients at risk of hypoglycaemia should be discouraged from driving, cycling, swimming or operating heavy machinery, as these may endanger themselves and the public. Prevention includes identifying at-risk patients and education on recognising symptoms.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Section 4.1, p. 117.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "What insulin regimen does the CPG recommend as the current standard for diabetic ketoacidosis?",
    option_a: "Sliding-scale subcutaneous insulin",
    option_b: "Weight-based fixed-rate intravenous insulin infusion",
    option_c: "Intramuscular insulin boluses every 4 hours",
    option_d: "Basal insulin glargine once daily",
    correct_option: "B",
    explanation: "Rationale: A weight-based fixed-rate intravenous insulin infusion (FRIII) is the current standard for DKA, and sliding-scale insulin should no longer be used.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Section 4 summary of updates, p. 116.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "A patient with T2DM on an SGLT2 inhibitor presents after surgery with nausea, metabolic acidosis, raised ketones and a blood glucose of 9 mmol/L. What does the CPG highlight?",
    option_a: "Lactic acidosis from SGLT2 inhibitor accumulation after surgery",
    option_b: "Hyperosmolar hyperglycaemic state precipitated by surgical stress",
    option_c: "Euglycaemic ketoacidosis, which can occur with SGLT2 inhibitors under stress or insulin omission",
    option_d: "Starvation ketosis, which resolves with oral intake and needs no treatment",
    correct_option: "C",
    explanation: "Rationale: Euglycaemic ketoacidosis, long known in T1DM, can occur in T2DM patients treated with SGLT2 inhibitors, precipitated by stress and/or insulin omission. It requires awareness, prompt recognition and timely management.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Section 4 summary of updates, p. 116.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "How often does the CPG recommend screening for loss of protective sensation (LOPS) and peripheral arterial disease in T2DM?",
    option_a: "Every 5 years after diagnosis",
    option_b: "When a foot ulcer develops",
    option_c: "At diagnosis and at least annually",
    option_d: "Every 3 years after 10 years of diabetes",
    correct_option: "C",
    explanation: "Rationale: Screening for peripheral neuropathy with LOPS and for PAD should be done at diagnosis and repeated at least annually. High-risk feet (prior ulcers or amputation, deformity, LOPS, PAD) need more frequent detailed assessment.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Section 5.5, p. 165.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "A patient with established diabetic retinopathy has an HbA1c of 12%. What does the CPG caution about intensifying glycaemic control?",
    option_a: "Rapid improvement may transiently worsen retinopathy; aim for more gradual improvement with ophthalmology co-management",
    option_b: "Rapid improvement reverses retinopathy and should be achieved within 1 month",
    option_c: "Glycaemic control does not affect retinopathy",
    option_d: "Glucose-lowering should be withheld until retinopathy is laser-treated",
    correct_option: "A",
    explanation: "Rationale: Rapid improvement of glycaemia in patients with established retinopathy may cause transient worsening of retinopathy. Co-management with an ophthalmologist and more gradual improvement of glycaemia is advised.\nReference: Malaysian CPG Management of Type 2 Diabetes Mellitus 2020 (6th Ed.), Section 5.1, p. 134.",
    tag: "CPG Type 2 Diabetes 2020"
  },
  {
    question_text: "The CPG advocates lipid screening for all adults above which age, with earlier screening (after age 18) reserved for those at high risk of CVD?",
    option_a: "40 years",
    option_b: "18 years",
    option_c: "30 years",
    option_d: "50 years",
    correct_option: "C",
    explanation: "Rationale: The committee advocates a lipid profile in all adults over 30 years of age. Individuals at high risk of developing CVD should be screened earlier in life (over 18 years).\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Message #5; Key Recommendation #8, p. 16.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "Which statement about lipid testing is supported by the CPG?",
    option_a: "Non-fasting samples are acceptable, as the fasting/non-fasting difference is small and does not affect CV risk estimation",
    option_b: "A 12-hour fast is required because non-fasting samples overestimate LDL-C enough to change risk category",
    option_c: "Apolipoprotein B should be measured routinely in all patients before treatment decisions",
    option_d: "Measuring total cholesterol by itself is adequate, without HDL-C, LDL-C or TG",
    correct_option: "A",
    explanation: "Rationale: Non-fasting lipid testing is acceptable (I,A): the difference between fasting and non-fasting values is small and has no impact on CV risk estimation. TC with its conventional derivatives (HDL-C, LDL-C, TG) is sufficient in most cases; routine apolipoprotein measurement is not needed given cost and limited laboratory availability.\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #1, p. 17.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "In which situation does non-HDL-C become the primary target of therapy instead of LDL-C?",
    option_a: "When HDL-C is below 1.0 mmol/L",
    option_b: "When the patient has chronic kidney disease",
    option_c: "When the patient has type 2 diabetes",
    option_d: "When triglycerides exceed 4.5 mmol/L",
    correct_option: "D",
    explanation: "Rationale: LDL-C is the primary target of therapy. Non-HDL-C may be a secondary target in combined hyperlipidaemia, diabetes, cardiometabolic risk and CKD, but it becomes the primary target only when TG exceeds 4.5 mmol/L (when calculated LDL-C is no longer reliable).\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #5, p. 18.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "A 60-year-old man with established coronary artery disease is starting lipid-lowering therapy for secondary prevention. What LDL-C target does the CPG recommend?",
    option_a: "< 1.8 mmol/L and a ≥ 30% reduction from baseline",
    option_b: "< 1.4 mmol/L and a ≥ 50% reduction from baseline",
    option_c: "< 2.6 mmol/L and a ≥ 50% reduction from baseline",
    option_d: "< 1.0 mmol/L as the routine target for all CVD patients",
    correct_option: "B",
    explanation: "Rationale: All patients with CVD should receive lipid-lowering therapy, with a target LDL-C below 1.4 mmol/L and a 50% reduction from baseline (I,A). For comparison, ≤ 1.8 mmol/L is the high-risk target and < 2.6 mmol/L the intermediate-risk target; < 1.0 mmol/L applies only to recurrent events within 2 years despite LDL-C < 1.4 mmol/L.\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #9; Table 4, p. 19.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "A patient has a second myocardial infarction within 2 years despite achieving LDL-C below 1.4 mmol/L. What LDL-C target does Table 4 of the CPG suggest?",
    option_a: "< 1.8 mmol/L",
    option_b: "< 1.6 mmol/L",
    option_c: "< 1.0 mmol/L",
    option_d: "< 1.4 mmol/L, maintained",
    correct_option: "C",
    explanation: "Rationale: For those with recurrent CV events within 2 years despite achieving an LDL-C target below 1.4 mmol/L, the CPG suggests a lower target of below 1.0 mmol/L, with all other CV risk factors treated to target.\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Table 4, p. 26.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "After starting a statin, which investigation does the CPG recommend measuring only when myositis is suspected, rather than routinely?",
    option_a: "Hepatic transaminases",
    option_b: "Fasting lipid profile",
    option_c: "Serum creatinine",
    option_d: "Creatine kinase",
    correct_option: "D",
    explanation: "Rationale: Lipid profile and hepatic transaminases are measured at baseline and 1–3 months after starting or changing the statin dose. Creatine kinase is measured only if myositis is suspected.\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #7, p. 19.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "A patient develops an adverse effect on a statin. According to the CPG, what is the recommended initial approach?",
    option_a: "Reduce the dose or stop temporarily, then reintroduce at a lower dose once resolved; discontinue if it recurs",
    option_b: "Stop the statin permanently and avoid any future rechallenge with lipid-lowering drugs",
    option_c: "Continue the same dose, add coenzyme Q10 and recheck CK in 3 months",
    option_d: "Switch immediately to fibrate monotherapy, as fibrates cause fewer muscle effects",
    correct_option: "A",
    explanation: "Rationale: If an adverse effect occurs, the dose should be reduced or the drug temporarily discontinued. Once symptoms and/or biochemistry normalise, it can be reintroduced at a lower dose. If the adverse effect recurs, the drug is discontinued and an alternative treatment used.\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #7, p. 19.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "Which lipid-lowering combination does the CPG list specifically for statin-intolerant patients?",
    option_a: "Fibrate + niacin",
    option_b: "Ezetimibe + bempedoic acid",
    option_c: "Omega-3 fatty acids + fibrate",
    option_d: "Bile acid sequestrant + niacin",
    correct_option: "B",
    explanation: "Rationale: Among the combination therapies listed, ezetimibe plus bempedoic acid is the option specified for statin-intolerant patients (IIa,B). The other listed combinations are all statin-based (statin + ezetimibe, statin + PCSK9 inhibitor, etc.).\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #7, p. 19.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "A healthy 35-year-old at low CV risk has LDL-C at target and low triglycerides on screening. When should screening be repeated?",
    option_a: "Annually",
    option_b: "Every 5 years",
    option_c: "Every 3 years",
    option_d: "Every 10 years",
    correct_option: "C",
    explanation: "Rationale: If LDL-C is at target and TG is low, screening is repeated at 3-yearly intervals. Those at very high or high CV risk (e.g. diabetes, family history of premature CVD) should be rescreened annually.\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #8, p. 19.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "An intermediate-risk patient has an ankle-brachial index (ABI) of 1.45. How should this be interpreted according to the CPG?",
    option_a: "Normal result; no change in risk category",
    option_b: "Borderline; repeat ABI in 5 years",
    option_c: "Indicates venous insufficiency rather than arterial disease",
    option_d: "Calcified non-compressible vessels, indicating established CVD and a need to upgrade CV risk",
    correct_option: "D",
    explanation: "Rationale: In intermediate-risk patients, an ABI below 0.9 or above 1.40 indicates established atherosclerotic disease. An ABI above 1.4 reflects calcified, non-compressible vessels. Either finding upgrades CV risk, treatment targets and the decision to start pharmacotherapy.\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #10, p. 20.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "A 45-year-old woman with type 2 diabetes has a baseline LDL-C of 2.4 mmol/L and no known CVD. What does the CPG recommend regarding statin therapy?",
    option_a: "Statin therapy regardless of baseline LDL-C",
    option_b: "No statin, as LDL-C is below 2.6 mmol/L",
    option_c: "Statin if non-HDL-C exceeds 3.4 mmol/L",
    option_d: "Lifestyle changes for 12 weeks, then a statin if LDL-C rises",
    correct_option: "A",
    explanation: "Rationale: All persons with diabetes above the age of 40 should be treated with a statin regardless of baseline LDL-C (I,A). In type 2 diabetes below 21 years of age without clinical CVD, statins are generally not recommended.\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #12, p. 20.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "A patient with end-stage kidney disease on haemodialysis, with no established CVD and not previously on a statin, is reviewed in clinic. What does the CPG recommend?",
    option_a: "Start a high-intensity statin, as dialysis patients are very high risk",
    option_b: "Start ezetimibe/simvastatin combination",
    option_c: "Do not start a statin for primary prevention",
    option_d: "Start a fibrate to lower triglycerides",
    correct_option: "C",
    explanation: "Rationale: Statins should not be commenced for primary prevention in patients on dialysis (III,B). Their very high CV risk is mostly non-atherosclerotic (medial calcification, LVH, arrhythmias), and trials show no CV benefit. Patients with established CVD, or already on a statin when dialysis begins, should continue it.\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #14, p. 21.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "In patients with eGFR below 60 mL/min/1.73m², the risk of muscle-related symptoms on statins is higher. What does the CPG advise?",
    option_a: "Avoid statins entirely",
    option_b: "Use ezetimibe monotherapy as first line",
    option_c: "Combine the statin with a fibrate to allow a lower statin dose",
    option_d: "Start the statin at a lower dose and avoid combination with fibrates",
    correct_option: "D",
    explanation: "Rationale: With eGFR below 60, muscle-related symptoms are more likely, so statins should be started at a lower dose and the combination with fibrates avoided (IIa,B). Statins (or ezetimibe/simvastatin) are still recommended in non-dialysis CKD stages 3–5.\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #14, p. 21.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "A newly diagnosed hypothyroid patient has an elevated LDL-C. According to the CPG, what is the appropriate approach to lipid-lowering therapy?",
    option_a: "Start a statin immediately alongside thyroxine",
    option_b: "Treat the hypothyroidism and reassess the lipid profile once euthyroid before starting therapy",
    option_c: "Start a fibrate, as statins are contraindicated in hypothyroidism",
    option_d: "Lipids need no reassessment, as thyroid disease does not affect lipoproteins",
    correct_option: "B",
    explanation: "Rationale: Treating hypo- or hyperthyroidism can improve lipid abnormalities (I,A), so the lipid profile should be reassessed after the patient becomes euthyroid, before initiating lipid-lowering therapy (I,C).\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #15, p. 21.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "In adults with persistent endogenous Cushing syndrome, what LDL-C target does the CPG recommend?",
    option_a: "< 1.8 mmol/L",
    option_b: "< 2.6 mmol/L",
    option_c: "< 1.4 mmol/L",
    option_d: "< 3.0 mmol/L",
    correct_option: "A",
    explanation: "Rationale: In persistent endogenous Cushing syndrome, statin therapy should be considered irrespective of the CV risk score (IIa,C), with LDL-C as the primary target and a target below 1.8 mmol/L (I,A).\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #15, p. 21.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "Which statement about lipid-lowering therapy in heart failure is consistent with the CPG?",
    option_a: "Statins are recommended for all heart failure patients regardless of cause",
    option_b: "Statins are contraindicated in heart failure",
    option_c: "Statins are recommended in heart failure due to CAD, but not routinely in non-ischaemic heart failure",
    option_d: "PCSK9 inhibitors are first line in heart failure",
    correct_option: "C",
    explanation: "Rationale: All patients with heart failure due to coronary artery disease should be on statins (IIa,B). Routine cholesterol-lowering therapy is not recommended in non-ischaemic heart failure (IIa,B).\nReference: Malaysian CPG Management of Dyslipidaemia 2023 (6th Ed.), Key Recommendation #13, p. 21.",
    tag: "CPG Dyslipidaemia 2023"
  },
  {
    question_text: "A 72-year-old woman sustains a vertebral compression fracture after a fall from standing height. DXA is not yet available. According to the CPG, can osteoporosis be diagnosed?",
    option_a: "No; a DXA T-score of -2.5 or lower is required first",
    option_b: "Yes; a low-trauma spine or hip fracture allows a clinical diagnosis regardless of BMD",
    option_c: "No; bone turnover markers must first confirm high turnover",
    option_d: "Yes, but a quantitative ultrasound of the heel must be done first",
    correct_option: "B",
    explanation: "Rationale: A clinical diagnosis of osteoporosis can be made after a low-trauma spine or hip fracture (equivalent to a fall from standing height or less), regardless of BMD (C). Quantitative ultrasound is not recommended for diagnosis.\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 17.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "At which sites does the CPG specify that a DXA T-score of -2.5 or lower is used to diagnose osteoporosis?",
    option_a: "Distal radius, calcaneus or phalanges",
    option_b: "Lumbar spine, L1–L4 average",
    option_c: "Femoral neck, total hip or lumbar spine",
    option_d: "Whole body DXA, any site",
    correct_option: "C",
    explanation: "Rationale: Osteoporosis is diagnosed on a T-score of -2.5 or lower on DXA at the femoral neck, total hip or lumbar spine (A). DXA remains the gold standard for diagnosis.\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 17.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "Which role does the CPG assign to bone turnover markers (BTM)?",
    option_a: "Diagnosing osteoporosis in place of DXA",
    option_b: "Monitoring treatment response and assessing adherence",
    option_c: "Screening all women at menopause",
    option_d: "Calculating the 10-year fracture probability",
    correct_option: "B",
    explanation: "Rationale: Bone turnover markers are useful for clinically monitoring treatment response and assessing adherence (D). They respond quickly to changes in bone turnover with therapy, unlike BMD.\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 17.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "How often does the CPG recommend screening older persons (≥ 65 years) for falls risk?",
    option_a: "Every 5 years",
    option_b: "After a first fall has occurred",
    option_c: "At least once a year",
    option_d: "At the time of a fracture presentation",
    correct_option: "C",
    explanation: "Rationale: All older persons aged 65 or over should be screened at least once a year for falls risk (B). Those at risk should receive a multifactorial falls risk assessment and intervention (A), and exercise and physical therapy are recommended to prevent falls and fall injuries (A).\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 18.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "A postmenopausal woman is assessed to be at very high fracture risk. Which initial treatment does the CPG recommend, if available?",
    option_a: "An anabolic agent",
    option_b: "Menopausal hormone therapy",
    option_c: "Raloxifene",
    option_d: "Calcium and vitamin D without other therapy",
    correct_option: "A",
    explanation: "Rationale: Very high-risk individuals should be considered for an anabolic agent if available; alternatives, in order of preference, are denosumab or parenteral bisphosphonates (B). High-risk patients receive anti-resorptives (A), and low-risk patients may be considered for MHT or SERMs if clinically indicated (B).\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 18.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "Which group does the CPG suggest should be considered for menopausal hormone replacement or a selective estrogen receptor modulator (SERM), if clinically indicated?",
    option_a: "Very high-risk individuals",
    option_b: "High-risk individuals after a hip fracture",
    option_c: "Patients on long-term glucocorticoids",
    option_d: "Low-risk individuals",
    correct_option: "D",
    explanation: "Rationale: Low-risk individuals should be considered for menopausal hormone replacement or SERMs, if clinically indicated (B). High-risk individuals receive anti-resorptives, and very high-risk individuals an anabolic agent.\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 18.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "To which women does the CPG say menopausal hormone therapy should be offered to help prevent and treat postmenopausal osteoporosis?",
    option_a: "All women over 65, regardless of symptoms",
    option_b: "Symptomatic women under 60 and within 10 years of menopause",
    option_c: "Women with a prior hip fracture over 70",
    option_d: "Women more than 20 years past menopause",
    correct_option: "B",
    explanation: "Rationale: Menopausal hormone therapy offered to symptomatic women under 60 years old and within 10 years of menopause helps prevent and treat postmenopausal osteoporosis (A).\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 19.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "A patient with osteoporosis has an eGFR of 25 mL/min. What does the CPG state about oral bisphosphonates?",
    option_a: "Not recommended at eGFR < 30 mL/min",
    option_b: "Safe at any eGFR, at half dose",
    option_c: "Preferred over denosumab in CKD stage 4–5",
    option_d: "Contraindicated below 10 mL/min",
    correct_option: "A",
    explanation: "Rationale: Oral bisphosphonates are not recommended for patients with eGFR below 30 mL/min (CKD stage 4–5). Zoledronic acid is contraindicated below 35 mL/min.\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 20.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "Below what eGFR is intravenous zoledronic acid contraindicated, according to the CPG?",
    option_a: "60 mL/min",
    option_b: "45 mL/min",
    option_c: "35 mL/min",
    option_d: "15 mL/min",
    correct_option: "C",
    explanation: "Rationale: Zoledronic acid is contraindicated in patients with eGFR below 35 mL/min (A). Oral bisphosphonates are not recommended below 30 mL/min.\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 20.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "After how long does the CPG recommend reviewing the efficacy of bisphosphonate treatment?",
    option_a: "6–12 months",
    option_b: "1–2 years",
    option_c: "10–15 years",
    option_d: "3–5 years",
    correct_option: "D",
    explanation: "Rationale: Bisphosphonate efficacy should be reviewed after 3–5 years; continuation depends on treatment response, side effects and future fracture risk. Denosumab reassessment may be done after 5–10 years.\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 20.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "A patient on denosumab for 4 years asks to take a 'drug holiday'. What does the CPG advise?",
    option_a: "A 1-year drug holiday is appropriate after 3 years of therapy",
    option_b: "Stop denosumab; no further treatment is needed, as its effect persists for years",
    option_c: "A drug holiday is not recommended; if denosumab is stopped, another treatment should follow",
    option_d: "Halve the dose instead of stopping",
    correct_option: "C",
    explanation: "Rationale: A denosumab drug holiday is not recommended, because stopping it causes a rebound increase in bone turnover and a higher risk of multiple vertebral fractures (B). If denosumab is stopped, another treatment should be started to prevent the rebound.\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 20.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "A woman with very high fracture risk had a myocardial infarction 6 months ago. What does the CPG say about romosozumab?",
    option_a: "It is the preferred agent, because of its cardioprotective effect",
    option_b: "It is not currently recommended after a CV event within the past year",
    option_c: "It can be used at half dose",
    option_d: "It is recommended, provided aspirin is co-prescribed",
    correct_option: "B",
    explanation: "Rationale: Romosozumab is not currently recommended in patients with a CV event within the past year, and should be used cautiously in high CV risk, only when benefits outweigh risks (B). It is preferably used in very high fracture risk patients with low CV risk.\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 21.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "For fracture and fall prevention in people over 50 at risk of fracture, what calcium and vitamin D supplementation does the CPG recommend?",
    option_a: "Vitamin D at least 800 IU/day with 1200 mg/day elemental calcium",
    option_b: "Vitamin D 200 IU/day with 500 mg/day calcium",
    option_c: "Vitamin D 50,000 IU/month, without calcium",
    option_d: "Calcium 2500 mg/day, without vitamin D",
    correct_option: "A",
    explanation: "Rationale: Vitamin D of at least 800 IU/day combined with 1200 mg/day of elemental calcium is recommended for fracture and fall prevention in people over 50 at risk of fractures, particularly when starting active osteoporosis therapy (A).\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 21.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "Which finding does the CPG list as a criterion for considering osteoporosis treatment failure?",
    option_a: "A single fracture in the first month of treatment",
    option_b: "Any change in BMD of less than 5%",
    option_c: "Two or more osteoporotic fractures during treatment",
    option_d: "Persistent back pain",
    correct_option: "C",
    explanation: "Rationale: Treatment failure can be considered when two or more osteoporotic fractures occur, and/or BTM change is below 25%, and/or BMD worsens during treatment (C). Adherence and secondary osteoporosis must be assessed before changing treatment (B).\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 21.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "Within what time frame does the CPG recommend surgical intervention for osteoporotic hip fractures?",
    option_a: "Within 7 days",
    option_b: "Within 2 weeks",
    option_c: "After 72 hours of medical optimisation",
    option_d: "Within 48 hours",
    correct_option: "D",
    explanation: "Rationale: Osteoporotic hip fractures are best treated by early surgical intervention, within 48 hours (B). Vertebral fractures can initially be treated conservatively, with vertebral augmentation considered in specific circumstances if that fails (A).\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 21.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "A patient with rheumatoid arthritis is starting prednisolone, expected to continue for 6 months. What does the CPG recommend regarding bone health?",
    option_a: "An initial fracture risk assessment",
    option_b: "No assessment unless a fracture occurs",
    option_c: "Assessment once the cumulative dose exceeds 10 g",
    option_d: "Routine heel quantitative ultrasound",
    correct_option: "A",
    explanation: "Rationale: All patients starting glucocorticoids who are expected to continue for more than 3 months should have an initial fracture risk assessment. This uses previous fragility fracture, DXA BMD and glucocorticoid-adjusted FRAX scores.\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 21.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "For a patient on glucocorticoids with very high fracture risk, what does the CPG name as first-line treatment?",
    option_a: "Calcitonin nasal spray",
    option_b: "Oral bisphosphonates",
    option_c: "Tibolone",
    option_d: "Raloxifene",
    correct_option: "B",
    explanation: "Rationale: For patients on glucocorticoids with osteoporotic fractures, densitometric osteoporosis and/or very high fracture risk, oral bisphosphonates are first-line treatment (A).\nReference: Malaysian CPG Management of Osteoporosis 2022 (3rd Ed.), Key Statements, p. 22.",
    tag: "CPG Osteoporosis 2022"
  },
  {
    question_text: "A 30-year-old man has had 4 months of nocturnal cough and wheeze, worse with colds and cold air, and has a history of eczema. He has never used inhalers. Examination is normal. Treatment-naive spirometry shows FEV1/FVC 0.79 and no significant bronchodilator response. Which is the most appropriate next step?",
    option_a: "Diagnose asthma and start low-dose inhaled corticosteroid",
    option_b: "Exclude asthma and discharge him from follow-up",
    option_c: "Consider further history, further investigations and alternative diagnoses",
    option_d: "Start montelukast as a diagnostic trial",
    correct_option: "C",
    explanation: "Rationale: In treatment-naive patients, asthma is diagnosed when FEV1/FVC is <0.7 (or below LLN) AND the bronchodilator reversibility test is positive. If not, the CPG algorithm says to consider further history, investigations (for example PEFR variability monitoring or bronchoprovocation) and alternative diagnoses. A diagnoses asthma without objective airflow obstruction. B is wrong because spirometry can be normal between symptoms, so asthma is not excluded. D: LTRA is not a diagnostic test and is not first-line.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 3, Figure 1, Table 3; Recommendation 1.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 36-year-old woman with suspected asthma records her highest of three peak flow readings each morning and evening for 2 weeks. On one day her readings are 350 L/min in the morning and 450 L/min in the evening. Using the CPG method, what is that day's diurnal PEF variability?",
    option_a: "22%",
    option_b: "25%",
    option_c: "29%",
    option_d: "12.5%",
    correct_option: "B",
    explanation: "Rationale: Variability = (day's highest - day's lowest) / mean of the day's highest and lowest x 100 = (450 - 350) / 400 x 100 = 25%. The daily values are then averaged over 1-2 weeks, and a variability of ≥20% suggests asthma. A divides by the highest value (100/450). C divides by the lowest value (100/350). D is a halving error.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 3, Table 3; Appendix 3.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 27-year-old woman with eczema and allergic rhinitis has episodic wheeze and cough. Spirometry is normal. Her FeNO is 62 ppb. Which statement about FeNO in suspected asthma is most accurate according to the CPG?",
    option_a: "A normal FeNO excludes asthma",
    option_b: "A raised FeNO is diagnostic of asthma",
    option_c: "FeNO is raised only in asthma and not in other conditions",
    option_d: "A high FeNO (>50 ppb) predicts better response to ICS, but a low level should not be used to withhold ICS",
    correct_option: "D",
    explanation: "Rationale: FeNO is not a definitive test for asthma. It can be raised in eosinophilic bronchitis, allergic rhinitis and eczema (so B and C are wrong). A FeNO >50 ppb predicts better ICS response, but non-T2 asthma does not raise FeNO, so a low value must not be used to withhold ICS (A is wrong).\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 3, Table 3.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "Four adults with suspected asthma and normal spirometry undergo challenge testing. Which result is a positive test?",
    option_a: "Exercise challenge: FEV1 fall of 12% from baseline",
    option_b: "Methacholine challenge: PC20 of 12 mg/mL",
    option_c: "Mannitol challenge: FEV1 fall of 12% at a cumulative dose of 635 mg",
    option_d: "Exercise challenge: FEV1 fall of 8% from baseline",
    correct_option: "A",
    explanation: "Rationale: The CPG thresholds are: exercise, FEV1 fall of ≥10%; methacholine, PC20 ≤8 mg/mL; mannitol, FEV1 fall of ≥15% at a cumulative dose of ≤635 mg. Only A meets its threshold. B (12 mg/mL is above 8), C (12% is below 15%) and D (8% is below 10%) are negative. These tests are not routinely performed in clinical practice.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 3, Table 3.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 26-year-old woman at 12 weeks of gestation has had 6 months of recurrent nocturnal wheeze and cough triggered by dust and exercise, and has a past history of eczema. Examination is normal and no alternative diagnosis is found. Which is the most appropriate approach to diagnosis and treatment?",
    option_a: "Methacholine challenge now, then treat if positive",
    option_b: "Defer all treatment until after delivery",
    option_c: "Start ICS-containing therapy and postpone confirmatory testing until after delivery",
    option_d: "Mannitol challenge now, then treat if positive",
    correct_option: "C",
    explanation: "Rationale: Bronchoprovocation tests are contraindicated in pregnancy. If the history is consistent with asthma and no alternative diagnosis is found, treatment may be started and confirmatory investigations delayed until after delivery. A and D use contraindicated tests. B leaves her untreated, but uncontrolled asthma harms both mother and fetus.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.2(a); Recommendation 16.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 34-year-old man with suspected eosinophilic asthma has several T2 biomarkers measured. Which one result meets the CPG threshold for T2-high inflammation?",
    option_a: "Allergen-specific IgE 0.6 kU/L",
    option_b: "Blood eosinophils 120 cells/µL",
    option_c: "Total serum IgE 80 kU/L",
    option_d: "FeNO 35 ppb",
    correct_option: "A",
    explanation: "Rationale: CPG thresholds for T2-high inflammation are: blood eosinophils ≥150 cells/µL (or >4%), total serum IgE >100 kU/L, any allergen-specific IgE >0.35 kU/L, and FeNO ≥50 ppb. Only A (0.6 kU/L, above 0.35) meets its threshold. B, C and D are all below threshold.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 3, Table 3.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "Four adults on ICS-LABA have been reviewed. Which patient is the most suitable candidate for stepping down treatment?",
    option_a: "Well controlled for 6 months, FEV1 72% predicted, no exacerbations in 12 months",
    option_b: "Well controlled for 2 months, FEV1 95% predicted, no exacerbations in 12 months",
    option_c: "Well controlled for 6 months, FEV1 88% predicted, one oral prednisolone course 8 months ago",
    option_d: "Well controlled for 5 months, FEV1 91% predicted, post-bronchodilator FEV1/FVC 0.78, no exacerbations in 12 months",
    correct_option: "D",
    explanation: "Rationale: Step-down is considered after 3-6 months of good control, with FEV1 ≥80% predicted, post-bronchodilator FEV1/FVC ≥70%, and no exacerbations in the last 12 months. D meets all of these. A fails on FEV1. B is controlled for under 3 months. C had an exacerbation within 12 months.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.1(a), Section 4.2(c); Recommendation 2.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A clinic wants to standardise one control-assessment tool that the physician completes at each visit. Which tool is physician-assessed, has 4 items and uses a 4-week recall?",
    option_a: "Asthma Control Test (ACT)",
    option_b: "GINA assessment of asthma control",
    option_c: "Asthma Control Questionnaire (ACQ-5)",
    option_d: "RCP 3 Questions",
    correct_option: "B",
    explanation: "Rationale: The GINA assessment is physician-completed, has 4 items and uses a 4-week recall. ACT is patient-completed with 5 items and 4-week recall. ACQ-5 is patient-completed with 5 items and 1-week recall. RCP 3 is patient-completed with 3 items. The same tool should be used at every review to keep assessment consistent.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.1(a), Tables 5 and 6.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 40-year-old man takes low-dose budesonide twice daily with salbutamol as needed. His ACT today is 21 and he has had no exacerbations. Pharmacy records show five 200-dose salbutamol canisters dispensed in the last year, though he says he is \"fine\". Which is the most appropriate interpretation?",
    option_a: "No concern, because an ACT ≥20 means he has no future exacerbation risk",
    option_b: "SABA overuse (≥3 canisters a year) is a risk factor and should prompt review of adherence, technique and treatment",
    option_c: "This is appropriate use, as SABA is the preferred sole reliever",
    option_d: "He should be given oral salbutamol tablets as a convenient alternative",
    correct_option: "B",
    explanation: "Rationale: Using ≥3 canisters of SABA a year is a risk factor for exacerbation and mortality. Even well-controlled patients can be at risk, so exacerbation risk should be checked at every review. A is wrong because good symptom control does not remove future exacerbation risk. C is wrong because SABA should not be used as monotherapy. D is wrong because oral SABA is not recommended.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.1(b), Section 6.2.1(a); Recommendation 5.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 78-year-old woman with mild cognitive impairment and weak inspiratory effort cannot coordinate her pMDI or generate the forceful inhalation her dry powder inhaler needs. Which is the most appropriate inhaler option?",
    option_a: "Continue the DPI after a single further education session",
    option_b: "Switch to a different brand of DPI",
    option_c: "pMDI with a valved holding chamber",
    option_d: "Stop inhalers and use oral montelukast instead",
    correct_option: "C",
    explanation: "Rationale: For patients with difficulty performing the inhalation manoeuvre or with cognitive impairment, a pMDI with a valved holding chamber (VHC) is recommended. It is also recommended where inspiratory flow is insufficient for a DPI (a soft mist inhaler is another option there). A and B keep a device she cannot use effectively. D abandons ICS-containing therapy, which all asthma patients need.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 5.3(b).",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 32-year-old man has correct inhaler technique but stops his budesonide-formoterol maintenance whenever symptoms settle. He believes treatment can be stopped when he feels well. His TAI score shows poor adherence. Which intervention best matches his type of non-adherence?",
    option_a: "Counselling on the chronic nature of asthma and the long-term benefit of maintenance therapy",
    option_b: "Daily reminders such as an alarm or smart inhaler",
    option_c: "Simplifying the regimen to fewer devices",
    option_d: "Teach-to-goal demonstration of inhaler technique",
    correct_option: "A",
    explanation: "Rationale: This is intelligent (intentional) non-adherence, a reasoned decision to stop treatment, including the false belief that it can stop once symptoms improve. Strategies are education and counselling, motivational goal-setting and shared decision-making. B suits erratic (forgetful) non-adherence. C and D suit unwitting non-adherence (misunderstanding or poor technique).\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 5.4.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 35-year-old man is being given a PEFR-based asthma action plan. He has no known personal best PEFR. How should the action points be set?",
    option_a: "Use his lowest PEFR recorded during a previous exacerbation",
    option_b: "Use the PEFR measured 1 hour after bronchodilator at his last ED visit",
    option_c: "Do not use a PEFR-based plan, as symptom-based plans are the only valid option",
    option_d: "Use the predicted PEFR (from the nomogram)",
    correct_option: "D",
    explanation: "Rationale: In PEFR-based plans, action points use the patient's known personal best under stable conditions (not measured during an exacerbation). Where there is no known personal best, the predicted value may be used. A and B use values measured during acute illness. C is wrong because a PEFR-based plan is equivalent to a symptom-based plan for hospitalisation and ED visits.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 5.2(b); Appendix 4.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 38-year-old woman has newly diagnosed asthma. She has symptoms on most days and an ACT of 17, but no night waking and FEV1 88% predicted. She is treatment-naive and has allergic rhinitis. Which initial maintenance regimen is most appropriate?",
    option_a: "As-needed salbutamol alone",
    option_b: "Medium-dose ICS-LABA with a LAMA",
    option_c: "Maintenance low-dose ICS-LABA",
    option_d: "Montelukast alone",
    correct_option: "C",
    explanation: "Rationale: She is not well controlled (ACT <20, symptoms on most days) but has no night waking and normal FEV1. Algorithm 1 gives maintenance low-dose ICS-LABA, or low-to-medium-dose ICS (low-dose ICS with LTRA may be used because of her rhinitis). A is SABA monotherapy, which is not recommended. B is for daily symptoms or night waking together with FEV1 <80% predicted. D: LTRA alone is less effective than ICS.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 4.2(a); Algorithm 1.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 45-year-old man has daily symptoms, wakes at night 3 times a week, has an ACT of 11 and FEV1 58% predicted. He is treatment-naive and a non-smoker. Which initial regimen is most appropriate?",
    option_a: "Low-dose ICS with as-needed SABA",
    option_b: "Medium-to-high-dose maintenance ICS-LABA",
    option_c: "As-needed ICS-formoterol alone",
    option_d: "Low-dose ICS plus montelukast",
    correct_option: "B",
    explanation: "Rationale: Daily symptoms with night waking AND FEV1 <80% predicted indicate poor control. Algorithm 1 recommends maintenance medium-to-high-dose ICS-LABA (or medium-dose ICS-LABA with add-on LAMA). A, C and D are lower-intensity regimens meant for well-controlled or milder disease. His FEV1 <60% is also an exacerbation risk factor.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 4.2(a); Algorithm 1.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 31-year-old woman takes low-dose budesonide-formoterol twice daily and salbutamol as needed. She has had two exacerbations needing oral prednisolone in 12 months despite good adherence and technique, and she often confuses her two inhalers. Which change is most appropriate and best supported by the CPG evidence?",
    option_a: "Replace salbutamol with a regular LABA alone",
    option_b: "Increase to high-dose ICS alone",
    option_c: "Add oral montelukast and continue salbutamol",
    option_d: "Use budesonide-formoterol as both maintenance and reliever (MART)",
    correct_option: "D",
    explanation: "Rationale: Low-dose MART was significantly more effective than ICS-LABA with as-needed SABA at preventing severe exacerbations, and using one inhaler avoids confusion between devices. A: LABA without ICS should not be used as reliever monotherapy. B: raising ICS alone to high dose is not recommended. C does not address the evidence-based reliever strategy.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.2.1(b)(iii); Recommendation 6.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 33-year-old man is on MART with budesonide-formoterol, one inhalation twice daily plus extra inhalations as needed. During a viral illness he asks how many inhalations he can take in one day. What is the maximum total daily number of puffs in the CPG?",
    option_a: "12",
    option_b: "8",
    option_c: "16",
    option_d: "24",
    correct_option: "A",
    explanation: "Rationale: The CPG states that for ICS-formoterol used as reliever (and as maintenance in MART) the maximum total dose is 12 puffs a day. If he repeatedly needs more than this or symptoms persist, he should seek medical review rather than self-escalate.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 4.2; Algorithm 2.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A medical officer is reviewing reliever options for an adult with asthma. Which statement is consistent with the CPG?",
    option_a: "Oral salbutamol is acceptable if the patient cannot use inhalers",
    option_b: "Formoterol alone is a suitable reliever without ICS",
    option_c: "ICS-formoterol or ICS-SABA may be used as anti-inflammatory reliever (AIR)",
    option_d: "Adding ipratropium to SABA gives extra benefit in chronic asthma",
    correct_option: "C",
    explanation: "Rationale: The CPG says anti-inflammatory reliever therapy (ICS with formoterol, or ICS with SABA) may be used. A is wrong because oral SABA should not be used. B is wrong because LABA without ICS should not be used as reliever monotherapy. D is wrong because SAMA plus SABA offers no additional advantage in chronic asthma (the benefit is in acute exacerbations).\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.2.1(a); Recommendation 5.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 44-year-old man takes beclometasone dipropionate (standard-particle HFA pMDI) 250 µg, two puffs twice daily, with salbutamol as needed. Which ICS dose category is this?",
    option_a: "Low",
    option_b: "Medium",
    option_c: "High",
    option_d: "Cannot be categorised",
    correct_option: "B",
    explanation: "Rationale: The total daily dose is 250 µg x 2 puffs x 2 = 1000 µg. For standard-particle HFA pMDI beclometasone, low is 200-500 µg, medium is >500-1000 µg and high is >1000 µg, so 1000 µg is medium.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.2.1(b), Table 7.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 50-year-old woman on high-dose ICS-LABA by pMDI without a spacer develops hoarseness and oral candidiasis. Her asthma is otherwise well controlled. Which is the most appropriate management?",
    option_a: "Improve inhaler technique (for example with a spacer) and advise rinsing the mouth after each use",
    option_b: "Stop all inhaled corticosteroid",
    option_c: "Switch to long-term oral prednisolone",
    option_d: "Replace the ICS with montelukast alone",
    correct_option: "A",
    explanation: "Rationale: Local ICS side effects such as oral thrush and dysphonia can be managed by improving inhaler technique and rinsing the mouth after each use. B, C and D abandon ICS-based control or expose her to greater harm. Long-term OCS is a last resort in severe asthma, and LTRA alone is less effective than ICS.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.1(c), Section 6.2.1(b)(i).",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 29-year-old woman with asthma and allergic rhinitis is started on montelukast as an add-on to low-dose ICS. Which adverse effect should she be specifically counselled about?",
    option_a: "Hepatic failure",
    option_b: "Tachyarrhythmia",
    option_c: "Oral candidiasis and dysphonia",
    option_d: "Neuropsychiatric effects such as nightmares, behavioural change and suicidal ideation",
    correct_option: "D",
    explanation: "Rationale: Patients should be told about the potential neuropsychiatric effects of montelukast: new-onset nightmares, behavioural changes and, in some cases, suicidal ideation. C is a local ICS effect. A and B are not recognised principal adverse effects of montelukast in the CPG.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.2.1(b)(iv).",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 48-year-old woman remains uncontrolled on medium-dose budesonide-formoterol despite good adherence and correct technique. Phenotypic assessment has been done. Which is the most appropriate step-up?",
    option_a: "Replace the LABA with a LAMA",
    option_b: "Add a LAMA (tiotropium) to the ICS-LABA",
    option_c: "Double the ICS dose",
    option_d: "Add oral theophylline",
    correct_option: "B",
    explanation: "Rationale: LAMA may be added if asthma remains uncontrolled despite medium or high-dose ICS-LABA. Triple therapy reduces severe exacerbation (RR 0.83) and is recommended (Recommendation 6). A: there is insufficient evidence for substituting LAMA for LABA. C: raising ICS alone is not recommended. D: theophylline should not be used for asthma.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.2.1(b)(vi); Algorithm 2; Recommendation 6.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 55-year-old man with severe eosinophilic asthma remains uncontrolled on high-dose ICS-LABA-LAMA. His respiratory physician plans to add azithromycin. Which assessment is essential before starting?",
    option_a: "Echocardiography",
    option_b: "HLA typing",
    option_c: "Investigation for non-tuberculous mycobacterial infection",
    option_d: "Methacholine challenge",
    correct_option: "C",
    explanation: "Rationale: Before starting azithromycin it is essential to investigate for potential non-tuberculous mycobacterial infection. An ECG and/or audiogram should also be considered if he is on QTc-prolonging drugs or has risk factors for hearing loss. The suggested dose is 500 mg three times a week or 250 mg daily, for up to one year. Long-term macrolides should be started after specialist consultation.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.2.1(b)(vii), Section 8.1(b)(iii); Recommendation 15.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 41-year-old woman has been well controlled on medium-dose ICS-LABA for 5 months. Which is the most appropriate timing to step down treatment?",
    option_a: "During a current viral upper respiratory tract infection",
    option_b: "The week before a long overseas trip",
    option_c: "Immediately after her next exacerbation",
    option_d: "At a stable time with no respiratory infection, travel or pregnancy, with follow-up arranged",
    correct_option: "D",
    explanation: "Rationale: When stepping down, choose an appropriate time (for example no respiratory infection, no travel, not pregnant), find the lowest effective dose, and ensure follow-up. A and B are poorly timed. C is wrong because after an exacerbation treatment should be reviewed and stepped up if indicated, not reduced.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 4.2(c); Recommendation 2.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 36-year-old man on low-dose ICS-formoterol MART has a written action plan. He develops a viral cold, follows his action plan for 3 days, but his symptoms persist. What is the most appropriate advice?",
    option_a: "Seek further medical assistance",
    option_b: "Quadruple his ICS dose indefinitely",
    option_c: "Continue the action plan alone for another 2 weeks",
    option_d: "Start leftover antibiotics",
    correct_option: "A",
    explanation: "Rationale: A short-term step-up (1-2 weeks) with an action plan can be used for identifiable triggers such as viral infection. Increasing the ICS dose does not benefit all patients, so those whose symptoms persist despite following the plan should seek medical assistance. B and C are unsupervised escalation. D has no role in a viral cold.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 4.2(b), Section 5.2(b).",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 50-year-old woman with asthma is well controlled on medium-dose budesonide-formoterol (ICS-LABA), with good adherence and technique. According to the CPG severity classification, her asthma is:",
    option_a: "Mild",
    option_b: "Severe",
    option_c: "Moderate",
    option_d: "Difficult-to-treat",
    correct_option: "C",
    explanation: "Rationale: Severity is classified retrospectively by the treatment needed for control. Mild is well controlled on low-intensity treatment (for example PRN low-dose ICS-formoterol, or low-dose ICS with PRN SABA). Moderate is well controlled on low or medium-dose ICS-LABA. Severe needs high-dose ICS-LABA, or is uncontrolled despite it. She is well controlled, so D does not apply.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.1.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 33-year-old woman with well-controlled asthma asks whether breathing exercises taught by a physiotherapist would help. Which statement is correct?",
    option_a: "They reduce the frequency of exacerbations",
    option_b: "They can improve dyspnoea and quality of life but do not reduce exacerbations or improve lung function",
    option_c: "They improve FEV1 significantly",
    option_d: "They can replace inhaled corticosteroids",
    correct_option: "B",
    explanation: "Rationale: Breathing exercise programmes can be offered as a complementary approach. They reduce dyspnoea and emotional stress and improve quality of life, but they do not reduce exacerbation risk or improve lung function. They are never a replacement for ICS-containing therapy.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.2.2(d).",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 47-year-old man with asthma has needed four courses of oral prednisolone in the past year. Which vaccination advice is most appropriate?",
    option_a: "No vaccines while taking steroids",
    option_b: "Influenza only, as pneumococcal vaccine is contraindicated",
    option_c: "Influenza vaccination is not recommended in asthma",
    option_d: "Influenza vaccination, plus pneumococcal vaccination",
    correct_option: "D",
    explanation: "Rationale: Influenza vaccination is encouraged in adults with asthma. Pneumococcal vaccination is recommended for patients who need maintenance corticosteroids or frequently repeated systemic corticosteroids, as he does. A, B and C contradict these recommendations.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.2.2(j).",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 64-year-old man with asthma well controlled on ICS-LABA is diagnosed with glaucoma. The ophthalmologist plans timolol eye drops. Which advice is most appropriate?",
    option_a: "Non-selective β-blocker eye drops can cause bronchospasm, so use only with great caution and close monitoring, if at all",
    option_b: "Eye drops have no systemic effects and are safe",
    option_c: "They are safe provided he continues ICS",
    option_d: "Switch to oral propranolol instead",
    correct_option: "A",
    explanation: "Rationale: Non-selective β-blockers, including eye drops, can precipitate bronchospasm. If indicated, they should be started cautiously, case by case, under close monitoring. Cardio-selective β-blockers are not absolutely contraindicated. B and C are wrong because topical timolol is absorbed systemically and ICS does not protect against it. D uses an oral non-selective agent, which is worse.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.2.2(k).",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 58-year-old woman with well-controlled asthma needs analgesia for knee osteoarthritis. She has taken ibuprofen before with no reaction. Which statement is correct?",
    option_a: "NSAIDs are absolutely contraindicated in asthma",
    option_b: "NSAIDs are not contraindicated unless there is a history of adverse reaction to them",
    option_c: "Only selective COX-2 inhibitors may ever be used",
    option_d: "Paracetamol is contraindicated in asthma",
    correct_option: "B",
    explanation: "Rationale: Aspirin and NSAIDs are generally not contraindicated in asthma unless there is a history of adverse reaction, so patients should be asked about previous reactions. If NSAIDs are needed in someone who has reacted, selective COX-2 inhibitors (celecoxib, etoricoxib) or paracetamol may be used.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 6.2.2(k).",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 45-year-old woman with BMI 33 kg/m² has poorly controlled asthma despite medium-dose ICS-LABA and good technique. Which is the most appropriate additional measure?",
    option_a: "Increase ICS to high dose alone",
    option_b: "Stop ICS because response is reduced in obesity",
    option_c: "Advocate weight loss alongside continued ICS, as a loss of at least 5% can improve FEV1",
    option_d: "Start maintenance prednisolone",
    correct_option: "C",
    explanation: "Rationale: Obesity (BMI >27.5 kg/m² in the CPG) is associated with poor control and reduced ICS response, but ICS remains the mainstay. Weight loss improves symptoms, lung function and health status, and at least 5% loss can improve FEV1. A, B and D escalate or withdraw drug therapy instead of addressing the modifiable factor.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.5(a), Section 6.2.2(h); Recommendation 7.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 52-year-old obese man has uncontrolled asthma and frequent exacerbations despite optimal therapy. His wife reports loud snoring and witnessed apnoeas, and he has daytime somnolence. Which is the most appropriate next step?",
    option_a: "Assess for obstructive sleep apnoea and treat with CPAP if confirmed",
    option_b: "Increase the LABA dose",
    option_c: "Start maintenance azithromycin",
    option_d: "Add a LAMA only",
    correct_option: "A",
    explanation: "Rationale: Obstructive sleep apnoea is a recognised comorbidity of difficult asthma. CPAP is the recommended treatment for OSA and has been shown to reduce asthma exacerbation risk. B, C and D intensify asthma drug therapy without addressing the likely contributing comorbidity.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.5(b), Section 8.1(a).",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 27-year-old woman with asthma has persistent allergic rhinitis with nasal blockage and sneezing. Which is the most effective treatment for her rhinitis?",
    option_a: "Oral montelukast alone",
    option_b: "Oral antihistamine alone",
    option_c: "Oral prednisolone",
    option_d: "Intranasal corticosteroid",
    correct_option: "D",
    explanation: "Rationale: Intranasal corticosteroids are the most effective therapy for allergic rhinitis. LTRA can be useful as an add-on in patients with concomitant seasonal allergic rhinitis and asthma, but it is not the most effective rhinitis treatment. Oral prednisolone is not appropriate for routine rhinitis control.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.5(c).",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 49-year-old woman with asthma has nocturnal cough and wheeze, with troublesome heartburn and regurgitation, despite adherent ICS-LABA use. Which statement about GERD in asthma is most accurate?",
    option_a: "Treating GERD universally improves lung function",
    option_b: "β2-agonists tighten the lower oesophageal sphincter",
    option_c: "PPIs have shown benefit in patients with symptomatic reflux and nocturnal respiratory symptoms",
    option_d: "GERD is not associated with asthma",
    correct_option: "C",
    explanation: "Rationale: Treatment of GERD has no clear effect on asthma symptoms, lung function or airway responsiveness in general. However, PPIs have shown benefit in asthma patients who have symptomatic reflux and nocturnal respiratory symptoms, as she does. GERD is more common in asthma, partly because β2-agonists relax (not tighten) the lower oesophageal sphincter, so A, B and D are wrong.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.5(e).",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 42-year-old man with asthma on fluticasone-salmeterol develops COVID-19 and is prescribed ritonavir-boosted nirmatrelvir. Which is the most appropriate advice?",
    option_a: "Stop ICS during the infection",
    option_b: "Continue ICS-containing therapy but review the drug interaction, as ritonavir boosting can increase cardiac toxicity of LABA",
    option_c: "Avoid all nebulisers in every circumstance",
    option_d: "Convert all treatment to oral prednisolone",
    correct_option: "B",
    explanation: "Rationale: During COVID-19 infection, patients with asthma should continue their ICS-containing medications. Potential interactions should be assessed, in particular ritonavir-boosted nirmatrelvir with ICS-salmeterol or ICS-vilanterol, which can increase LABA cardiac toxicity. Nebuliser use should not be discouraged when clinically indicated, especially in life-threatening asthma.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.6.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A medical officer in a district clinic reviews four adults with asthma. Which one should be referred to a respiratory physician according to the CPG?",
    option_a: "A 35-year-old baker whose symptoms improve at weekends and on holiday, with suspected occupational asthma",
    option_b: "A 24-year-old woman well controlled on low-dose ICS with PRN SABA",
    option_c: "A 30-year-old man with mild intermittent symptoms and a normal FEV1",
    option_d: "A 50-year-old woman with ACT 24 for the past year on stable therapy",
    correct_option: "A",
    explanation: "Rationale: Indications for referral include difficulty confirming the diagnosis, severe or uncontrolled asthma, severe or life-threatening exacerbations, asthma in pregnancy, frequent unscheduled visits, frequent OCS bursts, multiple comorbidities, food allergy or anaphylaxis, and suspected occupational asthma. B, C and D are stable, well-controlled patients.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 9.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 30-year-old man attends a primary care clinic with breathlessness. He is alert and speaks in phrases. Respiratory rate is 24/min, pulse 112/min, BP is normal and SpO2 is 92% on air, with wheeze and accessory muscle use. He has his pMDI and spacer with him. Which is the most appropriate initial management?",
    option_a: "Oral salbutamol and review in 1 week",
    option_b: "IV aminophylline and urgent transfer",
    option_c: "Oral antibiotics and observation",
    option_d: "SABA 4-10 puffs by pMDI with spacer every 20 minutes for 1 hour, prednisolone, and controlled oxygen targeting SpO2 ≥94%",
    correct_option: "D",
    explanation: "Rationale: For mild-to-moderate exacerbation in primary care: SABA 4-10 puffs by pMDI plus spacer (or nebuliser) every 20 minutes for 1 hour, prednisolone 0.5-1 mg/kg (maximum 50 mg), and controlled oxygen. Recommendation 9 states SpO2 of at least 94% should be maintained in hypoxic patients (the Algorithm 3 target range is 93-95%). A is wrong because oral SABA should not be used. B is wrong because IV aminophylline is not routinely used. C is wrong because antibiotics are not indicated without evidence of bacterial infection.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 7.2; Algorithm 3; Recommendations 9-11.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 40-year-old woman has an asthma exacerbation. She is alert, speaks in phrases, has a respiratory rate of 27/min, a pulse of 108/min and SpO2 of 93% on air, with wheeze. According to the CPG, how is this exacerbation classified?",
    option_a: "Moderate",
    option_b: "Severe",
    option_c: "Life-threatening",
    option_d: "Mild",
    correct_option: "B",
    explanation: "Rationale: Speech in phrases, pulse 100-120/min and SpO2 90-94% are all moderate features. A respiratory rate >25/min is a severe feature. The CPG says not all parameters need to be met and that severity is classified using the most severe parameter, so this is severe. There is no life-threatening feature present.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 7.1, Table 9.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 33-year-old man with a severe exacerbation has received repeated nebulised salbutamol, ipratropium and IV hydrocortisone. He is now exhausted, speaking in single words, with a quiet chest. ABG on oxygen shows PaO2 54 mmHg and PaCO2 42 mmHg. How should the PaCO2 of 42 mmHg be interpreted?",
    option_a: "Reassuring, as it is within the normal range",
    option_b: "Suggests hyperventilation is resolving",
    option_c: "Ominous, as a normal or rising PaCO2 with hypoxaemia indicates impending respiratory failure",
    option_d: "Suggests an alternative diagnosis such as heart failure",
    correct_option: "C",
    explanation: "Rationale: In a severe exacerbation a tachypnoeic patient would typically have a low PaCO2 (Table 9 gives <40 mmHg for severe, or normal). A PaO2 <60 mmHg with a normal or increased PaCO2 (especially >45 mmHg) indicates respiratory failure, and a rising or normal PaCO2 may herald impending respiratory arrest. ABGs should be done in severe or life-threatening asthma.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 7.3; Recommendation 13.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 28-year-old woman at 30 weeks of gestation presents with a moderate asthma exacerbation (speaks in phrases, RR 24/min, SpO2 91% on air). She is worried that steroids and inhaled bronchodilators may harm the baby. Which is the most appropriate management?",
    option_a: "Withhold systemic corticosteroids until after delivery",
    option_b: "Avoid SABA and use ipratropium alone",
    option_c: "Treat with reduced doses to limit fetal exposure",
    option_d: "Treat as in non-pregnant patients with prompt bronchodilators, oxygen (SpO2 94-98%) and systemic corticosteroids, and consider continuous fetal monitoring",
    correct_option: "D",
    explanation: "Rationale: Exacerbations in pregnancy are treated as in non-pregnant patients. Prompt bronchodilators, oxygen and systemic corticosteroids are needed to avoid fetal hypoxia. Oxygen saturation should be kept at 94-98%, magnesium sulphate can be given if indicated, continuous fetal monitoring should be considered, and early critical care referral is recommended for moderate to severe exacerbations. A, B and C risk fetal hypoxia from undertreated asthma.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.2(c); Recommendation 16.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 38-year-old man in the ED is drowsy with a silent chest, RR 10/min and BP 86/50 mmHg. SpO2 is 86% on high-flow oxygen. He has been given oxygen-driven nebulised salbutamol and ipratropium, IV hydrocortisone and IV magnesium sulphate 2 g, and is deteriorating. Which is the most appropriate next step?",
    option_a: "Early intubation and referral to critical care",
    option_b: "Repeat IV magnesium sulphate 2 g",
    option_c: "IV aminophylline infusion and observe",
    option_d: "Oral prednisolone and observe in the ED",
    correct_option: "A",
    explanation: "Rationale: Patients with life-threatening exacerbation who have respiratory distress, worsening hypoxaemia, hypercapnia, altered mental status, or failure to respond to maximal medical therapy should be considered for early intubation and critical care referral. B is wrong because there is no evidence for repeat dosing and it risks hypermagnesaemia. C is wrong because IV aminophylline has limited benefit and unfavourable adverse effects. D is far too weak for this deterioration.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), Section 7.2 (early intubation; magnesium sulphate), Algorithm 4; Recommendations 12 and 14.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A patient in the ED has improved after treatment for a moderate asthma exacerbation. Which factor, if present, would favour admission rather than discharge?",
    option_a: "Age 25 years",
    option_b: "Use of more than eight salbutamol puffs in the previous 24 hours",
    option_c: "Positive family history of atopy",
    option_d: "Concurrent allergic rhinitis",
    correct_option: "B",
    explanation: "Rationale: Factors that may be considered for admission include older age, use of more than eight SABA puffs in the previous 24 hours, past severe exacerbations (intubation, admissions), past unscheduled visits needing OCS, and living alone, psychological problems or physical disability. Atopy and rhinitis do not influence disposition. Young age (A) does not favour admission.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 7.4; Recommendation 14.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 29-year-old woman has improved after treatment for a moderate exacerbation and is ready for discharge from the ED. Her symptoms have resolved and she can use her prescribed treatment at home. Which is the most appropriate discharge plan?",
    option_a: "Oral prednisolone for 5-7 days and no review unless she worsens",
    option_b: "Stop ICS until review",
    option_c: "Oral salbutamol and review as needed",
    option_d: "Prednisolone for 5-7 days, continue ICS, review inhaler technique and adherence, give an asthma action plan and arrange follow-up",
    correct_option: "D",
    explanation: "Rationale: After an exacerbation all patients should be given a follow-up plan on discharge. The plan includes 5-7 days of prednisolone, continuing maintenance ICS, assessing inhaler technique and adherence, step-up if indicated, and an asthma action plan. A lacks follow-up. B wrongly withdraws ICS. C wrongly uses oral SABA.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 7.5; Algorithms 3-4; Recommendations 11 and 14.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "Four adults with asthma are being reviewed. Which patient is at the highest risk of asthma-related death?",
    option_a: "A 30-year-old woman with ACT 22, adherent to ICS-formoterol, with a written action plan",
    option_b: "A 45-year-old man with allergic rhinitis on low-dose ICS and one ED visit 3 years ago",
    option_c: "A 38-year-old man with a previous intubation for asthma, not on ICS, using about three salbutamol canisters a month and with no written action plan",
    option_d: "A 55-year-old woman on ICS-LABA with good adherence and good control",
    correct_option: "C",
    explanation: "Rationale: Risk factors for asthma-related death include previous exacerbation needing mechanical ventilation or intubation, frequent ED visits or admissions, not using ICS, poor adherence, SABA overuse, no written asthma action plan, comorbidities and psychosocial barriers. Patient C has several of these. A, B and D have few or none.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 7.1, Table 8.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 31-year-old woman has taken prednisolone 10 mg daily for 3 weeks for severe asthma and is now in labour at term. What should be done in addition to continuing her maintenance inhaler?",
    option_a: "Give IV hydrocortisone 100 mg every 6-8 hours during labour",
    option_b: "Stop prednisolone to avoid fetal effects",
    option_c: "Use prostaglandin F2α for induction as it is safe in asthma",
    option_d: "Prefer general anaesthesia over regional blockade if anaesthesia is needed",
    correct_option: "A",
    explanation: "Rationale: In patients on prednisolone >7.5 mg/day for more than 2 weeks before delivery, IV hydrocortisone 100 mg every 6-8 hours should be given in labour to prevent adrenal insufficiency. The maintenance inhaler continues with reliever as needed. B is wrong because stopping risks adrenal crisis. C is wrong because prostaglandin F2α should be used with caution due to the risk of bronchoconstriction. D is wrong because regional blockade is preferred.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.2(c).",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 38-year-old woman works in a chemical laboratory. Serial peak flow monitoring over 3 weeks shows a mean daily variability of 28% on workdays and 6% on non-workdays. Using the CPG method, what is the work-related variability and how is it interpreted?",
    option_a: "17%, not suggestive",
    option_b: "22%, suggestive of work-related asthma",
    option_c: "34%, suggestive of work-related asthma",
    option_d: "4.7%, not suggestive",
    correct_option: "B",
    explanation: "Rationale: Work-related variability = mean workday variability - mean non-workday variability = 28% - 6% = 22%. A variability of ≥20% on workdays compared with off days is suggestive of work-related asthma. A averages the two numbers (17%). C adds them (34%). D divides them.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.3(b); Appendix 11.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 45-year-old man with long-standing well-controlled asthma notices his symptoms worsen at his factory on dusty days. No specific workplace sensitiser has been identified and the trigger is non-specific. Which term best describes his condition?",
    option_a: "Occupational asthma caused by a specific sensitiser",
    option_b: "Exercise-induced bronchoconstriction",
    option_c: "Severe asthma",
    option_d: "Work-aggravated asthma",
    correct_option: "D",
    explanation: "Rationale: Patients with pre-existing asthma, or new adult-onset asthma, whose symptoms worsen because of non-specific workplace factors have work-aggravated asthma, which is not occupational asthma. Occupational asthma is caused by specific workplace exposures acting through immunological or non-immunological stimuli. Exercise and disease severity are not the issue here.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.3.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 46-year-old woman remains uncontrolled on high-dose ICS-LABA. Observation shows she misses doses, uses her DPI with weak inhalation, and still smokes. Her doctor wonders whether to label this \"severe asthma\" and refer for biologics. Which statement is most appropriate?",
    option_a: "Diagnose severe asthma now because she is on high-dose therapy",
    option_b: "Start maintenance oral corticosteroids",
    option_c: "Address inhaler technique, adherence and smoking first, as severe asthma applies only if she remains uncontrolled despite optimised treatment",
    option_d: "Proceed to biologic therapy without phenotyping",
    correct_option: "C",
    explanation: "Rationale: The CPG distinguishes difficult-to-treat asthma, which may be driven by incorrect technique, poor adherence, smoking or comorbidities, from severe asthma, a subset that persists despite optimised high-dose therapy and management of contributory factors. Modifiable factors should be addressed before diagnosing severe asthma. A is premature. B: long-term OCS is a last resort. D: phenotype assessment is mandatory before biologics.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.1; Section 6.1.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 52-year-old man with severe asthma uncontrolled despite optimised high-dose ICS-LABA-LAMA is being considered for biologic therapy. According to the CPG, which step is required before choosing a biologic?",
    option_a: "Phenotypic assessment (for example blood eosinophils, FeNO, IgE and comorbidities such as nasal polyps)",
    option_b: "Methacholine challenge",
    option_c: "A 3-month trial of maintenance prednisolone",
    option_d: "Bronchial thermoplasty",
    correct_option: "A",
    explanation: "Rationale: Biologics are add-on treatment for severe asthma after optimising therapy, and phenotype assessment is mandatory before selecting one. Factors guiding choice include exacerbation number, OCS use, lung function, biomarkers (blood eosinophils, FeNO, total and specific IgE) and comorbidities such as nasal polyposis or atopic dermatitis. B, C and D are not prerequisites.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.1(b)(ii); Recommendation 15; Appendix 10.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 22-year-old woman with asthma on regular low-dose ICS has chest tightness during football, though her asthma is otherwise controlled. Which is the most appropriate pre-exercise reliever?",
    option_a: "Regular LABA alone",
    option_b: "Oral prednisolone before exercise",
    option_c: "SABA alone, as in non-asthmatic EIB",
    option_d: "ICS-SABA or low-dose ICS-formoterol before exercise, together with regular daily ICS",
    correct_option: "D",
    explanation: "Rationale: For EIB in patients with asthma, as-needed ICS-SABA or low-dose ICS-formoterol before exercise is recommended with a regular daily ICS regimen. SABA alone is appropriate for EIB without asthma. A is wrong because LABA without ICS is not recommended. B has no role. Gradual warm-up also helps, and avoidance of exercise is not necessary.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 8.4.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 35-year-old woman in the ED has a severe asthma exacerbation with hypoxaemia (SpO2 87% on air) after initial SABA, ipratropium and IV hydrocortisone. She is alert but fatigued. Which oxygen strategy is best supported by the CPG?",
    option_a: "100% oxygen by non-rebreather mask regardless of saturation",
    option_b: "Controlled oxygen targeting SpO2 ≥94%, and consider high-flow nasal cannula over conventional oxygen",
    option_c: "Withhold oxygen to avoid CO2 retention",
    option_d: "Intubate immediately",
    correct_option: "B",
    explanation: "Rationale: Oxygen saturation of ≥94% should be maintained in hypoxic asthma patients, and in the ED high-flow nasal cannula should be considered over conventional oxygen therapy (better comfort and dyspnoea scores). A is uncontrolled oxygen. C is wrong because hypoxaemia must be corrected. D is premature because she is alert and has not yet failed maximal therapy.\nReference: Malaysian CPG Management of Asthma in Adults 2024 (2nd Ed.), CPG Section 7.2(i); Recommendation 9.",
    tag: "CPG Asthma 2024"
  },
  {
    question_text: "A 58-year-old man has just been diagnosed with type 2 diabetes mellitus. He has no foot symptoms and has never had his feet examined. Which is the most appropriate plan for foot screening?",
    option_a: "Screen for peripheral neuropathy and PAD now, then repeat at least annually",
    option_b: "Screen only when he reports numbness or pain in the feet",
    option_c: "Screen for neuropathy now, and for PAD only after five years of diabetes",
    option_d: "Screen now, then every three years if the first examination is normal",
    correct_option: "A",
    explanation: "Rationale: Recommendation 1 states that screening for diabetic peripheral neuropathy and PAD is done in all patients at diagnosis and repeated at least annually. About half of patients with peripheral neuropathy are asymptomatic, so waiting for symptoms (B) misses many at-risk feet. C delays PAD screening and D lengthens the interval; neither is in the CPG.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.1; Recommendation 1.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A practice nurse screens a 61-year-old woman with diabetes for peripheral neuropathy using a 10-g monofilament. She is considering whether the monofilament is enough on its own. Which is the most appropriate approach according to the CPG?",
    option_a: "Use the monofilament alone because it is widely available and easy to perform",
    option_b: "Combine the monofilament with the ankle brachial index",
    option_c: "Combine the monofilament with pin prick or a 128-Hz tuning fork",
    option_d: "Replace the monofilament with a Neuropad test",
    correct_option: "C",
    explanation: "Rationale: The CPG recommends combining the Semmes-Weinstein monofilament with another modality (pin prick or 128-Hz tuning fork), which increases the sensitivity of detecting neuropathy. Alone, the monofilament has only moderate pooled sensitivity (0.53) against nerve conduction studies, so A is inadequate. B uses a vascular test for a neurological question. D is not recommended as a replacement.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.1(a); Recommendation 1.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 64-year-old woman has had type 2 diabetes for 12 years and attends her annual review. She has no claudication. Which is the recommended initial screening method for peripheral arterial disease?",
    option_a: "Toe brachial index",
    option_b: "Palpation of foot pulses",
    option_c: "Colour flow duplex ultrasound",
    option_d: "Ankle brachial index",
    correct_option: "B",
    explanation: "Rationale: Recommendation 1 states that palpation of foot pulses should be the initial screening method for PAD, as part of a history and complete physical examination. ABI, TBI and continuous wave Doppler are bedside tests used to exclude PAD; colour flow duplex is the reference standard in diagnostic studies, not the screening tool.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.1(b); Recommendation 1.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A house officer examines the feet of a 67-year-old man with diabetes and records only the dorsalis pedis pulses. According to the CPG, which pulses must be palpated as part of the vascular assessment?",
    option_a: "Dorsalis pedis and posterior tibial only",
    option_b: "Popliteal and dorsalis pedis only",
    option_c: "Femoral and posterior tibial only",
    option_d: "Femoral, popliteal, posterior tibial and dorsalis pedis",
    correct_option: "D",
    explanation: "Rationale: The CPG states that vascular assessment includes mandatory palpation of the femoral, popliteal, posterior tibial and dorsalis pedis pulses. A, B and C each omit one or two of these four.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.2(b), Vascular.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A diabetic foot clinic nurse uses bedside tests to look for PAD in four patients. Which single result allows PAD to be excluded according to the CPG?",
    option_a: "Toe brachial index of 0.80",
    option_b: "Ankle brachial index of 0.85",
    option_c: "Ankle brachial index of 1.45",
    option_d: "Biphasic pedal Doppler arterial waveform",
    correct_option: "A",
    explanation: "Rationale: PAD can be excluded when ABI is 0.9 to 1.3, TBI is 0.75 or more, or pedal Doppler waveforms are triphasic. A meets the TBI criterion. B is below 0.9. C is above 1.3, which suggests incompressible calcified vessels and cannot exclude PAD. D is biphasic, not triphasic.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.1(b).",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 70-year-old man with long-standing diabetes and chronic kidney disease has a cold right foot and absent pedal pulses. His ankle brachial index is 1.4. Which statement is most accurate?",
    option_a: "An ABI of 1.4 confirms normal arterial perfusion",
    option_b: "Arterial calcification may falsely raise the ABI, so PAD is not excluded",
    option_c: "ABI is more sensitive than continuous wave Doppler for detecting PAD",
    option_d: "An ABI above 1.3 defines critical limb ischaemia",
    correct_option: "B",
    explanation: "Rationale: The CPG warns that ABI may be misleading because arterial calcification gives a higher pressure ratio; the normal range is 0.9 to 1.3. His absent pulses and cold foot mean PAD is still likely. Against colour flow duplex, continuous wave Doppler had higher sensitivity (74.19%) than ABI (45.16%), so C is wrong. Critical limb ischaemia is a clinical definition (rest pain with ulcer or tissue loss), not an ABI cut-off.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.2(b), Vascular.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A nurse applies an indicator pad to both soles of a 55-year-old man at the level of the first and second metatarsal heads. The colour takes 14 minutes to change from blue to uniform pink. What does this result indicate?",
    option_a: "Loss of vibration sense",
    option_b: "Loss of protective sensation",
    option_c: "Large fibre neuropathy",
    option_d: "Sudomotor dysfunction",
    correct_option: "D",
    explanation: "Rationale: With Neuropad, a colour change taking more than 10 minutes indicates sudomotor dysfunction, a small fibre autonomic abnormality. Vibration sense is tested with a 128-Hz tuning fork or VibraTip (A). Loss of protective sensation is shown by the monofilament or Ipswich Touch Test (B). Large fibre involvement affects touch, vibration and position sense (C).\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.1(a), Neuropad.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A caregiver is taught the Ipswich Touch Test to screen a patient at home. The tip of the index finger is lightly touched for 1 to 2 seconds on the tips of the first, third and fifth toes of both feet. How many insensate sites out of six define loss of protective sensation?",
    option_a: "One or more",
    option_b: "Three or more",
    option_c: "Two or more",
    option_d: "All six",
    correct_option: "C",
    explanation: "Rationale: The presence of LOPS on the Ipswich Touch Test is defined as two or more insensate sites out of the six. Accuracy is comparable to the monofilament, and caregivers can perform it (sensitivity 78.3%, specificity 93.9%). One site would over-call and three or six would miss at-risk feet.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.1(a), Ipswich Touch Test.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A foot clinic reviews predictors of ulceration in patients with diabetes. All of the following are associated with foot ulceration. Which has the strongest association (highest odds ratio)?",
    option_a: "Longer duration of diabetes",
    option_b: "Previous ulceration or lower extremity amputation",
    option_c: "At least one absent pedal pulse",
    option_d: "Inability to feel a 10-g monofilament",
    correct_option: "B",
    explanation: "Rationale: The reported odds ratios are 6.59 for previous ulceration or amputation, 3.18 for inability to feel the 10-g monofilament, 1.97 for at least one absent pedal pulse, and 1.02 for longer duration of diabetes. All four are genuine predictors, but a previous ulcer or amputation is strongest.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.2(a).",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 55-year-old man has an infected deep plantar ulcer. A sterile blunt metal probe touches a hard, gritty substance at the base of the wound. Which statement about the probe-to-bone test is most accurate?",
    option_a: "A positive test is a useful clinical indicator of osteomyelitis",
    option_b: "A negative test excludes osteomyelitis",
    option_c: "The test is only valid if the ESR is raised",
    option_d: "A positive test indicates acute Charcot neuroarthropathy",
    correct_option: "A",
    explanation: "Rationale: A positive probe-to-bone test (palpating hard, gritty bone or joint) is a useful modality for assessing osteomyelitis, with sensitivity 87% and specificity 83% against MRI, histopathology or culture. B is wrong because the CPG notes osteomyelitis may be present despite normal inflammatory markers, plain radiographs or probe-to-bone testing. C and D have no basis in the CPG.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.2(b), Musculoskeletal; Section 2.3(b).",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 60-year-old man has had an infected forefoot ulcer for five days. The plain radiograph is normal and the clinician is considering osteomyelitis. Which statement is most accurate?",
    option_a: "A normal radiograph excludes osteomyelitis",
    option_b: "Radiographic features of osteomyelitis appear within 48 hours",
    option_c: "Osteomyelitis cannot coexist with normal inflammatory markers",
    option_d: "Radiographic features may not appear until 10 to 21 days after the initial infection",
    correct_option: "D",
    explanation: "Rationale: Features of osteomyelitis may not be visible on plain radiographs until 10 to 21 days after the initial infection, so a normal film at day 5 does not exclude it. The CPG also notes osteomyelitis may be present despite normal inflammatory markers, radiographs or probe-to-bone testing, which rules out A and C.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.3(b), Conventional radiography.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 63-year-old woman has a chronic heel ulcer with persistent clinical suspicion of osteomyelitis. The plain radiograph shows no abnormality. Which is the most appropriate next imaging modality?",
    option_a: "Computed tomography",
    option_b: "Radiolabelled white blood cell scintigraphy",
    option_c: "Magnetic resonance imaging",
    option_d: "PET scan",
    correct_option: "C",
    explanation: "Rationale: MRI is the primary imaging modality for infection in diabetic foot and can be considered when osteomyelitis is not detected on plain radiograph (sensitivity 93%, specificity 75%). CT has no significant advantage over plain radiographs and cannot detect early marrow oedema. Scintigraphy and PET are other modalities but PET has limited use due to cost and availability.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.3(b), Magnetic resonance imaging and Others.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 59-year-old man has a long-standing discharging sinus over the midfoot. A radiologist asks what role CT would play. For which purpose is CT most useful in diabetic foot osteomyelitis?",
    option_a: "Demonstrating sequestrum, cloaca and involucrum in chronic osteomyelitis",
    option_b: "Detecting bone marrow oedema at an early stage of infection",
    option_c: "Serving as the primary imaging modality for infection",
    option_d: "Differentiating Charcot neuroarthropathy from osteomyelitis",
    correct_option: "A",
    explanation: "Rationale: CT is useful in chronic osteomyelitis because sequestrum, cloaca and involucrum can be seen. It cannot detect early bone marrow oedema (B), MRI is the primary modality for infection (C), and CT has no additional value over conventional radiography in diagnosing Charcot neuroarthropathy (D).\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.3(b), Computed tomography; Section 7.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 68-year-old man with diabetes has rest pain in his left foot and a non-healing ulcer on the heel. Foot pulses are absent. The ulcer is attributed to arterial occlusive disease. Which is the most appropriate classification and action?",
    option_a: "Non-critical limb ischaemia; refer within three months to foot protection services",
    option_b: "Neuropathic ulcer; manage by the foot protection team in the community",
    option_c: "Charcot neuroarthropathy; immobilise and review in two weeks",
    option_d: "Critical limb ischaemia; urgent referral to specialist care",
    correct_option: "D",
    explanation: "Rationale: Critical limb ischaemia is defined as rest pain with ulcers or tissue loss attributed to arterial occlusive disease, and these patients should be referred urgently to specialist care. It is an active diabetic foot problem, with urgent referral within 24 hours to the multidisciplinary foot care team. A and B undertriage; C does not fit the picture.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.2(b), Vascular; Section 3, Table 2.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 66-year-old man has shiny, thin skin over the dorsum of both feet, atrophic nails, absent pedal hair, cool skin and prolonged capillary refill. Which is the most likely underlying cause?",
    option_a: "Autonomic neuropathy",
    option_b: "Peripheral arterial disease",
    option_c: "Charcot neuroarthropathy",
    option_d: "Osteomyelitis",
    correct_option: "B",
    explanation: "Rationale: Skin atrophy, nail atrophy, diminished pedal hair, prolonged capillary refill and reduced skin temperature are skin changes due to vascular insufficiency. Autonomic neuropathy causes dry skin and loss of sweating but not hair and nail atrophy with cooling, Charcot foot is warm and swollen, and osteomyelitis does not produce this picture.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.2(b), Skin.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 57-year-old woman cannot feel the 10-g monofilament or the 128-Hz tuning fork on her toes. Pin prick and temperature sensation are preserved. Which nerve fibres are most likely affected?",
    option_a: "Small fibres only",
    option_b: "Autonomic fibres only",
    option_c: "Large fibres",
    option_d: "Motor neurones only",
    correct_option: "C",
    explanation: "Rationale: Large fibre nerves mediate touch, vibration, position perception and muscle control, so loss of monofilament and vibration sensation points to large fibre involvement. Small fibres mediate thermal perception, pain and autonomic function, and these are preserved here.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.1(a).",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 62-year-old woman with diabetes has loss of protective sensation and a plantar callus under the second metatarsal head. She has never had an ulcer, her pulses are palpable and she has no deformity. Which risk category does she belong to?",
    option_a: "Low risk",
    option_b: "High risk",
    option_c: "Moderate risk",
    option_d: "Active diabetic foot problem",
    correct_option: "B",
    explanation: "Rationale: Neuropathy with callus and/or deformity is high risk in Table 1. Neuropathy alone would be moderate risk, and callus alone would be low risk, so C and A are the traps. She has no ulcer, infection, critical ischaemia or gangrene, so D is wrong.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.4, Table 1.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 48-year-old man with diabetes is on haemodialysis. His monofilament test is normal, pulses are palpable, there is no callus or deformity, and he has never had an ulcer or amputation. Which risk category does he belong to?",
    option_a: "Normal",
    option_b: "Low risk",
    option_c: "Moderate risk",
    option_d: "High risk",
    correct_option: "D",
    explanation: "Rationale: Being on renal replacement therapy places a patient in the high risk category in Table 1, even without other findings. Normal means no abnormalities, low risk requires callus alone, and moderate risk requires deformity, neuropathy or non-critical limb ischaemia.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.4, Table 1; Algorithm A.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 55-year-old woman has loss of protective sensation on monofilament testing. She has no deformity, no history of ulcer, and palpable pulses. What is the recommended referral?",
    option_a: "Urgent referral within 24 hours to the multidisciplinary foot care team",
    option_b: "Early referral within two weeks to foot protection services",
    option_c: "Referral within three months to foot protection services",
    option_d: "No referral; yearly review in primary care",
    correct_option: "C",
    explanation: "Rationale: Neuropathy alone is moderate risk, and the recommended referral for moderate risk is within three months to foot protection services. A is for active problems, B for high risk, and D for normal or low risk.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 3, Table 2; Section 2.4, Table 1.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 60-year-old man had a plantar ulcer that healed six months ago. His foot is currently intact, with no signs of infection. What is the recommended referral?",
    option_a: "Early referral within two weeks to foot protection services",
    option_b: "Urgent referral within 24 hours to the multidisciplinary foot care team",
    option_c: "Referral within three months to foot protection services",
    option_d: "No referral; yearly review in primary care",
    correct_option: "A",
    explanation: "Rationale: A previous ulceration makes him high risk, and high risk patients should be referred early, within two weeks, to foot protection services. B applies to an active diabetic foot problem. C applies to moderate risk and D to normal or low risk.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 3, Table 2; Algorithm A.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 56-year-old man with type 2 diabetes and profound neuropathy presents with a unilateral hot, red, swollen foot. He is afebrile and a general practitioner has diagnosed cellulitis. How should this presentation be categorised and managed?",
    option_a: "High risk foot; referral within two weeks to foot protection services",
    option_b: "Active diabetic foot problem; urgent referral to be seen within 24 hours in secondary or tertiary care",
    option_c: "Moderate risk foot; referral within three months",
    option_d: "Mild infection; oral antibiotics in primary care for 1 to 2 weeks",
    correct_option: "B",
    explanation: "Rationale: An unexplained hot, red, swollen foot, with or without pain, or suspected acute Charcot neuroarthropathy, is an active diabetic foot problem. These patients should be referred urgently and seen within 24 hours by the multidisciplinary foot care team, which in hospital is led by an orthopaedic surgeon and/or physician and includes rehabilitation physicians. Charcot is easily mistaken for cellulitis, so D is the trap.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.4, Table 1; Section 3; Algorithm A.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 59-year-old man is classed as high risk after a healed ulcer last year. At his current visit there is no immediate concern about his feet. How often should he be monitored?",
    option_a: "Annually",
    option_b: "Every 3 to 6 months",
    option_c: "Every 1 to 2 weeks",
    option_d: "Every 1 to 2 months",
    correct_option: "D",
    explanation: "Rationale: Recommended monitoring is annually for low risk, every 3 to 6 months for moderate risk, every 1 to 2 months for high risk with no immediate concern, and every 1 to 2 weeks for high risk with immediate concern.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 6.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 64-year-old man has a plantar ulcer with purulent discharge. Probing reaches the tendon but not bone or joint. Pedal pulses are palpable. What is the University of Texas classification and the appropriate pathway?",
    option_a: "UT IB; oral antibiotics and outpatient foot protection services",
    option_b: "UT IIA; outpatient dressings by foot protection services",
    option_c: "UT IIB; refer to the multidisciplinary foot care team",
    option_d: "UT IIIB; refer to the multidisciplinary foot care team",
    correct_option: "C",
    explanation: "Rationale: Grade II is a wound penetrating to tendon or capsule, and stage B is infection, so this is UT IIB, a deep ulcer likely to need surgical intervention, which is referred to the multidisciplinary foot care team. A understates the depth. B ignores infection. D would require bone or joint involvement.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.5; Appendix 5; Algorithm B.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 70-year-old woman has a superficial plantar ulcer that does not involve tendon, capsule or bone. There are no signs of infection but her pedal pulses are not palpable. What is the University of Texas classification and the appropriate pathway?",
    option_a: "UT IC; refer to the multidisciplinary foot care team",
    option_b: "UT IA; manage as outpatient by foot protection services",
    option_c: "UT IB; oral antibiotics",
    option_d: "UT 0; foot care education and yearly screening",
    correct_option: "A",
    explanation: "Rationale: A superficial wound is grade I, and ischaemia makes it stage C, so this is UT IC. Ulcers with ischaemia (IC, IIC, IIIC) go to the multidisciplinary foot care team. B misses the ischaemia, C wrongly assumes infection, and D is for an epithelialised lesion without an open ulcer.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.5; Appendix 5; Algorithm B.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A hospital is choosing one classification system for all diabetic foot ulcers. The committee notes that Meggitt-Wagner and University of Texas are the simplest to use. Which system does the CPG prefer, and why?",
    option_a: "Meggitt-Wagner, because it is the simplest",
    option_b: "PEDIS, because it has the highest inter-observer reliability",
    option_c: "SINBAD, because it includes the most variables",
    option_d: "University of Texas, because including stage makes it a better predictor of outcome",
    correct_option: "D",
    explanation: "Rationale: Recommendation 2 prefers the University of Texas classification. Both UT and MW are simple and easy to use, but including stage (infection, ischaemia) in UT makes it a better predictor of outcome. PEDIS and SINBAD are alternatives and are not preferred.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 2.5; Recommendation 2.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 63-year-old man has a healed plantar ulcer and is enrolled in an integrated foot care programme to prevent recurrence. How often should education be given as part of this programme?",
    option_a: "Annually",
    option_b: "One to three monthly",
    option_c: "Six monthly",
    option_d: "Once at enrolment",
    correct_option: "B",
    explanation: "Rationale: To prevent ulcer recurrence, education as part of an integrated foot care programme, together with life-long observation, professional foot treatment and adequate footwear, should be done one to three monthly. Annual education is the minimum for patients generally (Recommendation 4) and should be more frequent in higher risk patients.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 4.1; Recommendation 4.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 59-year-old man with a high-risk foot is offered a skin temperature monitoring device to use at home. Which statement is most accurate?",
    option_a: "It has shown no benefit over standard care",
    option_b: "It replaces the need for the annual foot examination",
    option_c: "It reduced foot ulceration compared with standard therapy and structured foot examination, but more evidence is needed",
    option_d: "It is recommended for all low-risk patients",
    correct_option: "C",
    explanation: "Rationale: Temperature monitoring as a self-assessment tool in high-risk diabetic foot significantly decreased the risk of ulceration compared with standard therapy and structured foot examination, but the CPG notes more evidence is needed. It does not replace professional examination, and it was studied in high-risk patients, not low-risk ones.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 4.1.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "Two patients are reviewed. Patient 1 is 35 years old, newly diagnosed, with no cardiovascular disease and a low risk of hypoglycaemia. Patient 2 is 76 years old with heart failure and recurrent hypoglycaemia. Which HbA1c targets are most appropriate for patients 1 and 2 respectively?",
    option_a: "6.0 to 6.5% and 7.1 to 8.0%",
    option_b: "6.0 to 6.5% and 6.6 to 7.0%",
    option_c: "6.6 to 7.0% and 7.1 to 8.0%",
    option_d: "7.1 to 8.0% and 6.0 to 6.5%",
    correct_option: "A",
    explanation: "Rationale: A tight target (6.0 to 6.5%) suits newly diagnosed, younger, healthier patients at low risk of hypoglycaemia. A less tight target (7.1 to 8.0%) suits patients with comorbidities such as heart failure, short life expectancy or proneness to hypoglycaemia. The 6.6 to 7.0% band is for all others.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 4.2, Table 3; Recommendation 5.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 55-year-old man with type 2 diabetes asks whether very tight control (HbA1c below 7%) will prevent neuropathy and foot disease. Which statement is most accurate?",
    option_a: "Intensive control significantly reduces neuropathy in type 2 diabetes with no added risk",
    option_b: "Intensive control significantly reduces neuropathy in both type 1 and type 2 diabetes",
    option_c: "Intensive control increases the risk of amputation",
    option_d: "Intensive control did not reduce neuropathy in type 2 diabetes at 12 months or more and increased severe hypoglycaemia",
    correct_option: "D",
    explanation: "Rationale: A Cochrane review found intensive control (HbA1c below 7.0%) reduced the risk of neuropathy in type 1 but not type 2 diabetes, and was associated with more severe hypoglycaemia, weight gain, hospitalisation and death in both. Hence control should be individualised with hypoglycaemia minimised (Recommendation 5). A separate review of intensive control (HbA1c 6 to 7.5%) reduced amputation risk (RR 0.65), so C is wrong.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 4.2; Recommendation 5.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 60-year-old man with claw toes and pre-ulcerative callosities on the toe tips is classed as high risk. He asks about footwear. Which is the most appropriate prescription?",
    option_a: "Ready-made off-the-shelf shoes with standard insoles",
    option_b: "Custom-made in-shoe orthoses or insoles",
    option_c: "Removable cast walker for daily use",
    option_d: "Protective footwear outdoors only",
    correct_option: "B",
    explanation: "Rationale: For moderate or high-risk patients with foot deformity or pre-ulcerative lesions, the CPG advises custom-made in-shoe orthoses or insoles, reviewed periodically, with footwear worn at all times indoors and outdoors (so D is wrong). Cast walkers are off-loading devices for ulcer healing, not footwear for an intact foot. Intensive prescribed footwear reduced ulcers compared with ready-made footwear.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 4.3, Table 4; Recommendation 6.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 58-year-old man with neuropathy receives custom-made footwear with in-shoe plantar pressure reduction but wears it only occasionally. Which statement about the evidence is most accurate?",
    option_a: "Custom footwear is equally effective regardless of how often it is worn",
    option_b: "Standard insoles are better than custom-made insoles for recurrent metatarsal head ulcers",
    option_c: "Custom footwear with in-shoe plantar pressure reduction significantly reduces ulcer incidence when worn more than 80% of the day",
    option_d: "Ready-made footwear is as effective as intensive prescribed footwear",
    correct_option: "C",
    explanation: "Rationale: Custom-made footwear with in-shoe plantar pressure reduction worn more than 80% daily reduced foot ulcer incidence compared with custom footwear without pressure reduction (25.7% vs 47.8%). Custom-made insoles gave fewer recurrent metatarsal head ulcers than standard insoles, and intensive prescribed footwear outperformed ready-made footwear. Wearing time matters, so A is wrong.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 4.3.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 52-year-old woman with diabetes wears thong slippers around the house and at work. She asks what to wear. Which advice is most appropriate?",
    option_a: "Covered shoes with breathable material that fit well, checking inside the shoes before and after wearing",
    option_b: "Thong slippers are acceptable indoors if her feet are checked daily",
    option_c: "Walk barefoot at home so that she can feel any injury",
    option_d: "Choose shoes with a snug, narrow toe box for support",
    correct_option: "A",
    explanation: "Rationale: Patients and caregivers should be educated on covered shoes with breathable material, and should check each time before and after wearing for foreign objects and signs of abnormal pressure, trauma or ulceration. Thong slippers and shoes with a toe box that is too tight or too loose are not advisable, and patients should never walk barefoot indoors or outdoors.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 4.3; Appendix 6; Appendix 7.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 54-year-old man has neuropathy, a healed forefoot ulcer, ankle dorsiflexion limited to 15 degrees and good vascularity. Which preventive procedure has been associated with no ulcer recurrence and improved function in patients like him?",
    option_a: "Percutaneous flexor tenotomy",
    option_b: "Exostectomy",
    option_c: "Skin grafting",
    option_d: "Achilles tendon lengthening",
    correct_option: "D",
    explanation: "Rationale: Achilles tendon lengthening showed no recurrence and improved foot function in 92% of patients with healed forefoot ulcers, neuropathy, dorsiflexion of 18 degrees or less and good vascularity. Tenotomy is used for toe ulcers, exostectomy is a Charcot procedure, and skin grafting is an adjunct for ulcer healing. Preventive surgery should be done by trained orthopaedic surgeons.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 4.4(b); Recommendation 7.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 62-year-old man has claw toes with ulcers at the tip of the toe, on the dorsum of the toes and under a metatarsal head. A foot and ankle surgeon plans percutaneous tenotomy. Which ulcer is least likely to heal after this procedure?",
    option_a: "Tip of the toe without osteomyelitis",
    option_b: "Dorsal aspect of the toes",
    option_c: "Plantar metatarsal head",
    option_d: "Tip of the toe with osteomyelitis",
    correct_option: "C",
    explanation: "Rationale: After percutaneous tenotomy, toe-tip ulcers healed (within 3 weeks without osteomyelitis, within 8 weeks with osteomyelitis; 98% overall) and 92% of dorsal toe ulcers healed at 4 weeks, but plantar metatarsal head ulcers did not heal.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 4.4(c).",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 61-year-old man has a painful diabetic foot ulcer. Paracetamol alone no longer controls his pain, which is now moderate. What is the most appropriate next step?",
    option_a: "Start a strong opioid such as morphine",
    option_b: "Add a weak opioid such as tramadol or dihydrocodeine",
    option_c: "Stop analgesia and start antibiotics",
    option_d: "Start oxycodone controlled release",
    correct_option: "B",
    explanation: "Rationale: According to the WHO analgesic ladder, simple analgesics (paracetamol, NSAIDs) are used for mild to moderate pain, weak opioids should be added for moderate pain, and strong opioids are offered for moderate to severe pain. Oxycodone is third-line in neuropathic pain and is used with caution.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 5.1(a); Recommendation 8.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 66-year-old man has burning pain in both feet. Other causes of neuropathy have been excluded and glycaemic control has been optimised. He had a myocardial infarction three weeks ago. Which first-line drug is contraindicated?",
    option_a: "Amitriptyline",
    option_b: "Duloxetine",
    option_c: "Pregabalin",
    option_d: "Gabapentin",
    correct_option: "A",
    explanation: "Rationale: First-line agents for painful neuropathy are pregabalin, gabapentin, amitriptyline and duloxetine. Tricyclic antidepressants such as amitriptyline are contraindicated in cardiovascular disease including recent myocardial infarction, heart failure and abnormal cardiac conduction. The others can be used, with pregabalin and gabapentin needing caution in heart failure and renal impairment.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 5.1(a); Appendix 8.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 49-year-old man with epilepsy still has neuropathic foot pain despite first-line therapy and needs a second-line agent. Which second-line drug should be avoided?",
    option_a: "Lidocaine 5% patch",
    option_b: "Venlafaxine",
    option_c: "Capsaicin 0.075% cream",
    option_d: "Tramadol",
    correct_option: "D",
    explanation: "Rationale: Tramadol lowers the seizure threshold and should be avoided in epilepsy or patients at risk of seizures. Lidocaine patch and capsaicin cream are topical second-line options, and venlafaxine is a second-line SNRI.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Appendix 8.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 58-year-old woman has a clean, uninfected neuropathic ulcer with no local or systemic signs of infection. A colleague wants to start oral antibiotics to prevent infection. Which is the most appropriate response?",
    option_a: "Start amoxicillin/clavulanate to prevent infection",
    option_b: "Start topical antibiotics and review in a month",
    option_c: "Do not give antibiotics, as they should not be used for prevention of infection",
    option_d: "Start broad-spectrum intravenous antibiotics",
    correct_option: "C",
    explanation: "Rationale: Antibiotics should not be used unless there are local or systemic symptoms of infection, and should not be given for prevention of infections in diabetic foot. Local treatment including debridement is important. Antibiotics should be based on the most recent culture and sensitivity report.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 5.1(c); Appendix 9.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 52-year-old man has a plantar ulcer with 1.5 cm of surrounding erythema, no systemic signs, and a palpable dorsalis pedis pulse. Which is the most appropriate antibiotic treatment?",
    option_a: "Intravenous ampicillin/sulbactam",
    option_b: "Oral cephalexin or amoxicillin/clavulanate for 1 to 2 weeks",
    option_c: "Intravenous ciprofloxacin plus clindamycin for 4 to 6 weeks",
    option_d: "Intravenous piperacillin/tazobactam",
    correct_option: "B",
    explanation: "Rationale: Erythema less than 2 cm, skin and subcutaneous involvement only and no systemic signs is a mild infection (UT IB if the ulcer is superficial), treated with oral cephalexin or amoxicillin/clavulanate for 1 to 2 weeks as an outpatient. A, C and D are regimens for moderate or severe infection.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 5.1(c); Appendix 9; Algorithm B.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 47-year-old woman has acute osteomyelitis of the great toe with no open wound. Gram stain shows gram-positive cocci. Which is the most appropriate antibiotic plan?",
    option_a: "Intravenous cloxacillin for 2 to 4 weeks, followed by oral therapy to complete at least 6 weeks",
    option_b: "Intravenous cloxacillin for 3 to 5 days only",
    option_c: "Oral cephalexin for 1 to 2 weeks",
    option_d: "Ciprofloxacin alone for 2 weeks",
    correct_option: "A",
    explanation: "Rationale: For acute osteomyelitis with no open wound, cloxacillin 2 g IV q6h is preferred (Staphylococcus aureus accounts for about 80%), with initial IV therapy for 2 to 4 weeks followed by oral therapy to complete a minimum of six weeks. B is too short: 3 to 5 days may be enough only if all the infected bone has been removed. C is a mild soft tissue regimen, and D (ciprofloxacin) is for gram-negative bacilli and is too short.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Appendix 9, Osteomyelitis.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 63-year-old woman has a dry, sloughy plantar ulcer with minimal exudate and no infection. Which dressing is most appropriate?",
    option_a: "Alginate",
    option_b: "Foam",
    option_c: "Hydrocolloid",
    option_d: "Hydrogel",
    correct_option: "D",
    explanation: "Rationale: Hydrogel is indicated for sloughy and dry wounds, provides a moist environment and acts as enzymatic debridement, and it significantly increased ulcer healing compared with basic wound contact dressings. Alginate, foam and hydrocolloid dressings are for exudative wounds and are contraindicated or unsuitable in dry wounds.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 5.2(a); Appendix 10; Recommendation 9.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 61-year-old man has a clean, exudative plantar wound with poor granulation that has not healed after 8 weeks of standard care. There is no necrotic tissue and his vascularity is good. Which adjuvant therapy is most appropriate?",
    option_a: "Maggot debridement therapy",
    option_b: "Skin grafting as first-line",
    option_c: "Negative pressure wound therapy",
    option_d: "Topical antibiotics",
    correct_option: "C",
    explanation: "Rationale: Negative pressure wound therapy is used for clean exudative wounds with poor granulation, and compared with advanced moist wound therapy it gave better healing, shorter therapy and fewer amputations (RR 0.35). Maggot debridement is for necrotic tissue, and adjuvant therapy is offered when healing is delayed in a foot with good vascularity (Recommendation 10).\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 5.2(a)(ii); Recommendation 10.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 66-year-old man has an ischaemic heel ulcer and PAD. He has severe heart disease and is judged high surgical risk. Which approach is most appropriate?",
    option_a: "Endovascular treatment",
    option_b: "Open bypass surgery regardless of surgical risk",
    option_c: "Continue conservative dressings",
    option_d: "Primary amputation",
    correct_option: "A",
    explanation: "Rationale: Revascularisation should be offered to diabetic patients with PAD (Recommendation 11). Bypass surgery has higher technical success and one-year patency than angioplasty, but there is no difference in amputation, mortality or clinical improvement, and endovascular treatment may be advisable in patients with high surgical risk. Without revascularisation, patients with ischaemic ulcers are at higher risk of amputation.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 5.2(b), Revascularisation; Recommendation 11.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 57-year-old man presents with a deep infected plantar ulcer. Which is the most appropriate management?",
    option_a: "Antibiotics alone",
    option_b: "Surgical debridement by a trained healthcare provider, with antibiotics as an adjunct",
    option_c: "Autolytic debridement with hydrogel",
    option_d: "Topical antibiotics alone",
    correct_option: "B",
    explanation: "Rationale: Recommendation 12 advises surgical debridement by trained healthcare providers for ulcers that are deep and infected at presentation or fail non-surgical debridement, and Recommendation 8 states antibiotics should be used as an adjunct to surgical debridement. Antibiotics alone, topical agents alone and autolytic debridement are insufficient for a deep infected ulcer.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 5.2(b), Debridement; Recommendations 8 and 12.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 59-year-old man has a neuropathic plantar forefoot ulcer that is uninfected and with good perfusion. A rehabilitation physician chooses an off-loading device. Which device is most likely to heal the ulcer fastest?",
    option_a: "Removable cast walker",
    option_b: "Therapeutic footwear with padding",
    option_c: "Crutches alone",
    option_d: "Total contact cast",
    correct_option: "D",
    explanation: "Rationale: Non-removable off-loading devices (total contact cast, or walkers rendered irremovable) are more effective for healing than removable devices, and the total contact cast has a shorter healing time (by 12 days) than a removable cast walker. Assistive devices such as crutches are additional off-loading options but not as effective alone.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 5.2(c); Recommendation 14.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A rehabilitation team counsels a patient facing amputation about functional outcomes. Which statement is most accurate?",
    option_a: "Transfemoral amputees have better mobility than transtibial amputees",
    option_b: "A shorter residual limb gives better ambulation",
    option_c: "More distal amputation levels are associated with better long-term function, such as greater independence in activities of daily living",
    option_d: "Prosthesis should be prescribed for all amputees regardless of cognition or stump healing",
    correct_option: "C",
    explanation: "Rationale: Patients with more distal amputations (toe, transmetatarsal) complete activities of daily living more independently than those with transtibial or transfemoral amputations. Transtibial amputees have better mobility and less wheelchair use than transfemoral, and longer residual limb length optimises ambulation. A prosthesis is for patients with good cognition, vision, cardiovascular reserve and a healed stump.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 5.2(c), Post-amputation rehabilitation.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A rehabilitation physician reviews four patients after transtibial amputation for diabetic foot. Which patient is most suitable for prescription of a prosthesis?",
    option_a: "Healed residual stump, good cognitive function, good vision and cardiovascular reserve",
    option_b: "Healed stump, good vision and cardiovascular reserve, but advanced dementia",
    option_c: "Good cognition, vision and cardiovascular reserve, but an unhealed stump with wound dehiscence",
    option_d: "Healed stump and good cognition, but severe visual impairment and poor cardiovascular reserve",
    correct_option: "A",
    explanation: "Rationale: A prosthesis is prescribed for patients with good cognitive function, vision, cardiovascular reserve and a healed residual stump. B, C and D each fail one or more of these criteria. All patients with diabetic foot who have an amputation should be referred for rehabilitation (Recommendation 14).\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 5.2(c), Post-amputation rehabilitation; Recommendation 14.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 56-year-old man with type 2 diabetes and profound neuropathy has a warm, swollen, red right midfoot with a collapsed arch. He is afebrile and his ESR is normal. What is the most likely diagnosis?",
    option_a: "Cellulitis",
    option_b: "Osteomyelitis",
    option_c: "Charcot neuroarthropathy",
    option_d: "Acute gout",
    correct_option: "C",
    explanation: "Rationale: Charcot neuroarthropathy should be suspected in a diabetic patient with an inflamed foot, profound neuropathy and structural abnormality in the absence of fever and elevated ESR. It can be mistaken for cellulitis at an early stage, and it is hard to differentiate from osteomyelitis, so imaging helps.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 7.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 60-year-old man has a swollen, deformed foot with no ulcer. Plain radiographs show focal demineralisation with periosteal reaction involving multiple joints. It is unclear whether this is Charcot or infection. Which next investigation is most useful and should be done early?",
    option_a: "Computed tomography",
    option_b: "Magnetic resonance imaging",
    option_c: "Repeat radiograph in one week",
    option_d: "PET scan as the first-line investigation",
    correct_option: "B",
    explanation: "Rationale: MRI is a useful tool for differentiating Charcot neuroarthropathy from osteomyelitis and should be done early in a suspected patient. CT has no additional value over conventional radiography in diagnosing Charcot. Nuclear studies (PET) are valuable but difficult to access, technically demanding and expensive. If an ulcer is present and the diagnosis remains unclear, biopsy is indicated.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 7.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 58-year-old woman has confirmed acute-phase Charcot neuroarthropathy of the foot and ankle, with oedema and raised skin temperature. Which is the most appropriate management?",
    option_a: "Full weight bearing in cushioned footwear immediately",
    option_b: "Oral antibiotics for six weeks",
    option_c: "Early arthrodesis in all patients",
    option_d: "Immobilise with off-loading modalities and refer to orthopaedic surgeons for immediate treatment",
    correct_option: "D",
    explanation: "Rationale: In the acute phase, the foot is immobilised using off-loading modalities (crutches, wheelchair, walking frame) to reduce oedema and skin temperature, and protected weight bearing (removable walker, total contact cast) follows once this resolves. Recommendation 15 states Charcot neuroarthropathy should be referred to orthopaedic surgeons for immediate treatment. Surgery is reserved for unbraceable deformity, recurrent ulceration, instability or exostosis, so C is wrong.\nReference: Malaysian CPG Management of Diabetic Foot 2018 (2nd Ed.), Section 7; Recommendation 15.",
    tag: "CPG Diabetic Foot 2018"
  },
  {
    question_text: "A 57-year-old man has had 3 years of retrosternal chest tightness that comes on predictably when he walks uphill. The discomfort does not settle with rest, and glyceryl trinitrate (GTN) has not been tried. There has been no change in the pattern, and he has no pain at rest or at night. Which category best describes his chest pain according to the CPG?",
    option_a: "Typical (definite) angina",
    option_b: "Atypical (probable) angina",
    option_c: "Non-anginal chest pain",
    option_d: "Unstable angina",
    correct_option: "B",
    explanation: "Rationale: Typical angina needs all 3 criteria: (1) retrosternal discomfort that is predictable, with possible radiation to the jaw, shoulders, arms or back; (2) provoked by physical exertion or emotional stress; (3) relieved by rest and/or GTN. He meets the first two but not the third, so he has atypical (probable) angina, which is 2 of the 3 criteria. A needs all three. C applies when one or none of the criteria are met. D is wrong because the pain has been stable for 3 years, with no rest pain; the CPG treats recent onset (<2 months), rest pain, or sweating and dyspnoea as features pointing to an ACS.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 2.1 (p27), Table 3 (p29).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "Four patients attend a chest pain clinic. Which patient should be managed according to the CPG for unstable angina / NSTEMI rather than as stable CAD?",
    option_a: "A 62-year-old man with 2 years of exertional chest tightness relieved by rest within 5 minutes, with no change in pattern",
    option_b: "A 70-year-old woman with exertional chest pain, precipitated by emotional stress and relieved by GTN, stable for 18 months",
    option_c: "A 59-year-old man with burning retrosternal pain after large meals for 6 months, relieved by antacids",
    option_d: "A 55-year-old woman with chest pain that began 3 weeks ago, now occurs at rest and is accompanied by sweating and breathlessness",
    correct_option: "D",
    explanation: "Rationale: The CPG says chest pain that is of recent onset (<2 months), and/or occurs at rest, and/or is associated with sweating and dyspnoea may be due to an ACS and should be managed with the UA/NSTEMI CPG. Patient D has all three features. A and B describe stable, predictable exertional angina. C describes a pattern that fits a gastrointestinal cause (reflux is listed among the non-ischaemic causes of chest pain).\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 2.1 (p28), Section 5.1 (p33), Table 5 (p35).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 54-year-old woman with exertional chest pain has a stress perfusion study that shows reversible ischaemia in the anterior wall. Invasive coronary angiography shows 35% luminal narrowing in the proximal left anterior descending artery and no other disease. Which statement about her condition is most accurate?",
    option_a: "She has non-obstructive CAD, and its prognosis is not benign, being worse when myocardial ischaemia is documented",
    option_b: "She has Cardiac Syndrome X, which carries an excellent prognosis",
    option_c: "She has obstructive CAD, because any lesion that causes ischaemia is classed as obstructive",
    option_d: "Her prognosis is no different from that of women with normal coronary arteries, whether or not ischaemia is present",
    correct_option: "A",
    explanation: "Rationale: The CPG defines obstructive CAD as luminal narrowing >50%, non-obstructive CAD as ≥20% and <50%, and normal coronaries (Cardiac Syndrome X) as <20%. A 35% lesion is non-obstructive. Its prognosis is not benign and is worse when myocardial ischaemia is documented. In the WISE study the 5-year rate of MI and CV death was 16% in women with angina and non-obstructive CAD, versus 7.9% with normal coronaries and 2.4% in asymptomatic controls. B uses the wrong category (Syndrome X is <20%). C is wrong because the classification is by luminal narrowing, not by presence of ischaemia. D is wrong because outcomes were significantly different between the groups.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 3 (p30), Section 10.2 (p87).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 38-year-old man has recurrent exertional chest pain and one episode of syncope during a run. Coronary angiography shows no atheroma but systolic compression of the mid left anterior descending artery. He is otherwise well. Which of the following is the most appropriate initial treatment?",
    option_a: "Percutaneous stent implantation across the bridged segment",
    option_b: "Surgical unroofing of the bridged segment",
    option_c: "A β-blocker, with or without a calcium channel blocker",
    option_d: "A long-acting nitrate",
    correct_option: "C",
    explanation: "Rationale: Myocardial bridging most commonly involves the LAD. Patients may present with exertional angina, syncope and even sudden death. The CPG says medical therapy with β-blockers and CCBs remains the mainstay of treatment. A is wrong because stenting can be complicated by stent fracture, perforation, thrombosis and restenosis. B is wrong because surgery is considered only if medical therapy fails. D is wrong because the CPG names β-blockers and CCBs, not nitrates, as the mainstay.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 3 (p30).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A cardiologist is counselling a 63-year-old man with stable CAD who is on optimal medical therapy. Which factor does the CPG identify as among the most important predictors of adverse cardiovascular outcomes?",
    option_a: "Number of vessels diseased on angiography",
    option_b: "Presence or absence of angina symptoms",
    option_c: "Number of conventional CV risk factors",
    option_d: "LV function and total ischaemic burden",
    correct_option: "D",
    explanation: "Rationale: The most important predictors of adverse CV outcomes are LV function and the extent of myocardial ischaemia (total ischaemic burden). This is not necessarily equivalent to the number of vessels diseased, so A is wrong. The association between angina and combined endpoints of CV death, MI or stroke is weak, so B is wrong. C is a real contributor (active smoking and poorly controlled diabetes or lipids predicted MI in the registry), but it is not named as the most important predictor.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 4 (p31-32).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 63-year-old woman gets retrosternal tightness after walking about 150 metres on level ground at a normal pace and after climbing one flight of stairs at a normal pace. She has to stop to relieve the symptoms. She has no pain at rest, and her ordinary activity is markedly limited. What is her Canadian Cardiovascular Society (CCS) class?",
    option_a: "Class I",
    option_b: "Class II",
    option_c: "Class III",
    option_d: "Class IV",
    correct_option: "C",
    explanation: "Rationale: Class III is angina on walking one or two blocks on the level or climbing one flight of stairs at a normal pace, with marked limitation of ordinary activity. Class I is angina only with strenuous, rapid or prolonged exertion. Class II is slight limitation: walking or climbing stairs rapidly, uphill, after meals, in cold or wind, or under emotional stress. Class IV is inability to carry out any physical activity without discomfort, or symptoms at rest.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 5.1, Table 4 (p34).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 54-year-old man has exertional chest tightness. A 12-lead ECG recorded in clinic while he is pain-free is normal. Which is the most appropriate interpretation and action?",
    option_a: "CAD is not excluded; an ECG should ideally be recorded during an episode of chest pain, and further risk-based assessment arranged",
    option_b: "CAD is excluded and no further assessment is required",
    option_c: "A normal ECG makes a chest radiograph the next mandatory investigation",
    option_d: "A normal ECG makes echocardiography mandatory",
    correct_option: "A",
    explanation: "Rationale: All patients with chest pain or an angina equivalent should have a baseline resting 12-lead ECG (Grade I, Level C), preferably during an episode of chest pain (I, B). The resting ECG is usually normal in stable CAD, and a normal one does not rule out CAD or myocardial ischaemia, so B is wrong. C and D are wrong because chest radiography and echocardiography are not routine investigations; each has specific indications.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 5.3 (p36), Recommendation 1 (p19).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A general practitioner refers four patients with chest pain for echocardiography. In which patient is resting echocardiography a Class I indication according to the CPG?",
    option_a: "A 50-year-old man with typical angina, a normal resting ECG, a normal cardiac examination and no breathlessness",
    option_b: "A 58-year-old man with exertional angina and Q waves in V1-V4 on the resting ECG",
    option_c: "A 46-year-old woman with non-anginal chest pain, a normal resting ECG and a normal examination",
    option_d: "A 52-year-old woman with atypical chest pain, a normal resting ECG and a normal examination",
    correct_option: "B",
    explanation: "Rationale: Echocardiography is not a routine investigation. Class I indications (Grade I, Level C) are abnormal auscultatory findings, an abnormal resting ECG, and assessment of LV function or regional wall motion abnormalities in patients with breathlessness and/or known CAD. Patient B has an abnormal resting ECG. A, C and D have normal ECGs and examinations; echocardiography is only \"useful\" (IIa, C) in patients with hypertension or diabetes, or when chest pain is suspected to be due to CAD, which is a lower grade than Class I.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 5.4 (p36), Recommendation 1 (p19).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 45-year-old woman has retrosternal discomfort that is predictable and provoked by exertion, but it does not ease with rest or GTN. She has hypertension and mild dyslipidaemia. Her resting ECG is normal. Using the pre-test probability (PTP) table adopted by the CPG, which is the most appropriate approach?",
    option_a: "Exercise stress echocardiography",
    option_b: "Coronary CT angiography",
    option_c: "Invasive coronary angiography",
    option_d: "Treat CV risk factors to target and look for other causes of chest pain",
    correct_option: "D",
    explanation: "Rationale: Her pain meets 2 of the 3 criteria (atypical angina). For a woman aged 40-49 with atypical angina the PTP in Table 1 is 14%, which is below 15% (low). Patients with a low PTP can be assumed not to have significant obstructive CAD, so CV risk factors should be treated to target and other causes of chest pain sought. A, B and C are all further tests suited to intermediate (15-85%) or high (>85%) PTP and would risk false positives and unnecessary downstream procedures.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 6.1 (p39), Table 1 (p22), Recommendation 2.",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 64-year-old man has typical angina with all three classic criteria. His resting ECG is normal and he walks briskly for 5 km daily without limitation. He has hypertension and dyslipidaemia. Which is the most appropriate next investigation?",
    option_a: "Invasive coronary angiography",
    option_b: "Coronary calcium score alone",
    option_c: "Exercise stress ECG",
    option_d: "Pharmacological stress cardiac magnetic resonance imaging",
    correct_option: "C",
    explanation: "Rationale: For men aged 60-69 with typical angina the PTP in Table 1 is 84%, which is just below 85%. That is intermediate (15-85%), so further non-invasive evaluation is needed rather than going straight to angiography. With a normal resting ECG and good exercise tolerance, exercise stress ECG is the test of choice (I, A). A would be the initial investigation only if PTP were >85% with typical symptoms. B is wrong because calcium scoring is more useful for risk stratification than for diagnosis. D is reserved for patients who cannot exercise or whose ECG is uninterpretable.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 6.1 (p39), Section 6.2.1 (p41), Table 1 (p22), Figure 1 (p23).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 59-year-old woman with suspected CAD and an intermediate PTP takes bisoprolol 5 mg and amlodipine 5 mg daily. An exercise stress ECG is requested to establish the diagnosis. What is the most appropriate advice about her anti-anginal medication before the test?",
    option_a: "Stop all anti-anginal medication for at least 48 hours before the test",
    option_b: "Continue all medication, as stopping it is never advised",
    option_c: "Stop only the β-blocker on the evening before the test",
    option_d: "Double the doses on the morning of the test",
    correct_option: "A",
    explanation: "Rationale: If exercise stress ECG is done for diagnostic reasons, it is best to stop all anti-anginal medication for at least 48 hours. If it is done for prognosis (for example to assess treatment efficacy in known CAD), the medication should be continued. B applies to the prognostic scenario, not the diagnostic one. C and D have no basis in the CPG.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 6.2.1 (p41).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 61-year-old man's treadmill test is stopped for chest pain at 4 minutes. The ECG shows ST depression in V4-V6 and ST elevation in lead aVR that is greater than that in lead V1. Which coronary pattern does this finding suggest?",
    option_a: "Isolated distal right coronary artery stenosis",
    option_b: "Significant left main disease, multivessel disease, or ostial/proximal LAD occlusion",
    option_c: "A single diagonal branch stenosis",
    option_d: "Coronary vasospasm confined to the right coronary artery",
    correct_option: "B",
    explanation: "Rationale: ST elevation in aVR, particularly when higher than in V1, reflects high-risk CAD, including significant left main disease, multivessel disease, or ostial/proximal LAD occlusion. A positive test also includes horizontal or downsloping ST depression of ≥1 mm (60-80 ms after the J point) in two contiguous leads. A, C and D describe localised or non-fixed disease that does not explain a global pattern with aVR elevation.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 6.2.1 (p41-42).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 67-year-old man with chest pain completes a Bruce protocol treadmill test. His Duke Treadmill Score (DTS) is -14. What is the most appropriate next step?",
    option_a: "No further testing is required",
    option_b: "Continue medical therapy and repeat the treadmill test in 5 years",
    option_c: "Stress imaging to risk stratify further",
    option_d: "Invasive coronary angiography",
    correct_option: "D",
    explanation: "Rationale: DTS = exercise time (min) - (5 × maximum ST deviation) - (4 × angina index). A DTS ≤ -11 is high risk, with a predicted 4-year survival of about 79% and annual mortality of about 5% (>5% in Table 2). This group should be considered for invasive coronary angiography. A applies to low risk (DTS ≥ +5; 4-year survival 99%, annual mortality about 0.25%, no further testing). C applies to intermediate risk (+4 to -10). B has no basis in the CPG.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 6.2.1 (p42), Table 7 (p44), Table 2 (p24).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 66-year-old man with typical angina and an intermediate PTP has left bundle branch block (LBBB) on his resting ECG. Exercise is limited by severe knee osteoarthritis. Which is the most appropriate next test?",
    option_a: "Pharmacological stress imaging (for example dobutamine stress echocardiography)",
    option_b: "Exercise stress ECG",
    option_c: "Resting echocardiography alone",
    option_d: "Coronary calcium score alone",
    correct_option: "A",
    explanation: "Rationale: Stress imaging is used in patients with intermediate PTP who cannot exercise adequately and/or have an uninterpretable resting ECG. In LBBB and ventricular paced rhythms, stress imaging tests are the non-invasive tests of choice, although diagnostic accuracy is reduced. B is wrong because LBBB makes the ST segments uninterpretable and he cannot exercise adequately. C does not test for inducible ischaemia. D is more useful for risk assessment than for diagnosis.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 6.2.2 (p46-47).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 58-year-old man with diabetes and typical angina has an adenosine SPECT myocardial perfusion study reported as showing homogeneous tracer uptake in all territories. Because symptoms persist, invasive angiography is done and shows severe left main and triple-vessel disease. What is the most likely explanation for the false-negative perfusion study?",
    option_a: "Soft-tissue attenuation artefact",
    option_b: "Left bundle branch block",
    option_c: "Balanced ischaemia from severe left main and multivessel disease",
    option_d: "Inadequate vasodilator stress after caffeine intake",
    correct_option: "C",
    explanation: "Rationale: Stress MPI relies on perfusion differences between territories and needs at least one non-ischaemic territory as a normal reference. When all three vessels are severely narrowed, or left main and multivessel disease are combined, \"balanced\" ischaemia gives rather uniform tracer uptake and a false-negative result. A and B are recognised causes of reduced diagnostic accuracy (usually false positives), not of uniform uptake in this setting. D is not a mechanism cited in the CPG, and the stem gives no hint of it.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 6.2.2 (p47-48).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A medical officer reviews the CPG's summary of diagnostic accuracy to pick a test that is least likely to miss CAD in a patient with intermediate PTP. Which test has the highest sensitivity in the CPG's table?",
    option_a: "Exercise stress ECG",
    option_b: "Vasodilator stress echocardiography",
    option_c: "Coronary CT angiography",
    option_d: "Exercise stress SPECT",
    correct_option: "C",
    explanation: "Rationale: In Table 6, coronary CTA has the highest sensitivity (95-99%), with a specificity of 64-83%. Exercise ECG has the lowest sensitivity (45-50%) but specificity of 85-90%, so A is wrong. Vasodilator stress echocardiography has the highest specificity (92-95%) but a lower sensitivity (72-79%), which makes B the trap. Exercise SPECT is 73-92% sensitive, so D is wrong.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 6.1, Table 6 (p39).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 60-year-old man has typical exertional angina and an intermediate PTP. A coronary artery calcium (CAC) scan returns an Agatston score of 0. Which interpretation is most appropriate?",
    option_a: "Obstructive CAD is excluded and no further testing is needed",
    option_b: "In a symptomatic patient with an intermediate PTP, substantial ischaemia and near-term events remain possible, so further evaluation is needed",
    option_c: "A zero score is more accurate than a stress test for diagnosing CAD",
    option_d: "A zero score confirms that his symptoms are due to microvascular angina",
    correct_option: "B",
    explanation: "Rationale: CAC of 0 makes plaque, including unstable plaque, very unlikely and significant obstructive disease highly unlikely overall. The CPG says the result must be interpreted with the PTP and clinical setting: in persons with symptoms and an intermediate to high likelihood of CAD, there is often substantial ischaemia on provocative testing and a high risk of near-term coronary events. A ignores this. C is wrong: CAC has high sensitivity but low specificity, with an overall accuracy of about 70%, and was not found to be superior to other modalities. D has no basis in the CPG. CAC is more useful for CV risk stratification than for diagnosis.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 6.3.1 (p49), Section 7.5.1 (p56).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "Four patients are considered for coronary CT angiography (CTA). Which patient is most suitable?",
    option_a: "A 45-year-old asymptomatic man who wants a general \"heart check\"",
    option_b: "A 68-year-old man with atrial fibrillation and a ventricular rate of 110/min",
    option_c: "A 63-year-old woman with a coronary calcium (Agatston) score of 1,350",
    option_d: "A 55-year-old man with a low-to-intermediate PTP, equivocal ST changes at moderate workload on exercise ECG, mild symptoms, good exercise capacity, and sinus rhythm at 58/min",
    correct_option: "D",
    explanation: "Rationale: CTA may be considered (I, A) in patients with low to intermediate PTP who have mild or equivocal ischaemic changes on exercise or stress imaging, and who are asymptomatic or mildly symptomatic with good exercise capacity. Good image quality needs sinus rhythm without ectopics, a heart rate <65/min, a favourable calcium score (<400 Agatston), and breath-holding ability. A is wrong because CTA should not be used to screen asymptomatic people (III, C): low prevalence leads to false positives and unnecessary downstream procedures. B fails the rhythm and heart-rate criteria. C fails the calcium criterion, as heavy calcification reduces accuracy.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 6.3.2 (p50-51), Recommendation 3.",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "Four patients with stable angina are being considered for invasive coronary angiography (ICA). In which patient should ICA NOT be performed?",
    option_a: "A 68-year-old woman with CCS class II angina who says she would refuse both PCI and CABG",
    option_b: "A 60-year-old man with CCS class III angina and a positive exercise ECG at low workload",
    option_c: "A 72-year-old man with typical angina and a PTP of 89%, willing to consider revascularisation",
    option_d: "A 58-year-old man with high-risk findings on stress imaging (≥10% of LV myocardium ischaemic)",
    correct_option: "A",
    explanation: "Rationale: The CPG says coronary arteriography should not be performed (III, C) in patients with angina who refuse diagnostic procedures, who prefer to avoid revascularisation by PCI or CABG, who are not candidates for PCI or CABG, or in whom PCI/CABG will not improve quality of life. B should have ICA because a positive exercise test at low workload warrants it. C has high PTP (>85%), for which ICA may be the initial investigation. D has high-risk findings, for which ICA with a view to revascularisation should be considered.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 7.5.3 (p58), Figure 1 (p23).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 59-year-old man with CCS class II angina takes aspirin, atorvastatin, bisoprolol and amlodipine. A dobutamine stress echocardiogram shows inducible wall motion abnormalities in 4 segments of the standard LV model. What is the most appropriate management?",
    option_a: "Continue current therapy and review in primary care",
    option_b: "Refer to a tertiary cardiac centre for invasive coronary angiography with a view to revascularisation",
    option_c: "Repeat the stress echocardiogram in 12 months",
    option_d: "Add ranolazine and reassess in 6 months",
    correct_option: "B",
    explanation: "Rationale: Inducible wall motion abnormalities in ≥3 segments of the standard LV model are high risk, with an annual CV death/MI rate of about 4.5%. The CPG defines high risk as annual mortality >3%. High-risk patients should be considered for ICA with a view to revascularisation, and intermediate- and high-risk patients should be referred to tertiary cardiac centres. A applies to low-risk patients (<1%). C and D delay risk-based management in a patient whose test result already places him in the high-risk group.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 7 (p53), Table 2 (p24), Section 7.6 (p60-61), Recommendation 5.",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 62-year-old man with a previous anterior MI has exertional breathlessness. Echocardiography shows an LVEF of 32% with a hypokinetic anterior wall. Which investigation best addresses whether his LV dysfunction is due to infarcted scar or to viable but stunned ischaemic myocardium?",
    option_a: "Resting 12-lead ECG",
    option_b: "Exercise stress ECG",
    option_c: "Chest radiograph",
    option_d: "Stress imaging such as dobutamine stress echocardiography",
    correct_option: "D",
    explanation: "Rationale: LV function is the strongest predictor of survival. With depressed LV function it is important to determine whether it is due to infarcted (scar) tissue or viable but stunned ischaemic myocardium, which can be done with stress imaging techniques; dobutamine also allows viability assessment. Revascularisation of ischaemic but viable myocardium can improve LV function and survival. A, B and C do not assess myocardial viability.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 7.3 (p55), Section 6.2.2.1 (p47).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 64-year-old man with CCS class II angina on optimal medical therapy has a 70% mid-LAD stenosis on angiography. Fractional flow reserve (FFR) measured during adenosine-induced hyperaemia is 0.78. According to the CPG thresholds, what is the most appropriate interpretation?",
    option_a: "Revascularisation offers no benefit because FFR is above 0.75",
    option_b: "Revascularisation offers intermediate benefit, and the decision should rest on clinical judgement",
    option_c: "Revascularisation is clearly beneficial because FFR is below 0.80",
    option_d: "FFR is unreliable here because it does not assess the microcirculation",
    correct_option: "B",
    explanation: "Rationale: In patients on OMT the CPG uses these cut-offs: FFR >0.80 means no improved outcome with revascularisation; 0.75 to <0.80 means intermediate benefit, with management based on clinical judgement; <0.75 means benefit from revascularisation. A value of 0.78 falls in the intermediate zone. A and C misapply the thresholds. D is wrong: FFR takes collateral flow and viable myocardial mass into account, is independent of haemodynamic variations, and a normal value is 1.0 regardless of microcirculatory status.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 7.5.4.1 (p59), Section 8.3 (p81).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 57-year-old woman has a 60% mid-RCA stenosis on angiography. The interventional cardiologist wants to confirm that it is haemodynamically significant before stenting. Which of the following is an anatomical tool that should not be used on its own to determine functional significance?",
    option_a: "Intravascular ultrasound or optical coherence tomography minimum lumen area",
    option_b: "Fractional flow reserve (FFR)",
    option_c: "Instantaneous wave-free ratio (iFR)",
    option_d: "Stress cardiac magnetic resonance perfusion imaging",
    correct_option: "A",
    explanation: "Rationale: IVUS and OCT give visual and dimensional assessment of the lesion. IVUS has a relatively high negative predictive value but a low positive predictive value for ischaemia. They should not be performed to determine the functional significance of a lesion before intervention (IIa, B), but are useful for optimising stent deployment and sizing. FFR is the invasive gold standard. iFR is pressure-derived without a vasodilator, with a cut-off of 0.89 corresponding to an FFR of 0.80, and initial trials showed it was non-inferior to FFR-guided strategies. Stress CMR perfusion gives functional (ischaemia) information.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 7.5.4.1 and 7.5.4.2 (p59-60).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 56-year-old man with stable CAD asks for specific dietary targets. Which advice is consistent with the CPG's nutritional recommendations?",
    option_a: "Limit saturated fat to below 5% of energy",
    option_b: "Restrict salt to below 10 g per day",
    option_c: "Keep trans fatty acids below 1% of total energy intake",
    option_d: "Allow added sugars up to 20% of energy intake",
    correct_option: "C",
    explanation: "Rationale: The CPG recommends trans fatty acids <1% of energy (I, A). Saturated fat should be 7-10% of energy (I, B), so A is too strict and does not match. Salt should be <5 g (1 level teaspoon, or 2000 mg sodium) per day (I, A), so B is double the limit. Added sugar should be <10% of energy, about 50 g or 12 level teaspoons on a 2000-kcal diet (I, A), so D is double the limit. The CPG also notes a Mediterranean diet reduces CV events and that the DASH diet reduces blood pressure.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.1.2 (p63), Table 9 (p65).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 60-year-old sedentary woman with stable CAD, 3 months after PCI, asks whether she should exercise. What is the most appropriate advice?",
    option_a: "Avoid exercise until she has been symptom-free for 12 months",
    option_b: "Aim immediately for 300 minutes of vigorous activity a week",
    option_c: "Limit herself to occupational and commuting activity because structured exercise is unsafe in CAD",
    option_d: "Start light-intensity exercise after adequate exercise-related risk stratification, aiming over time for at least 150 minutes a week of moderate intensity (or 75 minutes of vigorous intensity), ideally guided by a physiotherapist or exercise physiologist",
    correct_option: "D",
    explanation: "Rationale: The CPG recommends at least 150 minutes a week of moderate intensity or 75 minutes of vigorous intensity (or an equivalent combination) (I, B). Sedentary patients should be strongly encouraged to start light-intensity exercise after adequate exercise-related risk stratification (I, B). Any amount of physical activity is better than none, and patients should wherever possible be referred to physiotherapists or exercise physiologists for exercise prescription. Aerobic exercise should be offered as part of a structured, medically supervised cardiac rehabilitation programme that includes education and counselling, and that helps identify comorbid conditions and anxiety or depression. A, B and C contradict these recommendations.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.1.3 (p63-64), Table 10 (p66).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 54-year-old man who smokes 20 cigarettes a day has stable CAD after PCI. He says he plans to \"switch to vaping\" to protect his heart. Which response is most consistent with the CPG?",
    option_a: "E-cigarettes are a recommended cessation aid in CAD",
    option_b: "Switching to low-tar or filtered cigarettes reduces his cardiovascular risk",
    option_c: "Vaping is harmful and not recommended; he should be referred to a smoking cessation service such as mQuit",
    option_d: "Shisha is a safer alternative to cigarettes",
    correct_option: "C",
    explanation: "Rationale: E-cigarette aerosol is harmful (III, B), and the use of e-cigarettes and shisha is not recommended. Stopping smoking after an MI is the most effective prevention measure, and patients can be referred to mQuit services. B is wrong because changing cigarette design (filters, low-tar, \"light\") has not reduced overall disease risk. A and D contradict the CPG.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.1.4 (p67-68).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 52-year-old man with stable CAD has a BMI of 33 kg/m² and hypertension. According to the CPG, what is the initial weight-management goal?",
    option_a: "5-10% weight loss, maintained over 1-2 years before attempting further weight loss",
    option_b: "20% weight loss within 3 months",
    option_c: "Reach a BMI below 25 kg/m² before any other intervention",
    option_d: "Weight loss is unnecessary unless BMI exceeds 40 kg/m²",
    correct_option: "A",
    explanation: "Rationale: The goals of weight management are to achieve 5-10% weight loss and to maintain it over 1-2 years before attempting further weight loss (I, B). Modest loss of 5-10% improves blood pressure, glycaemic control and lipids. B and C set unrealistic targets. D is wrong because overweight and obesity are linked to increased CAD mortality (every 5 kg/m² rise in BMI is associated with about a 30% higher overall mortality and 40% higher vascular mortality). Pharmacotherapy and bariatric surgery are options in selected patients.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.1.5 (p68-69).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 62-year-old man with stable CAD cannot tolerate aspirin because of recurrent dyspepsia with gastric erosions. Which is the preferred alternative antiplatelet agent?",
    option_a: "Ticagrelor monotherapy",
    option_b: "Clopidogrel",
    option_c: "Prasugrel monotherapy",
    option_d: "Ticlopidine",
    correct_option: "B",
    explanation: "Rationale: Clopidogrel is the recommended alternative in aspirin-intolerant patients (I, A). Ticlopidine (IIb, B) is limited by scarce cardiac outcome evidence and the risk of blood dyscrasias. Ticagrelor and prasugrel as monotherapy have not been studied in stable CAD, so A and C are not supported.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.2.1.1 (p69-70).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 72-year-old man had a drug-eluting stent implanted for stable angina 3 months ago and takes aspirin and clopidogrel. He has just had an upper gastrointestinal bleed requiring transfusion. Which is the most appropriate approach to the duration of dual antiplatelet therapy (DAPT)?",
    option_a: "Shorten the duration of DAPT",
    option_b: "Continue DAPT for at least 3 years",
    option_c: "Replace clopidogrel with ticagrelor and continue DAPT",
    option_d: "Add rivaroxaban 2.5 mg twice daily to the DAPT",
    correct_option: "A",
    explanation: "Rationale: In patients with high bleeding risk the CPG says the duration of DAPT after stenting can be shortened (IIa, B). The standard recommendation is 12 months post ACS, and use beyond one year in stable CAD with PCI must be individualised by weighing ischaemic against bleeding risk (IIa, A). B, C and D would all increase his bleeding risk. Prolonged DAPT and ticagrelor plus aspirin were associated with more bleeding, and adding rivaroxaban to aspirin also increased major bleeding.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.2.1.1 (p70-71).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 71-year-old man with non-valvular AF (CHA2DS2-VASc score 4) had a drug-eluting stent placed 6 weeks ago for stable CAD. He takes warfarin, aspirin and clopidogrel and has recurrent epistaxis and haematuria. His creatinine clearance is 42 mL/min. Which regimen does the CPG recommend to lower his bleeding risk?",
    option_a: "Rivaroxaban 15 mg once daily plus clopidogrel 75 mg daily",
    option_b: "Warfarin plus aspirin plus clopidogrel",
    option_c: "Dabigatran 150 mg twice daily plus aspirin 100 mg daily",
    option_d: "Rivaroxaban 10 mg once daily plus clopidogrel 75 mg daily",
    correct_option: "D",
    explanation: "Rationale: In AF patients with drug-eluting stents, a NOAC with antiplatelet therapy is associated with lower bleeding than the standard triple regimen (DAPT plus warfarin). The CPG regimen is rivaroxaban 15 mg daily (10 mg if creatinine clearance is 30-50 mL/min) plus clopidogrel 75 mg daily (IIa, B). With a creatinine clearance of 42 mL/min the 10 mg dose applies, which makes A the trap for missing the renal adjustment. B is the regimen with the higher bleeding risk that he is already on. C is not a listed regimen: dabigatran is paired with clopidogrel or ticagrelor, not aspirin.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.2.1.1 (p71), Table 11 (p72).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 58-year-old man with stable CAD and ischaemic cardiomyopathy (LVEF 28%) is found to have a new apical LV thrombus on echocardiography. He is in sinus rhythm. Which antithrombotic strategy does the CPG suggest?",
    option_a: "A NOAC such as rivaroxaban",
    option_b: "Dabigatran",
    option_c: "Warfarin for at least 6 months",
    option_d: "Dual antiplatelet therapy alone",
    correct_option: "C",
    explanation: "Rationale: In stable CAD with depressed LV function and a LV thrombus shown for the first time by echocardiography, warfarin for at least 6 months may be considered (IIa, C). Table 11 states that NOACs are not indicated for LV thrombus at present, so A and B are wrong. D does not provide anticoagulation. (This reflects the 2018 CPG; newer evidence may differ.)\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.2.1.1 (p72), Table 11 (p72).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 64-year-old man with stable CAD takes atorvastatin 80 mg daily with good adherence. His LDL-C is 2.3 mmol/L. What is the most appropriate next step?",
    option_a: "Continue unchanged, because an LDL-C below 2.6 mmol/L is sufficient",
    option_b: "Add a non-statin agent such as ezetimibe",
    option_c: "Replace atorvastatin with a fibrate",
    option_d: "Reduce the statin dose to limit adverse effects",
    correct_option: "B",
    explanation: "Rationale: Statins should be used to achieve LDL-C targets, with the aim of an LDL-C <1.8 mmol/L; the lower the better (I, A). If the LDL-C target cannot be achieved, other non-statin therapy such as ezetimibe or PCSK9 inhibitors may be considered (IIa, B). A is wrong because the CPG target is <1.8 mmol/L. C and D move away from the target.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.2.1.2 (p73), Summary (p16-18).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 60-year-old man with stable CAD, 6 months after PCI, takes aspirin, atorvastatin and bisoprolol. Blood pressure is 118/72 mmHg, LVEF is 62%, he is not diabetic and his renal function is normal. Which statement about adding an ACE inhibitor or ARB is most accurate?",
    option_a: "It should be started routinely to reduce cardiovascular events",
    option_b: "An ACE inhibitor and ARB combination is preferred",
    option_c: "A mineralocorticoid receptor antagonist is preferred instead",
    option_d: "Routine use is not recommended in stable CAD without hypertension and with normal LV function",
    correct_option: "D",
    explanation: "Rationale: Early trials suggested benefit with ACE inhibitors in stable CAD with preserved LV function, but more recent data show no additional benefit in reducing CV events and death in this group. The CPG says routine ACEi/ARB use in stable CAD without hypertension and with normal LV function is not recommended. ACEi/ARB should be considered in the presence of diabetes, hypertension, or LV dysfunction (LVEF <40%). A is contrary to this. B and C have no support: MRAs are recommended for depressed LV function.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.2.1.3 (p73), Figure 2 (p25).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 63-year-old man with ischaemic cardiomyopathy (LVEF 32%) has stable CAD and is being optimised for prognosis. Which drug class carries a Class I recommendation with Level of evidence B for improving survival in this setting?",
    option_a: "Angiotensin receptor-neprilysin inhibitor (sacubitril/valsartan)",
    option_b: "ACE inhibitor or ARB",
    option_c: "β-blocker",
    option_d: "Mineralocorticoid receptor antagonist",
    correct_option: "A",
    explanation: "Rationale: In stable CAD with reduced LV function (LVEF <40%) the CPG gives ACEi/ARB (I, A), β-blockers (I, A), mineralocorticoid receptor antagonists such as spironolactone and eplerenone (I, A), and the angiotensin receptor-neprilysin inhibitor sacubitril/valsartan (I, B). Only the last has Level B evidence.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.2.1.4 (p74).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 44-year-old woman has chest pain at night and in the early morning with transient ST elevation that resolves spontaneously. Coronary angiography shows no fixed stenosis, and variant (Prinzmetal) angina is diagnosed. Which anti-anginal agent should be avoided?",
    option_a: "Amlodipine",
    option_b: "Diltiazem",
    option_c: "Propranolol",
    option_d: "Isosorbide mononitrate",
    correct_option: "C",
    explanation: "Rationale: The CPG states that β-blockers can worsen symptoms in vasospastic (Prinzmetal) angina and should be avoided. A and B are calcium channel blockers, which dilate coronary arteries, and D is a vasodilator; none is flagged in the CPG for avoidance in this condition.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.2.2.1 (p75).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 66-year-old man with stable angina takes bisoprolol 5 mg daily. His resting heart rate is 62/min and he still has exertional angina. A calcium channel blocker (CCB) is to be added. Which is the most appropriate choice?",
    option_a: "Verapamil",
    option_b: "Amlodipine",
    option_c: "Short-acting nifedipine",
    option_d: "Diltiazem",
    correct_option: "B",
    explanation: "Rationale: Dihydropyridines such as amlodipine do not lower heart rate, and the CCB-β-blocker combination is beneficial because DHP-induced reflex tachycardia is blunted by the β-blocker. Concurrent use of a non-DHP (verapamil or diltiazem) with a β-blocker should be used with caution because of the risk of bradycardia and heart block, so A and D are wrong. C is wrong because short-acting nifedipine should be avoided in CAD: studies showed it increased the risk of MI, and at higher doses increased mortality.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.2.2.2 (p76).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 62-year-old woman takes isosorbide dinitrate four times daily at evenly spaced intervals through the day and night. Her exertional angina has become more frequent after months of regular dosing. Which change is most appropriate?",
    option_a: "Increase the dosing to six times a day",
    option_b: "Switch to a continuous, round-the-clock slow-release preparation",
    option_c: "Replace the nitrate with regular sublingual GTN four times daily",
    option_d: "Change to twice-daily dosing that leaves a nitrate-free interval of about 10-12 hours",
    correct_option: "D",
    explanation: "Rationale: Long-term regular use of nitrates without a nitrate-free or low-nitrate interval of about 8-10 hours can cause nitrate tolerance, which can offset benefit. Twice-daily dosing of isosorbide dinitrate, giving a 10-12 hour nitrate-free interval, is preferred. A and B make continuous exposure worse. C does not address the problem; sublingual GTN is for acute relief and prophylaxis before anticipated exertion. The most common nitrate side effect is headache, and nitrates must not be used with PDE5 inhibitors.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.2.2.3 (p77).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "Four patients with stable CAD and persistent angina are considered for add-on ivabradine. Which patient is the most suitable?",
    option_a: "A 64-year-old man in sinus rhythm at 78/min on maximally tolerated bisoprolol, with an LVEF of 38%",
    option_b: "A 70-year-old woman with persistent atrial fibrillation and a ventricular rate of 90/min",
    option_c: "A 66-year-old man in sinus rhythm at 46/min",
    option_d: "A 61-year-old woman in sinus rhythm at 72/min who takes verapamil",
    correct_option: "A",
    explanation: "Rationale: Ivabradine improved symptoms and reduced CV hospitalisation, MI and revascularisation in stable CAD with moderate LV dysfunction and a heart rate >70 bpm, and may be used with β-blockers or when they are not tolerated. It is not suitable in atrial fibrillation (B). It should be decreased or stopped if heart rate falls below 50 bpm (C). Its use with rate-limiting non-DHP CCBs such as verapamil should be avoided (D).\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.2.2.4 (p77-78).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 71-year-old man takes aspirin, atorvastatin, bisoprolol and nicorandil. He develops persistent painful oral ulcers and later an upper gastrointestinal bleed from a gastric ulcer. Which action is most appropriate?",
    option_a: "Continue nicorandil and add a proton pump inhibitor",
    option_b: "Stop aspirin and continue nicorandil",
    option_c: "Discontinue nicorandil",
    option_d: "Halve the dose of nicorandil",
    correct_option: "C",
    explanation: "Rationale: Nicorandil can cause serious skin, mucosal and eye ulceration, which persists unless treatment is discontinued. Concurrent use with aspirin increases the risk of gastrointestinal ulcers, perforations and haemorrhage. A, B and D keep the drug on board; ulceration persists unless nicorandil is stopped.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.2.2.7 (p79).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 57-year-old man with CCS class I symptoms on optimal medical therapy has an 80% mid-RCA stenosis on angiography. FFR is 0.86 and a stress perfusion scan shows only mild inferior ischaemia. What is the most appropriate management?",
    option_a: "PCI to the RCA to prevent myocardial infarction",
    option_b: "Continue optimal medical therapy, as revascularisation is not expected to add benefit",
    option_c: "CABG",
    option_d: "IVUS-guided stenting of the RCA",
    correct_option: "B",
    explanation: "Rationale: The decision to revascularise depends on symptoms, extent of ischaemia, and extent of disease with FFR where applicable. Patients with no or mild ischaemia do better with OMT, and an FFR >0.8 means no benefit from revascularisation. PCI added to OMT has not been shown to reduce death, MI or repeat revascularisation. A, C and D act on the angiographic appearance alone, the fallacy the CPG calls the \"oculostenotic reflex\".\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.3 (p81), Section 1 (barriers, p14), Recommendation 7.",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 61-year-old man with type 2 diabetes and angina remains symptomatic on optimal medical therapy. Angiography shows three-vessel disease including the proximal LAD, with complex anatomy. His LVEF is 55% and surgical risk is low. Which is the most appropriate approach?",
    option_a: "Discuss at a Heart Team meeting; CABG is likely preferred for survival benefit",
    option_b: "PCI of all three vessels, because it is less invasive and has equal survival",
    option_c: "Continue medical therapy alone, because revascularisation never improves survival",
    option_d: "Stenting of the proximal LAD only, to avoid surgery",
    correct_option: "A",
    explanation: "Rationale: CABG improves survival compared with OMT in patients with left main or three-vessel disease, particularly when the proximal LAD is involved. In patients with multivessel disease, complex anatomy, diabetes and low surgical risk, CABG has better survival benefit. A discussion with the patient and the Heart Team should be encouraged before revascularisation. B is wrong because it ignores diabetes and complexity. C is wrong because CABG improves survival in three-vessel disease. D leaves other diseased vessels untreated.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 8.3 (p81-82), Table 12 (p82), Section 10.1 (p86).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 66-year-old man has stable CCS class II symptoms and a 60% unprotected left main stem stenosis. He asks about the evidence for intervention. Which statement best reflects the CPG?",
    option_a: "Initial PCI plus OMT has been shown to reduce death and MI compared with OMT alone",
    option_b: "A sham-controlled trial showed PCI improves exercise time and angina frequency at 6 weeks",
    option_c: "Revascularisation is only indicated when FFR is above 0.80",
    option_d: "In unprotected left main stenosis >50%, CABG improved survival compared with medical therapy in the CASS registry, so the benefit of surgery is little argued",
    correct_option: "D",
    explanation: "Rationale: In unprotected left main stenosis >50%, revascularisation by CABG was shown to improve survival in the CASS registry, and the benefit of surgery over medical treatment in significant LMS is little argued. A is wrong: recent trials have not shown that initial PCI plus OMT beats OMT alone. B is wrong: in a small randomised sham-controlled trial, PCI did not improve exercise time or angina frequency at 6 weeks. C reverses the FFR logic; benefit is seen with FFR <0.75.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 7.4 (p55-56), Section 7.5.3 (p58), Section 8.3 (p81).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 63-year-old man with type 2 diabetes, stable CAD and NYHA class III heart failure takes metformin and pioglitazone. His HbA1c is 8.1%. Which change is most appropriate?",
    option_a: "Continue pioglitazone and add saxagliptin",
    option_b: "Increase the dose of pioglitazone",
    option_c: "Stop pioglitazone and add an SGLT2 inhibitor",
    option_d: "Continue pioglitazone and add a GLP-1 receptor agonist",
    correct_option: "C",
    explanation: "Rationale: Thiazolidinediones are associated with increased heart failure and should be avoided in NYHA class III and IV. SGLT2 inhibitors and GLP-1 receptor agonists are associated with a reduction in CV composite end-points, and SGLT2 inhibitors reduce the risk of heart failure. Saxagliptin was associated with increased hospitalisation for heart failure, though this was not seen with other agents in the DPP-4 class, so A is wrong. B worsens the problem. D keeps the thiazolidinedione.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 10.1 (p85-86).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 51-year-old woman with exertional chest pain has a positive exercise ECG, but angiography shows normal coronary arteries (<20% narrowing). She asks about her outlook. Which statement is most accurate?",
    option_a: "Her prognosis is benign and no different from that of an asymptomatic woman",
    option_b: "Excess events in women with angina reflect gender bias in treatment rather than baseline risk",
    option_c: "Exercise ECG has higher specificity in women than in men",
    option_d: "Her 5-year risk of MI or CV death is higher than that of asymptomatic women",
    correct_option: "D",
    explanation: "Rationale: In the WISE study, the 5-year rate of MI and CV death was 7.9% in women with angina and normal coronary arteries (Cardiac Syndrome X), versus 2.4% in asymptomatic controls (and 16% with non-obstructive CAD). A is therefore wrong. For B, the CPG suggests the adverse outcomes seem due to baseline risk and clinical characteristics rather than gender-dependent factors or bias in therapy. C is wrong: exercise ECG has higher false-positive rates in women, with a specificity of about 66-78%.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 10.2 (p87-88).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 78-year-old man has CCS class III angina despite optimal medical therapy and moderate-to-severe ischaemia on dobutamine stress echocardiography. He is independent in daily activities. Which is the most appropriate approach?",
    option_a: "Avoid invasive angiography because age >75 is a contraindication",
    option_b: "Offer invasive angiography with similar access to younger patients, and decide on revascularisation at the Heart Team on comorbidity and frailty rather than age alone",
    option_c: "Continue medical therapy alone, because the elderly do not benefit from revascularisation",
    option_d: "Choose PCI over CABG whatever the anatomy, because CABG is too risky in the elderly",
    correct_option: "B",
    explanation: "Rationale: Elderly patients with objective evidence of moderate-to-severe ischaemia or troubling angina despite OMT should have similar access to ICA as younger patients, and elective coronary angiography is safe in this age group (though age >75 predicts contrast-induced nephropathy). Elderly patients derive the same benefit from OMT and revascularisation as younger ones, so management should consider comorbidities and not be based on age alone, with the Heart Team considering local expertise and patient preference. A and C contradict this. D is wrong: in patients >65 with multivessel disease, outcomes were better with CABG than PCI.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 10.3 (p89-90).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 64-year-old man with CKD stage V and multivessel CAD is being considered for revascularisation. Which statement best reflects the evidence in the CPG?",
    option_a: "Observational data show high operative mortality after CABG in advanced CKD (9-12.2% in stage V), and PCI is an alternative that carries a risk of contrast nephropathy",
    option_b: "Randomised trials show CABG is superior to PCI in CKD",
    option_c: "The ISCHEMIA-CKD trial has already shown that a routine invasive strategy is superior to OMT",
    option_d: "A COURAGE subgroup showed a clear benefit of PCI over OMT in CKD",
    correct_option: "A",
    explanation: "Rationale: There is a paucity of data on revascularisation in CKD and no randomised trials comparing strategies. Observational data show a higher risk of serious operative complications, with operative death after CABG of 9-12.2% in CKD stage V, and 3- to 7-fold higher in CKD stage IV-V than non-CKD. PCI may be an alternative but adds the risk of contrast-induced nephropathy. B is wrong because there is no such randomised evidence. C is wrong because the CPG describes ISCHEMIA-CKD as ongoing (it was later reported without benefit on its primary endpoint). D is wrong because the COURAGE CKD subanalysis (about 320 patients with stage III-IV CKD) found no benefit from PCI.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 10.4.2 (p91-92).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 68-year-old man has had CCS class III angina for 8 months despite maximal tolerated anti-anginal therapy. He has had two previous CABG operations, with diffuse small-calibre distal vessels and no remaining graft conduits. Which option is listed in the CPG for this patient?",
    option_a: "Repeat PCI of the diffuse distal vessels",
    option_b: "A third redo CABG",
    option_c: "Enhanced external counterpulsation (EECP)",
    option_d: "Short-acting nifedipine",
    correct_option: "C",
    explanation: "Rationale: Chronic refractory angina is ischaemic chest pain lasting >3 months that is not controlled by maximal medical therapy and/or revascularisation. The usual reasons revascularisation cannot be done are unsuitable anatomy (diffuse small vessels), previous CABG/PCI, lack of graft conduits, a severely depressed LV and extra-cardiac disease. Options include EECP, extracorporeal shockwave myocardial revascularisation, acupuncture, cell therapy and chelation. These are to be considered (IIb, B) only if troubling angina persists despite conventional therapy or conventional therapy is not feasible. A and B are not feasible given the stem. D should be avoided in CAD.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 9 (p84-85).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 63-year-old man with stable CAD, revascularised by PCI 2 years ago, attends a tertiary cardiology clinic. His symptoms and medication have not changed in 2 years and he has no angina. What is the most appropriate plan according to the CPG?",
    option_a: "Annual exercise stress ECG indefinitely",
    option_b: "Repeat invasive angiography at 3 years",
    option_c: "Continue 3-6 monthly specialist review",
    option_d: "Discharge from the specialist clinic to general outpatient or Family Medicine follow-up on optimal medical therapy, with referral back if his clinical condition changes",
    correct_option: "D",
    explanation: "Rationale: All patients with stable CAD and no change in symptoms and medication over 1-2 years can be discharged from the speciality cardiac clinic. When there is a change in clinical condition they should be referred to tertiary centres, and can return to general outpatient clinics with Family Medicine Specialists when stable. There are no data that follow-up stress testing improves outcome in asymptomatic patients, so A and B are wrong. C is not required.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 11 (p93-94), Recommendation 8 (p95).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "Four patients with stable CAD attend routine follow-up. In which patient is repeat exercise stress ECG or pharmacological stress imaging most justified?",
    option_a: "A 66-year-old man whose echocardiogram shows worsening LV function, with new exertional breathlessness",
    option_b: "A 60-year-old woman who is asymptomatic and wants reassurance at her annual review",
    option_c: "A 58-year-old man who is asymptomatic and has just completed one year of follow-up",
    option_d: "A 70-year-old woman whose LDL-C is now 1.6 mmol/L",
    correct_option: "A",
    explanation: "Rationale: A repeat exercise stress ECG (or pharmacological stress) may be warranted (IIa, C) if there is a change in symptoms (worsening angina or effort tolerance), a change in clinical condition such as worsening LV function on echocardiogram and/or heart failure, or development of malignant arrhythmias. The benefit of routine periodic testing in the asymptomatic patient with stable CAD is unknown, so B and C are not justified. D is a good lipid result and not an indication for testing.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 11 (p93-94), Section 6.2.1 (p43).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 66-year-old man with stable CAD (PCI 3 years ago, now asymptomatic, not on dual antiplatelet therapy) is scheduled for elective intraperitoneal surgery, an intermediate-risk operation. He climbs two flights of stairs without symptoms. An echocardiogram 8 months ago was normal and his condition has not changed. What is the most appropriate pre-operative cardiac assessment?",
    option_a: "Dobutamine stress echocardiography",
    option_b: "Resting ECG compared with previous ECGs, then proceed without further cardiac testing",
    option_c: "Invasive coronary angiography",
    option_d: "Coronary CT angiography",
    correct_option: "B",
    explanation: "Rationale: A resting ECG should be performed in all patients and compared with previous ECGs (I, C). If the patient is asymptomatic with good effort tolerance (>4 METs, about housework, sweeping floors or climbing one flight of stairs), no further investigation is necessary (IIa, B). If a previous echocardiogram within 12 months was normal and symptoms have not changed, a repeat is not warranted (I, C). Non-invasive stress testing may be considered only if functional capacity is poor (<4 METs), with ≥1 clinical risk factor, in intermediate- or high-risk surgery (IIb, C), so A, C and D are not indicated for him.\nReference: Malaysian CPG Stable Coronary Artery Disease 2018 (2nd Ed.), Section 12 (p95-96).",
    tag: "CPG Stable CAD 2018"
  },
  {
    question_text: "A 47-year-old man with dilated cardiomyopathy had a baseline LVEF of 32% when he first presented with symptomatic heart failure. After 12 months of treatment with all four foundational medications he is asymptomatic. Repeat echocardiography shows an LVEF of 46%. Which is the most appropriate classification of his heart failure?",
    option_a: "Heart failure with reduced ejection fraction",
    option_b: "Heart failure with mildly reduced ejection fraction",
    option_c: "Heart failure with preserved ejection fraction",
    option_d: "Heart failure with improved ejection fraction",
    correct_option: "D",
    explanation: "Rationale: HFimpEF requires a baseline LVEF of 40% or less, a rise of at least 10 points from baseline, and a second measurement above 40%. Here 32% rose to 46% (a 14-point rise), so he qualifies. B is the trap: 46% falls numerically in the 41-49% range, but HFmrEF describes patients classified by their current LVEF without this history. A is wrong because the LVEF is now above 40%. C is wrong because the LVEF is below 50% and the history of reduced EF is preserved in the label.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 3 (Table 8); Section 4.4; Section 12.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 60-year-old woman with HFrEF is comfortable at rest. She becomes breathless after walking slowly for 50 metres on level ground and has to stop and rest. She can sit and chat without symptoms. Which NYHA functional class does she belong to?",
    option_a: "Class I",
    option_b: "Class II",
    option_c: "Class III",
    option_d: "Class IV",
    correct_option: "C",
    explanation: "Rationale: NYHA III is marked limitation of physical activity: comfortable at rest, but less than ordinary activity (such as slow level walking) causes symptoms. The CPG attaches a 1-year mortality of 15-20% to this class. A has no limitation. B has only slight limitation with ordinary activity. D means symptoms at rest or with any activity.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 3, Table 9.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 68-year-old woman attends a primary care clinic with 2 months of exertional dyspnoea and ankle swelling. A point-of-care NT-proBNP is 85 pg/ml. How should this result be interpreted?",
    option_a: "It confirms heart failure",
    option_b: "Heart failure is unlikely",
    option_c: "It is indeterminate and BNP must also be measured",
    option_d: "Natriuretic peptides are not useful in primary care",
    correct_option: "B",
    explanation: "Rationale: In the community setting the rule-out values are NT-proBNP below 125 pg/ml and BNP below 35 pg/ml. 85 pg/ml is well below that, so heart failure is unlikely. A is wrong because a low value does not confirm HF. C is wrong because BNP and NT-proBNP have similar diagnostic accuracy and a second test is not required. D is wrong because the CPG endorses point-of-care NP testing as a useful rule-out test in primary care.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 6.2; Table 12.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 52-year-old man with a BMI of 41 kg/m2 presents with orthopnoea, exertional dyspnoea and bilateral leg oedema. Echocardiography shows an LVEF of 30%. His NT-proBNP is only 140 pg/ml. Which factor best explains the unexpectedly low natriuretic peptide level?",
    option_a: "Obesity",
    option_b: "Atrial fibrillation",
    option_c: "Renal impairment",
    option_d: "Advanced age",
    correct_option: "A",
    explanation: "Rationale: Natriuretic peptide levels are reduced in obesity, which can cause a falsely low result even when HF is present. B, C and D all raise natriuretic peptides: AF increases levels even without HF, levels increase with age, and levels rise with renal impairment.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 6.2.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "An 81-year-old woman presents to the emergency department with acute dyspnoea. NT-proBNP results from different samples are listed below. Using the CPG cut-offs, which value indicates that acute heart failure is possible?",
    option_a: "900 pg/ml",
    option_b: "350 pg/ml",
    option_c: "2,400 pg/ml",
    option_d: "450 pg/ml",
    correct_option: "C",
    explanation: "Rationale: In the emergency setting, NT-proBNP below 300 pg/ml rules out acute HF, and the \"HF possible\" thresholds are age-adjusted: above 450 (under 50 years), above 900 (50-75 years) and above 1,800 (over 75 years). At 81 years, 2,400 exceeds 1,800. A is the threshold for 50-75 year olds. D is the threshold for under-50s. B lies between the rule-out and rule-in values and is not diagnostic.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 6.2; Table 12.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A medical officer is teaching a student about clinical signs in a 74-year-old man with chronic HF. Which statement is most accurate?",
    option_a: "A raised JVP and a third heart sound are the more specific signs of HF and are associated with adverse outcomes",
    option_b: "A fourth heart sound is typical of HF in atrial fibrillation",
    option_c: "The absence of crepitations, oedema and a raised JVP excludes elevated filling pressures",
    option_d: "A normal chest radiograph excludes pulmonary congestion",
    correct_option: "A",
    explanation: "Rationale: The CPG states that an elevated JVP and a third heart sound are the more specific signs and carry adverse prognostic value. B is wrong because the fourth heart sound reflects atrial contraction, is more frequent in HFpEF and is absent in AF. C is wrong because congestion signs were absent in 42% of patients with PCWP of 22 mmHg or more. D is wrong because about 20% of patients with congestion have a normal chest X-ray.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 6.1; Section 9.1.2.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 72-year-old obese, hypertensive woman in sinus rhythm has exertional dyspnoea. Echocardiography shows an LVEF of 58% with no significant valve disease. HFpEF is suspected. Which additional echocardiographic finding supports the diagnosis?",
    option_a: "Mean E/e' ratio of 9",
    option_b: "Left atrial volume index of 38 ml/m2",
    option_c: "Tricuspid regurgitation velocity of 2.2 m/s",
    option_d: "LV mass index of 80 g/m2",
    correct_option: "B",
    explanation: "Rationale: Supportive features include a left atrial volume index above 34 ml/m2 (above 40 in AF), E/e' of 15 or more, TR velocity above 2.8 m/s, and LV mass index above 95 g/m2 in women (115 in men). Only B exceeds its threshold. A and C are below the cut-offs, and D is below the female LV mass threshold.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 13.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 66-year-old man with HFrEF (LVEF 30%) has been stable on foundational therapy for a year. Two weeks ago he was started on etoricoxib 90 mg daily for knee osteoarthritis. He now has a 3.2 kg weight gain over 3 days, orthopnoea and bilateral leg oedema. BP is 126/78 mmHg, heart rate 84/min and SpO2 96% on air. Which is the most appropriate management?",
    option_a: "Stop the β-blocker",
    option_b: "Add verapamil",
    option_c: "Continue etoricoxib and add a thiazide diuretic",
    option_d: "Stop the COX-2 inhibitor and treat the congestion with a loop diuretic",
    correct_option: "D",
    explanation: "Rationale: NSAIDs and COX-2 inhibitors cause sodium and water retention and are a recognised precipitant of decompensation (the \"O\" in CHAMPION). The precipitant should be withdrawn and congestion treated with a loop diuretic, with a non-NSAID analgesic strategy arranged. A is wrong because β-blockers are continued unless hypotension or significant bradycardia is present. B is wrong because verapamil is negatively inotropic and itself a precipitant. C leaves the cause in place.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 5 (Table 11); Section 9.2 (precipitants).",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 57-year-old man had an anterior myocardial infarction 4 months ago. Echocardiography shows an LVEF of 35%. He has no symptoms and is NYHA class I. Which is the most appropriate pharmacological strategy?",
    option_a: "ACE inhibitor alone",
    option_b: "Loop diuretic and digoxin",
    option_c: "ACE inhibitor, β-blocker and SGLT2 inhibitor",
    option_d: "No treatment until symptoms develop",
    correct_option: "C",
    explanation: "Rationale: He is Stage B (structural disease, no symptoms). For LVEF below 40% irrespective of symptoms, the evidence supports an ACE-I and β-blocker, and SGLT2 inhibitors reduce HF hospitalisation regardless of diabetes status. A omits two drug classes with evidence. B uses symptomatic or rate-control agents that have no role in asymptomatic LV dysfunction. D is wrong because early treatment prevents progression to overt HF.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 7.2.2; Key Recommendations #2.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 51-year-old man has a dilated left ventricle with an LVEF of 28%. He has drunk 4-5 standard drinks nightly for 15 years and no other cause of cardiomyopathy is found. Which is the most appropriate alcohol advice?",
    option_a: "Limit intake to 1-2 drinks per day",
    option_b: "Abstain completely",
    option_c: "Drink only at weekends",
    option_d: "Switch to low-alcohol beer in unlimited amounts",
    correct_option: "B",
    explanation: "Rationale: Patients with alcoholic cardiomyopathy should abstain. The CPG also notes that light-to-moderate drinking cannot be recommended as a way to lower HF risk in the absence of large randomised trials, and advises abstinence. Heavy binge drinking can cause supraventricular arrhythmias, especially AF, and acute decompensation. A, C and D all continue exposure.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 7.1.1; Section 8.2.1.5.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 63-year-old man with HFrEF (LVEF 30%) has polysomnography showing central sleep apnoea with Cheyne-Stokes respiration. Which intervention is contraindicated?",
    option_a: "Optimisation of guideline-directed medical therapy",
    option_b: "Avoidance of alcohol and sedatives at night",
    option_c: "Weight loss and moderate exercise",
    option_d: "Adaptive servo-ventilation",
    correct_option: "D",
    explanation: "Rationale: In HF with CSA, adaptive servo-ventilation was associated with higher all-cause and cardiovascular mortality, mainly sudden cardiac death, and is contraindicated (Class III). Optimising HF therapy is the main strategy for CSA, and lifestyle measures are appropriate, so A, B and C are acceptable.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 8.2.1.7; Section 7.1.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 59-year-old man with NYHA II HFrEF is euvolaemic, with normal renal function and serum sodium of 138 mmol/L. He asks how much fluid he should drink each day. Which advice is most consistent with the CPG?",
    option_a: "Individualise intake, with a general recommendation of 1-1.5 litres per day",
    option_b: "Restrict strictly to 500 ml per day",
    option_c: "No advice is needed because fluid has no effect",
    option_d: "Drink 3 litres per day to protect the kidneys",
    correct_option: "A",
    explanation: "Rationale: The CPG recommends individualised fluid intake with a general target of 1-1.5 litres per day when renal function is normal. Evidence for restriction is mixed, and excessive restriction can worsen outcomes, so B is too severe. C ignores the recommendation. D would risk congestion.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 8.4.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 64-year-old woman with HFrEF weighs herself daily. Over 3 days her weight has risen by 2.5 kg and she has mild ankle swelling. Her breathlessness is unchanged. Which is the most appropriate self-management advice in line with the CPG?",
    option_a: "Wait for the routine appointment in 3 months",
    option_b: "Stop her diuretic because the swelling is not related to it",
    option_c: "Adjust her furosemide dose with temporary fluid restriction until dry weight is regained, and seek help if she does not respond or worsens",
    option_d: "Double her β-blocker dose",
    correct_option: "C",
    explanation: "Rationale: A weight gain of more than 2 kg in 3 days is a sign of worsening HF. The CPG advises educated patients to self-adjust their diuretic with fluid restriction until dry weight is regained, and to seek medical help immediately if symptoms worsen or they fail to respond. A delays care. B removes the treatment for fluid overload. D adds negative inotropy to a congested patient.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 8.1; Section 10.1.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 59-year-old man with stable NYHA II HFrEF asks his rehabilitation physician about exercise. Which statement best reflects the CPG?",
    option_a: "Exercise training is safe in stable HF, reduces HF hospitalisations in HFrEF and improves quality of life",
    option_b: "Exercise training usually normalises LVEF",
    option_c: "Exercise is contraindicated in NYHA III",
    option_d: "In HFpEF, high-intensity interval training is superior to moderate continuous training",
    correct_option: "A",
    explanation: "Rationale: Exercise training is safe in stable HF and in HFrEF reduces overall and HF-specific hospitalisations, with better HRQoL and exercise capacity. B is wrong because cardiac function did not obviously improve in most studies, though some small studies showed reverse remodelling. C is wrong because aerobic exercise is encouraged in NYHA I-III. D is wrong because HIIT gave no advantage over guideline-based exercise in HFpEF.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 8.2; Section 13.3.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 56-year-old man with NYHA II HFrEF takes isosorbide dinitrate and bisoprolol. He has erectile dysfunction, believes his β-blocker is the cause and wants to stop it. He also asks about buying sildenafil. Which is the most appropriate advice?",
    option_a: "Sildenafil is safe with his nitrate",
    option_b: "Avoid phosphodiesterase-5 inhibitors with nitrates, and continue the β-blocker after counselling",
    option_c: "Stop bisoprolol to improve erectile function",
    option_d: "Use traditional potency herbs instead",
    correct_option: "B",
    explanation: "Rationale: Nitrates interact dangerously with PDE-5 inhibitors. β-blockers may contribute to erectile dysfunction, but patients should remain adherent because of their prognostic benefit. The CPG also warns against traditional potency enhancers. A, C and D each carry avoidable risk.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 8.2.1.6.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 29-year-old woman has dilated cardiomyopathy with an LVEF of 28% and NYHA III symptoms. She asks about contraception. Which is the most appropriate advice?",
    option_a: "Pregnancy is acceptable with close follow-up",
    option_b: "Condoms alone are adequate",
    option_c: "Defer contraception counselling until she is pregnant",
    option_d: "Advise against pregnancy and recommend Tier I contraception such as an intrauterine device or implant",
    correct_option: "D",
    explanation: "Rationale: Patients with LVEF below 30% or NYHA III-IV should be advised against pregnancy because of high maternal mortality. Tier I methods (permanent sterilisation and long-acting reversible contraception) have typical-use failure rates below 1% and are recommended in women with cardiovascular disease. A contradicts the advice. B relies on a method with a higher typical-use failure rate. C delays counselling that should begin early.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 8.2.1.6.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 62-year-old man with an LVEF of 20% has had 5 days of worsening dyspnoea. BP is 82/50 mmHg. He has cool, clammy peripheries, capillary refill of 4 seconds, low urine output, a raised JVP and bibasal crepitations. Which is the most appropriate initial vasoactive therapy?",
    option_a: "Intravenous nitroglycerin",
    option_b: "Noradrenaline infusion",
    option_c: "Adrenaline infusion",
    option_d: "Intravenous morphine",
    correct_option: "B",
    explanation: "Rationale: He is \"cold and wet\" with SBP below 90 mmHg. The CPG recommends noradrenaline as the initial inotrope/vasopressor, adding dopamine if BP remains low. A and D are to be avoided until BP has stabilised (vasodilators and morphine lower BP). C is wrong because adrenaline in HF with cardiogenic shock is associated with increased mortality and should be avoided.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 9.1.1 (Table 13); Section 9.2.1.4; Section 9.2.1.5.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 70-year-old woman with acute decompensated HF is dyspnoeic but has a SpO2 of 97% on room air. Which is the most appropriate oxygen management?",
    option_a: "High-flow oxygen by non-rebreathing mask",
    option_b: "Oxygen by nasal prongs at 2 l/min",
    option_c: "No supplemental oxygen",
    option_d: "Immediate CPAP",
    correct_option: "C",
    explanation: "Rationale: Supplemental oxygen is recommended when SpO2 is below 94%, titrated to 95% or more. Routine oxygen in non-hypoxic patients is not recommended (Class III) because it can cause vasoconstriction and a fall in cardiac output. A and B give oxygen she does not need. D is for respiratory distress with hypoxaemia despite high-flow oxygen.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 9.2.1.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 68-year-old man with acute pulmonary oedema has a respiratory rate of 32/min and SpO2 of 88% despite oxygen by non-rebreathing mask. BP is 150/90 mmHg and he is alert. What is the most appropriate next step?",
    option_a: "Early CPAP or non-invasive pressure support ventilation",
    option_b: "Immediate intubation",
    option_c: "Continue the same oxygen device and reassess in 4 hours",
    option_d: "Intravenous morphine to reduce the respiratory rate",
    correct_option: "A",
    explanation: "Rationale: CPAP or NIPSV should be considered early in patients with respiratory distress (RR above 25/min, SpO2 below 90%) despite high-flow oxygen. There is no significant outcome difference between CPAP and bilevel, so choice depends on equipment and expertise. B is reserved for failure of NIV or exhaustion. C delays rescue. D is not recommended routinely and risks respiratory depression.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 9.2.1.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 72-year-old man with known HFrEF takes oral furosemide 40 mg once daily. He is admitted with acute decompensated HF and clinical congestion. SBP is 130 mmHg. What initial intravenous furosemide regimen is most appropriate?",
    option_a: "20 mg once",
    option_b: "40 mg once daily",
    option_c: "100 mg once daily",
    option_d: "50 mg twice daily",
    correct_option: "D",
    explanation: "Rationale: For patients already on diuretics, a reasonable initial strategy is a daily intravenous dose of 2.5 times the previous oral dose (mg for mg), given as twice-daily boluses: 2.5 x 40 = 100 mg/day, so 50 mg twice daily. A is the diuretic-naive dose (20-40 mg). B is too low. C has the right daily total but the wrong dosing pattern.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 9.2.1.2; Table 14.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "Six hours after receiving intravenous furosemide 40 mg for acute HF, a patient has passed 400 ml of urine. BP is 120/70 mmHg and renal function is stable. He remains congested. What is the most appropriate next step?",
    option_a: "Wait until the next scheduled dose",
    option_b: "Exclude urinary retention and increase the intravenous loop diuretic dose",
    option_c: "Convert to oral furosemide",
    option_d: "Replace furosemide with dobutamine",
    correct_option: "B",
    explanation: "Rationale: An adequate response is urine output above 100 ml/hour in the first 6 hours. Less than 600 ml in 6 hours is inadequate, after urinary retention is excluded. Up-titrating the loop diuretic dose is the preferred strategy and there is no need to wait for the next scheduled dose. A delays treatment. C gives poor absorption in a congested patient. D is for hypoperfusion, not diuretic resistance.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 9.2.1.2.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 77-year-old woman has acute pulmonary oedema. BP is 168/92 mmHg. She has known severe calcific aortic stenosis with an aortic valve area of 0.7 cm2. Which therapy is contraindicated?",
    option_a: "Intravenous nitroglycerin",
    option_b: "Intravenous furosemide",
    option_c: "Supplemental oxygen if SpO2 is below 94%",
    option_d: "CPAP if respiratory distress persists",
    correct_option: "A",
    explanation: "Rationale: Nitrates are contraindicated in severe valvular stenosis (Class III), and extreme caution is needed in aortic and mitral stenosis, because preload reduction can precipitate hypotension. Diuretics, oxygen when indicated, and non-invasive ventilation remain appropriate.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 9.2.1.3; Section 14.2.5.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 58-year-old man is admitted with a first presentation of HFrEF. On day 2 he still has basal crepitations and peripheral oedema. SBP is 112 mmHg, potassium 4.2 mmol/L and creatinine is stable. His diuretic dose has been unchanged for 24 hours and he is off vasodilators. Which medication should NOT be started until he is decongested?",
    option_a: "Spironolactone 12.5 mg",
    option_b: "Ramipril 2.5 mg",
    option_c: "Bisoprolol 1.25 mg",
    option_d: "Dapagliflozin 10 mg",
    correct_option: "C",
    explanation: "Rationale: β-blockers should be started when the patient is no longer congested (clear lungs, no oedema), because initiation in a congested patient can worsen congestion. MRA can be started within 24-48 hours, RAS blockers when SBP is 100 mmHg or more, and SGLT2 inhibitors once stabilised (stable diuretic dose, SBP above 100). The aim is to be on all foundational drugs at discharge.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 9.3.1.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 55-year-old woman with NYHA III HFrEF takes enalapril 10 mg twice daily with SBP of 120 mmHg and eGFR of 70. Sacubitril/valsartan is planned. Her last enalapril dose was taken at 8 am on Monday. When is the earliest that the first dose of sacubitril/valsartan can be given?",
    option_a: "Monday 8 pm",
    option_b: "Tuesday 8 am",
    option_c: "Tuesday 12 noon",
    option_d: "Tuesday 8 pm",
    correct_option: "D",
    explanation: "Rationale: An ACE inhibitor must be stopped at least 36 hours before starting an ARNI to reduce the risk of angioedema. Monday 8 am plus 36 hours is Tuesday 8 pm. A, B and C fall short of 36 hours. No washout is needed when switching from an ARB.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 9.3.1.1; Section 10.1.2.2.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 69-year-old man reaches dry weight on intravenous furosemide 40 mg twice daily and is ready for discharge. Which discharge plan is most appropriate?",
    option_a: "Oral furosemide 40 mg twice daily, with review within 2 weeks",
    option_b: "Oral furosemide 20 mg once daily because dyspnoea has resolved",
    option_c: "Stop the diuretic and review in 3 months",
    option_d: "Oral furosemide 10 mg daily",
    correct_option: "A",
    explanation: "Rationale: The oral diuretic dose needed is generally higher than the intravenous dose, and a mg-to-mg conversion is a reasonable guide. It is prudent to discharge on the same dose as in hospital and reduce cautiously after assessing congestion, because residual congestion strongly predicts readmission. Early follow-up within 2 weeks is advised. B, C and D reduce the dose on the basis of symptoms alone, which are unreliable markers of decongestion.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 9.3.1.1; Section 9.3.1.4.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 60-year-old man with HFrEF (LVEF 30%) and NYHA III symptoms has haemoglobin 11.5 g/dl, ferritin 150 ng/ml and transferrin saturation of 15%. Which statement is correct?",
    option_a: "Ferritin of 150 ng/ml excludes iron deficiency",
    option_b: "He is iron deficient and intravenous iron reduces HF hospitalisation but not cardiovascular death",
    option_c: "He is iron deficient and intravenous iron reduces cardiovascular death",
    option_d: "Iron deficiency is defined only when ferritin is below 100 ng/ml",
    correct_option: "B",
    explanation: "Rationale: In HF, iron deficiency is ferritin below 100 ng/ml, or ferritin 100-299 ng/ml with transferrin saturation below 20%. He meets the second definition. In hospitalised patients with HF, intravenous iron improved symptoms and reduced HF hospitalisation but did not reduce cardiovascular death. A and D apply the first criterion only. C overstates the benefit.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 9.3.1.4.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 61-year-old man with HFrEF develops a persistent dry cough on ramipril. Potassium and creatinine are normal and BP is 124/76 mmHg. What is the most appropriate management?",
    option_a: "Add an ARB to ramipril",
    option_b: "Stop all RAS blockade",
    option_c: "Switch to a different ACE inhibitor",
    option_d: "Switch to an ARB",
    correct_option: "D",
    explanation: "Rationale: Cough is the commonest form of ACE-I intolerance, and an ARB is indicated in ACE-I intolerant HFrEF. A is wrong because routine combined ACE-I and ARB therapy increases hypotension, hyperkalaemia and renal dysfunction (Class III). B loses proven benefit. C is wrong because cough is a class effect and there are no differences among ACE inhibitors.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.1.2.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 63-year-old woman with HFrEF starts ramipril. Baseline creatinine is 98 umol/L. At day 10 it is 121 umol/L. Potassium is 5.1 mmol/L, BP is 112/70 mmHg and she feels well. What is the most appropriate action?",
    option_a: "Stop ramipril",
    option_b: "Halve the dose of ramipril",
    option_c: "Continue ramipril and monitor renal function periodically",
    option_d: "Add a potassium binder and stop ramipril",
    correct_option: "C",
    explanation: "Rationale: Creatinine may rise by up to 30% (or eGFR fall by 25%) at 7-14 days after starting an ACE-I or ARB. No dose change is needed if the rise stabilises below 30% and potassium is below 5.5 mmol/L. Her rise is 23% with potassium of 5.1. Other causes of deterioration should be excluded, and renal function should be monitored regularly.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.1.2.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 54-year-old man with NYHA III HFrEF takes ramipril, bisoprolol, spironolactone and dapagliflozin. His clinic BP is 96/60 mmHg. His doctor considers switching to sacubitril/valsartan. Which is the most appropriate plan?",
    option_a: "Continue ramipril because ARNI should not be started when SBP is below 100 mmHg",
    option_b: "Stop ramipril today and start sacubitril/valsartan tomorrow",
    option_c: "Add sacubitril/valsartan to ramipril",
    option_d: "Stop ramipril, wait 36 hours, then start sacubitril/valsartan 49/51 mg",
    correct_option: "A",
    explanation: "Rationale: ARNI should not be initiated if SBP is below 100 mmHg. B and C are unsafe: an ACE-I must be stopped at least 36 hours before ARNI, and the two must never be combined (angioedema). D respects the washout but ignores the blood pressure limit. (Once on ARNI, NT-proBNP rather than BNP should be used, as BNP may be spuriously raised.)\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.1.2.2.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A pharmacist notes that a patient with HFrEF has been prescribed metoprolol tartrate. Which statement is correct?",
    option_a: "Metoprolol tartrate is the evidence-based formulation in HF",
    option_b: "The evidence-based formulation is metoprolol succinate, which is unavailable in Malaysia; only the tartrate form is available",
    option_c: "Nebivolol reduces all-cause mortality in HFrEF",
    option_d: "β-blockers are only indicated in NYHA III-IV",
    correct_option: "B",
    explanation: "Rationale: The CPG footnote states that the evidence-based form of metoprolol in HF is succinate (CR/XL), which is not available in Malaysia; only metoprolol tartrate is. Bisoprolol and carvedilol are the other evidence-based agents. C is wrong because nebivolol reduced the composite of all-cause mortality and CV hospitalisation, not all-cause mortality alone. D is wrong because β-blockers improve outcomes regardless of NYHA class.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.1.3; Table 3 footnotes.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 60-year-old man with HFrEF has developed painful gynaecomastia on spironolactone 25 mg daily. Potassium is 4.6 mmol/L and eGFR is 55 ml/min/1.73m2. What is the most appropriate management?",
    option_a: "Stop the MRA with no replacement",
    option_b: "Switch to finerenone",
    option_c: "Add tamoxifen",
    option_d: "Switch to eplerenone",
    correct_option: "D",
    explanation: "Rationale: Spironolactone can cause gynaecomastia in men, and the incidence is lower with eplerenone because it is more selective for aldosterone blockade. A removes a drug with mortality benefit. B is wrong because finerenone's evidence is in type 2 diabetes with CKD (reduced HF hospitalisation), not as a substitute in HFrEF. C treats the side effect rather than removing the cause.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.1.4.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 59-year-old non-diabetic man with HFrEF starts dapagliflozin 10 mg daily. At 2 weeks eGFR has fallen from 62 to 56 ml/min/1.73m2. He is well, euvolaemic and normotensive. What is the most appropriate management?",
    option_a: "Continue dapagliflozin and monitor renal function",
    option_b: "Stop dapagliflozin",
    option_c: "Halve the dose",
    option_d: "Replace it with a thiazide diuretic",
    correct_option: "A",
    explanation: "Rationale: A modest initial fall in eGFR is expected and should not lead to discontinuation, because SGLT2 inhibitors are renoprotective in the long term. The benefit in HFrEF applies irrespective of diabetes status. B and C are unnecessary. D has no role in this context.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.1.5.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "Which patient with HFrEF is the best candidate for adding ivabradine?",
    option_a: "AF with a heart rate of 96/min, LVEF 30%, HF admission 4 months ago",
    option_b: "Sinus rhythm at 58/min on bisoprolol 10 mg, LVEF 30%",
    option_c: "Sinus rhythm at 78/min, LVEF 30%, HF admission 5 months ago, on an ACE inhibitor, maximally tolerated β-blocker and MRA",
    option_d: "Sinus rhythm at 82/min, LVEF 45%, NYHA II, no HF admission",
    correct_option: "C",
    explanation: "Rationale: Ivabradine reduced CV death and HF hospitalisation in patients still symptomatic on optimal therapy with LVEF of 35% or less, an HF admission in the past 12 months, sinus rhythm and a heart rate of 70/min or more. Every effort should first be made to achieve target or maximally tolerated β-blocker doses. A is wrong because ivabradine is effective only in sinus rhythm. B has a heart rate below 70/min. D has an LVEF above 35% and no recent admission.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.1.6.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "Which statement about digoxin in HF is most accurate?",
    option_a: "It improves survival in HFrEF",
    option_b: "It may reduce hospitalisation in symptomatic HFrEF despite optimal therapy, but has no survival benefit",
    option_c: "A loading dose is required in chronic HF",
    option_d: "Serum levels should be used to titrate the dose",
    correct_option: "B",
    explanation: "Rationale: Digoxin may be considered to relieve symptoms and lower hospitalisation in symptomatic HFrEF already on ACE-I/ARB, β-blocker and MRA, but it has no survival benefit. A is wrong. C is wrong because no loading dose is required in chronic HF. D is wrong because levels are used to assess toxicity, not to guide dose adjustment; target levels are low (0.5-0.8 ng/ml).\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.1.9.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 66-year-old man with HFrEF (LVEF 28%) has persistent AF with a controlled ventricular rate of 76/min. He had an HF hospitalisation 4 months ago and remains NYHA III on an ACE inhibitor, maximally tolerated bisoprolol, spironolactone and dapagliflozin. Which additional agent may be considered to reduce cardiovascular death or HF hospitalisation?",
    option_a: "Ivabradine",
    option_b: "Diltiazem",
    option_c: "Dronedarone",
    option_d: "Vericiguat",
    correct_option: "D",
    explanation: "Rationale: Vericiguat may be considered in NYHA II-IV patients with worsening HF despite optimal therapy with a RAS blocker, β-blocker and MRA, and it reduced CV mortality or HF hospitalisation. A is wrong because ivabradine works in sinus rhythm only. B is wrong because non-dihydropyridine CCBs should be avoided in HFrEF. C is an antiarrhythmic, not a drug with HF outcome benefit.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.1.7; Section 10.1.12.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 58-year-old man with HFrEF remains hypertensive at 160/95 mmHg despite maximally tolerated foundational therapy. Which calcium channel blocker is the most appropriate add-on?",
    option_a: "Diltiazem",
    option_b: "Verapamil",
    option_c: "Amlodipine",
    option_d: "Nifedipine",
    correct_option: "C",
    explanation: "Rationale: Diltiazem, verapamil and nifedipine should be avoided in HFrEF (Class III), as they worsen HF outcomes. Amlodipine and felodipine may be considered for other indications such as persistent hypertension despite optimal therapy.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.1.12.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 66-year-old man with HFrEF and atrial fibrillation has rheumatic moderate-to-severe mitral stenosis. He has no contraindication to anticoagulation. Which anticoagulant is most appropriate?",
    option_a: "Warfarin",
    option_b: "Apixaban",
    option_c: "Dabigatran",
    option_d: "Aspirin plus clopidogrel",
    correct_option: "A",
    explanation: "Rationale: DOACs are recommended over warfarin in HF with AF, except in moderate or severe mitral stenosis and mechanical prosthetic valves, where a vitamin K antagonist is used. B and C are DOACs and therefore not appropriate here. D is wrong because antiplatelet therapy is not an adequate substitute for anticoagulation in AF.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.1.10; Section 14.2.5.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 54-year-old man with HFrEF (LVEF 30%) has had symptomatic AF with palpitations for 5 months. He is already on optimal medical therapy. Which is the most appropriate approach?",
    option_a: "Rate control with verapamil",
    option_b: "Rhythm control using amiodarone or catheter ablation",
    option_c: "Flecainide for rhythm control",
    option_d: "Digoxin as monotherapy for rate control",
    correct_option: "B",
    explanation: "Rationale: In AF of under 1 year's duration, rhythm control is preferred. Amiodarone is the preferable antiarrhythmic in HFrEF because others are associated with worse outcomes, and catheter ablation has a higher chance of rhythm control than drugs and is more beneficial when done within 1 year of AF diagnosis. A is wrong because verapamil should be avoided in HFrEF. C is wrong because most other antiarrhythmics are contraindicated in HF. D is wrong because digoxin alone was associated with increased mortality.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.1.11.1; Section 14.4.1.3.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 41-year-old woman has an LVEF of 33%. Coronary angiography is normal and no other cause of cardiomyopathy is found. A 24-hour Holter shows frequent monomorphic PVCs with a burden of 24%. Which is the most appropriate definitive treatment?",
    option_a: "Flecainide",
    option_b: "Amiodarone alone",
    option_c: "Primary-prevention ICD",
    option_d: "Catheter ablation",
    correct_option: "D",
    explanation: "Rationale: PVC-induced cardiomyopathy is suspected with a burden above 10% and usually above 20%. Catheter ablation is recommended for cardiomyopathy caused by frequent monomorphic PVCs, and is preferred because most antiarrhythmic drugs are contraindicated or pro-arrhythmic in HF. Foundational HF therapy should also be started. A is wrong because most antiarrhythmic drugs are contraindicated or pro-arrhythmic in HF. B is a drug option but not the definitive treatment. C does not treat the cause.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 14.4.1.4.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 58-year-old man had an anterior myocardial infarction 5 weeks ago, treated with PCI. His LVEF is 28% and he is NYHA II on optimal medical therapy. There has been no ventricular arrhythmia. Which statement about ICD implantation is most appropriate?",
    option_a: "Implant an ICD now because the LVEF is 35% or less",
    option_b: "Implant a CRT-D now",
    option_c: "Continue optimal medical therapy and reassess LVEF at least 40 days after MI and 3 months after revascularisation",
    option_d: "An ICD is never indicated after myocardial infarction",
    correct_option: "C",
    explanation: "Rationale: For primary prevention in ischaemic cardiomyopathy, ICD is considered at least 40 days after MI and at least 3 months after revascularisation, with LVEF of 35% or less and NYHA II-III. He is only 5 weeks post-MI, so the LVEF should be reassessed on optimal therapy first. A ignores the timing. B has no indication (no wide QRS is stated). D is wrong because ICD is Class I in the right setting.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.3.2.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "Which patient with HFrEF on optimal medical therapy is most likely to benefit from cardiac resynchronisation therapy?",
    option_a: "Sinus rhythm, LVEF 30%, LBBB with QRS 160 ms, NYHA III",
    option_b: "AF, LVEF 30%, LBBB with QRS 160 ms, NYHA III",
    option_c: "Sinus rhythm, LVEF 30%, RBBB with QRS 125 ms, NYHA III",
    option_d: "Sinus rhythm, LVEF 45%, LBBB with QRS 150 ms, NYHA II",
    correct_option: "A",
    explanation: "Rationale: CRT criteria are sinus rhythm, LVEF 35% or less, LBBB, and QRS of 150 ms or more (Class I, A) or 120-149 ms (Class IIa, B), with NYHA II-III despite optimal therapy. Only A meets all of them. B is less likely to respond because patients with AF are less likely to benefit. C does not have LBBB morphology. D has an LVEF above 35%.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 10.3.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 69-year-old non-diabetic, obese woman has HFpEF with an LVEF of 60% and two HF admissions in the past year. She is hypertensive and now euvolaemic on a loop diuretic. Which drug class has the strongest guideline support to reduce HF hospitalisation and cardiovascular mortality?",
    option_a: "β-blocker",
    option_b: "ACE inhibitor",
    option_c: "Digoxin",
    option_d: "SGLT2 inhibitor",
    correct_option: "D",
    explanation: "Rationale: SGLT2 inhibitors are the only class with Class I, A support in HFpEF, reducing HF hospitalisation and CV mortality regardless of diabetes. A is wrong because there are no good data showing β-blocker benefit in HFpEF. B has only Class IIb support (reduced hospitalisation, no mortality benefit). C has no role in HFpEF.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 13.3.3.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 52-year-old woman with dilated cardiomyopathy had an LVEF of 28% 18 months ago. It is now 54%. She is asymptomatic and asks to stop all her medication. What is the most appropriate advice?",
    option_a: "Stop all HF medication because she has recovered",
    option_b: "Continue the foundational HF medications because symptoms and LV dysfunction can relapse if treatment is withdrawn",
    option_c: "Stop only the SGLT2 inhibitor and MRA",
    option_d: "Stop all medication and repeat the echocardiogram in 5 years",
    correct_option: "B",
    explanation: "Rationale: In HFimpEF, LV structural abnormalities do not fully normalise, and symptoms, biomarkers and LV dysfunction can relapse if HF treatment is withdrawn. Foundational medications should be continued (Class IIa, B). A, C and D all withdraw therapy that is preventing relapse.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 12; Section 4.4.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 63-year-old man with type 2 diabetes and NYHA III HFrEF has worsening ankle oedema. His eGFR is 58 ml/min/1.73m2. Which of his glucose-lowering drugs should be avoided?",
    option_a: "Metformin",
    option_b: "Dapagliflozin",
    option_c: "Pioglitazone",
    option_d: "Liraglutide",
    correct_option: "C",
    explanation: "Rationale: Thiazolidinediones, including pioglitazone, should be avoided in type 2 diabetes with symptomatic NYHA III-IV HF (Class III, A) because they cause fluid retention. Metformin can be used if eGFR is stable and 30 ml/min/1.73m2 or higher. SGLT2 inhibitors are indicated for HF hospitalisation reduction, and GLP-1 receptor agonists are recommended for MACE reduction in those with CVD.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 14.1.6.3.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 64-year-old man with HFrEF has CKD with an eGFR of 24 ml/min/1.73m2 and potassium of 4.8 mmol/L. He takes a loop diuretic, bisoprolol and low-dose losartan. Which additional foundational drug is supported at this level of renal function?",
    option_a: "Dapagliflozin 10 mg",
    option_b: "Spironolactone 25 mg",
    option_c: "Eplerenone 25 mg",
    option_d: "Sacubitril/valsartan 97/103 mg twice daily",
    correct_option: "A",
    explanation: "Rationale: SGLT2 inhibitors have been shown to be safe down to an eGFR of 20 ml/min/1.73m2 (Table 3 notes limited experience with dapagliflozin below CrCl 25, so shared decision-making applies near this threshold). Spironolactone and eplerenone are contraindicated at CrCl below 30 ml/min. ARNI safety is demonstrated for eGFR above 30 (small study above 20) and the target dose should not be used at CrCl below 30 (50 mg twice daily is the renal dose).\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 14.6.3; Table 3; Table 19.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 27-year-old woman at 26 weeks' gestation has dilated cardiomyopathy (LVEF 32%) with congestion. Before pregnancy she took ramipril, spironolactone and metoprolol tartrate. Which regimen is the most appropriate?",
    option_a: "Continue ramipril and spironolactone",
    option_b: "Stop ramipril and spironolactone, continue metoprolol, and add furosemide for congestion",
    option_c: "Switch ramipril to sacubitril/valsartan",
    option_d: "Add dapagliflozin and ivabradine",
    correct_option: "B",
    explanation: "Rationale: Diuretics are first line for fluid overload, β-blockers can be used cautiously (metoprolol most commonly), and digoxin and nitrates/hydralazine are acceptable. ACE-I, ARB, ARNI, MRA, SGLT2 inhibitors and ivabradine are contraindicated in pregnancy. A, C and D each include contraindicated drugs.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 14.7.3.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 49-year-old woman with HER2-positive breast cancer is scheduled for doxorubicin followed by trastuzumab. She has hypertension. Her baseline echocardiographic LVEF is 48%. What is the most appropriate approach?",
    option_a: "Withhold all cardiotoxic chemotherapy permanently",
    option_b: "Proceed without cardiology input because LVEF is above 45%",
    option_c: "Start digoxin prophylactically",
    option_d: "Refer to cardiology, optimise blood pressure, consider cardioprotection and arrange regular echocardiographic surveillance",
    correct_option: "D",
    explanation: "Rationale: A pre-treatment LVEF below 50% warrants cardiology referral. Cardiovascular risk factors should be treated, cardioprotection with a β-blocker, MRA and/or ACE-I/ARB can be considered when LVEF is below 50%, and echocardiography should be repeated, for example 3-monthly. A is wrong because withholding is a last resort (LVEF below 45% for anthracycline, below 40% for anti-HER2 therapy). B ignores the referral threshold. C has no role.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 14.5.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 74-year-old man has aortic stenosis with an LVEF of 35%, a mean gradient of 28 mmHg, an aortic valve area of 0.8 cm2 and a stroke volume index of 30 ml/m2. During low-dose dobutamine stress echocardiography the mean gradient rises to 42 mmHg and the valve area stays at 0.8 cm2. How should this result be interpreted?",
    option_a: "Pseudo-severe AS, so the valve is not significantly obstructed and medical therapy only is needed",
    option_b: "Non-diagnostic; no further assessment is possible",
    option_c: "True severe AS; refer to the heart team for valve intervention",
    option_d: "Mild AS; continue heart failure medication only",
    correct_option: "C",
    explanation: "Rationale: In true severe AS, increased flow across a fixed orifice raises the gradient and velocity without changing the calculated valve area. In pseudo-AS, the augmented flow only mildly raises the gradient and the valve area increases to 1.0 cm2 or more. Here the area is unchanged, so this is true severe AS (valve area below 1.0 cm2), and the heart team should decide between surgery and TAVI. A, B and D misread the test.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 14.2.5.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "Which patient with heart failure is the best candidate for outpatient cardiac rehabilitation?",
    option_a: "Stable NYHA III, last HF admission 10 weeks ago, no planned procedures",
    option_b: "NYHA IV with symptoms at rest",
    option_c: "NYHA II, with a CABG planned in 3 months",
    option_d: "NYHA III, discharged 3 weeks ago after a major cardiovascular hospitalisation",
    correct_option: "A",
    explanation: "Rationale: CR should be recommended to all stable HF patients in NYHA II-III with no recent (6 weeks or less) or planned (within 6 months) major cardiovascular hospitalisation or procedure. B is wrong because there is insufficient data for outpatient CR in NYHA IV. C has a planned major procedure within 6 months. D had a major hospitalisation within 6 weeks.\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 16.1.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 58-year-old man with HFrEF and an ICD is referred to a cardiac rehabilitation programme. Which advice is most appropriate?",
    option_a: "An ICD is a contraindication to cardiac rehabilitation",
    option_b: "Heavy overhead resistance training is encouraged",
    option_c: "Rehabilitation must be home-based only",
    option_d: "Rehabilitation is safe and beneficial, but pronounced arm-shoulder movements should be avoided",
    correct_option: "D",
    explanation: "Rationale: CR in HF patients with ICD and CRT devices is safe and beneficial. Pronounced arm-shoulder movements should be avoided because they may lead to an ICD discharge and loss of consciousness. A is wrong. B contradicts the arm-movement caution. C is wrong because centre-based CR is recommended initially, particularly with severe symptoms, and home-based programmes suit stable patients. (The CPG lists hydrotherapy among the activities to avoid with an ICD, though elsewhere it endorses hydrotherapy as a safe alternative in HF generally.)\nReference: Malaysian CPG Management of Heart Failure 2023 (5th Ed.), Section 16.2; Section 16.3.",
    tag: "CPG Heart Failure 2023"
  },
  {
    question_text: "A 68-year-old man with stage 4 chronic kidney disease presents with two days of vague fatigue and no chest pain. High-sensitivity troponin is above the 99th percentile on arrival and at 2 and 4 hours, with less than 20% variation between samples. The ECG is unchanged from his previous tracing and echocardiography shows no new wall motion abnormality. What is the most likely interpretation of the troponin result?",
    option_a: "NSTEMI",
    option_b: "Chronic myocardial injury",
    option_c: "Unstable angina",
    option_d: "Type 2 myocardial infarction",
    correct_option: "B",
    explanation: "Rationale: Troponin is a marker of myocardial necrosis, not specifically of MI. Stable levels (<20% change between serial samples) indicate chronic myocardial injury, which is common in CKD. MI needs a rise and/or fall with at least one value above the 99th percentile plus clinical, ECG or imaging evidence of ischaemia. A and D need a dynamic troponin pattern plus ischaemic evidence, which are absent. C is wrong because unstable angina has normal biomarkers, whereas his are chronically elevated. Teaching point: In CKD, look for a delta, not a single value, and compare with prior ECG and imaging.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 2.1 and 3.4.1; Appendix VI.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 58-year-old man has had 90 minutes of ongoing central chest pain. The 12-lead ECG shows 1.5 mm ST depression in V1 to V3 with no ST elevation in any standard lead. Troponin is pending. Which is the most appropriate next step?",
    option_a: "Wait for the troponin result before deciding on reperfusion",
    option_b: "Repeat the ECG after 6 hours",
    option_c: "Treat as low-risk NSTE-ACS and arrange an outpatient stress test",
    option_d: "Record posterior leads (V7-V9) and repeat serial ECGs at 15-minute intervals",
    correct_option: "D",
    explanation: "Rationale: A normal or non-diagnostic ECG does not exclude ACS. With ongoing pain, the CPG advises serial ECGs at intervals of at least 15 minutes, additional posterior (V7-V9) or right-sided leads, and a search for other signs of an acutely occluded artery. ST depression in V1-V3 can be the reciprocal of posterior (circumflex or RCA) occlusion. A is wrong because definitive treatment should not wait for biomarkers when history and ECG suggest occlusion. B is far too late. C ignores ongoing pain, which is a very-high-risk feature. Teaching point: ST elevation has only about 44% sensitivity for acute coronary occlusion (specificity 96.5%), so extra leads and serial ECGs matter.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Key Recommendation 2; Section 2.2; Table 20.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 72-year-old woman is admitted with haematemesis. Haemoglobin is 5.8 g/dL, BP 85/50 mmHg and heart rate 128/min. She develops central chest pain. The ECG shows sinus tachycardia with ST depression in V4-V6. High-sensitivity troponin rises from 40 to 210 ng/L (99th percentile 14 ng/L). What is the most likely classification of this event?",
    option_a: "Type 2 myocardial infarction",
    option_b: "Type 1 NSTEMI",
    option_c: "Unstable angina",
    option_d: "Chronic myocardial injury",
    correct_option: "A",
    explanation: "Rationale: Type 2 MI is ischaemic injury from an oxygen supply-demand imbalance unrelated to acute coronary athero-thrombosis. Severe anaemia, hypotension and tachycardia are the obvious trigger. B requires plaque rupture, erosion or dissection with thrombus. C is wrong because troponin is raised. D is wrong because the troponin is clearly rising. Teaching point: Treat the precipitant (here bleeding). Antithrombotic loading for presumed Type 1 MI would be dangerous.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 2.1; Table 15.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 54-year-old man had 40 minutes of rest chest pain 5 hours ago, now resolved. The ECG at presentation showed transient T-wave inversion in V3 to V5, now normalised. High-sensitivity troponin at presentation and 2 hours later is below the 99th percentile with no change. What is the most likely diagnosis?",
    option_a: "NSTEMI",
    option_b: "STEMI",
    option_c: "Unstable angina",
    option_d: "Type 2 myocardial infarction",
    correct_option: "C",
    explanation: "Rationale: Unstable angina is ischaemic-type pain with or without transient ECG changes but without myocardial injury, so biomarkers stay normal. NSTEMI needs a rise and/or fall in troponin. STEMI needs persistent ST elevation. Type 2 MI also needs troponin elevation. Teaching point: UA and NSTEMI cannot always be separated early because biomarkers lag. Repeat testing at the correct interval decides it.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 2.1; Flowchart 1; Table 15.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 52-year-old woman has had 60 minutes of crushing central chest pain. The ECG shows 0.17 mV ST elevation in V2 and V3 with reciprocal ST depression inferiorly. There is no LVH or LBBB. Troponin is pending. Which statement is correct?",
    option_a: "She does not meet STEMI criteria because women need at least 0.2 mV in V2-V3",
    option_b: "STEMI cannot be diagnosed until a rise and fall in troponin is shown",
    option_c: "She meets the V2-V3 criterion for women and reperfusion should start without waiting for troponin",
    option_d: "She meets STEMI criteria only if the LBBB is new",
    correct_option: "C",
    explanation: "Rationale: In V2-V3 the thresholds are 0.25 mV (men <40 years), 0.2 mV (men ≥40 years) and 0.15 mV (women); 0.1 mV applies in other leads. She exceeds 0.15 mV. The CPG stresses not waiting for biomarkers before definitive treatment. A applies the male ≥40 threshold. B contradicts Key Message 5. D is irrelevant, as she has no LBBB. Teaching point: Know the three V2-V3 cut-offs, and remember women have lower thresholds.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Table 17 and 18; Key Message 5.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 41-year-old man arrives 40 minutes after onset of chest pain, which is still present. ECG is non-diagnostic. The first high-sensitivity troponin is below the 99th percentile. What is the most appropriate next step?",
    option_a: "Repeat the high-sensitivity troponin 1 to 2 hours later",
    option_b: "Exclude MI and discharge",
    option_c: "Repeat the troponin after 12 hours",
    option_d: "Order total CK",
    correct_option: "A",
    explanation: "Rationale: Too early a sample may be falsely negative. Troponin should be measured at first assessment and repeated 1-2 hours later (hs-cTn) or 3-6 hours later (conventional cTn) if the first value is non-diagnostic and clinical suspicion remains. A single hs-cTn should be taken at least 2-3 hours after onset, and a conventional cTn at least 6 hours. B ignores the early sampling window. C delays diagnosis unnecessarily. D is wrong because total CK is not recommended owing to poor specificity. Teaching point: hs-cTn can be detected 1-2 hours after onset but repeat testing is needed when sampled early.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Key Recommendation 3; Section 3.4.1; Flowchart 6.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 66-year-old man has had 2 hours of chest pain. High-sensitivity troponin I on arrival is 20 ng/L (99th percentile 14 ng/L). Repeat at 3 hours is 26 ng/L. The ECG shows new ST depression in V4-V6. Which is the best interpretation?",
    option_a: "Chronic myocardial injury because the change is less than 50%",
    option_b: "Not significant, because a 50% rise is required when the baseline is above the 99th percentile",
    option_c: "Non-diagnostic because the second value is not three times the upper reference limit",
    option_d: "A rise of more than 20% from a baseline above the 99th percentile, with ischaemic ECG changes, supports acute MI",
    correct_option: "D",
    explanation: "Rationale: If the baseline is above the 99th percentile URL, a change of more than 20% within 3 hours is significant. If the baseline is at or below the 99th percentile, a change of at least 50% is required. Here the rise is 30% from an above-URL baseline, with dynamic ST depression, so NSTEMI is supported. A and B misapply the 50% rule. C invents a multiple-of-URL criterion. (Chronic injury shows <20% change.) Teaching point: The 20% rule applies when the baseline is above the URL, and the 50% rule when it is not.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Table 21; Flowchart 6 footnote.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 45-year-old woman presents with 2 days of pleuritic chest pain and dyspnoea after a long-haul flight. Heart rate is 118/min, BP 100/70 mmHg and SpO2 90% on air. The ECG shows sinus tachycardia with T-wave inversion in V1 to V3. High-sensitivity troponin is twice the URL and stable on repeat. CT pulmonary angiography shows bilateral pulmonary emboli with right ventricular dilatation. What is the best explanation for the troponin result?",
    option_a: "Type 1 MI from plaque rupture",
    option_b: "Myocardial injury from acute right ventricular strain",
    option_c: "Unstable angina",
    option_d: "Type 4b MI",
    correct_option: "B",
    explanation: "Rationale: Troponin marks necrosis but is not specific for MI. Severe PE and pulmonary hypertension are listed causes of myocardial injury without overt ischaemic heart disease. A needs atherothrombosis. C needs normal troponin. D relates to stent thrombosis and she has no stent. Teaching point: Know the non-ischaemic causes of raised troponin (PE, sepsis, myocarditis, renal failure, extreme exertion, etc.).\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 3.4.1; Appendix VI.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A rural clinic without access to troponin assessment sees a 61-year-old man with ischaemic-type chest pain and a non-diagnostic ECG. Which is the acceptable but less preferred alternative biomarker?",
    option_a: "Aspartate transaminase",
    option_b: "Lactate dehydrogenase",
    option_c: "CK-MB",
    option_d: "Total creatine kinase",
    correct_option: "C",
    explanation: "Rationale: Troponin is the biomarker of choice. Where it is unavailable, CK-MB is the alternative (less preferred). A CK-MB of at least 6% of total CK (relative index) suggests cardiac damage when trauma and chronic muscle disease are absent. AST and LDH are not encouraged because they are neither sensitive nor specific. Total CK has poor specificity because of skeletal muscle distribution. Teaching point: Troponin first, CK-MB if troponin is unavailable, and not AST, LDH or total CK.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 3.4.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 66-year-old man has had 70 minutes of chest pain. The ECG shows LBBB with concordant ST elevation of 2 mm in V5 and V6. No previous ECG is available. A PCI-capable centre is 40 minutes away. Which statement is correct?",
    option_a: "Concordant ST elevation of at least 1 mm meets the Smith-modified Sgarbossa criteria and a primary PCI strategy should be considered",
    option_b: "LBBB alone is a STEMI equivalent, so fibrinolysis should be given",
    option_c: "The ECG is uninterpretable, so reperfusion decisions wait for troponin",
    option_d: "Concordant ST elevation is a non-specific finding that does not alter management",
    correct_option: "A",
    explanation: "Rationale: New LBBB alone is not a STEMI equivalent. The Smith-modified Sgarbossa criteria (concordant ST elevation ≥1 mm in ≥1 lead, concordant ST depression ≥1 mm in V1-V3, or proportionally excessive discordant elevation) identify occlusion MI. The CPG says patients with BBB and ongoing pain may be considered for a PCI strategy, and that those with non-interpretable ST segments should not receive fibrinolysis. B contradicts this. C and D are incorrect because the criteria make the ECG interpretable and actionable. Teaching point: Apply Sgarbossa rather than relying on \"new LBBB\".\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Table 17 and 20; Section 7.2.1.1.1.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 63-year-old man with diabetes is admitted with NSTEMI. Troponin is rising and the GRACE score is 155. In the ward he has recurrent chest pain despite intravenous nitrates and morphine. Which feature places him in the very-high-risk category?",
    option_a: "Diabetes mellitus",
    option_b: "Recurrent chest pain refractory to medical treatment",
    option_c: "GRACE score above 140",
    option_d: "Rise in cardiac troponin",
    correct_option: "B",
    explanation: "Rationale: Very-high-risk features include haemodynamic instability or shock, recurrent or ongoing chest pain refractory to medical treatment, recurrent dynamic ST-T change, life-threatening arrhythmia, acute HF, mechanical complications, and ECG features of occlusion MI. He should have an urgent invasive strategy (consider <24-48 hours, the sooner the better). A is an intermediate-risk feature. C and D are high-risk features (early invasive within 24-48 hours). Teaching point: Refractory pain upgrades him from high-risk to very-high-risk.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Table 4 and 8; Key Recommendation 10.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 58-year-old man with hypertension and a smoking history presents with chest pain that is highly suspicious for angina. The ECG is normal and high-sensitivity troponin is below the 99th percentile. Using the modified HEART score, what is his score and disposition?",
    option_a: "2, low risk: discharge",
    option_b: "3, low risk: discharge",
    option_c: "7, high risk: urgent intervention",
    option_d: "4, moderate risk: further evaluation and observation",
    correct_option: "D",
    explanation: "Rationale: History highly suspicious = 2, ECG normal = 0, age 58 (>45 to <65) = 1, two risk factors = 1, troponin ≤ normal = 0, giving 4. A score of 0-3 is low risk, 4-6 moderate risk (further evaluation and observation) and 7-10 high risk. Options A, B and C each miscount one component. Teaching point: Do the sum component by component. A single suspicious history can push the score out of the discharge range.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Appendix III; Table 7.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 41-year-old woman presents 3 hours after an episode of atypical chest pain, now pain free. The ECG is normal. High-sensitivity troponin is below the 99th percentile on arrival and again 2 hours later, with less than 50% change. The modified HEART score is 2. What is the most appropriate disposition?",
    option_a: "Discharge from the ED with early outpatient cardiology review",
    option_b: "Admit to the coronary care unit",
    option_c: "Early invasive strategy",
    option_d: "Repeat the troponin at 12 hours",
    correct_option: "A",
    explanation: "Rationale: In the rule-out pathway, hs-cTn below the 99th percentile on repeat with <50% change, a pain-free patient and a HEART score ≤3 (or TIMI 0-1) allow discharge with early outpatient cardiology review. B and C are for rule-in or high-risk patients. D is unnecessary once the pathway criteria are met. Teaching point: The pathway needs all three: serial troponin, no ongoing pain and a low score.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Flowchart 6.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 79-year-old man with known multivessel CAD and CKD presents with 2 hours of chest tightness, now pain free. The ECG shows old inferior Q waves with no acute change. High-sensitivity troponin is mildly above the 99th percentile on arrival and 3 hours later, with less than 20% change. Which is the most appropriate management?",
    option_a: "Discharge without follow-up",
    option_b: "Immediate fibrinolysis",
    option_c: "Observe or admit, look for alternative causes and reversible ischaemia, and start antiplatelet and statin if CAD likelihood is high",
    option_d: "Primary PCI",
    correct_option: "C",
    explanation: "Rationale: This is the indeterminate group: elevated troponin without a significant rise or fall, typically elderly patients with pre-existing CAD and high long-term mortality. They should be observed or admitted or referred early for cardiology review, investigated for other causes, and treated with antiplatelet agents, a high-intensity statin and anti-ischaemic therapy if CAD is likely, with testing for ischaemia. A ignores their mortality risk. B and D are for STEMI. Teaching point: The indeterminate group has mortality comparable to \"rule-in\" patients.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Key Message 10; Table 9.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 47-year-old woman is admitted with suspected unstable angina. She has had no recurrence of pain, her ECG is normal, serial troponins are negative, and she has no diabetes, heart failure or prior revascularisation. Her GRACE score is 90. What is the most appropriate plan?",
    option_a: "Urgent angiography within 24 hours",
    option_b: "Discharge and arrange non-invasive assessment for inducible ischaemia",
    option_c: "Routine early angiography within 24 to 48 hours",
    option_d: "Fibrinolytic therapy",
    correct_option: "B",
    explanation: "Rationale: Patients with no recurrence of symptoms and none of the higher-risk criteria are low risk. They can be discharged with further investigation as outpatients, and non-invasive assessment for inducible or silent ischaemia is recommended (I,A). Routine invasive angiography is not recommended in low-risk patients. A and C are for very-high-risk and high-risk patients. D is for STEMI. Teaching point: Low risk means test for ischaemia first, and angiography only if positive.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Table 8; Section 9.2.1.1.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 55-year-old man with anterior STEMI is seen at a district hospital 90 minutes after symptom onset. He is haemodynamically stable with no contraindications to fibrinolysis. The nearest PCI-capable hospital is about 150 minutes away. What is the most appropriate management?",
    option_a: "Wait for transfer and perform primary PCI",
    option_b: "Give fibrinolysis and treat medically without angiography",
    option_c: "Give fibrinolysis, then perform facilitated PCI within 1 hour",
    option_d: "Give fibrinolysis, then transfer for angiography and PCI between 2 and 24 hours",
    correct_option: "D",
    explanation: "Rationale: If the delay to primary PCI exceeds 120 minutes, the best option is fibrinolysis followed by transfer for a pharmaco-invasive strategy (routine angiography and PCI 2-24 hours later). A would exceed the time window. B omits the pharmaco-invasive step, which lowers mortality and reinfarction. C describes facilitated PCI, which is not recommended (III,A). Teaching point: Pharmaco-invasive is not the same as facilitated PCI.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Key Recommendation 9; Table 2 and 25; Section 9.1.3.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 58-year-old man with inferior STEMI presents to a district hospital 5 hours after onset. He was admitted two weeks ago with melaena requiring transfusion. He is haemodynamically stable. The PCI-capable hub can be reached in about 3 hours. What is the most appropriate reperfusion strategy?",
    option_a: "Streptokinase",
    option_b: "Half-dose tenecteplase",
    option_c: "Transfer for primary PCI regardless of the expected delay",
    option_d: "Medical therapy alone, as the 120-minute window has passed",
    correct_option: "C",
    explanation: "Rationale: GI bleeding within the past month is an absolute contraindication to fibrinolysis. When fibrinolysis is contraindicated and onset is <12 hours, primary PCI is preferred irrespective of the time delay (I,A). A and B are fibrinolytics. D is wrong because the >120 minute rule only favours fibrinolysis when it is safe. Teaching point: A contraindication to lysis overrides the time-delay rule.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Key Recommendation 9; Table 2; Appendix IX.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 77-year-old man weighing 72 kg has anterior STEMI 2 hours after onset. He has no contraindications and PCI is more than 3 hours away. What is the appropriate tenecteplase dose?",
    option_a: "20 mg",
    option_b: "40 mg",
    option_c: "30 mg",
    option_d: "45 mg",
    correct_option: "A",
    explanation: "Rationale: Tenecteplase is weight-banded (30 mg <60 kg, 35 mg 60 to <70 kg, 40 mg 70 to <80 kg, 45 mg 80 to <90 kg, 50 mg ≥90 kg) and is halved in patients aged ≥75 years. At 72 kg the full dose is 40 mg, so the age-adjusted dose is 20 mg. B ignores age. C and D use the wrong weight band. Teaching point: Locate the weight band first, then halve for age ≥75 years.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Table 26; Section 14.2.3.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 66-year-old man with anterior STEMI 1 hour after onset is being considered for fibrinolysis. PCI is not available within 2 hours. Which finding is an absolute contraindication?",
    option_a: "Blood pressure of 190/115 mmHg on arrival",
    option_b: "Ischaemic stroke 4 months ago",
    option_c: "Ischaemic stroke 9 months ago",
    option_d: "Cardiopulmonary resuscitation lasting 12 minutes",
    correct_option: "B",
    explanation: "Rationale: Ischaemic stroke within 6 months is an absolute contraindication. Stroke more than 6 months ago, SBP >180 or DBP >110 mmHg (reduce BP before lysis), and prolonged CPR (>10 minutes) are relative contraindications. Teaching point: Learn the 6-month stroke cut-off and the 1-month rule for surgery, trauma and GI bleeding.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Appendix IX.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 55-year-old man received tenecteplase 90 minutes ago for anterior STEMI at a spoke hospital. He still has severe chest pain, and ST elevation in V3 has fallen by only 20% from baseline. BP is 100/60 mmHg with frequent ventricular ectopics. What is the most appropriate next step?",
    option_a: "Give a second dose of fibrinolytic",
    option_b: "Observe for a further 6 hours",
    option_c: "Double the heparin infusion and give morphine",
    option_d: "Arrange urgent transfer for rescue PCI",
    correct_option: "D",
    explanation: "Rationale: Failed fibrinolysis is ongoing pain, persistent ST elevation (<50% resolution in the lead with maximal elevation) and/or haemodynamic or electrical instability. Rescue PCI (I,A) is indicated, balancing the higher bleeding and stroke risk. A and C do not reopen the artery. B delays treatment. Teaching point: ST resolution of less than 50% at 60 to 90 minutes means failed lysis.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 7.2.1.1.2.3 and 9.1.2.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 51-year-old man with anterior STEMI is given tenecteplase at a spoke hospital. His pain has settled, ST resolution is 70% and he is stable. What is the best plan?",
    option_a: "Transfer for angiography and PCI between 2 and 24 hours",
    option_b: "Immediate PCI within 1 hour",
    option_c: "Medical therapy and a non-invasive stress test",
    option_d: "Angiography only if pain recurs",
    correct_option: "A",
    explanation: "Rationale: Even when fibrinolysis appears successful, routine angiography and PCI 2-24 hours later improves outcomes (I,A). No clinical marker reliably confirms reperfusion: about 9% of patients judged to have reperfused still had an occluded artery. B is facilitated PCI (not recommended). C and D are symptom- or ischaemia-guided approaches, which are inferior. Teaching point: Symptom relief and ST resolution do not replace routine angiography after lysis.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 7.2.1.1.2.2 and 9.1.3.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A patient with STEMI is transferred from a non-PCI-capable hospital. The door-in-door-out time was 45 minutes, transport took 50 minutes and the door-to-wire time at the PCI centre was 25 minutes. Which interval exceeded its individual recommended target?",
    option_a: "Transport time",
    option_b: "Door-to-wire time",
    option_c: "Door-in-door-out time",
    option_d: "None, because the total is 120 minutes",
    correct_option: "C",
    explanation: "Rationale: The ≤120-minute target from first medical contact to wire crossing is built from DIDO ≤30 minutes, transport ≤60 minutes and door-to-wire ≤30 minutes. Transport (50) and door-to-wire (25) are within target. DIDO (45) exceeded its target, even though the total of 120 minutes is acceptable. D ignores the component targets, which are the quality indicators of the system. Teaching point: Audit each component, because a total on target can hide a failing step.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Key Recommendation 9; Table 2; Flowchart 5.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 60-year-old man presents to a PCI-capable hospital 18 hours after onset of chest pain, which is still ongoing. BP is 110/70 mmHg and the ECG shows inferolateral ST elevation. What is the most appropriate management?",
    option_a: "Fibrinolytic therapy",
    option_b: "Primary PCI",
    option_c: "Medical therapy only",
    option_d: "Non-invasive stress test in 6 weeks",
    correct_option: "B",
    explanation: "Rationale: At 12 to 24 hours, primary PCI is the preferred strategy and still beneficial in patients with persistent ischaemic symptoms or instability (IIa,B). Fibrinolysis is not preferred in this window. Routine reperfusion is not recommended in asymptomatic, stable patients (III,A) and is not recommended at all beyond 24 hours (III,A), but this patient has ongoing pain. Teaching point: Ongoing symptoms keep the reperfusion window open.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Table 2 and 25; Section 9.1.5.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 60-year-old man has NSTEMI with a rising high-sensitivity troponin and a GRACE score of 152. He is pain free and haemodynamically stable. What is the recommended timing of coronary angiography?",
    option_a: "Early invasive strategy, consider within 24 to 48 hours of admission",
    option_b: "Immediate, within 2 hours",
    option_c: "Within the index admission only",
    option_d: "Non-invasive testing first",
    correct_option: "A",
    explanation: "Rationale: A rise in troponin and GRACE >140 are high-risk criteria, and the early invasive strategy (consider within 24-48 hours) is recommended (IIa,A). B is reserved for very-high-risk features. C is for intermediate-risk. D is for low-risk patients. Teaching point: Very-high risk = urgent, high risk = 24-48 hours, intermediate = this admission, low = non-invasive.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Key Recommendation 10; Table 4 and 8.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 64-year-old man with NSTEMI has PCI to the culprit LAD. Angiography also shows a 60% stenosis of the RCA with an FFR of 0.86. What is the most appropriate management of the RCA lesion?",
    option_a: "PCI now because the stenosis exceeds 50%",
    option_b: "PCI now because it is a non-culprit lesion",
    option_c: "Refer for CABG",
    option_d: "Optimal medical therapy, with no PCI",
    correct_option: "D",
    explanation: "Rationale: For borderline non-culprit lesions (50-70%), physiology guides treatment: intervene if FFR ≤0.8 (or iFR ≤0.89); otherwise manage medically. FFR 0.86 is not haemodynamically significant. A and B would stent a non-significant lesion. C has no basis. Teaching point: In STEMI, non-culprit lesions are significant if ≥70% visually, or 50-69% with FFR ≤0.80.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 9.1.7 and 9.2.1.2.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 58-year-old man with NSTEMI undergoing PCI has been loaded with aspirin 300 mg and ticagrelor 180 mg. What is the appropriate maintenance aspirin dose?",
    option_a: "300 mg daily",
    option_b: "150 mg daily",
    option_c: "75 to 100 mg daily",
    option_d: "Stop aspirin once ticagrelor is started",
    correct_option: "C",
    explanation: "Rationale: With ticagrelor, aspirin maintenance should be ≤100 mg daily (I,A). Maintenance doses of 300-325 mg increase GI bleeding without extra efficacy (III,A). The usual maintenance range of 75-150 mg applies with clopidogrel, so B is wrong here. D is wrong because DAPT needs both agents. Teaching point: Ticagrelor plus aspirin above 100 mg reduces efficacy and increases bleeding.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 8.1.1.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "An 82-year-old woman with STEMI is to receive fibrinolysis. What is the appropriate clopidogrel loading dose?",
    option_a: "600 mg",
    option_b: "75 mg",
    option_c: "300 mg",
    option_d: "No clopidogrel; ticagrelor 180 mg instead",
    correct_option: "B",
    explanation: "Rationale: With fibrinolysis, the clopidogrel loading dose is 300 mg for patients ≤75 years and 75 mg for those >75 years. Ticagrelor is not used with fibrinolysis and carries more bleeding in older patients. A and C are doses for younger patients or for planned PCI. Teaching point: Age >75 years means a 75 mg clopidogrel load with lysis, and half-dose tenecteplase.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Key Recommendation 11; Section 14.2.3; Table 10.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 52-year-old man with STEMI will receive tenecteplase. Which P2Y12 inhibitor and loading dose should be given?",
    option_a: "Clopidogrel 300 mg",
    option_b: "Clopidogrel 600 mg",
    option_c: "Ticagrelor 180 mg",
    option_d: "Ticagrelor 90 mg",
    correct_option: "A",
    explanation: "Rationale: Clopidogrel 300 mg is given with fibrinolysis (ticagrelor is for patients undergoing PCI, not fibrinolysis). 600 mg is used when primary PCI is planned. Teaching point: Ticagrelor is not for patients undergoing fibrinolysis.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Table 10; Key Recommendation 11.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A cardiology team is deciding the duration of DAPT after PCI for ACS. Which single finding alone classifies a patient as high bleeding risk?",
    option_a: "Age 78 years",
    option_b: "eGFR 45 mL/min",
    option_c: "Long-term NSAID use",
    option_d: "Haemoglobin 10.4 g/dL",
    correct_option: "D",
    explanation: "Rationale: High bleeding risk is one major criterion or two minor criteria. Haemoglobin <11 g/dL is a major criterion. Age >75 years, moderate CKD (eGFR 30-59) and long-term NSAID or steroid use are minor criteria and need two. Severe CKD (eGFR <30) and long-term oral anticoagulation would also be major criteria. Teaching point: Count criteria: 1 major or 2 minor.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Appendix VIII; Section 8.1.5.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 70-year-old man with atrial fibrillation undergoes PCI for NSTEMI. Which antithrombotic regimen is most appropriate?",
    option_a: "Aspirin, ticagrelor and a DOAC for 12 months",
    option_b: "Warfarin with INR 3 to 4 plus DAPT",
    option_c: "A DOAC with aspirin and clopidogrel for 1 to 4 weeks, then a single antiplatelet (preferably clopidogrel) plus the DOAC",
    option_d: "DAPT alone without anticoagulation",
    correct_option: "C",
    explanation: "Rationale: DOAC-based combination therapy has less bleeding than triple therapy with warfarin. Triple therapy is kept short (1 week to 1 month), followed by a single antiplatelet (preferably clopidogrel) plus OAC for 3-12 months, then OAC long term. Aspirin should be ≤75-100 mg. Ticagrelor or prasugrel are not recommended in triple therapy (III,A). If warfarin is used, the INR target is the lower part of the range (2-2.5). D omits stroke prevention. Teaching point: Short triple therapy, clopidogrel as the P2Y12 inhibitor, and then OAC.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 8.3.2.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 61-year-old man had an ACS 6 weeks ago. He tolerates atorvastatin 80 mg and his LDL-C is 1.9 mmol/L. What is the most appropriate next step?",
    option_a: "Continue the current dose, as the target is below 2.6 mmol/L",
    option_b: "Add ezetimibe, and consider a PCSK9 modulator if needed",
    option_c: "Switch to fenofibrate",
    option_d: "Reduce the statin dose",
    correct_option: "B",
    explanation: "Rationale: After ACS the target LDL-C is <1.4 mmol/L with at least a 50% reduction. If LDL-C remains ≥1.4 mmol/L on maximally tolerated statin, non-statin therapy (ezetimibe, PCSK9 inhibitors or siRNA) should be added (I,A). A uses the target for lower-risk patients. C targets triglycerides, not LDL-C. D is inappropriate. Teaching point: For recurrent ACS the goal is even lower (≤1.0 mmol/L).\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Key Recommendation 14; Section 8.4; Table 11.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 55-year-old man with anterior STEMI has heart rate 100/min and BP 150/90 mmHg. There is no heart failure and no contraindication to beta-blockers. Which statement about beta-blocker use is correct?",
    option_a: "An oral beta-blocker may be considered, but intravenous beta-blockers are not advocated",
    option_b: "Give intravenous metoprolol immediately",
    option_c: "Withhold beta-blockers for one year",
    option_d: "Start verapamil instead",
    correct_option: "A",
    explanation: "Rationale: Oral beta-blockers may be considered at presentation in patients without acute heart failure and with SBP >120 mmHg (I,A). IV beta-blockers are associated with more shock and are not advocated (III,B). C is wrong because long-term beta-blockers are indicated for LVEF ≤40%, angina or arrhythmias. D is not first-line here. Teaching point: Oral yes, IV no, and only with SBP >120 mmHg and no acute heart failure.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 8.5.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 63-year-old man with anterior STEMI has LVEF 32%. BP is 118/72 mmHg, potassium 4.4 mmol/L and eGFR 70. He is already on an ACE inhibitor and a beta-blocker. Which additional therapies are recommended?",
    option_a: "Digoxin",
    option_b: "Ivabradine and amlodipine",
    option_c: "Colchicine",
    option_d: "An MRA and an SGLT2 inhibitor",
    correct_option: "D",
    explanation: "Rationale: For LVEF ≤40% the four pillars are recommended: RAAS blocker (or ARNI), beta-blocker, MRA and SGLT2 inhibitor (I,A). MRAs are considered when there is no renal failure. A, B and C are not part of the foundational regimen. Colchicine and SGLT2 inhibitors started soon after MI did not improve outcomes (IIb,B), but the SGLT2 inhibitor is indicated here for reduced EF and may be started after discharge. Teaching point: Pillars: ACEi/ARB/ARNI, beta-blocker, MRA, SGLT2 inhibitor.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Key Recommendation 14; Sections 8.6, 8.7 and 8.9.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 59-year-old man has inferior STEMI. BP is 80/50 mmHg, JVP is raised and the chest is clear. The ECG shows ST elevation in V4R. What is the most appropriate management?",
    option_a: "Sublingual GTN and intravenous furosemide",
    option_b: "Dopamine infusion",
    option_c: "Intravenous fluid resuscitation and primary PCI",
    option_d: "Atropine 3 mg",
    correct_option: "C",
    explanation: "Rationale: Hypotension, clear lungs and raised JVP in inferior STEMI suggest RV infarct, and ST elevation in V4R is the most specific ECG finding. Management is primary PCI with restoration of flow to the RV branches and IV fluids to optimise preload, adding noradrenaline if needed. Nitrates and diuretics reduce preload and are avoided (III,C). Dopamine is not preferred. Teaching point: The RV infarct triad is hypotension, clear lungs and raised JVP.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 11.4.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 64-year-old man has anterior STEMI. The ECG shows second-degree AV block Mobitz type 2. BP is 120/70 mmHg and he is haemodynamically stable. What is the most appropriate management?",
    option_a: "Observation only",
    option_b: "Temporary pacing",
    option_c: "Atropine 3 mg",
    option_d: "Permanent pacemaker insertion",
    correct_option: "B",
    explanation: "Rationale: Patients with anterior infarcts who develop Mobitz 2 or complete AV block have a worse prognosis and need temporary pacing even if stable. In inferior MI, a stable patient with such block may not need treatment. Atropine (maximum 3 mg) is only an interim measure in unstable patients. Teaching point: Anterior MI with high-grade block means pace, even if stable.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Table 27.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 60-year-old man has a large anterior STEMI treated with primary PCI. A follow-up echocardiogram shows an apical LV thrombus. What is the most appropriate management?",
    option_a: "Anticoagulation for at least 3 months, with repeat imaging",
    option_b: "Aspirin alone",
    option_c: "Anticoagulation for 4 weeks only",
    option_d: "No specific treatment, as he has had PCI",
    correct_option: "A",
    explanation: "Rationale: If LV thrombus is detected after MI, anticoagulation (warfarin or DOAC), especially beyond 3 months, lowers MACE and mortality (I,B). Repeat imaging at 3 months guides discontinuation, and periodic imaging every 6-12 months is advised afterwards. Longer anticoagulation may be considered with low EF, apical aneurysm, large anterior STEMI or prior embolism. Teaching point: Large anterior MI means looking for thrombus at about one week and again within 3 months.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Key Message 11; Section 11.5.2.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 58-year-old man presents 3 weeks after an anterior STEMI with pleuritic chest pain that eases on sitting forward and a pericardial rub. ECG shows no new ischaemia. What is the most appropriate treatment?",
    option_a: "Repeat coronary angiography for suspected reinfarction",
    option_b: "Prednisolone 1 mg/kg as first-line therapy",
    option_c: "Therapeutic LMWH",
    option_d: "High-dose aspirin (600 mg three to four times daily)",
    correct_option: "D",
    explanation: "Rationale: This is late post-MI pericarditis (Dressler syndrome, 2-8 weeks after MI). First-line therapy is aspirin 600 mg three to four times daily for 1 to 2 weeks, followed by tapering, with acetaminophen or narcotic analgesics if inadequate. Glucocorticoids (0.25-0.5 mg/kg/day) are reserved for aspirin/NSAID contraindication or refractory symptoms. Anticoagulation is not indicated. The positional pain and rub argue against reinfarction. Teaching point: Pain that is pleuritic and positional with a rub and no new ECG ischaemia points to pericarditis.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 11.5.1.3.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 70-year-old woman is on day 4 after an inferior STEMI treated with fibrinolysis. She develops sudden hypotension and a new loud pansystolic murmur. Echocardiography shows a ventricular septal rupture. What is the most appropriate definitive management?",
    option_a: "Diuretics and ACE inhibitor alone",
    option_b: "Intra-aortic balloon pump alone",
    option_c: "Urgent surgical or percutaneous closure",
    option_d: "Repeat fibrinolysis",
    correct_option: "C",
    explanation: "Rationale: Mechanical complications (free wall rupture, septal rupture, papillary muscle rupture) are suspected with sudden deterioration and new murmurs, confirmed by echocardiography. Ventricular septal rupture needs urgent surgical or percutaneous closure. Medical therapy alone and IABP are only temporising. Fibrinolysis is irrelevant. Teaching point: New murmur plus sudden deterioration should prompt immediate echocardiography.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 11.3.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 62-year-old woman with NSTE-ACS has been stabilised on medical therapy. Serial troponins remain negative and she has no recurrent pain. Which strategy is recommended?",
    option_a: "Immediate coronary angiography",
    option_b: "A conservative, ischaemia-guided strategy with non-invasive testing",
    option_c: "Fibrinolytic therapy",
    option_d: "Discharge with no further testing",
    correct_option: "B",
    explanation: "Rationale: A conservative strategy is recommended for women who are stabilised and remain biomarker negative (IIa,A). Women with high-risk features (troponin positive) should have an early invasive strategy. D is wrong because conservatively treated patients need periodic non-invasive evaluation for reversible ischaemia. Teaching point: In women, troponin status guides invasive versus conservative management.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 9.2.1.2; Section 14.1.5.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "An 82-year-old frail woman has NSTEMI and medical management is planned. Which regimen is most appropriate?",
    option_a: "Aspirin, ticagrelor and enoxaparin 1 mg/kg twice daily",
    option_b: "Aspirin, prasugrel and UFH",
    option_c: "Aspirin, ticagrelor and UFH",
    option_d: "Aspirin, clopidogrel and fondaparinux",
    correct_option: "D",
    explanation: "Rationale: Clopidogrel is the P2Y12 inhibitor of choice in people >75 years, as ticagrelor carries a greater bleeding risk. Fondaparinux is recommended in older NSTE-ACS patients because it causes less bleeding than heparin with similar efficacy. Enoxaparin at age ≥75 should be reduced (0.75-1.0 mg/kg twice daily) and still carries more bleeding. Teaching point: In the elderly, favour clopidogrel and fondaparinux.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 14.2.3.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 62-year-old man with STEMI has received tenecteplase. His creatinine clearance is 24 mL/min. What is the appropriate enoxaparin regimen after fibrinolysis?",
    option_a: "1 mg/kg subcutaneously once daily",
    option_b: "1 mg/kg subcutaneously twice daily",
    option_c: "Fondaparinux 2.5 mg daily",
    option_d: "0.75 mg/kg subcutaneously twice daily",
    correct_option: "A",
    explanation: "Rationale: After fibrin-specific fibrinolysis, enoxaparin for patients <75 years is a 30 mg IV bolus then 1 mg/kg subcutaneously twice daily, but with CrCl <30 mL/min it is 1 mg/kg once daily. Fondaparinux should be avoided if CrCl <30 mL/min. D is the age ≥75 regimen. Teaching point: Use creatinine clearance, not eGFR, when dosing antithrombotics.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 7.2.1.1.2; Section 14.3.2.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 55-year-old man is on day 3 after uncomplicated primary PCI. His LVEF is 55%. Which statement about cardiac rehabilitation is correct?",
    option_a: "It should start only after 3 months",
    option_b: "It is for patients with heart failure only",
    option_c: "It should be offered to all patients with ACS, preferably starting as an inpatient",
    option_d: "It is needed only if the stress test is positive",
    correct_option: "C",
    explanation: "Rationale: All patients with ACS should undergo cardiac rehabilitation (I,A), which reduces CV hospitalisation, MI, CV and all-cause mortality. It should ideally start as early as possible, preferably as an inpatient. Despite this, referral and participation rates are low, particularly in women and older people. Teaching point: Referral is for everyone, not selected high-risk patients.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Key Recommendation 17; Section 15.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 57-year-old man is discharged on day 4 after uncomplicated primary PCI. He asks about exercise. What is the recommended target?",
    option_a: "At least 15 minutes daily",
    option_b: "At least 30 minutes of low-to-moderate aerobic activity such as brisk walking on at least 5 days per week within 2 weeks of discharge",
    option_c: "No exercise for 6 weeks",
    option_d: "High-intensity interval training three times weekly from discharge",
    correct_option: "B",
    explanation: "Rationale: Post-ACS patients should achieve ≥30 minutes of low-moderate aerobic activity on at least 5 days/week within 2 weeks of discharge (I,A). Exercise training should not be prescribed in the first week after an acute MI or in unstable angina. Early return matters because each week of delay needs a month of exercise to recoup the benefit. Teaching point: The long-term goal is 150 min/week of moderate or 75 min/week of vigorous activity.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 15.3.1; Table 11.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 63-year-old man with NSTEMI is managed medically without revascularisation. He wants to start regular exercise. What is the most appropriate approach?",
    option_a: "Unrestricted gym training",
    option_b: "High-intensity exercise to improve fitness quickly",
    option_c: "Defer all exercise indefinitely",
    option_d: "A symptom-limited stress ECG first; if unavailable, limit him to light exercise such as a 6-minute walk",
    correct_option: "D",
    explanation: "Rationale: In patients who have not been revascularised, a symptom-limited stress ECG before regular exercise is advised (I,C). If unavailable, exercise should be limited, for example a 6-minute walk. Exercise should begin below the angina threshold. Residual ischaemia adds restrictions. Teaching point: The prescription depends on LV function, functional capacity and residual ischaemia.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 15.3.1.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 48-year-old lorry driver is assessed 3 months after STEMI. LVEF is 48%. On the Bruce treadmill test he exercised for 7 minutes (stage 2) with 1 mm ST depression. What is the most appropriate advice about resuming commercial driving?",
    option_a: "Not yet, because his exercise tolerance is below the required 9 minutes (stage 3)",
    option_b: "Yes, because LVEF is above 40%",
    option_c: "No, because any ST depression disqualifies him",
    option_d: "Yes, as for private drivers after 2 weeks",
    correct_option: "A",
    explanation: "Rationale: Commercial drivers are assessed at 3 months. Criteria are exercise tolerance >9 minutes (stage 3) on the Bruce protocol, <2 mm ST depression and LVEF >40%. He meets the ST and EF criteria but not the exercise criterion. Private drivers may resume after about 2 weeks if uncomplicated and LVEF >40%. Teaching point: All three criteria must be met for commercial drivers.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 15.7.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 58-year-old man had his first STEMI treated with successful primary PCI. LVEF is 50%, there were no complications and no further investigations or interventions are planned. When can he fly commercially?",
    option_a: "After 24 hours",
    option_b: "After 10 days",
    option_c: "After 3 days",
    option_d: "After 6 weeks",
    correct_option: "C",
    explanation: "Rationale: Low-risk patients (age <65, first event, successful reperfusion, LVEF >45%, no complications, no planned investigations or interventions) can fly after 3 days. Medium-risk patients (EF >40%, no heart failure, no inducible ischaemia or arrhythmia) can fly after 10 days. High-risk patients (EF <40%, heart failure, pending investigations or revascularisation) should defer until stable. Teaching point: Low risk = 3 days, medium = 10 days, high = defer.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 15.8; Table 29.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 52-year-old man after uncomplicated STEMI treated with primary PCI is symptom free on mild-to-moderate exertion. He asks when he can resume sexual activity. What is the most appropriate advice?",
    option_a: "Avoid for 3 months regardless of recovery",
    option_b: "Resume at about 1 week",
    option_c: "Resume only after repeat coronary angiography",
    option_d: "Resume only after completing 12 months of DAPT",
    correct_option: "B",
    explanation: "Rationale: Sexual counselling is advised. Sexual activity may generally be resumed one week after uncomplicated STEMI following revascularisation when there are no cardiac symptoms after mild-to-moderate activity; it should be individualised if there are complications. A, C and D impose unsupported restrictions. Teaching point: Counsel that nitrates must not be combined with PDE5 inhibitors (sildenafil, tadalafil) within 24-48 hours.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 15.6; Section 8.8.1.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A new cardiac rehabilitation programme wants a single validated questionnaire to screen all post-ACS patients for depression, anxiety and stress together. Which tool is most suitable?",
    option_a: "DASS-21",
    option_b: "PHQ-9",
    option_c: "GAD-7",
    option_d: "HADS",
    correct_option: "A",
    explanation: "Rationale: DASS-21 measures depression, anxiety and stress. PHQ-9 is specific to depression and GAD-7 to anxiety. HADS (not named in the CPG) covers only anxiety and depression, not stress. Patients with heart disease have about twice the risk of anxiety and mood disorders, and these are associated with worse outcomes. Teaching point: Regular screening with validated tools during follow-up is recommended.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 15.5.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 76-year-old man with hypertension, diabetes and current smoking attends the clinic 4 months after an MI. He has no heart failure, eGFR 75 mL/min/1.73m², no prior CABG, stroke or peripheral artery disease. What is his TIMI Risk Score for secondary prevention and its implication?",
    option_a: "2, intermediate risk",
    option_b: "3, intermediate risk",
    option_c: "5, high risk",
    option_d: "4, high risk: closer follow-up and intensified secondary prevention",
    correct_option: "D",
    explanation: "Rationale: One point each for age ≥75, hypertension, diabetes and current smoking gives 4. Risk categories are low 0, intermediate 1-2, high ≥3. High-risk patients should be followed more closely, with lower treatment targets, optimised HF therapy if HFrEF, smoking cessation emphasis, renal assessment and adherence monitoring. Age ≥75 and heart failure are the strongest predictors. Teaching point: Score ≥3 is high risk, so tighten targets and follow-up intervals.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 16.2 and 16.3; Table 30.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A hospital is setting up an outpatient cardiac rehabilitation programme. Which description of the programme structure is correct?",
    option_a: "Two weeks of daily supervised sessions only",
    option_b: "Twelve weeks of once-weekly sessions only",
    option_c: "An initial phase of 4 to 6 weeks with closely supervised sessions 2 to 3 times per week, followed by an ongoing maintenance phase",
    option_d: "Six months of unsupervised home-based exercise",
    correct_option: "C",
    explanation: "Rationale: The initial phase is usually 4-6 weeks at 2-3 sessions per week with closely supervised exercise and education, based at the clinic. The maintenance phase is ongoing, with one group session weekly plus 2-3 home-based sessions. The individualised treatment plan is signed by a doctor and updated every 30 days. Functional assessment (activities of daily living, 5x sit-to-stand, gait and balance, 6-minute walk, stress ECG if available) is done before, after the initial phase and every 3-4 months. Home-based delivery may be synchronous or asynchronous, but the structure is not unsupervised-only. Teaching point: Core components: assessment, risk-factor control, exercise, diet, tobacco counselling, education, psychosocial and vocational support.\nReference: Malaysian CPG Management of Acute Coronary Syndromes 2026 (1st Ed.), Section 15.1; Appendix XI.",
    tag: "CPG ACS 2026"
  },
  {
    question_text: "A 52-year-old woman has had essential hypertension for 6 years, controlled on amlodipine. She has no diabetes. Her eGFR last year was 88 ml/min/1.73 m2 and urine dipstick was negative. She asks how often her kidneys need to be checked. How often should she be screened for chronic kidney disease?",
    option_a: "Every 3 years",
    option_b: "Every 6 months",
    option_c: "Only if she develops diabetes",
    option_d: "At least yearly",
    correct_option: "D",
    explanation: "Rationale: Recommendation 1 states that patients with diabetes mellitus and/or hypertension should be screened at least yearly for CKD. Hypertension may be a cause or consequence of CKD and may accelerate progression to ESRD. A lengthens the interval, C ignores hypertension as an independent indication, and B is more frequent than the CPG requires for a patient with normal results. Teaching point: Diabetes and hypertension are the two conditions that mandate at least yearly CKD screening.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 2(B); Recommendation 1; Algorithm 2.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 24-year-old man was diagnosed with type 1 diabetes 3 years ago. He does not smoke, is normotensive and has a normal lipid profile. He has had no urine testing for kidney disease. According to the CPG algorithm, when should urine screening for diabetic kidney disease begin?",
    option_a: "Immediately, at this visit",
    option_b: "After 10 years of diabetes",
    option_c: "Only once he develops hypertension",
    option_d: "After 5 years of diabetes, or earlier if other cardiovascular risk factors are present",
    correct_option: "D",
    explanation: "Rationale: Algorithm 1 advises urine dipstick screening in type 1 diabetes after 5 years of diabetes, or earlier in the presence of other cardiovascular risk factors. In type 2 diabetes, screening starts at the time of diagnosis, which is why A is the trap (it applies the type 2 rule). B is too late and C waits for a complication. Teaching point: Type 2 diabetes: screen at diagnosis. Type 1 diabetes: screen after 5 years, or earlier with CV risk factors.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Algorithm 1.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 61-year-old man with gastro-oesophageal reflux has taken omeprazole 40 mg daily for 8 years without review. His eGFR has fallen from 84 to 66 ml/min/1.73 m2 over this time. He also takes amlodipine. Which statement about his acid-suppression therapy best reflects the CPG?",
    option_a: "Long-term PPI use is associated with developing and progressing CKD, and should be avoided unless clearly indicated",
    option_b: "PPIs are renally safe, and the decline must be due to amlodipine",
    option_c: "H2-receptor antagonists carry the same dose-dependent CKD risk as PPIs",
    option_d: "The PPI dose should simply be doubled because reflux causes CKD",
    correct_option: "A",
    explanation: "Rationale: PPI use significantly increases the risk of developing CKD (RR/OR 1.10 to 1.50) and of CKD progression (HR 1.26 to 1.32), and the risk correlates with cumulative dose. The CPG advises avoiding long-term PPI use unless there is a clear indication. B is wrong because PPIs are a recognised risk. C is wrong because the association was not evident with cumulative H2-blocker dose. D has no basis. Teaching point: Review long-term PPIs in patients at risk of CKD; the risk is dose-related and not seen with H2-blockers.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 2(G); Section 4.7(iii).",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A primary care team audits which non-diabetic, non-hypertensive patients should be offered CKD screening. Which patient is listed in the CPG as one for whom screening may be considered?",
    option_a: "A 30-year-old woman with migraine using occasional paracetamol",
    option_b: "A 45-year-old man with well-controlled asthma",
    option_c: "A 35-year-old woman with iron-deficiency anaemia from menorrhagia",
    option_d: "A 58-year-old man with gout",
    correct_option: "D",
    explanation: "Rationale: Screening may be considered in patients with age >65, obesity, cardiovascular disease, metabolic syndrome, nephrotoxic drugs or long-term PPIs/analgesics, family history of CKD, gout, multisystem disease such as SLE, structural renal tract disease, calculi or prostatic hypertrophy, and incidental haematuria or proteinuria. Gout (and asymptomatic hyperuricaemia) is associated with CKD. A, B and C are not listed indications. Teaching point: Gout is one of the listed triggers for CKD screening in patients without diabetes or hypertension.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 2(I); Recommendation 1.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 49-year-old woman has had type 2 diabetes for 4 years. She is on metformin. A urine dipstick for protein is negative. What is the most appropriate next screening test for kidney disease?",
    option_a: "Albumin:creatinine ratio on an early morning spot urine sample",
    option_b: "24-hour urine total protein",
    option_c: "Repeat urine dipstick in 5 years",
    option_d: "Renal ultrasound",
    correct_option: "A",
    explanation: "Rationale: Recommendation 2 states that in patients with diabetes, an albumin:creatinine ratio on an early morning spot urine should be performed to screen for microalbuminuria if the dipstick for protein is negative. The early morning sample minimises the effect of posture and exercise. B is used for quantifying established proteinuria. C misses early albuminuria. D is not a screening test for albuminuria. Teaching point: In diabetes, a negative dipstick is not the end of screening: follow it with an early morning urine ACR.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.1.1; Recommendation 2; Algorithm 1.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 57-year-old man with type 2 diabetes has an early morning urine ACR of 6 mg/mmol. He has no symptoms of urinary infection and no heart failure. How should the diagnosis of diabetic kidney disease be established?",
    option_a: "The single result is diagnostic; start ACE inhibitor and stop monitoring",
    option_b: "Retest twice over 3 to 6 months; diabetic kidney disease is established if 2 of 3 tests are positive",
    option_c: "Arrange a renal biopsy to confirm diabetic nephropathy",
    option_d: "Repeat the ACR only if his eGFR falls below 60 ml/min/1.73 m2",
    correct_option: "B",
    explanation: "Rationale: Algorithm 1 advises that a positive microalbuminuria screen is retested twice in 3 to 6 months after excluding other causes such as UTI and heart failure. If 2 of 3 tests are positive, diabetic kidney disease is established, then microalbuminuria is quantified and followed 3- to 6-monthly. A ignores variability in albumin excretion. C is unnecessary. D ignores albuminuria as a marker of kidney damage regardless of eGFR. Teaching point: Albuminuria is confirmed on 2 of 3 samples over 3 to 6 months.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Algorithm 1; Section 3.1.1.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 33-year-old woman attends a well-person check while menstruating. She ran a half-marathon the previous day. Urine dipstick shows protein 1+ and blood 1+. She has no history of kidney disease and her blood pressure is 118/74 mmHg. What is the most appropriate next step?",
    option_a: "Start an ACE inhibitor for proteinuria",
    option_b: "Refer urgently to a nephrologist",
    option_c: "Repeat the urinalysis at a later date, away from menstruation and strenuous exercise",
    option_d: "Arrange a 24-hour urine protein collection the same day",
    correct_option: "C",
    explanation: "Rationale: Strenuous exercise and menstruation both increase urinary protein excretion (Table 1), and menstruation and vigorous exercise are listed causes of haematuria in Algorithm 3. Proteinuria should be confirmed by a repeat test, and a positive dipstick for blood on two of three occasions is needed before full microscopy. A and B act on a result that is likely transient. D would be confounded by the same factors. Teaching point: Exclude transient causes (exercise, menstruation, fever, UTI) before labelling proteinuria or haematuria.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.1.1, Table 1; Section 3.1.2; Algorithm 3.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 63-year-old man with non-diabetic CKD had a 24-hour urine protein of 1.4 g/day before treatment. He was started on ramipril and also takes naproxen for knee pain. Repeat 24-hour protein is 0.6 g/day. Which statement best explains why this reduction must be interpreted with caution?",
    option_a: "Naproxen increases protein excretion, so the true value is higher still",
    option_b: "Ramipril has no effect on protein excretion",
    option_c: "A 24-hour collection overestimates protein in men",
    option_d: "Both ACE inhibitors and NSAIDs decrease urinary protein excretion",
    correct_option: "D",
    explanation: "Rationale: Table 1 lists ACEi/ARB and NSAIDs as factors that decrease urinary protein excretion. The fall reflects the intended ACEi effect, but the NSAID also lowers the reading while being nephrotoxic, and NSAIDs should be avoided in CKD. A reverses the direction for NSAIDs. B is wrong because ACEi/ARB reduce proteinuria. C has no basis. Teaching point: ACEi/ARB and NSAIDs both reduce measured protein excretion; only one of them is renoprotective.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.1.1, Table 1; Section 4.7(ii).",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 46-year-old woman with type 2 diabetes has a confirmed early morning urine ACR of 42 mg/mmol on repeated testing. Which KDIGO albuminuria category does she belong to?",
    option_a: "A1, normal to mildly increased",
    option_b: "A2, moderately increased",
    option_c: "A3, severely increased",
    option_d: "Cannot be classified without a 24-hour collection",
    correct_option: "C",
    explanation: "Rationale: In Table 4, A1 is ACR <3 mg/mmol, A2 is 3 to 30 mg/mmol and A3 is >30 mg/mmol (AER >300 mg/24 hours). An ACR of 42 mg/mmol is A3. D is wrong because ACR on a spot sample is an accepted basis for categorisation. The CPG discourages the term \"microalbuminuria\" in favour of A1-A3. Teaching point: ACR thresholds: <3 (A1), 3-30 (A2), >30 mg/mmol (A3).\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.4(c), Table 4.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 38-year-old man has 2+ protein on dipstick on two separate occasions. Renal function is normal. The clinician wants to quantify his proteinuria. Which test does the CPG recommend for protein quantification?",
    option_a: "24-hour urine collection, with early morning urine protein:creatinine ratio as an alternative",
    option_b: "Repeat dipstick reading graded from trace to 3+",
    option_c: "Serum albumin level",
    option_d: "Urine microscopy for casts",
    correct_option: "A",
    explanation: "Rationale: The CPG states that a 24-hour urine collection should be used for protein quantification, and an early morning uPCR can be used as an alternative. A dipstick only screens. Serum albumin and microscopy do not quantify urinary protein. Teaching point: Dipstick screens; 24-hour collection (or uPCR) quantifies.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.1.1, Table 2.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 44-year-old woman has dysuria and frequency. Dipstick shows blood 2+ and leucocytes 2+. Urine culture grows E. coli and she is treated with an appropriate antibiotic. When should microscopic haematuria be re-assessed?",
    option_a: "Immediately after the first antibiotic dose",
    option_b: "With follow-up urinalysis six weeks after completion of therapy",
    option_c: "Only if she develops visible haematuria",
    option_d: "After 12 months",
    correct_option: "B",
    explanation: "Rationale: Algorithm 3 states that when haematuria is accompanied by signs and symptoms of UTI, the infection is treated and resolution of microscopic haematuria is confirmed with follow-up urinalysis six weeks after completion of therapy. If haematuria resolves, she can be discharged. A is too early, and C and D could miss persistent pathology. Teaching point: Recheck haematuria six weeks after treating a UTI before deciding whether it needs investigation.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Algorithm 3; Section 3.1.2.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 62-year-old male former smoker has persistent microscopic haematuria on three occasions with no infection. Urine microscopy shows isomorphic red cells and no casts. There is no proteinuria and his creatinine is normal. Where should he be referred?",
    option_a: "Nephrologist",
    option_b: "No referral; repeat in one year",
    option_c: "Urologist",
    option_d: "Dietitian",
    correct_option: "C",
    explanation: "Rationale: Algorithm 3 directs haematuria with evidence of glomerular disease (proteinuria, red cell casts, dysmorphic red cells, elevated creatinine) to a nephrologist, and haematuria without these to a urologist. Non-glomerular haematuria warrants urological evaluation, which matters here given possible malignancy. A is for glomerular features. B delays investigation of persistent haematuria. Teaching point: Dysmorphic cells, casts, proteinuria or raised creatinine point to the nephrologist; otherwise the urologist.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.1.2; Algorithm 3.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 72-year-old woman weighing 45 kg has a serum creatinine of 95 umol/L, within the laboratory reference range. Her family is reassured that her kidneys are normal. Which statement best reflects the CPG?",
    option_a: "A normal creatinine excludes CKD in older women",
    option_b: "Creatinine is more sensitive than eGFR for early CKD",
    option_c: "Creatinine is unaffected by muscle mass or age",
    option_d: "Creatinine rises only after about 50% decline in GFR, so it should not be used alone; eGFR should be calculated",
    correct_option: "D",
    explanation: "Rationale: Serum creatinine is not sensitive for early CKD because it is affected by age, gender, ethnicity, muscle mass and diet, and only rises after a 50% decline of eGFR. Recommendation 3 states that creatinine should not be used alone. A small, older woman with low muscle mass can have a \"normal\" creatinine with a markedly reduced GFR. A, B and C contradict this. Teaching point: A \"normal\" creatinine can hide a halved GFR, especially in small, elderly women.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.2, Figure 1; Recommendation 3.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A laboratory is updating how it reports renal function for adult outpatients. Which equation does the CPG recommend for estimating GFR?",
    option_a: "MDRD equation",
    option_b: "Cockcroft-Gault creatinine clearance",
    option_c: "2009 CKD-EPI creatinine equation",
    option_d: "Serum urea-based estimate",
    correct_option: "C",
    explanation: "Rationale: Recommendation 3 recommends the 2009 CKD-EPI creatinine equation. It is superior to MDRD especially at eGFR >60, and a Malaysian study showed better accuracy than MDRD below 60 and at or above 90 ml/min/1.73 m2. Cockcroft-Gault has traditionally been used for drug dosing rather than staging. Urea is not used to estimate GFR. Teaching point: Stage CKD with CKD-EPI 2009; Cockcroft-Gault is the traditional drug-dosing formula.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.2; Recommendation 3.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 41-year-old male bodybuilder has an eGFR of 52 ml/min/1.73 m2 on two occasions 4 months apart. Urine ACR is normal, urine microscopy is bland and renal ultrasound is normal. He takes creatine supplements. Which test is most appropriate to confirm or refute CKD?",
    option_a: "Renal biopsy",
    option_b: "Serum cystatin C to estimate GFR",
    option_c: "Repeat creatinine after a high-protein meal",
    option_d: "Isotope renogram",
    correct_option: "B",
    explanation: "Rationale: Cystatin C is independent of muscle mass, age, sex and diet, and may be used to confirm CKD in adults with eGFR 45-59 ml/min/1.73 m2 and no other markers of kidney damage. Combining creatinine and cystatin C is more accurate than either alone. High muscle mass and creatine intake raise creatinine. A is invasive and not indicated. C would worsen the confounding. D is not suggested for this purpose. Teaching point: Use cystatin C to confirm CKD when eGFR is 45-59 with no other kidney damage marker.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.2.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 66-year-old woman has an eGFR of 38 ml/min/1.73 m2 on two occasions 5 months apart. Her urine ACR is 1.8 mg/mmol on repeated testing. How should her CKD be categorised?",
    option_a: "G3a A1",
    option_b: "G3b A2",
    option_c: "G4 A1",
    option_d: "G3b A1",
    correct_option: "D",
    explanation: "Rationale: CKD is defined as eGFR <60 for more than 3 months, which she meets. In Table 3, G3a is 45-59, G3b is 30-44 and G4 is 15-29, so 38 is G3b. An ACR <3 mg/mmol is A1. A uses the wrong GFR band, B the wrong albuminuria band, and C confuses G3b with G4. Teaching point: G3a 45-59, G3b 30-44, G4 15-29; classify by Cause, GFR and Albuminuria (CGA).\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.4, Tables 3 and 4; Recommendation 4.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 54-year-old man has an eGFR of 54 ml/min/1.73 m2 measured 3 days after a diarrhoeal illness. A test 6 months earlier showed 92 ml/min/1.73 m2. Urinalysis is normal. Which is the most appropriate interpretation?",
    option_a: "CKD cannot be diagnosed yet; the reduced eGFR must persist for more than 3 months",
    option_b: "He has CKD stage G3a",
    option_c: "He has CKD stage G2",
    option_d: "He has end-stage kidney disease",
    correct_option: "A",
    explanation: "Rationale: CKD requires eGFR <60 ml/min/1.73 m2, or a marker of kidney damage, present for more than 3 months. A single low value shortly after volume depletion may reflect acute kidney injury. B labels CKD too early. C misreads the number. D has no basis. Teaching point: The 3-month rule separates CKD from a transient or acute fall in GFR.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.4.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 29-year-old woman has an eGFR of 104 ml/min/1.73 m2. Over 6 months, several findings are recorded. Which finding, if persistent for more than 3 months, alone establishes CKD?",
    option_a: "Serum uric acid of 420 umol/L",
    option_b: "Urine ACR of 8 mg/mmol",
    option_c: "Body mass index of 33 kg/m2",
    option_d: "Fasting glucose of 6.4 mmol/L",
    correct_option: "B",
    explanation: "Rationale: Markers of kidney damage include albuminuria (ACR ≥3 mg/mmol or AER ≥30 mg/24 h), urine sediment abnormalities, tubular disorders, histological or imaging abnormalities and a history of transplantation. Persistent albuminuria defines CKD even with a normal eGFR (stage G1). A, C and D are risk factors, not markers of kidney damage. Teaching point: CKD can be present with a normal eGFR if a damage marker, such as ACR ≥3 mg/mmol, persists.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.4.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 50-year-old woman has stable CKD G3a. Her eGFR has fallen from 58 to 51 ml/min/1.73 m2 over 12 months. Which feature is an indication for renal ultrasound according to the CPG?",
    option_a: "CKD G3a alone",
    option_b: "Age over 50 years",
    option_c: "Loss of eGFR of more than 5 ml/min/1.73 m2 within one year",
    option_d: "Controlled hypertension",
    correct_option: "C",
    explanation: "Rationale: Ultrasound indications include rapid deterioration of renal function (loss of eGFR >5 ml/min/1.73 m2 within one year, or 10 within five years), haematuria, symptoms of obstruction, a family history of polycystic kidney disease with age over 20 years, and planned biopsy. Her fall of 7 meets the rapid-decline criterion. A, B and D are not listed indications. Teaching point: Rapid decline (>5 in 1 year or >10 in 5 years) triggers both ultrasound and nephrology referral.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.3; Recommendation 12.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 23-year-old man's father and aunt have autosomal dominant polycystic kidney disease. He is normotensive with a normal eGFR and urinalysis. What is the most appropriate imaging recommendation?",
    option_a: "Renal ultrasound, as he has a family history of polycystic kidney disease and is over 20",
    option_b: "No imaging until he develops haematuria",
    option_c: "Contrast CT of the abdomen",
    option_d: "MRI with gadolinium as first-line",
    correct_option: "A",
    explanation: "Rationale: A family history of polycystic kidney disease with age over 20 years is a listed indication for renal ultrasound, the first-line renal imaging test (renal size, cysts, obstruction). B waits for a complication. C and D expose him to contrast without need when ultrasound is the recommended first-line test. Teaching point: Ultrasound is the first-line renal imaging test; family history of PKD over age 20 is an indication.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 3.3.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 59-year-old woman with type 2 diabetes has CKD G3a with urine protein of 0.4 g/day. Clinic BP on two visits is 136/82 mmHg on lisinopril. What is the CPG blood pressure target for her?",
    option_a: "≤150/90 mmHg",
    option_b: "≤140/90 mmHg",
    option_c: "≤130/80 mmHg (SBP 120 to 130 mmHg)",
    option_d: "≤120/70 mmHg",
    correct_option: "C",
    explanation: "Rationale: Recommendation 5 sets ≤130/80 mmHg (SBP 120-130 mmHg) for diabetic kidney disease regardless of whether proteinuria is above or below 1 g/day. Her BP is above target. B is the target for non-DKD with proteinuria <1 g/day, which is the trap. A and D are not CPG targets. Teaching point: In DKD, the target is ≤130/80 whatever the level of proteinuria.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.1; Recommendation 5.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 70-year-old man with hypertensive nephrosclerosis has CKD G3b and urine protein of 0.3 g/day. He has no diabetes, and BP is 138/84 mmHg on amlodipine and indapamide. He has postural dizziness when standing quickly. What is the most appropriate blood pressure target?",
    option_a: "≤140/90 mmHg, individualised for co-morbidity and age",
    option_b: "≤130/80 mmHg",
    option_c: "≤120/80 mmHg",
    option_d: "≤110/70 mmHg",
    correct_option: "A",
    explanation: "Rationale: For non-DKD with proteinuria <1 g/day, the CPG target is ≤140/90 mmHg (SBP 120-140 mmHg), individualised to co-morbidity and age. He is at target, and his postural symptoms argue against intensifying. B applies to DKD or non-DKD with proteinuria ≥1 g/day. C and D risk hypotension and AKI, which the CPG warns about with intensive lowering. Teaching point: Non-DKD with proteinuria <1 g/day: ≤140/90 mmHg; individualise in the elderly.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.1; Recommendation 5.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 42-year-old woman with IgA nephropathy has urine protein of 1.6 g/day despite ramipril. Her BP is 134/86 mmHg. She has no diabetes. What is her CPG blood pressure target?",
    option_a: "≤140/90 mmHg",
    option_b: "≤130/80 mmHg (SBP 120 to 130 mmHg)",
    option_c: "≤150/90 mmHg",
    option_d: "No specific target; treat proteinuria only",
    correct_option: "B",
    explanation: "Rationale: For non-DKD with proteinuria ≥1 g/day, the target is ≤130/80 mmHg (SBP 120-130 mmHg). Proteinuria is an independent predictor of progression, and its reduction correlates with slower decline. A applies when proteinuria is <1 g/day. C is too lenient. D ignores the BP target. Teaching point: Proteinuria ≥1 g/day lowers the non-DKD target to ≤130/80 mmHg.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.1; Recommendation 5.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 64-year-old man with non-diabetic CKD G3a, proteinuria 0.2 g/day and previous myocardial infarction tolerates his antihypertensives well. BP is 132/78 mmHg. Which statement about lowering his systolic BP further is most consistent with the CPG?",
    option_a: "Intensive lowering is contraindicated in all CKD patients",
    option_b: "Lowering SBP towards 120 mmHg improved renal outcomes in the SPRINT CKD subgroup",
    option_c: "SBP should be kept above 140 mmHg to protect renal perfusion",
    option_d: "Lowering SBP towards 120 mmHg can be considered because he has high CV risk and tolerates treatment, with watch for hypotension and AKI",
    correct_option: "D",
    explanation: "Rationale: Based on SPRINT, lowering SBP towards 120 mmHg can be considered in non-DKD patients with high CV risk in whom BP lowering is well tolerated. In the CKD subgroup, intensive lowering reduced all-cause mortality but not CV or renal outcomes, which is why B is wrong. Physicians must watch for symptomatic hypotension and AKI. A and C contradict this. Teaching point: SPRINT supports SBP ~120 in high-risk non-DKD CKD for mortality, not renal, benefit.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.1; Recommendation 5.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 57-year-old woman with non-diabetic CKD G3a has hypertension (148/92 mmHg) and urine protein of 0.2 g/day. She has stable angina with a resting heart rate of 88/min. Which statement about drug choice is most appropriate?",
    option_a: "An ACE inhibitor is mandatory because she has CKD",
    option_b: "Dual RAS blockade is first line",
    option_c: "Any antihypertensive class may be used; choose according to co-morbidity, so a beta-blocker or calcium channel blocker is reasonable",
    option_d: "Loop diuretic is the only acceptable agent",
    correct_option: "C",
    explanation: "Rationale: Recommendation 6 states that any class of antihypertensive may be used in CKD without proteinuria, the choice depending on co-morbidity. ACEi/ARB become first line in non-DKD with hypertension only when protein excretion is ≥0.5 g/day. Her angina makes a rate-limiting or anti-anginal agent sensible. A over-applies the ACEi indication. B is not routine. D has no basis. Teaching point: Without significant proteinuria, there is no preferred class in CKD: treat to target and to co-morbidity.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.2; Recommendation 6; Algorithm 4.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 48-year-old man with chronic glomerulonephritis is normotensive (122/76 mmHg) and has urine protein of 1.3 g/day on repeated testing. What is the most appropriate management of his proteinuria?",
    option_a: "ACE inhibitor (or ARB) as first-line, because protein excretion is ≥1.0 g/day",
    option_b: "No treatment, because he is normotensive",
    option_c: "Dihydropyridine calcium channel blocker",
    option_d: "Thiazide diuretic",
    correct_option: "A",
    explanation: "Rationale: Recommendation 6 lists ACEi/ARB as first line in non-DKD when protein excretion is ≥1.0 g/day (regardless of BP), and in non-DKD with hypertension when it is ≥0.5 g/day. B ignores the proteinuria indication. C and D lower BP but lack the established anti-proteinuric, renoprotective effect. Teaching point: Non-DKD: ACEi/ARB for proteinuria ≥1 g/day, or ≥0.5 g/day if hypertensive.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.2; Recommendation 6.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 55-year-old woman with type 2 diabetes and ACR 12 mg/mmol needs RAS blockade. She has no previous ACE inhibitor intolerance. Which is the most appropriate first choice according to the CPG?",
    option_a: "An ARB, because it is more renoprotective",
    option_b: "Combined ACE inhibitor and ARB",
    option_c: "Aliskiren",
    option_d: "An ACE inhibitor, switching to an ARB only for a non-renal adverse reaction such as cough",
    correct_option: "D",
    explanation: "Rationale: There is no evidence that ARB is superior to ACEi, and health economic evidence favours ACEi for cost-effectiveness. The CPG advises prescribing ACEi first and changing to an ARB only if there is a non-renal adverse drug reaction. A overstates ARB benefit. B is not routine and carries more adverse events. C added no benefit in trials. Teaching point: ACEi first; ARB only for non-renal intolerance.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.2(a).",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 68-year-old man with diabetic kidney disease (eGFR 46 ml/min/1.73 m2) starts perindopril 4 mg. When should his renal profile be rechecked?",
    option_a: "Within two weeks of starting",
    option_b: "After six months",
    option_c: "Only if he develops oedema",
    option_d: "At his annual review",
    correct_option: "A",
    explanation: "Rationale: Recommendation 6 and Section 4.1.2(a) state that renal profile should be reassessed within two weeks of initiation or dose escalation of ACEi/ARB, the interval depending on baseline renal function. B, C and D could miss hyperkalaemia or a significant creatinine rise. Teaching point: Recheck creatinine and potassium within 2 weeks of starting or increasing ACEi/ARB.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.2(a); Recommendation 6.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 61-year-old woman with DKD starts ramipril. Baseline creatinine is 110 umol/L. Two weeks later creatinine is 128 umol/L and potassium is 5.1 mmol/L. She is well and BP is above target. What is the most appropriate action?",
    option_a: "Stop ramipril",
    option_b: "Switch to an ARB",
    option_c: "Halve the dose permanently",
    option_d: "Continue and titrate ramipril towards the maximum recommended dose",
    correct_option: "D",
    explanation: "Rationale: The rise is about 16%. ACEi/ARB should be titrated to the maximum recommended dose to achieve BP and anti-proteinuric targets provided creatinine stays <30% above baseline (eGFR reduction <25%) and potassium is <5.6 mmol/L. A and C abandon proven benefit. B is not indicated: an ARB has the same renal haemodynamic effect. Teaching point: A creatinine rise under 30% with potassium under 5.6 is expected; keep titrating.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.2(a).",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 72-year-old man with CKD G3b started losartan 6 weeks ago. Creatinine has risen from 150 to 205 umol/L and potassium is 5.8 mmol/L. He has not been unwell, takes no NSAIDs and is euvolaemic. What is the most appropriate action?",
    option_a: "Increase the losartan dose",
    option_b: "Add spironolactone",
    option_c: "Continue losartan unchanged and recheck in 6 months",
    option_d: "Reduce or discontinue losartan",
    correct_option: "D",
    explanation: "Rationale: Creatinine has risen by about 37% and potassium is ≥5.6 mmol/L. The CPG advises considering reduction or discontinuation within two months of starting when creatinine stays ≥30% above baseline (or eGFR falls ≥25%) or potassium is ≥5.6 mmol/L, after excluding other precipitating factors such as volume depletion or NSAIDs. A and B would worsen hyperkalaemia. C ignores the threshold. Teaching point: Creatinine rise ≥30% or potassium ≥5.6 within 2 months: reduce or stop ACEi/ARB.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.2(a).",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 51-year-old woman with type 2 diabetes has ACR 85 mg/mmol despite maximum-dose ramipril and BP of 128/78 mmHg. Her GP proposes adding valsartan. What is the most appropriate response?",
    option_a: "Add valsartan, as dual blockade is first line in DKD",
    option_b: "Avoid routine dual RAS blockade; it does not reduce mortality, raises hyperkalaemia, hypotension and AKI, and is reserved for selected non-DKD patients under a nephrologist",
    option_c: "Add aliskiren instead",
    option_d: "Stop ramipril and use valsartan alone at double dose",
    correct_option: "B",
    explanation: "Rationale: Dual RAS blockade reduces proteinuria but not mortality, has mixed effects on hard renal endpoints, and causes more hyperkalaemia, hypotension and AKI. It should not be prescribed routinely and may be considered only in carefully selected non-DKD patients with persistent proteinuria >0.5 g/day and normal potassium, under nephrologist supervision. She has DKD, so A is wrong. C (direct renin inhibitor) added no benefit with more adverse events. D has no evidence base. Teaching point: Dual RAS blockade is not routine, and in this CPG is limited to selected non-DKD patients under nephrology.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.2(b); Recommendation 6.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 66-year-old man with DKD on losartan asks whether adding aliskiren would protect his kidneys further. Which statement best reflects the CPG?",
    option_a: "Added to standard RAS blockade it gave no extra benefit and caused more adverse events",
    option_b: "It halves the risk of end-stage renal disease",
    option_c: "It is preferred over ACE inhibitors in diabetic kidney disease",
    option_d: "It is the recommended add-on when potassium is above 5.6 mmol/L",
    correct_option: "A",
    explanation: "Rationale: In RCTs including VA NEPHRON-D and ALTITUDE, adding a direct renin inhibitor to standard RAS blockade did not confer additional benefit and was associated with more adverse events. B and C have no support. D is dangerous, as RAS blockade raises potassium further. Teaching point: Aliskiren on top of ACEi/ARB: no benefit, more harm.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.2(e).",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 54-year-old woman with non-diabetic proteinuric CKD remains above BP target on maximum-dose ACE inhibitor. An add-on agent is needed that may also reduce proteinuria. Which calcium channel blocker class has the greater anti-proteinuric effect according to the CPG?",
    option_a: "Short-acting nifedipine",
    option_b: "Standard L-type dihydropyridines such as amlodipine",
    option_c: "Non-dihydropyridines such as diltiazem or verapamil",
    option_d: "No calcium channel blocker reduces proteinuria",
    correct_option: "C",
    explanation: "Rationale: Meta-analysis showed that non-dihydropyridine CCBs (verapamil, diltiazem) had a greater anti-proteinuric effect than dihydropyridines in both DKD and non-DKD, although long-term renal outcome evidence is lacking. Some L/T- and L/N-type DHPs (e.g. lercanidipine, cilnidipine) may also help as add-ons. CCBs as add-on to RAS blockers are reasonable and safe. A and B are less anti-proteinuric, and D is wrong. Teaching point: NDHP CCBs reduce proteinuria more than standard DHPs; renal outcome benefit is unproven.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.1.2(c); Algorithm 4.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 63-year-old man with DKD and CKD G4 has an HbA1c of 6.1%, but his home capillary glucose readings are frequently 12-15 mmol/L. His haemoglobin is 9.8 g/dL. What is the most likely explanation and the best way to assess control?",
    option_a: "HbA1c is falsely high in CKD; rely on fasting glucose only",
    option_b: "His control is excellent; no change needed",
    option_c: "HbA1c may be falsely low because of anaemia in CKD; use regular blood glucose measurements",
    option_d: "Home meters are always inaccurate in CKD",
    correct_option: "C",
    explanation: "Rationale: The CPG notes that HbA1c may be falsely low in CKD due to anaemia, so regular blood glucose measurements are advised for more accurate assessment. The target HbA1c is ≤7%, individualised to co-morbidity and age. A reverses the direction. B accepts a misleading value. D has no basis. Teaching point: In anaemic CKD patients, a \"good\" HbA1c may be falsely low: check glucose readings.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.2; Recommendation 7.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 60-year-old woman with type 2 diabetes, established cardiovascular disease and eGFR 52 ml/min/1.73 m2 is considering an SGLT2 inhibitor. Which trial finding does the CPG cite for renal benefit?",
    option_a: "Canagliflozin reduced amputation risk",
    option_b: "Empagliflozin reduced incident or worsening nephropathy by 39% in patients with eGFR ≥30",
    option_c: "SGLT2 inhibitors are contraindicated in all CKD",
    option_d: "Empagliflozin increased progression to dialysis",
    correct_option: "B",
    explanation: "Rationale: In EMPA-REG OUTCOME (T2DM, high CV risk, eGFR ≥30), empagliflozin reduced incident or worsening nephropathy by 39% at four years (HR 0.61). Canagliflozin in CANVAS reduced albuminuria progression and a composite renal outcome but increased amputation risk (HR 1.97), so A reverses the finding. C and D contradict the data. Teaching point: SGLT2 inhibitors reduce CV outcomes and may be renoprotective; canagliflozin carried an amputation signal.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.2.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 58-year-old man with non-diabetic CKD G4 asks about diet. He is well nourished with a BMI of 24 kg/m2. Which dietary prescription is most consistent with the CPG?",
    option_a: "High-protein diet of 1.5 g/kg/day to preserve muscle",
    option_b: "Protein 0.6-0.8 g/kg/day with energy 30-35 kcal/kg/day, supervised by a dietitian",
    option_c: "Protein-free diet until dialysis",
    option_d: "Energy restriction to 20 kcal/kg/day with unrestricted protein",
    correct_option: "B",
    explanation: "Rationale: Recommendation 8 states that a low-protein diet (0.6-0.8 g/kg/day) with adequate energy (30-35 kcal/kg/day) may be given in CKD stage 3-5, supervised by a dietitian, weighing benefit against protein-calorie malnutrition. A contradicts avoiding excessive protein. C risks malnutrition. D inverts the energy advice. Teaching point: Low protein must be paired with adequate calories and dietitian supervision.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.3; Recommendation 8.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 62-year-old woman with type 2 diabetes and overt nephropathy (urine protein 2 g/day, CKD G3b) is referred to the dietitian. What protein intake is recommended for her?",
    option_a: "0.3 g/kg/day with keto-acid supplements",
    option_b: "0.6 g/kg/day",
    option_c: "0.8 g/kg/day",
    option_d: "Unrestricted protein",
    correct_option: "C",
    explanation: "Rationale: The CPG recommends 0.8 g/kg/day in DKD (versus 0.6-0.8 in non-DKD). A low-protein diet of 0.6 g/kg/day is not advised in overt DKD because of the risk of malnutrition, which makes B the trap. A (very low protein with keto-acids) is for non-DKD stage 4-5. D ignores the advice to avoid excessive protein. Teaching point: DKD: 0.8 g/kg/day; avoid 0.6 g/kg/day in overt DKD.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.3; Recommendation 8.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 52-year-old man with non-diabetic CKD stage 5 (eGFR 14 ml/min/1.73 m2), not yet on dialysis, weighs 60 kg. He is motivated to delay dialysis and is adherent to dietary advice. Which statement about keto-acid supplementation is most accurate?",
    option_a: "Keto-acids benefit any patient regardless of diet",
    option_b: "They are indicated mainly in diabetic kidney disease",
    option_c: "They should be given at a fixed dose of 2 tablets daily",
    option_d: "A vegetarian very low protein diet with keto-acids can defer dialysis in non-DKD, at 1 tablet per 5 kg body weight per day, supervised by a dietitian",
    correct_option: "D",
    explanation: "Rationale: In non-DKD with eGFR <20, a vegetarian VLPD supplemented with keto-acids deferred dialysis (RRT needed in 11% vs 30%) and was nutritionally safe. Only patients who adhere to the VLPD benefit, at 1 tablet for every 5 kg body weight per day (12 tablets for him), under dietitian supervision. A ignores adherence. B is wrong because the evidence is in non-DKD. C is an incorrect dose. Teaching point: Keto-acids: non-DKD stage 4-5, adherent to VLPD, 1 tablet per 5 kg per day.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.3.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 47-year-old man with CKD G3a has asymptomatic hyperuricaemia (uric acid 520 umol/L) and no gout. He asks whether allopurinol, pentoxifylline or herbal Cordyceps will protect his kidneys. Which statement best reflects the CPG?",
    option_a: "Allopurinol is proven to prevent ESRD and is mandatory",
    option_b: "Pentoxifylline is first-line renoprotection",
    option_c: "Evidence for uric acid lowering is emerging but needs more RCTs, and evidence for pentoxifylline, vitamin D analogues and traditional medicines is inconclusive",
    option_d: "Cordyceps is recommended as adjuvant renoprotection",
    correct_option: "C",
    explanation: "Rationale: The CPG describes uric acid reduction as a potential strategy with emerging evidence that needs more RCTs. There is no conclusive evidence for pentoxifylline, vitamin D analogues or traditional medications; studies of Cordyceps and puerarin were of low methodological quality. A, B and D overstate weak evidence. Teaching point: ACEi/ARB, BP and glycaemic control are proven; urate lowering and herbal agents are not.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Sections 4.5 and 4.6.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 67-year-old woman with CKD G3b, no known cardiovascular disease and LDL-C of 3.4 mmol/L asks whether a statin is worthwhile. Which statement best reflects the CPG?",
    option_a: "Statins should be offered for primary prevention of cardiovascular events; SHARP showed a 17% reduction in major atherosclerotic events with ezetimibe/simvastatin",
    option_b: "Statins are mainly indicated to slow CKD progression",
    option_c: "Statins are contraindicated below eGFR 45",
    option_d: "Statins are only for secondary prevention in CKD",
    correct_option: "A",
    explanation: "Rationale: Recommendation 9 states that statins should be offered for primary and secondary prevention of CV events in CKD. In SHARP (CKD stages 3-5), ezetimibe/simvastatin reduced major atherosclerotic events by 17%, without increased adverse events. B is wrong because evidence for slowing progression is insufficient. C is wrong (many statins need no adjustment). D omits primary prevention. Teaching point: Statins in CKD are for CV prevention, not for kidney protection.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Sections 4.4 and 5.1; Recommendation 9.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 58-year-old man with CKD G3a and hypertension but no cardiovascular disease asks whether he should take daily aspirin. What is the most appropriate advice?",
    option_a: "Start aspirin 100 mg daily for primary prevention",
    option_b: "Start aspirin plus clopidogrel",
    option_c: "Aspirin is indicated once eGFR falls below 30",
    option_d: "Aspirin should not be used for primary prevention in CKD",
    correct_option: "D",
    explanation: "Rationale: Recommendation 10 states that aspirin should not be used for primary prevention of CVD in CKD. A meta-analysis found no clear benefit and no reduction in mortality, with a likely increase in major bleeding. Aspirin is recommended for secondary prevention. B is wrong because the combination should be avoided unless there is a compelling indication. C has no basis. Teaching point: In CKD: aspirin for secondary prevention only.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 5.2; Recommendation 10.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 64-year-old woman with DKD and a TIA 3 years ago takes aspirin. Her neurologist suggests adding clopidogrel long term \"for extra protection\". She has had no recent coronary event or stent. What is the most appropriate advice?",
    option_a: "Add clopidogrel, as the combination reduces mortality in DKD",
    option_b: "Avoid adding clopidogrel unless there is a compelling indication; in DKD the combination was associated with higher mortality",
    option_c: "Stop aspirin and use clopidogrel plus warfarin",
    option_d: "Double the aspirin dose instead",
    correct_option: "B",
    explanation: "Rationale: Recommendation 10 states that combination clopidogrel and aspirin should be avoided in CKD unless compelling indications are present. A post-hoc CHARISMA analysis showed a 60% increase in overall mortality with the combination versus aspirin alone in DKD, and CKD patients have a higher bleeding risk. A reverses the evidence. C and D are not supported. Teaching point: Dual antiplatelet therapy in CKD needs a compelling indication.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 5.2; Recommendation 10.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 69-year-old man with type 2 diabetes and eGFR 41 ml/min/1.73 m2 needs a contrast-enhanced CT for suspected pancreatic malignancy, and no alternative imaging will answer the question. Which measure is recommended by the CPG?",
    option_a: "Oral N-acetylcysteine as the main prophylaxis",
    option_b: "High-osmolar ionic contrast at the usual dose",
    option_c: "Isotonic saline peri-procedure with the lowest dose of low- or iso-osmolar contrast, avoiding repeat studies within 48 hours",
    option_d: "Intravenous sodium bicarbonate as the proven prophylaxis",
    correct_option: "C",
    explanation: "Rationale: He is high risk (eGFR <60 and diabetes). Measures include isotonic saline peri-procedure, non-ionic low-osmolar (e.g. iopamidol) or iso-osmolar (e.g. iodixanol) contrast, the lowest possible dose and no repeat studies within 48 hours. The CPG states there is insufficient evidence for N-acetylcysteine and sodium bicarbonate, which makes A and D traps. B uses the wrong contrast. Teaching point: Contrast AKI prevention: isotonic saline and minimal low/iso-osmolar contrast; NAC and bicarbonate are unproven.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.7(iv).",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 55-year-old woman with CKD G4 (eGFR 22 ml/min/1.73 m2) needs MRI characterisation of a liver lesion. The radiologist plans gadolinium. What is the main concern?",
    option_a: "Contrast-induced nephropathy identical to iodinated contrast",
    option_b: "Nephrogenic systemic fibrosis, so gadolinium should be avoided at eGFR <30",
    option_c: "Hyperphosphataemia",
    option_d: "Anaphylaxis is more common in CKD",
    correct_option: "B",
    explanation: "Rationale: The CPG states that gadolinium should be avoided in patients with eGFR <30 ml/min/1.73 m2 due to an increased risk of nephrogenic systemic fibrosis. A describes the iodinated contrast concern. C relates to oral sodium phosphate bowel preparation. D is not the stated risk. Teaching point: Gadolinium: avoid at eGFR <30 because of nephrogenic systemic fibrosis.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.7(v).",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 63-year-old man with CKD G3a (eGFR 50 ml/min/1.73 m2) is booked for colonoscopy. Which bowel preparation should be avoided?",
    option_a: "Macrogol (polyethylene glycol)",
    option_b: "Oral sodium phosphate",
    option_c: "Clear fluids the day before",
    option_d: "Senna the night before",
    correct_option: "B",
    explanation: "Rationale: The CPG advises avoiding oral sodium phosphate (FLEET) in CKD with eGFR <60 ml/min/1.73 m2 because of the risk of acute hyperphosphataemia, and recommends alternatives such as macrogol (FORTRANS). The other options are not flagged. Teaching point: No oral sodium phosphate bowel prep below eGFR 60; use macrogol.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 4.7(vi).",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 30-year-old woman with IgA nephropathy wants to conceive. Her creatinine is 98 umol/L, BP is 124/78 mmHg on lisinopril and urine protein is 0.4 g/day. She has no active systemic disease. What is the most appropriate advice?",
    option_a: "Pregnancy should be avoided because she has CKD",
    option_b: "Pregnancy may be considered with pre-pregnancy care, stopping lisinopril before conception, and multidisciplinary co-management",
    option_c: "Continue lisinopril throughout pregnancy because it protects the kidneys",
    option_d: "Pregnancy is safe and needs no specialist input",
    correct_option: "B",
    explanation: "Rationale: Pregnancy may be considered in women with mild impairment (creatinine <124 umol/L), well-controlled BP and proteinuria <1 g/day, all of which she meets. All women of reproductive age with CKD should receive pre-pregnancy care, ACEi/ARB should be avoided in pregnancy, and pregnant women with CKD should be co-managed by a multidisciplinary team. A is too restrictive. C ignores that ACEi must be avoided. D ignores the increased maternal-foetal risks that begin even at stage 1. Teaching point: Creatinine <124, controlled BP and proteinuria <1 g/day: pregnancy may be considered, without ACEi/ARB.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 6; Recommendation 11.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A primary care doctor reviews four patients with CKD. Which patient meets the CPG criteria for referral to a nephrologist?",
    option_a: "A 68-year-old woman with eGFR 52 ml/min/1.73 m2, stable for 3 years, and proteinuria 0.3 g/day",
    option_b: "A 74-year-old man with eGFR 58 ml/min/1.73 m2 and controlled BP on two agents",
    option_c: "A 55-year-old man with uPCR 130 mg/mmol despite optimal treatment",
    option_d: "A 49-year-old woman with eGFR 70 ml/min/1.73 m2 and ACR 4 mg/mmol on ramipril",
    correct_option: "C",
    explanation: "Rationale: Referral criteria include persistent heavy proteinuria (≥1 g/day or uPCR ≥100 mg/mmol) despite optimal treatment, isolated microscopic haematuria after excluding urogynaecological causes, haematuria with proteinuria ≥0.5 g/day, rapid decline, eGFR <30, resistant hypertension, suspected renal artery stenosis or hereditary disease, pregnancy, persistent potassium abnormalities and unexplained CKD. Patients A, B and D are stable without a referral criterion. Teaching point: uPCR ≥100 mg/mmol (≈1 g/day) despite treatment is a referral trigger.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 7; Recommendation 12.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 60-year-old woman with CKD G3a has a clinic BP of 156/94 mmHg, confirmed with home readings and good adherence, despite amlodipine 10 mg, perindopril 8 mg and indapamide 1.5 mg. Why does she meet the CPG criteria for nephrology referral?",
    option_a: "She has failed to reach target BP despite three antihypertensive agents including a diuretic",
    option_b: "She is over 60 years old",
    option_c: "She takes a calcium channel blocker",
    option_d: "Her CKD is stage G3a",
    correct_option: "A",
    explanation: "Rationale: Resistant hypertension, defined as failure to achieve target BP despite three antihypertensive agents including a diuretic, is a referral criterion in Recommendation 12. Age, the drug class and G3a CKD alone are not referral criteria (G4-G5, eGFR <30, is). Teaching point: Three drugs including a diuretic without reaching target: refer.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 7; Recommendation 12.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 66-year-old man with known CKD G3b presents with vomiting after a week of ibuprofen for back pain. Creatinine has risen from 160 to 420 umol/L and potassium is 7.1 mmol/L with peaked T waves. What is the most appropriate referral pathway?",
    option_a: "Routine outpatient nephrology referral within 3 months",
    option_b: "Primary care follow-up in one week",
    option_c: "Immediate discussion with a nephrologist, alongside emergency treatment of hyperkalaemia",
    option_d: "Urology referral",
    correct_option: "C",
    explanation: "Rationale: Immediate discussion with a nephrologist is indicated for AKI superimposed on CKD, newly detected ESRD, accelerated or malignant hypertension, life-threatening hyperkalaemia and suspected rapidly progressive glomerulonephritis. He has both AKI on CKD (NSAID-related) and life-threatening hyperkalaemia. A and B are dangerously slow. D is for renal outflow obstruction. Teaching point: AKI on CKD or life-threatening hyperkalaemia needs immediate nephrology discussion.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 7.",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "An 81-year-old woman has eGFR 52 ml/min/1.73 m2, stable over 4 years, urine protein 0.2 g/day, and well-controlled BP and diabetes. What is the most appropriate setting for her care?",
    option_a: "Urgent nephrology referral for renal replacement therapy planning",
    option_b: "Primary care, in collaboration with a nephrologist",
    option_c: "Discharge from all kidney follow-up because the eGFR is age-appropriate",
    option_d: "Immediate renal biopsy",
    correct_option: "B",
    explanation: "Rationale: An eGFR <60 is common in the elderly and may be age-appropriate. Elderly patients with stable eGFR and low risk of progression (proteinuria ≤1 g/day, optimal BP and glycaemic control) can be managed in primary care in collaboration with a nephrologist. A is unnecessary for her. C abandons monitoring. D is not indicated. Teaching point: Stable, low-risk elderly CKD patients are managed in primary care with nephrology collaboration.\nReference: Malaysian CPG Management of Chronic Kidney Disease in Adults 2018 (2nd Ed.), Section 7 (Special issues in elderly).",
    tag: "CPG CKD 2018"
  },
  {
    question_text: "A 46-year-old man with a mid-upper arm circumference of 40 cm has a clinic BP of 154/96 mmHg measured with a standard 13 cm x 24 cm cuff. He has no symptoms and no previous readings. What is the most likely effect of the cuff on this reading?",
    option_a: "A falsely high reading, because the cuff is too small for his arm",
    option_b: "A falsely low reading, because the cuff is too small",
    option_c: "No effect, because cuff size does not alter readings",
    option_d: "A falsely high reading, because the cuff is too large",
    correct_option: "A",
    explanation: "Rationale: The bladder length should encircle at least 80% and the width at least 40% of the arm circumference. A cuff that is too small gives a falsely high reading, and one that is too big gives a falsely low reading. A standard 13 x 24 cm cuff is too small for a 40 cm arm. B and D reverse the direction, and C is wrong. Teaching point: Small cuff, falsely high; large cuff, falsely low.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Chapter 2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 63-year-old woman attends her first hypertension clinic visit. BP is 168/88 mmHg in the right arm and 142/80 mmHg in the left arm on repeated measurement. What is the most appropriate interpretation?",
    option_a: "Average the two arms and record 155/84 mmHg",
    option_b: "Use the left arm because it is lower and safer",
    option_c: "Ignore the difference, as it is within normal variation",
    option_d: "Take the higher (right arm) reading as her BP and evaluate further, as the difference exceeds 20/10 mmHg",
    correct_option: "D",
    explanation: "Rationale: BP should be measured in both arms on the first visit and the higher reading taken as the systolic BP. A difference of more than 20/10 mmHg requires further evaluation to look for a cause, such as subclavian or aortic disease. Her systolic difference is 26 mmHg. A and B underestimate her BP, and C misses a significant difference. Teaching point: Measure both arms at the first visit; use the higher arm, and investigate a gap >20/10 mmHg.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Chapter 2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A clinic nurse records a patient's seated BP twice, 1 minute apart, in the same arm. The readings are 162/94 mmHg and 148/90 mmHg. What should be done next?",
    option_a: "Record 162/94 mmHg as the BP",
    option_b: "Take a third reading, then average the last two readings",
    option_c: "Record the lower reading of 148/90 mmHg",
    option_d: "Repeat the measurement on another day only",
    correct_option: "B",
    explanation: "Rationale: At least two readings 1-2 minutes apart should be taken in the same arm and position. A third reading should be taken if the first two differ by more than 10 mmHg, and the last two readings averaged. Here the systolic readings differ by 14 mmHg. A and C each use one reading, and D ignores the CPG technique for the current visit. Teaching point: If the first two readings differ by >10 mmHg, take a third and average the last two.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Chapter 2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 78-year-old woman on amlodipine and indapamide reports light-headedness on rising. Seated BP is 146/80 mmHg. One minute after standing it is 122/74 mmHg. What does this finding indicate?",
    option_a: "Normal orthostatic response, as the diastolic fall is small",
    option_b: "White-coat hypertension",
    option_c: "A significant postural drop, as systolic BP falls by more than 20 mmHg after one minute of standing",
    option_d: "Masked hypertension",
    correct_option: "C",
    explanation: "Rationale: A systolic drop of more than 20 mmHg after one minute of standing is a significant postural drop. In the elderly, BP should be taken sitting and standing, and the CPG recommends measuring standing BP to guide treatment. Her systolic fall is 24 mmHg. A ignores the systolic threshold, and B and D describe clinic-versus-out-of-office discrepancies. Teaching point: In older adults, measure standing BP; a systolic fall >20 mmHg at 1 minute is significant.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Chapter 2; Section 7.5.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 52-year-old man performs home BP monitoring for 7 days, twice daily with two readings each time. Day 1 readings average 152/96 mmHg. Days 2-7 average 131/82 mmHg. Clinic BP has been 150/94 mmHg on two occasions. How should these results be interpreted?",
    option_a: "Isolated office (\"white-coat\") hypertension",
    option_b: "Masked hypertension",
    option_c: "Stage 1 hypertension confirmed by home readings",
    option_d: "The home readings are invalid because day 1 is high",
    correct_option: "A",
    explanation: "Rationale: Day 1 home readings should be disregarded and the remaining days averaged. A mean home BP >135/85 mmHg is elevated. His home average of 131/82 is below 135/85, while clinic BP is persistently above 140/90, which defines isolated office hypertension. B is the reverse pattern. C counts day 1. D misunderstands the protocol, which expects day 1 to be discarded. Teaching point: Discard day 1 of HBPM, average at least 3 further days, and use 135/85 mmHg as the threshold.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Sections 1.2 and 2.2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 44-year-old female smoker has clinic BP readings of 128/82 mmHg on three visits. She has left ventricular hypertrophy on ECG. Daytime ambulatory BP averages 146/92 mmHg. Which statement is most accurate?",
    option_a: "She has isolated office hypertension, which is benign",
    option_b: "She has masked hypertension, which carries a worse prognosis than isolated office hypertension, and drug treatment is indicated given target organ damage",
    option_c: "No treatment is needed because clinic BP is normal",
    option_d: "Ambulatory BP is not useful in this situation",
    correct_option: "B",
    explanation: "Rationale: Masked hypertension is normal clinic BP with elevated daytime ambulatory or home BP (≥135/85 mmHg). Its prognosis is worse than isolated office hypertension. Initial management is healthy living, but drug treatment is indicated when CV risk is elevated or target organ damage is present, as with her LVH. A reverses the pattern. C ignores out-of-office readings. D is wrong because diagnosing masked hypertension is an ABPM indication. Teaching point: Masked hypertension is worse than white-coat; treat with drugs when TOD or high CV risk is present.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Sections 1.3 and 2.3.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 58-year-old woman has a confirmed clinic BP of 166/96 mmHg on two separate occasions. How is her blood pressure classified in the CPG?",
    option_a: "Stage 1 (mild) hypertension",
    option_b: "Isolated systolic hypertension",
    option_c: "Stage 3 (severe) hypertension",
    option_d: "Stage 2 (moderate) hypertension",
    correct_option: "D",
    explanation: "Rationale: Table 1-A defines stage 1 as SBP 140-159 and/or DBP 90-99, stage 2 as SBP 160-179 and/or DBP 100-109, and stage 3 as ≥180 and/or ≥110 mmHg. With \"and/or\" the higher category applies, so SBP 166 places her in stage 2. B requires DBP <90 mmHg. A and C use the wrong band. Teaching point: Classify by whichever of SBP or DBP falls in the higher category.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Chapter 1, Table 1-A.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 67-year-old man has repeated clinic BP readings of 158/78 mmHg. He asks whether his \"normal bottom number\" means he needs no treatment. Which statement best reflects the CPG?",
    option_a: "He has isolated systolic hypertension, which carries a poor prognosis; treating it reduces mortality, stroke and heart failure",
    option_b: "Diastolic BP is the more important risk factor after age 50",
    option_c: "Treatment is only needed if diastolic BP exceeds 90 mmHg",
    option_d: "Isolated systolic hypertension is rare after age 50",
    correct_option: "A",
    explanation: "Rationale: ISH is SBP ≥140 with DBP <90 mmHg. It is common after age 50 and carries a poor prognosis, and control reduces total and CV mortality, stroke and heart failure. After age 50, SBP is the more important risk factor, so B reverses it. C ignores ISH. D is wrong because systolic hypertension is the most common form above age 50. Teaching point: After 50, systolic BP matters more than diastolic; treat isolated systolic hypertension.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 1.1.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 41-year-old man has a BP of 148/94 mmHg at a workplace health screening. He has no symptoms and no known target organ damage. According to Table 3-E, what is the recommended follow-up?",
    option_a: "Recheck in one year",
    option_b: "Assess global CV risk and confirm within two months",
    option_c: "Start treatment the same day",
    option_d: "Assess global CV risk and evaluate within one week",
    correct_option: "B",
    explanation: "Rationale: Table 3-E advises: <120/<80 recheck in one year; 120-139/80-89 assess risk and recheck within 3-6 months; 140-159/90-99 assess risk and confirm within two months; 160-179/100-109 evaluate within one month; 180-209/110-119 evaluate within one week; ≥210/≥120 initiate treatment after repeated measurement in the same encounter. His reading falls in the 140-159/90-99 band. Teaching point: Higher initial readings shorten the time to confirmation, from a year down to the same visit.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Chapter 3, Table 3-E.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 55-year-old woman with type 2 diabetes has confirmed BP of 150/92 mmHg. She has no other CV risk factors or target organ damage. What is her CV risk category using Table 3-D, and what management is indicated?",
    option_a: "Low risk; healthy living for 3 to 6 months",
    option_b: "Medium risk; healthy living only",
    option_c: "Very high risk; drug treatment and healthy living",
    option_d: "Intermediate risk; recheck in one year",
    correct_option: "C",
    explanation: "Rationale: In Table 3-D, diabetes (with previous MI/IHD, previous stroke or CKD) places a patient in the highest column, which is very high risk at any BP level from 130-139 upward. Very high risk (>30% 10-year risk) requires drug treatment plus healthy living. A, B and D would be correct only without diabetes or other risk factors. Teaching point: Diabetes puts a hypertensive patient in the very high-risk column regardless of BP stage.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Chapter 3, Table 3-D.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 38-year-old non-smoking man has confirmed BP of 144/92 mmHg. He has no diabetes, normal lipids, a normal ECG and urinalysis, and no family history of premature CVD. What is the most appropriate initial management?",
    option_a: "Start a single-pill combination",
    option_b: "Start a beta-blocker",
    option_c: "Healthy living advice for 3 to 6 months, with review at least twice (ideally monthly)",
    option_d: "Discharge with yearly checks only",
    correct_option: "C",
    explanation: "Rationale: For stage 1 hypertension with low CV risk, healthy living is advised for 3-6 months, because drug treatment has not been shown to prevent CV outcomes in this group. He should be seen at least twice, ideally monthly. Medium or higher risk stage 1 patients are offered drugs at diagnosis. A and B treat him as higher risk. D under-monitors a confirmed hypertensive. Teaching point: Low-risk stage 1: a 3-6 month trial of healthy living with regular review.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 5.1a; Figure 5-A.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 50-year-old woman with stage 1 hypertension and BMI 31 kg/m2 asks how much her BP might fall if she loses weight. Which statement is consistent with the CPG?",
    option_a: "Each 1 kg weight loss lowers SBP by about 10 mmHg",
    option_b: "A reduction of 1 kg relates to about 1 mmHg fall in SBP, and 4 kg to about 4.5/3.2 mmHg",
    option_c: "Weight loss has no effect on BP",
    option_d: "Weight loss is proven to reduce mortality in hypertension",
    correct_option: "B",
    explanation: "Rationale: A 4 kg reduction in body weight achieves a BP reduction of about 4.5/3.2 mmHg, and 1 kg of weight loss relates to about 1 mmHg reduction in SBP. The long-term effect of weight loss on mortality and morbidity in hypertension is unknown, so D is wrong. A overstates the effect, and C contradicts the evidence. Teaching point: About 1 mmHg of systolic BP per kilogram of weight lost.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 4.1.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 47-year-old man with hypertension drinks four standard drinks daily. His eGFR is 92 ml/min/1.73 m2 and potassium is 4.0 mmol/L. He asks what changes will help his BP. Which advice is most consistent with the CPG?",
    option_a: "Limit alcohol to fewer than two drinks per day and increase dietary potassium from fruit, vegetables, nuts and legumes",
    option_b: "Stop all fruit to reduce sugar intake",
    option_c: "Take fish oil and garlic supplements as proven BP-lowering therapy",
    option_d: "Alcohol has no effect on BP",
    correct_option: "A",
    explanation: "Rationale: The CPG recommends limiting alcohol to fewer than two drinks per day for those who drink (reduction lowers BP in a dose-dependent way) and increasing dietary potassium, which lowers BP by about 3.5/2 mmHg in adults with normal renal function and is associated with a 24% lower stroke risk. B removes a potassium source. C is wrong because evidence for fish oil and garlic is limited. D contradicts the evidence. Teaching point: Fewer than two drinks a day and more dietary potassium (if renal function is normal).\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Sections 4.3, 4.8 and 4.9.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 49-year-old woman has confirmed BP of 172/104 mmHg. She has no compelling indications for any specific drug class. What is the most appropriate initial drug strategy?",
    option_a: "Low-dose monotherapy for 6 weeks",
    option_b: "Healthy living alone for 3 to 6 months",
    option_c: "Beta-blocker monotherapy",
    option_d: "Combination therapy as first line, either as free drugs or a single-pill combination",
    correct_option: "D",
    explanation: "Rationale: In patients presenting with stage II hypertension or beyond, combination therapy is recommended as first line, and it achieves control faster than monotherapy. Single-pill combinations improve adherence. A applies to stage 1. B delays treatment in stage 2. C is a weaker first-line option in uncomplicated hypertension. Teaching point: Stage 2 and above: start with combination therapy.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 5.1b; Figure 5-A.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 29-year-old woman with newly diagnosed hypertension plans a pregnancy within the next year. She developed angioedema on enalapril in the past. Which first-line drug class does the CPG suggest considering in her?",
    option_a: "Angiotensin receptor blocker",
    option_b: "Beta-blocker",
    option_c: "Direct renin inhibitor",
    option_d: "ACE inhibitor at a lower dose",
    correct_option: "B",
    explanation: "Rationale: Guidelines recommend that beta-blockers be considered in younger patients who are intolerant of or have contraindications to ACEIs and ARBs, women of child-bearing potential, and patients with increased sympathetic drive. She has both ACEI intolerance and child-bearing potential, and RAS blockers are contraindicated in pregnancy. A and C act on the RAS. D repeats a drug that caused angioedema. Teaching point: Consider a beta-blocker first in young women of child-bearing potential or those intolerant of RAS blockers.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 5.1b; Section 9.4.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 53-year-old man with stage 1 hypertension and medium CV risk was started on amlodipine 5 mg. After 6 weeks his BP has fallen from 156/96 to 146/92 mmHg, and he has no side effects. What is the most appropriate next step?",
    option_a: "Increase the dose of amlodipine or add a second drug",
    option_b: "Stop amlodipine because it has failed",
    option_c: "Wait a further 6 months before any change",
    option_d: "Add a second calcium channel blocker",
    correct_option: "A",
    explanation: "Rationale: If target BP is not achieved despite some BP-lowering effect after up to six weeks of monotherapy, either increase the dose of the initial drug or add a second agent. Substitution is recommended when there is no response or poor tolerance. B abandons a partially effective drug. C delays control. D duplicates the same class. Teaching point: Partial response: increase dose or add a drug. No response or intolerance: substitute.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 5.1b.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 61-year-old woman with hypertension is on lisinopril 20 mg and remains above target. Her doctor considers adding a second drug. Which combination should be avoided according to the CPG?",
    option_a: "ACE inhibitor plus thiazide-like diuretic",
    option_b: "ACE inhibitor plus calcium channel blocker",
    option_c: "ACE inhibitor plus angiotensin receptor blocker",
    option_d: "ACE inhibitor plus amlodipine as a single pill",
    correct_option: "C",
    explanation: "Rationale: Table 5-B lists ACEI/thiazide and ACEI/CCB among the preferred combinations based on outcome trials. The CPG states that the combination of ACEI and ARB is not recommended and is to be avoided. A, B and D are preferred options. Teaching point: Never combine an ACE inhibitor with an ARB for hypertension.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 5.1b, Table 5-B; Section 9.4.2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 56-year-old man with recurrent gout attacks and hypertension needs his first antihypertensive. He has no diabetes, heart disease or renal impairment. According to Table 5-C, which drug class is graded most favourably for him?",
    option_a: "Thiazide diuretic",
    option_b: "Angiotensin receptor blocker",
    option_c: "Beta-blocker",
    option_d: "Loop diuretic",
    correct_option: "B",
    explanation: "Rationale: In Table 5-C, for gout, diuretics are graded \"+/-\" (use with care), while beta-blockers, ACEIs, CCBs and alpha-blockers are \"+\" and ARBs are \"++\", the highest grading in that row. A and D raise urate. C is acceptable but graded lower. Teaching point: In gout, avoid diuretics where possible; ARBs are graded most favourably.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 5.1b, Table 5-C.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 60-year-old woman's BP has been at target for 6 months on two drugs. She asks whether she can collect repeat prescriptions without seeing the doctor. What is the most appropriate advice?",
    option_a: "Repeat prescriptions are adequate once BP is controlled",
    option_b: "Review only if symptoms develop",
    option_c: "Treatment can be stopped once BP has been normal for 6 months",
    option_d: "Follow-up at 3- to 6-monthly intervals, and at least 6-monthly, with assessment of BP, adverse effects, global risk and complications",
    correct_option: "D",
    explanation: "Rationale: Once target BP is achieved, follow-up at 3-6 month intervals is appropriate, and patients should have at least six-monthly follow-up rather than repeat prescriptions without seeing a doctor. Visits should assess BP control, adverse reactions, global vascular risk and complications. Most patients need life-long treatment, so C is wrong. A and B are explicitly discouraged. Teaching point: Controlled hypertension still needs at least six-monthly review; treatment is usually life-long.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 5.2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 58-year-old man insists on reducing his medication. He has been on amlodipine 5 mg alone with BP 128/78 mmHg for 15 months. His original BP was 148/92 mmHg with low global CV risk, and he exercises regularly. Which statement best reflects the CPG?",
    option_a: "Step-down is never permitted",
    option_b: "Step-down may be considered, as he meets the criteria, provided he agrees to follow-up at least every 3 to 6 months",
    option_c: "Stop all treatment and review in 2 years",
    option_d: "Step-down is only allowed after 5 years of control",
    correct_option: "B",
    explanation: "Rationale: Step-down therapy is discouraged in most patients, but for those who insist the criteria are: BP not higher than stage I with low global CV risk; BP well controlled for at least 1 year on the same medication and dose; agreement to follow-up at least 3-6 monthly; and motivation for healthy living. He meets all of these. A is too absolute. C abandons monitoring. D invents a duration. Teaching point: Step-down needs low-risk stage 1, at least a year of stable control, 3-6 monthly review and healthy living.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 5.4.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A primary care doctor reviews four newly diagnosed hypertensive patients, each with confirmed BP 150/94 mmHg. Which patient meets the CPG criteria for specialist referral?",
    option_a: "A 26-year-old man with no other medical history",
    option_b: "A 54-year-old woman with dyslipidaemia",
    option_c: "A 61-year-old man who smokes",
    option_d: "A 49-year-old woman with obesity",
    correct_option: "A",
    explanation: "Rationale: Indications for referral include severe hypertension (>180/110), suspected secondary hypertension, resistant or refractory hypertension, recent onset target organ damage, pregnancy, office hypertension with additional CV risk, children and adults under 30 years, and secondary prevention with multiple co-morbidities. The 26-year-old qualifies on age. B, C and D have common risk factors that can be managed in primary care. Teaching point: Hypertension under age 30 warrants referral to look for a secondary cause.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 5.3.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 50-year-old man who stopped his medication 2 months ago has BP 196/116 mmHg at a clinic. He has a mild headache but no chest pain, breathlessness, neurological deficit or visual change. ECG and urinalysis are unchanged from before. What is the most appropriate initial step?",
    option_a: "Intravenous labetalol infusion",
    option_b: "Sublingual nifedipine to bring BP to 120/80 mmHg within an hour",
    option_c: "Rest in a quiet room with BP checked every 30 minutes for up to 2 hours before starting oral therapy",
    option_d: "Immediate transfer for intensive care admission",
    correct_option: "C",
    explanation: "Rationale: This is hypertensive urgency (no acute target organ damage). The flowchart advises rest in a quiet room with BP checked every 30 minutes for up to 2 hours; a reduction of 10-20 mmHg SBP defines a responder. Non-responders start oral antihypertensives. There is no role for intravenous drugs in urgency, so A is wrong. B reduces BP too fast and too far. D is for emergencies. Teaching point: Hypertensive urgency: rest and observe first; oral drugs only; never IV.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 6.1.1; Figure 6-A; Table 6-B.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 56-year-old woman with hypertensive urgency has not responded to 2 hours of rest. She has asthma. Which oral agent from Table 6-B is most appropriate?",
    option_a: "Captopril 12.5 mg",
    option_b: "Labetalol 200 mg",
    option_c: "Intravenous hydralazine",
    option_d: "Clonidine withdrawal regimen",
    correct_option: "A",
    explanation: "Rationale: Table 6-B lists captopril 12.5 mg, nifedipine 10 mg and labetalol 200 mg as oral treatments for urgency. Labetalol has beta-blocking activity, and beta-blockers are absolutely contraindicated in uncontrolled asthma and relatively contraindicated in controlled asthma, so B is the trap. C is intravenous, which has no role in urgency. D is not a treatment (clonidine withdrawal causes rebound hypertension). Teaching point: Choose the urgency agent around co-morbidity: avoid labetalol in asthma.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 6.1.1, Table 6-B; Section 9.2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 62-year-old man presents with BP 210/124 mmHg, confusion and papilloedema. CT brain shows no haemorrhage, and hypertensive encephalopathy is diagnosed. What is the general CPG aim for initial BP reduction in a hypertensive emergency?",
    option_a: "Normalise BP to <140/90 mmHg within the first hour",
    option_b: "Reduce BP by about 50% within 30 minutes",
    option_c: "Avoid any BP reduction for 24 hours",
    option_d: "Reduce BP by 10-25% within minutes to hours, but not lower than 160/90 mmHg, using parenteral drugs",
    correct_option: "D",
    explanation: "Rationale: Patients with hypertensive emergency should be admitted and have BP reduced by 10%-25% within minutes to hours but not lower than 160/90 mmHg, best achieved with parenteral drugs. Rapid over-reduction risks provoking coronary, cerebral or renal ischaemia, so A and B are dangerous. C leaves an emergency untreated. Teaching point: Emergency: parenteral, controlled 10-25% reduction, not below 160/90 mmHg.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 6.1.2; Section 6.2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 34-year-old man presents with chest pain, BP 202/118 mmHg and ST depression after cocaine use. Aortic dissection has been excluded. Which agent should be avoided?",
    option_a: "Intravenous nitrate",
    option_b: "Selective beta-blocker",
    option_c: "Benzodiazepine for agitation",
    option_d: "Calcium channel blocker",
    correct_option: "B",
    explanation: "Rationale: Table 6-C advises avoiding selective beta-blockers in acute coronary syndrome if cocaine abuse is suspected, and considering type A aortic dissection as a cause. BP in ACS is reduced by <25% within 1 hour, then to ≤160/100 mmHg over 2-6 hours. A and D are not flagged for avoidance. C is not a BP agent under discussion. Teaching point: Suspected cocaine ACS: avoid selective beta-blockers.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 6.1.2, Table 6-C.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 68-year-old male smoker with peripheral arterial disease has had well-controlled BP for years, but it has recently become resistant to three drugs. Two weeks after starting ramipril his creatinine rose from 110 to 190 umol/L. He has had one episode of flash pulmonary oedema with normal LV function. What is the most likely cause of his worsening hypertension?",
    option_a: "Primary aldosteronism",
    option_b: "Phaeochromocytoma",
    option_c: "Atherosclerotic renovascular hypertension",
    option_d: "White-coat hypertension",
    correct_option: "C",
    explanation: "Rationale: Features suggesting renovascular hypertension include deterioration in previously well-controlled BP, resistant hypertension, flash pulmonary oedema, renal failure induced by ACEIs or ARBs, and coexisting diffuse atherosclerotic disease. He has all of these, making atherosclerotic renal artery stenosis likely. A and B are endocrine causes without these features. D is excluded by the creatinine rise and flash oedema. Teaching point: Flash pulmonary oedema plus ACEI-induced renal failure in an arteriopath points to renal artery stenosis.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 7.2.2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 72-year-old woman has 75% atherosclerotic renal artery stenosis on CT angiography. Her BP is controlled on two drugs and renal function has been stable for 2 years. What is the most appropriate management?",
    option_a: "Intensive medical therapy (BP control, statin, low-dose aspirin, smoking cessation) with monitoring of renal function and stenosis progression",
    option_b: "Renal artery stenting, as it is superior to medical therapy",
    option_c: "Surgical revascularisation",
    option_d: "Stop all antihypertensives",
    correct_option: "A",
    explanation: "Rationale: Patients with ARAS should be primarily medically managed, because angioplasty and stenting have not shown any advantage over optimal medical therapy. This applies to stenosis <70% or to those with stable renal function and good BP control despite stenosis >70%, with monitoring by duplex and renal function. Revascularisation is reserved for flash pulmonary oedema, resistant hypertension, intolerance of therapy or unexplained progressive renal decline. B and C are not indicated for her, and D is unsafe. Teaching point: Atherosclerotic renal artery stenosis: medical therapy first; stent only for specific indications.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 7.2.2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 27-year-old woman has newly diagnosed hypertension of 164/100 mmHg and an epigastric bruit. Imaging shows a \"string of beads\" appearance of the right renal artery. She hopes to start a family. What is the most appropriate management?",
    option_a: "Lifelong ACE inhibitor alone",
    option_b: "Consider renal angioplasty",
    option_c: "Observation without treatment",
    option_d: "Nephrectomy",
    correct_option: "B",
    explanation: "Rationale: Patients with RVH due to fibromuscular dysplasia should be considered for revascularisation. Given the typical young female patient, lower angioplasty risks, many years of drug therapy otherwise, and the limitations of RAS blockers during pregnancy, angioplasty is favoured. A relies on a drug she cannot take in pregnancy. C leaves her hypertensive. D is excessive. Teaching point: FMD in a young woman: favour angioplasty; ARAS in older patients: medical therapy.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 7.2.2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 59-year-old man with stable exertional angina has BP of 146/88 mmHg on no medication. Resting heart rate is 82/min. Which drug choice and BP target are most appropriate?",
    option_a: "Short-acting nifedipine, target <140/90 mmHg",
    option_b: "Alpha-blocker, target <150/90 mmHg",
    option_c: "ACE inhibitor alone, target <160/100 mmHg",
    option_d: "Beta-blocker (or CCB), target <130/80 mmHg",
    correct_option: "D",
    explanation: "Rationale: In CHD patients with symptomatic stable angina, the treatment of choice is a beta-blocker or a CCB, with cardio-selective beta-blockers preferred and short-acting nifedipine avoided. The BP target in hypertension with CHD is <130/80 mmHg. A uses a drug to avoid. B and C use the wrong drug or target. Teaching point: Hypertension plus angina: beta-blocker or CCB, target <130/80 mmHg, never short-acting nifedipine.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 7.3.1.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 64-year-old woman with heart failure and an ejection fraction of 30% is on ramipril, bisoprolol and spironolactone. She is euvolaemic but BP remains 152/90 mmHg. Which additional antihypertensive is most appropriate?",
    option_a: "Amlodipine",
    option_b: "Verapamil",
    option_c: "Diltiazem",
    option_d: "Moxonidine",
    correct_option: "A",
    explanation: "Rationale: If hypertension persists despite ACEI/ARB, aldosterone antagonist and beta-blocker in HFrEF, CCBs that are not negatively inotropic, such as amlodipine and felodipine, can be added (Table 5-C notes evidence for amlodipine and felodipine only). B and C are negatively inotropic non-dihydropyridines. D (moxonidine) has been shown to increase mortality in heart failure and is contraindicated. Teaching point: In HFrEF, the only CCBs to add are amlodipine or felodipine.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 7.3.2; Table 5-C; Section 9.5.2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 74-year-old woman who lives independently has repeated clinic BP of 168/84 mmHg and standing BP of 164/82 mmHg. She has mild osteoarthritis and no other co-morbidity. What is the most appropriate initial approach?",
    option_a: "Start a three-drug single-pill combination",
    option_b: "No treatment because she is over 70",
    option_c: "Start monotherapy at a low dose, titrate slowly, review at 2-4 weeks and aim for SBP <140 mmHg",
    option_d: "Start a beta-blocker and aim for SBP <120 mmHg",
    correct_option: "C",
    explanation: "Rationale: In older adults, treat when SBP is >160 mmHg. Therapy should start cautiously with low-dose monotherapy, titrated slowly with review at 2-4 weeks; initiation with combination therapy is not encouraged. The target for 65-80 year olds is <140 mmHg (consider <130 if fit). A ignores the caution against initial combination therapy. B denies proven benefit. D uses an over-aggressive target. Teaching point: Older adults: start low, go slow, monotherapy first; target <140 mmHg at 65-80 years.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 7.5.3, Table 7.5-A.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 28-year-old woman develops BP of 150/96 mmHg six months after starting a combined oral contraceptive containing ethinyl oestradiol and levonorgestrel. She wishes to continue contraception. What is the most appropriate advice?",
    option_a: "Continue the same pill and add amlodipine",
    option_b: "Stop the combined pill and offer an alternative such as a progestogen-only method",
    option_c: "Switch to a higher-oestrogen pill",
    option_d: "Stop contraception altogether",
    correct_option: "B",
    explanation: "Rationale: A woman who develops hypertension on a combined oral contraceptive should be advised to stop it and offered alternative contraception. The BP rise is nearly always reversible within 4 weeks of stopping. All progestogen-only methods are appropriate unless BP exceeds 160/100 mmHg, and a drospirenone-containing COC is an option for those wishing to continue oral contraception. A and C continue or increase the cause. D removes contraception unnecessarily. Teaching point: Hypertension on the COC: stop it and switch method; progestogen-only methods are fine below 160/100 mmHg.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 7.6.2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 54-year-old woman with controlled hypertension on losartan has severe vasomotor symptoms and asks about menopausal hormone therapy. Which statement best reflects the CPG?",
    option_a: "Hypertension is an absolute contraindication to oestrogen-based therapy",
    option_b: "MHT lowers cardiovascular events in women aged 50-79",
    option_c: "BP needs checking only once before starting",
    option_d: "Hypertension is not a contraindication; monitor BP every six months, with extra caution if conjugated equine oestrogen is used",
    correct_option: "D",
    explanation: "Rationale: Hypertension is not a contraindication to oestrogen-based MHT, and all women on MHT should have BP monitored every six months. Two large trials in women aged 50-79 found MHT (conjugated equine oestrogen with or without medroxyprogesterone) increased cardiovascular events, so greater caution is needed with CEE, and B reverses this. Drospirenone as the progestin improved BP control. Teaching point: MHT is allowed in hypertension, with 6-monthly BP checks.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 7.6.3.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 66-year-old man with hypertension has an ECG showing Mobitz type II second-degree AV block. He also has stable COPD. Which antihypertensive is absolutely contraindicated?",
    option_a: "Amlodipine",
    option_b: "Bisoprolol",
    option_c: "Indapamide",
    option_d: "Perindopril",
    correct_option: "B",
    explanation: "Rationale: Beta-blockers are absolutely contraindicated in uncontrolled asthma, severe peripheral vascular disease and second- or third-degree heart block, and relatively contraindicated in other obstructive airways disease. His Mobitz II block makes bisoprolol absolutely contraindicated. A, C and D are not contraindicated by heart block. Teaching point: Beta-blockers: absolutely contraindicated in 2nd/3rd degree heart block, uncontrolled asthma and severe PVD.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Section 9.2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 70-year-old woman with CKD and eGFR 24 ml/min/1.73 m2 has hypertension and ankle oedema on hydrochlorothiazide 25 mg, amlodipine and losartan. Her BP is 156/88 mmHg. What is the most appropriate change to her diuretic?",
    option_a: "Increase hydrochlorothiazide to 50 mg daily",
    option_b: "Add clonidine and stop it abruptly if BP falls",
    option_c: "Switch from the thiazide to a loop diuretic",
    option_d: "Add a second thiazide",
    correct_option: "C",
    explanation: "Rationale: In CKD with eGFR <30 ml/min/1.73 m2, thiazide diuretics are less effective and a switch to loop diuretics is recommended. Doses of hydrochlorothiazide above 25 mg/day are more likely to cause electrolyte and metabolic adverse effects, so A is wrong. Clonidine is discouraged and must not be withdrawn suddenly because of rebound hypertension, so B is wrong. D adds more of an ineffective class. Teaching point: Below eGFR 30, switch thiazides to a loop diuretic.\nReference: Malaysian CPG Management of Hypertension 2018 (5th Ed.), Sections 9.1 and 9.5.2.",
    tag: "CPG Hypertension 2018"
  },
  {
    question_text: "A 58-year-old man who has smoked 25 cigarettes a day for 35 years has a 2-year history of morning cough with sputum and exertional breathlessness. Spirometry after 400 µg salbutamol shows FEV1 2.1 L (68% predicted) and FVC 3.4 L. Which finding confirms COPD according to the CPG?",
    option_a: "FEV1 below 80% predicted alone",
    option_b: "A post-bronchodilator FEV1/FVC ratio below 0.70",
    option_c: "A pre-bronchodilator peak flow below 80% predicted",
    option_d: "Chronic cough with a smoking history alone",
    correct_option: "B",
    explanation: "Rationale: The diagnosis should be confirmed by spirometry showing a post-bronchodilator FEV1/FVC ratio of less than 0.70. His ratio is 2.1/3.4 = 0.62. A reduced FEV1 alone (A) grades severity but does not show obstruction. Peak flow (C) has poor specificity. Symptoms and exposure (D) make COPD likely but need spirometric confirmation. Teaching point: COPD = post-bronchodilator FEV1/FVC <0.70; FEV1 % predicted then grades severity.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Sections 1.3 and 4.1; Recommendations: Diagnosis and Assessment.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 66-year-old woman with COPD has a post-bronchodilator FEV1/FVC of 0.55 and FEV1 of 42% predicted. Arterial blood gases on air are PaO2 72 mmHg and PaCO2 41 mmHg. She has no oedema. Which COPD stage is she in?",
    option_a: "Stage II (moderate)",
    option_b: "Stage IV (very severe)",
    option_c: "Stage III (severe)",
    option_d: "Stage I (mild)",
    correct_option: "C",
    explanation: "Rationale: Table 1-1 grades stage I as FEV1 ≥80%, stage II as 50-80%, stage III as 30-50% and stage IV as FEV1 <30%, or <50% plus chronic respiratory failure (PaO2 <60 mmHg with or without PaCO2 >50 mmHg). Her FEV1 of 42% with normal gases is stage III. B would need respiratory failure or cor pulmonale. Teaching point: FEV1 30-50% is stage III, unless chronic respiratory failure upgrades it to stage IV.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 1.3, Table 1-1.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 70-year-old man has FEV1 46% predicted and ankle oedema with a raised JVP. ABG on air shows PaO2 54 mmHg and PaCO2 52 mmHg. How should his COPD be staged?",
    option_a: "Stage III, because FEV1 is between 30% and 50%",
    option_b: "Stage II, because FEV1 is above 40%",
    option_c: "Unstageable until FEV1 falls below 30%",
    option_d: "Stage IV, because FEV1 is below 50% with chronic respiratory failure and cor pulmonale",
    correct_option: "D",
    explanation: "Rationale: Stage IV (very severe) is FEV1 <30% predicted, or FEV1 <50% predicted plus chronic respiratory failure. Respiratory failure is PaO2 <60 mmHg with or without PaCO2 >50 mmHg. His gases and signs of right heart failure place him in stage IV even though his FEV1 alone suggests stage III, which makes A the trap. Teaching point: Respiratory failure or right heart failure moves FEV1 <50% into stage IV.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 1.3, Tables 1-1 and 1-3.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 63-year-old woman with COPD reports that she has to stop for breath after walking about 100 metres on the level. She can dress herself without difficulty. What is her Modified Medical Research Council (MMRC) dyspnoea grade?",
    option_a: "Grade 1",
    option_b: "Grade 2",
    option_c: "Grade 3",
    option_d: "Grade 4",
    correct_option: "C",
    explanation: "Rationale: MMRC grade 3 is stopping for breath after about 100 m or a few minutes on the level. Grade 1 is breathlessness when hurrying or on a slight hill, grade 2 is walking slower than peers or stopping at own pace, and grade 4 is being too breathless to leave the house or to dress. Teaching point: MMRC 3 = stops after 100 m; MMRC 4 = breathless dressing or housebound.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 1.4, Table 1-2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 61-year-old man has a post-bronchodilator FEV1 of 62% predicted, but he is too breathless to leave the house (MMRC 4). Echocardiography and haemoglobin are normal. How should his severity be classified for treatment decisions, according to the CPG?",
    option_a: "By symptoms, which places him in the severe category",
    option_b: "By FEV1 alone, as moderate",
    option_c: "By the average of the two",
    option_d: "Severity cannot be assigned until FEV1 is repeated",
    correct_option: "A",
    explanation: "Rationale: Table 1-3 classifies severity by both spirometry and symptoms, and states that when FEV1 and symptoms disagree, symptoms should be followed. MMRC 4 corresponds to the severe category. Management should not be based solely on spirometry, so B is wrong. C and D have no basis. Teaching point: If FEV1 and symptoms disagree, follow the symptoms.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 1.4, Table 1-3.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A respiratory registrar is counselling a 68-year-old man with COPD about prognosis. Which measure does the CPG state predicts survival better than FEV1?",
    option_a: "Peak expiratory flow rate",
    option_b: "Chest radiograph hyperinflation score",
    option_c: "Serum alpha-1 antitrypsin level",
    option_d: "The BODE index (BMI, airflow obstruction, dyspnoea and exercise capacity)",
    correct_option: "D",
    explanation: "Rationale: The multidimensional BODE index better predicts survival in COPD patients than FEV1. The locally developed SAFE index is another multidimensional tool. Peak flow (A) correlates poorly with FEV1 in COPD. B and C are not prognostic indices in the CPG. Teaching point: BODE (BMI, Obstruction, Dyspnoea, Exercise) outperforms FEV1 for survival.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Sections 1.4 and 4.7.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 52-year-old woman with a 15 pack-year history has FEV1 1.60 L before and 2.10 L after salbutamol. She has a history of childhood eczema and nocturnal cough. How should this response be interpreted?",
    option_a: "Significant reversibility, which should raise the possibility of asthma",
    option_b: "Not significant, as the increase is under 200 mL",
    option_c: "Typical of COPD, which never shows any reversibility",
    option_d: "A test error, because COPD is fully irreversible",
    correct_option: "A",
    explanation: "Rationale: A bronchodilator response is significant if FEV1 rises by at least 200 mL and 12%. Her rise is 500 mL (31%). If there is a marked response, asthma should be considered, supported here by atopy and nocturnal cough. B misreads the change. C and D are wrong because some COPD patients show significant reversibility, but airflow never normalises. Teaching point: A rise of ≥200 mL and ≥12% is significant; a marked response suggests asthma.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 4.6; Table 4-2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 55-year-old man has smoked 30 cigarettes a day for 20 years. What is his smoking history in pack-years?",
    option_a: "20 pack-years",
    option_b: "60 pack-years",
    option_c: "30 pack-years",
    option_d: "600 pack-years",
    correct_option: "C",
    explanation: "Rationale: Total pack-years = (number of cigarettes per day ÷ 20) x number of years smoked = (30 ÷ 20) x 20 = 30. A ignores the daily amount, B doubles it, and D multiplies cigarettes by years without dividing by 20. COPD patients usually have more than 10 pack-years. Teaching point: Pack-years = (cigarettes per day / 20) x years.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 4.3; Table 4-2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 39-year-old man who has smoked 8 cigarettes a day since age 25 has post-bronchodilator FEV1/FVC of 0.58. A chest radiograph shows lower-zone hyperlucency. Which additional investigation is most appropriate?",
    option_a: "Sweat chloride test",
    option_b: "Alpha-1 antitrypsin deficiency screening",
    option_c: "Bronchial provocation test",
    option_d: "High-resolution CT as a routine baseline",
    correct_option: "B",
    explanation: "Rationale: Alpha-1 antitrypsin screening should be performed in young COPD patients (<45 years) or those with a strong family history. Severe deficiency causes panlobular emphysema in smokers and non-smokers. His age, modest smoking history and lower-zone emphysema fit. A and C test other conditions. D is wrong because HRCT is not routinely recommended unless there is diagnostic uncertainty. Teaching point: COPD under 45 years: screen for alpha-1 antitrypsin deficiency.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Sections 3.2 and 4.8(vi).",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 71-year-old woman with stable COPD has FEV1 34% predicted. Resting SpO2 on air is 89%. She has no ankle oedema. Why should arterial blood gases be performed?",
    option_a: "They are only needed during an exacerbation",
    option_b: "They are routine for all COPD patients at diagnosis",
    option_c: "They are only needed if PaCO2 is known to be high",
    option_d: "Her FEV1 is <40% predicted with SpO2 <92%, so she may qualify for long-term oxygen therapy",
    correct_option: "D",
    explanation: "Rationale: ABG should be performed in patients with FEV1 <40% predicted if SpO2 is less than 92% on pulse oximetry, or there are signs of respiratory failure or cor pulmonale, as these patients may benefit from long-term oxygen therapy. A is wrong because LTOT assessment must be done when stable. B and C do not match the CPG indication. Teaching point: FEV1 <40% plus SpO2 <92% (or cor pulmonale): check ABG for LTOT.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 4.8(iii); Section 7.2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 48-year-old man has 6 months of breathlessness. Several features are noted. Which feature most favours COPD rather than asthma according to Table 4-2?",
    option_a: "Morning cough productive of sputum with a 25 pack-year history",
    option_b: "Nocturnal cough and wheeze on exertion",
    option_c: "Onset of symptoms in childhood",
    option_d: "A family history of eczema and hay fever",
    correct_option: "A",
    explanation: "Rationale: Table 4-2 lists COPD features as onset usually after 40, usually >10 pack-years, infrequent atopy, persistent and progressive symptoms, morning cough with sputum, and airflow limitation that may improve but never normalises. B, C and D are asthma features (nocturnal or exertional cough, early onset, atopic family history). Teaching point: Morning productive cough, >10 pack-years and onset after 40 point to COPD.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 4.9, Table 4-2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A district clinic without spirometry sees a 60-year-old smoker with chronic cough and breathlessness. Peak flow is 55% predicted with little bronchodilator response. What is the most appropriate next step?",
    option_a: "Diagnose COPD on peak flow alone and discharge",
    option_b: "Diagnose asthma because peak flow is reduced",
    option_c: "Refer for spirometry to confirm the diagnosis",
    option_d: "Screen all adults in the district with spirometry",
    correct_option: "C",
    explanation: "Rationale: Where spirometry is unavailable, symptoms with a low peak flow can help, but peak flow has poor specificity and is only reduced in advanced COPD, so every effort should be made to refer for spirometry. A accepts a non-specific test. B is unsupported. D is wrong because spirometry is not recommended for screening all adults; it is a diagnostic test for those at risk. Teaching point: Peak flow cannot confirm COPD; refer at-risk patients for spirometry, but do not screen everyone.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Sections 4.1, 9.2 and 9.4.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 54-year-old woman with stage II COPD who smokes 15 cigarettes a day asks which single step will most slow her disease. Which intervention does the CPG identify as the single most effective?",
    option_a: "Smoking cessation",
    option_b: "Long-acting anticholinergic inhaler",
    option_c: "Inhaled corticosteroid",
    option_d: "Pulmonary rehabilitation",
    correct_option: "A",
    explanation: "Rationale: Smoking cessation is the single most effective and cost-effective intervention to reduce the risk of developing COPD and stop its progression. All smokers should be offered intervention. Inhaled therapies improve symptoms and exacerbations but, for example, tiotropium did not reduce the rate of FEV1 decline in UPLIFT. Rehabilitation improves exercise tolerance and quality of life. Teaching point: Only smoking cessation changes the course of COPD this decisively.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Sections 5.2 and 5.3; Recommendation: Smoking Cessation.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A doctor sees a 47-year-old smoker with COPD who has been advised to quit. The doctor now asks whether he is willing to make a quit attempt within the next 30 days. Which step of the 5A model is this?",
    option_a: "Ask",
    option_b: "Assess",
    option_c: "Assist",
    option_d: "Arrange",
    correct_option: "B",
    explanation: "Rationale: In the 5A model, Ask identifies tobacco users at every visit, Advise strongly urges quitting, Assess determines willingness to make a quit attempt (for example within the next 30 days), Assist helps with a quit plan and pharmacotherapy, and Arrange schedules follow-up. Teaching point: Ask, Advise, Assess (willingness within 30 days), Assist, Arrange.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 5.4.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A busy primary care doctor has 3 minutes with a smoker attending for an unrelated sprained ankle. Which statement about brief counselling is consistent with the CPG?",
    option_a: "Brief advice is ineffective without pharmacotherapy",
    option_b: "Advice should be given only to smokers with respiratory symptoms",
    option_c: "Even 3 minutes of counselling achieves quit rates of about 5-10% and should be given at every visit",
    option_d: "Counselling is only effective in group programmes",
    correct_option: "C",
    explanation: "Rationale: Even a brief three-minute period of counselling urging a smoker to quit results in cessation rates of 5-10%, and at the very least this should be done for every smoker at every visit, including those attending for unrelated reasons. A, B and D contradict this. Teaching point: Three minutes of advice works; give it to every smoker, every visit.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Sections 5.3 and 5.5.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 50-year-old man with COPD and a history of depression starts varenicline. Which adverse effects should he be counselled about?",
    option_a: "Hyperkalaemia and gynaecomastia",
    option_b: "Nausea, and possible depressed mood, agitation or suicidal thinking",
    option_c: "Tachyarrhythmia and seizures only",
    option_d: "Weight loss and diarrhoea",
    correct_option: "B",
    explanation: "Rationale: The main adverse effect of varenicline, a nicotinic receptor partial agonist, is mild to moderate nausea that usually subsides. There are concerns that it may be linked with depressed mood, agitation or suicidal thinking and behaviour, which matters given his history. A is unrelated. D describes PDE4 inhibitors. Teaching point: Varenicline: nausea commonly; watch mood.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 5.6.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 69-year-old man with COPD stage III asks whether the yearly influenza vaccine is worthwhile. Which statement best reflects the CPG?",
    option_a: "Influenza vaccination does not affect COPD exacerbations",
    option_b: "It is only recommended after an influenza admission",
    option_c: "It should be given once in a lifetime",
    option_d: "Annual vaccination reduces influenza-related respiratory illness by about 76% and reduces exacerbation risk",
    correct_option: "D",
    explanation: "Rationale: Influenza vaccination reduces the risk of COPD exacerbation, and annual vaccination reduces influenza-related acute respiratory illness by 76%. In elderly patients with chronic lung disease, vaccination reduced hospitalisation by 52% and death by 70%. A, B and C contradict this. Teaching point: Annual influenza vaccine for all COPD patients.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 6.3.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 57-year-old woman with COPD has FEV1 36% predicted. She has never had pneumococcal vaccination. What does the CPG recommend?",
    option_a: "PPV23 is not indicated before age 65",
    option_b: "PPV23 annually",
    option_c: "PPV23, as she is under 65 with FEV1 <40%; repeat after ≥5 years, to a maximum of two doses in a lifetime",
    option_d: "PPV23 only after an episode of pneumonia",
    correct_option: "C",
    explanation: "Rationale: PPV23 is recommended for patients younger than 65 with FEV1 <40% predicted, in whom it reduced community-acquired pneumonia. The panel supports vaccinating all COPD patients at least once, repeated after ≥5 years, with a maximum of two doses in a lifetime. A is wrong for her. B exceeds the maximum. D waits for the complication. Teaching point: PPV23: once, repeat after 5 years, maximum two doses.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 6.4.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 56-year-old man with stage I COPD (FEV1 84% predicted) has breathlessness only when hurrying, a few times a month. He has stopped smoking. What is the most appropriate pharmacological treatment?",
    option_a: "Short-acting beta-2 agonist as needed",
    option_b: "Tiotropium daily",
    option_c: "ICS/LABA combination twice daily",
    option_d: "Oral theophylline",
    correct_option: "A",
    explanation: "Rationale: Figure 6-1 recommends SABA as needed for mild COPD with infrequent symptoms, alongside education, smoking cessation, exercise and vaccination. All patients should have a short-acting bronchodilator as needed. Long-acting agents (B, C) are for persistent symptoms in moderate to very severe disease. D is third line. Teaching point: Mild, infrequent symptoms: as-needed SABA.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 6.5.1, Figure 6-1; Recommendation 3.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 62-year-old woman with stage II COPD needs her salbutamol inhaler most days (more than twice a week). She has had no exacerbations in the past year. What is the most appropriate next step?",
    option_a: "Add an inhaled corticosteroid alone",
    option_b: "Start a long-acting anticholinergic or a long-acting beta-2 agonist",
    option_c: "Start maintenance oral prednisolone",
    option_d: "Start long-term oxygen",
    correct_option: "B",
    explanation: "Rationale: Persistent symptoms are defined as needing rescue bronchodilators more than twice a week. In moderate to very severe COPD with persistent symptoms but without frequent exacerbations, either a LAAC or a LABA may be initiated. A is not the recommended first long-acting step. C is discouraged because maintenance oral steroids increase mortality. D needs chronic hypoxaemia. Teaching point: Persistent symptoms (rescue >2/week): start LAAC or LABA.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 6.5.1, Figure 6-1; Recommendation 4.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 67-year-old man with stage III COPD remains breathless on salmeterol 50 µg twice daily, with correct inhaler technique. He has not had an exacerbation. Which change is most consistent with Figure 6-1?",
    option_a: "Replace salmeterol with an ICS/LABA combination, or add an ICS/LABA to a LAAC",
    option_b: "Add oral prednisolone 10 mg daily",
    option_c: "Stop salmeterol and use salbutamol only",
    option_d: "Add a second LABA",
    correct_option: "A",
    explanation: "Rationale: If symptoms persist on LAAC or LABA, an ICS/LABA combination should be added to a LAAC, or the LABA replaced with an ICS/LABA combination (with or without theophylline). B is discouraged. C is a step down. D duplicates the class. Teaching point: Still symptomatic on LABA: switch to ICS/LABA (or add ICS/LABA to LAAC).\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 6.5.1, Figure 6-1; Recommendation 4.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 64-year-old woman with stage III COPD had one exacerbation 7 months ago that needed oral prednisolone and amoxicillin, but no admission. How is her exacerbation history classified in the CPG algorithm?",
    option_a: "Infrequent, because she was not admitted",
    option_b: "Infrequent, because frequent means at least 3 per year",
    option_c: "Not relevant to treatment choice",
    option_d: "Frequent, because one or more exacerbations needing systemic steroids and/or antibiotics or hospitalisation occurred in the past year",
    correct_option: "D",
    explanation: "Rationale: Frequent exacerbation is defined as one or more episodes requiring systemic corticosteroids with or without antibiotics, and/or hospitalisation, over the past year. In moderate to very severe COPD this points to LAAC, ICS/LABA, or LAAC plus ICS/LABA, with or without theophylline. A and B use the wrong definition. C ignores the algorithm. Teaching point: In this CPG, a single steroid- or antibiotic-treated exacerbation in a year counts as frequent.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Figure 6-1, note c.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 50-year-old woman with spirometry consistent with stage I COPD has had three courses of antibiotics and steroids for \"chest infections\" this year. What does the CPG algorithm advise?",
    option_a: "Start triple therapy immediately",
    option_b: "Start long-term oxygen",
    option_c: "Consider an alternative cause, as frequent exacerbations are uncommon in mild COPD",
    option_d: "Add maintenance oral prednisolone",
    correct_option: "C",
    explanation: "Rationale: Figure 6-1 notes that it is less common for patients with mild COPD to have frequent exacerbations, so an alternative cause should be explored even if the COPD diagnosis is firmly established (for example bronchiectasis, asthma or heart failure). A and B escalate without addressing the mismatch. D is discouraged. Teaching point: Frequent exacerbations or respiratory failure in mild COPD: look for another cause.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Figure 6-1, note d.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 66-year-old man with stage III COPD starts tiotropium 18 µg daily and asks what it will achieve. Which finding from the UPLIFT trial is reported in the CPG?",
    option_a: "Tiotropium reduced exacerbations and exacerbation-related hospitalisation but did not slow the rate of FEV1 decline",
    option_b: "Tiotropium halted the decline in FEV1",
    option_c: "Tiotropium increased exacerbations",
    option_d: "Tiotropium is effective for only 6 hours",
    correct_option: "A",
    explanation: "Rationale: In the 4-year UPLIFT trial (FEV1 <70%), tiotropium reduced exacerbations and hospitalisation due to exacerbation but did not reduce the rate of FEV1 decline compared with placebo. Tiotropium is effective for at least 24 hours. B overstates the effect, and C and D contradict the CPG. Teaching point: Tiotropium reduces exacerbations; it does not slow FEV1 decline.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 6.5.1 (Inhaled LAAC).",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 70-year-old woman with stage III COPD is on tiotropium. Her GP proposes adding budesonide alone. Which statement about tiotropium plus ICS alone best reflects the CPG?",
    option_a: "It is the preferred combination in COPD",
    option_b: "There is no data to support the use of this combination",
    option_c: "It reduces mortality more than ICS/LABA",
    option_d: "It is preferred over adding an ICS/LABA",
    correct_option: "B",
    explanation: "Rationale: The CPG states there is no data to support combining a LAAC with an ICS. Where a LAAC is insufficient, an ICS/LABA combination is added. A, C and D have no support. Teaching point: Add ICS as part of an ICS/LABA, not alone on top of tiotropium.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 6.5.1 (Combination of LAAC and ICS).",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 68-year-old man with stage III COPD and frequent exacerbations is to start an ICS-containing combination. What minimum daily ICS dose does the CPG specify?",
    option_a: "100 µg fluticasone or 200 µg budesonide",
    option_b: "250 µg fluticasone or 400 µg budesonide",
    option_c: "2,000 µg fluticasone",
    option_d: "At least 500 µg fluticasone or 800 µg budesonide",
    correct_option: "D",
    explanation: "Rationale: The notes to Figures 6-1 and 6-2 state that the ICS dose per day should be at least 500 µg of fluticasone or 800 µg of budesonide (for example fluticasone 500 µg twice daily or budesonide 400 µg twice daily). A and B are too low, and C is far above this. Teaching point: COPD ICS: at least 500 µg fluticasone or 800 µg budesonide a day.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Figure 6-1, note 2; Section 6.5.1.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 74-year-old man with very severe COPD has taken prednisolone 10 mg daily for 2 years because he \"feels better on it\". He now has vertebral fractures and diabetes. Which statement best reflects the CPG?",
    option_a: "Maintenance oral steroids are associated with dose-dependent increased mortality and serious side effects, so prolonged courses should be discouraged",
    option_b: "About half of COPD patients respond to oral steroids",
    option_c: "Maintenance oral steroids slow FEV1 decline",
    option_d: "The dose should be increased to 20 mg to improve benefit",
    correct_option: "A",
    explanation: "Rationale: Only about 10% of COPD patients show significant improvement in lung function with oral corticosteroids. Chronic use causes osteoporosis, cataract, myopathy, diabetes and hypertension, and maintenance therapy in severe COPD is associated with increased mortality in a dose-dependent manner. Prolonged courses should be discouraged. B, C and D contradict this. Teaching point: Avoid maintenance oral steroids in COPD; they increase mortality.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 6.5.1 (Oral corticosteroids).",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 72-year-old woman with stage IV COPD remains symptomatic despite tiotropium and fluticasone/salmeterol. Theophylline is considered. Which statement is most accurate?",
    option_a: "Theophylline is first-line therapy in stable COPD",
    option_b: "It is a third-line add-on; monitor levels aiming for 10-20 mg/L and watch for nausea and arrhythmias",
    option_c: "No monitoring is needed",
    option_d: "Its therapeutic range is 40-60 mg/L",
    correct_option: "B",
    explanation: "Rationale: Theophylline is a weak bronchodilator relegated to third-line therapy, added only if inhaled long-acting bronchodilators and ICS do not control symptoms. Because of the narrow therapeutic window and toxicity (nausea, abdominal discomfort, diarrhoea, arrhythmias), drug level monitoring is desirable, with a therapeutic range of 10-20 mg/L. A, C and D contradict this. Teaching point: Theophylline: third line, level 10-20 mg/L.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 6.5.1 (Methylxanthines); Recommendation 5.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 65-year-old man with severe COPD and chronic bronchitic symptoms (daily productive cough) has two exacerbations a year despite a LABA. Which statement about roflumilast is consistent with the CPG?",
    option_a: "It acts mainly as a bronchodilator with no effect on exacerbations",
    option_b: "Its main adverse effect is oral candidiasis",
    option_c: "It reduced exacerbations by about 17% in severe COPD with bronchitic symptoms, but can cause nausea, diarrhoea, weight loss and headache",
    option_d: "It is contraindicated with a LABA",
    correct_option: "C",
    explanation: "Rationale: Two 12-month studies in severe COPD with bronchitic symptoms showed roflumilast reduced exacerbations by 17% per patient per year, even with concomitant LABA, and improved pre-bronchodilator FEV1 by 48-80 mL. Adverse effects include nausea, diarrhoea, weight loss and headache. A, B and D are wrong. Teaching point: PDE4 inhibitors suit bronchitic, exacerbating COPD; watch GI effects and weight loss.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 6.5.1 (PDE4 inhibitors).",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A rural clinic with no access to long-acting bronchodilators manages a 60-year-old man with stage III COPD and persistent symptoms. Which regimen does the resource-limited algorithm suggest?",
    option_a: "Regular SABA/SAAC combination, adding theophylline and/or ICS if symptoms persist",
    option_b: "No treatment until long-acting bronchodilators are available",
    option_c: "Maintenance oral prednisolone",
    option_d: "Long-term oxygen for all patients",
    correct_option: "A",
    explanation: "Rationale: Figure 6-2 recommends regular SABA/SAAC combination for persistent symptoms, adding theophylline and/or ICS if symptoms persist, and considering referral to a tertiary centre to obtain long-acting bronchodilators for frequent exacerbations. B withholds treatment. C is discouraged. D requires chronic hypoxaemia. Teaching point: Without long-acting agents: regular SABA/SAAC, then add ICS and/or theophylline.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Figure 6-2; Recommendation 6.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 69-year-old woman with stage III COPD has reduced exercise tolerance despite optimal inhalers. Which statement about pulmonary rehabilitation is consistent with the CPG?",
    option_a: "It improves survival in COPD",
    option_b: "It is only for stage I disease",
    option_c: "Respiratory muscle training is more helpful than general aerobic conditioning",
    option_d: "Programmes usually last 6-12 weeks and improve exercise tolerance, dyspnoea and quality of life, with benefits lasting 12-18 months",
    correct_option: "D",
    explanation: "Rationale: Most programmes last 6-12 weeks, with benefits lasting 12-18 months. Benefits include better exercise tolerance, less dyspnoea, better HRQoL, fewer hospital days and fewer exacerbations. There is insufficient evidence that it improves survival (A). It is recommended for symptomatic stage II-IV patients (B). General aerobic conditioning is more helpful than specific respiratory muscle training (C). Teaching point: Rehabilitation improves function and quality of life, not proven survival.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 7.1; Recommendations: Pulmonary Rehabilitation.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 70-year-old man with stable COPD, on optimal treatment and no longer smoking, has ABG on air on two occasions 3 weeks apart showing PaO2 52 mmHg and PaCO2 48 mmHg. He has no oedema. What is the most appropriate management?",
    option_a: "No oxygen, because he has no cor pulmonale",
    option_b: "Oxygen only during exertion",
    option_c: "Long-term oxygen therapy for more than 15 hours a day",
    option_d: "Nocturnal oxygen only",
    correct_option: "C",
    explanation: "Rationale: LTOT is indicated when PaO2 is ≤55 mmHg (7.3 kPa) or SaO2 ≤88%, with or without hypercapnia, on two stable measurements. Oxygen for more than 15 hours a day increases survival in chronic respiratory failure. A requires cor pulmonale only for the 55-60 mmHg band. B and D do not provide the survival benefit; nocturnal desaturation alone does not improve survival. Teaching point: PaO2 ≤55 mmHg when stable: LTOT for >15 hours a day.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 7.2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 66-year-old woman with stable COPD has PaO2 57 mmHg on air on two occasions. Her haematocrit is 58%. Does she meet the CPG criteria for long-term oxygen therapy?",
    option_a: "No, because PaO2 is above 55 mmHg",
    option_b: "Yes, because PaO2 is 55-60 mmHg with polycythaemia (haematocrit >55%)",
    option_c: "No, because polycythaemia is not relevant",
    option_d: "Yes, but only if PaCO2 is raised",
    correct_option: "B",
    explanation: "Rationale: LTOT is indicated with PaO2 between 55 and 60 mmHg (7.3-8.0 kPa) or SaO2 89% if there is pulmonary hypertension, peripheral oedema suggesting heart failure, or polycythaemia (haematocrit >55%). Her haematocrit of 58% qualifies her. A ignores the second criterion. C is wrong. D adds a requirement the CPG does not make. Teaching point: PaO2 55-60 qualifies for LTOT only with pulmonary hypertension, oedema or haematocrit >55%.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 7.2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 64-year-old man with COPD and PaO2 53 mmHg on two stable measurements continues to smoke 20 cigarettes a day and declines cessation support. What is the most appropriate response to his request for home oxygen?",
    option_a: "Prescribe LTOT, as hypoxaemia alone determines eligibility",
    option_b: "Prescribe oxygen cylinders for use while smoking",
    option_c: "Prescribe oxygen only at night",
    option_d: "LTOT is not indicated while he continues to smoke; address smoking first",
    correct_option: "D",
    explanation: "Rationale: Oxygen therapy is not indicated for patients who continue to smoke, those who maintain PaO2 >60 mmHg, those who have not had adequate other therapy, and those not motivated to undertake oxygen therapy. Smoking near oxygen is also a fire hazard. A ignores these exclusions. B and C are unsafe or ineffective. Teaching point: Continued smoking is an exclusion for home oxygen.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 7.2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 73-year-old woman is admitted with an exacerbation of COPD. On day 3 her SpO2 on air is 86%, and the team wants to arrange home oxygen at discharge. What is the most appropriate approach?",
    option_a: "Assess for LTOT when she is stable on optimal treatment, with ABG on two occasions, not during the exacerbation or its recovery",
    option_b: "Prescribe LTOT on day 3 based on this single reading",
    option_c: "Use an SpO2 of 86% on day 3 as diagnostic",
    option_d: "LTOT assessment is only possible in hospital during exacerbations",
    correct_option: "A",
    explanation: "Rationale: Assessment for LTOT should not be done during an exacerbation or its recovery period. ABG should be measured on two occasions when the patient is stable and on optimal treatment. Patients started on oxygen are reassessed after 1-2 months and at least annually. B, C and D contradict this. Teaching point: Assess for LTOT only when stable, with two ABGs.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 7.2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 71-year-old man with very severe COPD has lost 6 kg over a year. His BMI is 18.5 kg/m2 and serum albumin is 31 g/L. What is the most appropriate nutritional goal?",
    option_a: "Nutritional supplements alone, which improve lung function",
    option_b: "Anabolic steroids to reverse muscle loss",
    option_c: "Aim for BMI 22-27 kg/m2 and albumin above 35 g/L through balanced, adequate-calorie diet combined with exercise",
    option_d: "Weight loss to reduce the work of breathing",
    correct_option: "C",
    explanation: "Rationale: Low BMI is associated with higher mortality. The goal is a BMI of 22-27 kg/m2 and albumin above 35 g/L, using a balanced diet with adequate calories together with exercise. Supplements alone have not improved lung function or exercise capacity (A), and anabolic steroids have been disappointing (B). D applies only to obese patients. Teaching point: In COPD cachexia: diet plus exercise, aiming for BMI 22-27 and albumin >35 g/L.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 7.3.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 62-year-old man with severe COPD has predominantly upper-lobe emphysema on CT and low exercise capacity despite completing pulmonary rehabilitation. Which procedure has been shown to improve exercise tolerance and reduce 2-year mortality in patients like him?",
    option_a: "Lung volume reduction surgery",
    option_b: "Bullectomy",
    option_c: "Endobronchial valve placement",
    option_d: "Pleurodesis",
    correct_option: "A",
    explanation: "Rationale: LVRS improves exercise tolerance and decreases 2-year mortality in severe, predominantly upper-lobe emphysema with low baseline exercise capacity after rehabilitation. Bullectomy (B) is for large bullae compressing adjacent lung. Endobronchial valves (C) await large randomised trials. D is not a COPD treatment. Teaching point: LVRS: severe upper-lobe emphysema with low exercise capacity after rehab.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 7.4.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 55-year-old woman with COPD has a post-bronchodilator FEV1 of 22% predicted and NYHA class III symptoms despite maximal therapy. Why should she be considered for lung transplantation?",
    option_a: "She has stage II COPD",
    option_b: "She is under 60 with FEV1 <25% predicted after bronchodilator",
    option_c: "She has frequent exacerbations alone",
    option_d: "She is over 50",
    correct_option: "B",
    explanation: "Rationale: COPD patients are considered for transplantation when life expectancy is predicted not to exceed 24-36 months despite optimal therapy, they have NYHA class III or IV symptoms, and they are under 60 with FEV1 <25% predicted or severe pulmonary hypertension. A is wrong (she is stage IV). C and D are not the stated criteria. Teaching point: Transplant referral: under 60, FEV1 <25%, NYHA III-IV, expected survival under 2-3 years.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 7.5.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 64-year-old man with stage III COPD is scheduled for an elective hernia repair. He smokes and has a productive cough. Which measure most reduces his risk of pulmonary complications?",
    option_a: "Proceed immediately to avoid delay",
    option_b: "Use general anaesthesia with high-dose opioids",
    option_c: "Prescribe prophylactic long-term antibiotics",
    option_d: "Stop smoking (ideally 4-8 weeks before surgery) and optimise his COPD treatment, considering regional anaesthesia where feasible",
    correct_option: "D",
    explanation: "Rationale: Patients should be optimised before elective surgery: smoking cessation (at least 4-8 weeks preoperatively is optimal), bronchodilators, antibiotics for acute bronchitis and chest physiotherapy. Regional anaesthesia, laparoscopic techniques and shorter surgery should be considered, and opioids minimised. A, B and C contradict this. Teaching point: Stop smoking 4-8 weeks before elective surgery and minimise opioids.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 7.6; Recommendations: Surgery in COPD Patients.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 66-year-old woman with COPD and lung cancer is assessed for pneumonectomy. Her preoperative FEV1 is 1.6 L (48% predicted) and DLCO is 45% predicted. What is the most appropriate interpretation?",
    option_a: "Her risk of postoperative respiratory failure is increased; further testing such as lung perfusion and exercise capacity is needed",
    option_b: "She is low risk and needs no further testing",
    option_c: "Pneumonectomy is safe whenever FEV1 is above 1 L",
    option_d: "DLCO is irrelevant to surgical risk",
    correct_option: "A",
    explanation: "Rationale: The risk of respiratory failure after pneumonectomy is increased with preoperative FEV1 <2 L or <50% predicted and/or DLCO <50% predicted. High-risk patients should undergo further testing such as lung perfusion and exercise capacity tests, and benefits weighed against risks. B, C and D misread the thresholds. Teaching point: Pneumonectomy: FEV1 <2 L (or <50%) or DLCO <50% means high risk and more testing.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 7.6.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 69-year-old man with COPD has had 3 days of increased breathlessness and sputum beyond his usual day-to-day variation. Which feature is part of the CPG definition of an acute exacerbation?",
    option_a: "Symptoms lasting at least 2 weeks",
    option_b: "A fall in FEV1 of more than 50%",
    option_c: "Fever above 38°C",
    option_d: "Sustained worsening for 48 hours or more beyond normal day-to-day variation, acute in onset, that may warrant a change in medication",
    correct_option: "D",
    explanation: "Rationale: An exacerbation is a sustained (48 hours or more) worsening of baseline dyspnoea, cough and/or sputum beyond normal day-to-day variation, acute in onset, that may warrant a change in regular medication. Spirometry is not recommended during an exacerbation, and fever is not required. A, B and C are not part of the definition. Teaching point: Exacerbation = sustained worsening for ≥48 hours beyond usual variation.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 8.2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 63-year-old woman with COPD (baseline FEV1 44% predicted) has an exacerbation with increased dyspnoea. She is alert, eating, and has good home support. She is not hypoxic. Which corticosteroid regimen is most appropriate?",
    option_a: "Oral prednisolone 30-40 mg daily for 7-14 days",
    option_b: "No steroid, as she is managed at home",
    option_c: "Prednisolone 60 mg daily for 6 weeks",
    option_d: "Inhaled steroid alone at double dose",
    correct_option: "A",
    explanation: "Rationale: Systemic corticosteroids should be added to bronchodilators in an exacerbation with significant increase in dyspnoea or a baseline FEV1 <50% predicted. A dose of 30-40 mg prednisolone daily for 7-14 days suits most patients, with no advantage to prolonged courses. She meets both criteria. B omits indicated treatment. C is too long. D is not the recommended regimen. Teaching point: Exacerbation steroids: prednisolone 30-40 mg for 7-14 days.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 8.8.2; Figure 8-1.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 60-year-old man with COPD has 3 days of increased breathlessness and more sputum, which remains white. He is afebrile. Should antibiotics be given according to the CPG?",
    option_a: "No, because purulent sputum is essential",
    option_b: "No, because antibiotics are never indicated in exacerbations",
    option_c: "Yes, because he has 2 of the 3 cardinal symptoms (increased dyspnoea and increased sputum volume)",
    option_d: "Only if the white cell count is raised",
    correct_option: "C",
    explanation: "Rationale: Antibiotics should be given to patients with at least 2 of 3 cardinal symptoms: purulent sputum, increased sputum volume and/or increased dyspnoea. Patients needing invasive or non-invasive ventilation should also receive antibiotics. A requires purulence, which is only one of three. B is wrong. D is wrong because a normal white count does not rule out sepsis. Teaching point: Two of three cardinal symptoms (dyspnoea, sputum volume, purulence): give antibiotics.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 8.9.4; Figure 8-1.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 72-year-old woman with COPD (FEV1 38% predicted) on home oxygen has an exacerbation with purulent sputum and increased dyspnoea. She has no risk factors for Pseudomonas and is managed at home. Which antibiotic regimen is preferred in Table 8-2?",
    option_a: "No antibiotic",
    option_b: "Oral doxycycline 100 mg once only",
    option_c: "Topical antibiotic",
    option_d: "A beta-lactam/beta-lactamase inhibitor, such as amoxicillin/clavulanate 2 g twice daily, or a 2nd/3rd-generation cephalosporin",
    correct_option: "D",
    explanation: "Rationale: Complicated COPD (FEV1 <50%, >4 exacerbations a year, age >65, significant co-morbidity, home oxygen, chronic oral steroids, or antibiotics in the past 3 months) is treated preferentially with a beta-lactam plus beta-lactamase inhibitor (amoxicillin 1 g three times daily or amoxicillin/clavulanate 2 g twice daily) or a 2nd/3rd-generation cephalosporin, with or without an extended-spectrum macrolide. She has several risk factors. A ignores her symptoms. B is an inadequate course. C is irrelevant. Teaching point: Complicated COPD exacerbation: high-dose amoxicillin/clavulanate or a cephalosporin.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 8.9.4, Table 8-2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 68-year-old man with very severe COPD was admitted 6 weeks ago and has had four antibiotic courses this year. A previous sputum culture grew Pseudomonas aeruginosa. What antibiotic approach is indicated for his current severe exacerbation?",
    option_a: "Azithromycin alone",
    option_b: "An anti-pseudomonal antibiotic",
    option_c: "Amoxicillin 500 mg three times daily",
    option_d: "No antibiotics until cultures return",
    correct_option: "B",
    explanation: "Rationale: Risk factors for Pseudomonas include severe airflow limitation, hospitalisation in the past 3 months, frequent antibiotics (4 courses in the last year), severe exacerbation and previous isolation or colonisation. Patients at risk should receive anti-pseudomonal antibiotics. A and C do not cover Pseudomonas. D delays treatment in a severe exacerbation. Teaching point: Recent admission, frequent antibiotics or previous Pseudomonas: cover Pseudomonas.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 8.9.4, Table 8-2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 70-year-old woman with an exacerbation of COPD arrives in the emergency department with SpO2 82% on air. Blood gas results are not yet available. What is the most appropriate oxygen therapy?",
    option_a: "15 l/min via non-rebreather mask",
    option_b: "No oxygen until blood gases are available",
    option_c: "Controlled oxygen at 24-28% via Venturi mask (or 1-2 l/min nasal prongs), aiming for SpO2 90-93%, with ABG checked after 30-60 minutes",
    option_d: "100% oxygen via CPAP mask",
    correct_option: "C",
    explanation: "Rationale: Controlled oxygen therapy is the cornerstone of hospital treatment: 24-28% via a Venturi mask, or 1-2 l/min via nasal prongs, to achieve PaO2 ≥60 mmHg or SpO2 ≥90% without worsening hypercapnia. The algorithm targets SpO2 90-93%, as morbidity and mortality rise in hypercapnic failure when SpO2 exceeds 93-95%. ABG should be checked 30-60 minutes later. A and D risk CO2 narcosis. B leaves her hypoxic. Teaching point: AECOPD oxygen: 24-28% Venturi, target SpO2 90-93%, recheck ABG in 30-60 minutes.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Sections 8.5.3 and 8.9.1; Figures 8-2 and 8-3.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 66-year-old man with an exacerbation has received nebulised bronchodilators, steroids, antibiotics and controlled oxygen for 2 hours. He is alert and cooperative. Respiratory rate is 28/min with accessory muscle use. ABG: pH 7.29, PaCO2 9.1 kPa, PaO2 8.3 kPa. What is the most appropriate next step?",
    option_a: "Non-invasive ventilation in a dedicated setting with trained staff",
    option_b: "Immediate intubation",
    option_c: "Increase oxygen to 60%",
    option_d: "Continue current treatment and repeat ABG tomorrow",
    correct_option: "A",
    explanation: "Rationale: NIV is indicated for persistent hypercapnic respiratory failure despite optimal medical therapy, with moderate to severe dyspnoea, respiratory rate >25/min and moderate to severe acidosis (pH 7.25-7.35) and/or PaCO2 >6.0 kPa. It reduces intubation, complications, mortality and length of stay, and should be delivered by trained staff with a plan for deterioration. B is for NIV failure, pH <7.25, or contraindications. C worsens hypercapnia. D delays treatment. Teaching point: pH 7.25-7.35 with hypercapnia despite treatment: NIV.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 8.11, Tables 8-3 and 8-4.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 74-year-old woman with an exacerbation and pH 7.30 has become drowsy and uncooperative, with copious secretions she cannot clear. Why is NIV inappropriate?",
    option_a: "Her pH is too high for NIV",
    option_b: "NIV is only for asthma",
    option_c: "Impaired mental status and copious secretions are contraindications to NIV",
    option_d: "NIV is contraindicated in all patients over 70",
    correct_option: "C",
    explanation: "Rationale: Contraindications to NIV include respiratory arrest, cardiovascular instability, high aspiration risk, impaired mental status or an uncooperative patient, viscous or copious secretions, facial injury or surgery and others. Impaired mental status and somnolence are also indications for invasive ventilation. A misreads the pH (7.25-7.35 is the NIV range). B and D are wrong. Teaching point: Drowsy, uncooperative or copious secretions: NIV is contraindicated; consider intubation.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Sections 8.11 and 8.12, Tables 8-4 and 8-5.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 69-year-old man with a severe exacerbation has an inadequate response to nebulised salbutamol and ipratropium. He takes oral sustained-release theophylline 300 mg twice daily at home. What is the correct approach to intravenous aminophylline?",
    option_a: "Give a loading dose of 5 mg/kg over 20 minutes, then infusion",
    option_b: "Do not give a loading dose because he is already on theophylline; start the maintenance infusion guided by plasma levels",
    option_c: "Give twice the usual loading dose",
    option_d: "Aminophylline is contraindicated in exacerbations",
    correct_option: "B",
    explanation: "Rationale: Intravenous methylxanthines can be considered in severe exacerbations with inadequate response to SABA and SAAC. The loading dose is 250-500 mg (5 mg/kg) over 20 minutes, then 500 µg/kg/hour, adjusted to a plasma level of 10-20 mg/L. Patients already on maintenance theophylline should not be given a loading dose, which makes A the trap. C risks toxicity. D is wrong. Teaching point: No aminophylline loading dose in patients already taking theophylline.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Section 8.9.2.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 67-year-old woman admitted with an exacerbation is improving. She uses her nebuliser every 6 hours, walks across the ward, sleeps without waking breathless, and her SpO2 and clinical state have been stable for 24 hours. Which statement about discharge is consistent with the CPG?",
    option_a: "She must stay until spirometry is normal",
    option_b: "She should not be discharged until she needs no bronchodilator at all",
    option_c: "Follow-up is only needed if she deteriorates",
    option_d: "She meets the discharge criteria; arrange review within 8 weeks to check spirometry, inhaler technique, smoking status and need for LTOT or rehabilitation",
    correct_option: "D",
    explanation: "Rationale: Discharge criteria include inhaled bronchodilator needed no more often than every 4 hours, ability to walk across the room, eating and sleeping without frequent waking by dyspnoea, clinical and ABG/SpO2 stability for 12-24 hours, understanding of treatment, and organised follow-up. Review should be within 8 weeks, covering spirometry, inhaler technique, smoking, LTOT, rehabilitation and vaccination. A and B set impossible targets. C omits planned follow-up. Teaching point: Discharge when bronchodilator needs are ≤4-hourly and stable 12-24 hours; review within 8 weeks.\nReference: Malaysian CPG Management of COPD 2009 (2nd Ed.), Sections 8.13 and 8.14.",
    tag: "CPG COPD 2009"
  },
  {
    question_text: "A 54-year-old man with long-standing poorly controlled hypertension develops sudden right hemiparesis, facial weakness, dysarthria and a right homonymous hemianopia. CT shows a deep haematoma. Which site is the most common location of spontaneous ICH according to the CPG?",
    option_a: "Basal ganglia",
    option_b: "Thalamus",
    option_c: "Lobar/cortical",
    option_d: "Cerebellum",
    correct_option: "A",
    explanation: "Rationale: The common locations are basal ganglia (40-60%), thalamus (~30%), lobar/cortical (~20%), and brainstem or cerebellum (<10%). His picture (hemiparesis, facial weakness, dysarthria, hemianopia, gaze palsy) is typical of a putaminal (basal ganglia) haematoma. Teaching point: Basal ganglia is the commonest ICH site, then thalamus, then lobar.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Diagnosis of ICH.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 66-year-old woman presents with sudden vertigo, vomiting and inability to walk. She has gait and limb ataxia but no hemiparesis. She is drowsy but rousable. Which haematoma location best explains her presentation?",
    option_a: "Putamen",
    option_b: "Thalamus",
    option_c: "Cerebellum",
    option_d: "Frontal lobe",
    correct_option: "C",
    explanation: "Rationale: Cerebellar haematoma manifests as ataxia, clumsiness and vertigo. Putaminal haematoma causes hemiparesis, dysarthria and hemianopia. Thalamic haematoma causes hemisensory loss, and extension to the midbrain causes gaze palsy and reduced consciousness. Cortical bleeds cause cortical signs. Drowsiness here is a warning sign of brainstem compression or hydrocephalus. Teaching point: Vertigo, vomiting and ataxia without hemiparesis suggests cerebellar ICH.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Diagnosis of ICH.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A medical student asks why only some patients with ICH have headache. Which explanation is consistent with the CPG?",
    option_a: "Brain parenchyma has abundant pain receptors",
    option_b: "Headache reflects stretching of meningeal pain fibres or blood in the CSF and ventricles, as brain tissue lacks pain receptors",
    option_c: "Headache only occurs with subdural haematoma",
    option_d: "Headache is universal in ICH",
    correct_option: "B",
    explanation: "Rationale: Bleeding into the parenchyma does not itself cause headache because brain tissue is devoid of pain receptors. Headache occurs in about half of patients due to stretching of meningeal pain fibres or irritation by blood in the CSF and ventricles. Vomiting may signify raised ICP. A is wrong. C and D overstate it. Teaching point: About half of ICH patients have headache, from meningeal stretch or intraventricular blood.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Diagnosis of ICH.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 71-year-old woman has a right parietal lobar haemorrhage. Which statement about seizures in spontaneous ICH is most accurate?",
    option_a: "Seizures are more common in lobar/cortical haemorrhage and occur in about 4-14% of acute ICH",
    option_b: "Seizures are more common in brainstem haemorrhage",
    option_c: "Seizures never occur after the first day",
    option_d: "All patients should receive prophylactic levetiracetam",
    correct_option: "A",
    explanation: "Rationale: Seizures are more common in lobar/cortical haemorrhage and occur in 4-14% of patients with acute ICH; most occur within the first 72 hours and are often subclinical. B is wrong. C contradicts the timing data. D is wrong because prophylactic antiseizure medication should not be given. Teaching point: Lobar bleeds seize more, but do not give prophylactic antiseizure drugs.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Diagnosis of ICH; Seizure Prophylaxis; Recommendation 13.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A district hospital without a CT scanner wants to use the Siriraj stroke score to decide whether a patient has haemorrhagic stroke. Which statement best reflects the CPG?",
    option_a: "The Siriraj score reliably distinguishes ICH from ischaemic stroke",
    option_b: "Guy's hospital score is preferred over imaging",
    option_c: "Clinical scores are unreliable; neuroimaging should be used in all cases",
    option_d: "Clinical scores are reliable for cerebellar haemorrhage",
    correct_option: "C",
    explanation: "Rationale: Clinical scores such as the Siriraj and Guy's hospital scores are unreliable in diagnosing ICH, and neuroimaging should be used in all cases. Patients should be transported to the nearest stroke-ready hospital with CT. A, B and D contradict this. Teaching point: No clinical score replaces CT or MRI for diagnosing ICH.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Diagnosis of ICH; Recommendations 1 and 3.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 59-year-old man arrives 40 minutes after sudden left hemiparesis. The hospital has both CT and MRI. Which statement about initial imaging is most consistent with the CPG?",
    option_a: "MRI is mandatory before any treatment",
    option_b: "Lumbar puncture should precede imaging",
    option_c: "Imaging can wait until the next day if he is stable",
    option_d: "CT or MRI may confirm ICH; CT is the standard of care locally, and MRI should only be used if it can match CT speed and triage efficiency",
    correct_option: "D",
    explanation: "Rationale: Recommendation 1 states that CT or MRI, depending on availability, should be used to confirm ICH. CT is the standard of care in Malaysia because of availability and practicality. MRI is highly accurate but should only be used in the acute workflow if centres can achieve speed and triage efficiency similar to CT. A, B and C would delay diagnosis. Teaching point: CT is the practical first-line test; MRI only if it is just as fast.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Neuroimaging; Recommendation 1.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 38-year-old normotensive woman has a left temporal lobar ICH. There are no white matter changes on CT. What is the most appropriate next investigation?",
    option_a: "No further imaging; manage as hypertensive ICH",
    option_b: "CT angiography (or MRA/MRI) to look for a macrovascular cause",
    option_c: "Repeat non-contrast CT in 6 months only",
    option_d: "Carotid Doppler",
    correct_option: "B",
    explanation: "Rationale: Vascular imaging (CTA/MRA) and/or MRI is recommended for ICH that is lobar or posterior fossa, in patients aged <45, without cerebral small vessel disease, non-hypertensive, or with subarachnoid haemorrhage. She has several of these features, raising the likelihood of AVM, aneurysm, dural AVF, cavernoma or venous thrombosis. A ignores her risk profile. C and D do not address intracranial vascular causes. Teaching point: Young, normotensive, lobar ICH without small vessel disease: look for a macrovascular cause.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Non-Invasive Vascular Imaging; Recommendation 2; Key Recommendations.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 47-year-old man has a frontal ICH with extensive subarachnoid blood on CT. When should CT angiography be performed?",
    option_a: "Emergently, because subarachnoid haemorrhage is present",
    option_b: "At outpatient follow-up in 3 months",
    option_c: "Only if he deteriorates",
    option_d: "Never, because DSA must be done first",
    correct_option: "A",
    explanation: "Rationale: Recommendation 2 advises CTA preferably within the same admission, and emergently when there is concomitant subarachnoid haemorrhage, which suggests a ruptured aneurysm needing urgent treatment. B and C delay diagnosis of a treatable cause. D is wrong because CTA is a suitable first-line test, with DSA considered if CTA is negative. Teaching point: ICH with SAH: emergency CTA for an aneurysm.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Recommendation 2; Table 1.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 34-year-old woman with a lobar ICH has a normal CT angiogram. Suspicion of an underlying vascular lesion remains. What is the most appropriate next step?",
    option_a: "Repeat CTA weekly until positive",
    option_b: "Discharge with no further imaging",
    option_c: "Consider referral to an interventional neuroradiologist for digital subtraction angiography",
    option_d: "Start anticoagulation empirically",
    correct_option: "C",
    explanation: "Rationale: If CTA is negative, referral for DSA may be considered. DSA remains the gold standard for macrovascular causes and allows endovascular treatment in the same session, though it carries a low risk of neurological complications (1.3-1.8%) and permanent deficit (0.2-0.3%). CTA alone has modest sensitivity (74%). A and B are inadequate. D is dangerous. Teaching point: Negative CTA with persisting suspicion: consider DSA.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Non-Invasive Vascular Imaging; Recommendation 2.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 41-year-old man with ICH and suspected vascular malformation has eGFR 22 ml/min/1.73 m2 and a previous anaphylactic reaction to iodinated contrast. Which vascular imaging is the most appropriate alternative to CTA?",
    option_a: "Contrast-enhanced CT with premedication",
    option_b: "Magnetic resonance angiography, such as time-of-flight",
    option_c: "Plain skull radiograph",
    option_d: "No vascular imaging is possible",
    correct_option: "B",
    explanation: "Rationale: MRA is an alternative to CTA in patients with renal impairment or contrast allergy. Time-of-flight or arterial spin labelling protocols visualise vessels without contrast. MRI may also help identify non-macrovascular causes such as amyloid angiopathy or malignancy. A repeats the contrast risk. C is useless. D is wrong. Teaching point: Renal impairment or contrast allergy: use non-contrast MRA.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Non-Invasive Vascular Imaging; Recommendation 2.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 63-year-old man's non-contrast CT shows a hypodense region adjacent to a hyperdense region within the haematoma, with a sharp boundary and a density difference of 22 HU. Which sign is this, and what does it predict?",
    option_a: "Island sign, predicting a vascular malformation",
    option_b: "Swirl sign, predicting cerebral venous thrombosis",
    option_c: "Fluid level, predicting abscess",
    option_d: "Blend sign, predicting haematoma expansion and poor outcome",
    correct_option: "D",
    explanation: "Rationale: The blend sign is a hypodense region adjacent to a hyperdense region with a clear boundary and a density difference exceeding 18 HU. With other NCCT markers (heterogeneous density, hypodensities, black hole sign, fluid level, swirl sign, irregular shape, island sign) it predicts haematoma expansion and poor outcome. The black hole sign requires a difference of >28 HU. The island sign is three or more small scattered haematomas. Teaching point: NCCT expansion markers include blend (>18 HU) and black hole (>28 HU) signs.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Radiological Signs that Predict Haematoma Expansion, Table 2.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 58-year-old woman's CT angiogram shows a 2 mm spot of contrast enhancement within the haematoma, separate from adjacent vessels. What is the significance of this finding?",
    option_a: "It indicates an underlying arteriovenous malformation that must be resected",
    option_b: "It predicts haematoma expansion and is associated with increased death or poor outcome",
    option_c: "It is an artefact without clinical importance",
    option_d: "It indicates the haematoma has stopped expanding",
    correct_option: "B",
    explanation: "Rationale: The CTA spot sign is unifocal or multifocal contrast enhancement within an ICH, separate from vessels, >1.5 mm in diameter and at least double the density of the background haematoma. It predicts haematoma expansion and is associated with increased risk of death or poor outcome. A misreads it as a vascular lesion. C and D are wrong. Teaching point: The spot sign means active bleeding and a high risk of expansion.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Radiological Signs that Predict Haematoma Expansion, Table 2.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A paramedic team attends a 65-year-old man with sudden right-sided weakness 30 minutes ago. The nearest stroke-ready hospital with CT is 15 minutes away; a neurosurgical centre is 60 minutes away. Where should he be taken?",
    option_a: "The neurosurgical centre directly, bypassing the nearer hospital",
    option_b: "A clinic without imaging for initial assessment",
    option_c: "Home, with outpatient follow-up",
    option_d: "The nearest stroke-ready hospital with CT, with transfer later if neurosurgery is indicated",
    correct_option: "D",
    explanation: "Rationale: Recommendation 3 states that patients with suspected intracranial haemorrhage should go to the nearest stroke-ready hospital with CT, and be transferred to a neurosurgical centre if there is an indication for surgery. In the RACECAT ICH subgroup, direct transfer to a distant centre delayed arrival, worsened 90-day function and increased mortality, and only a minority needed surgery. A is the trap. B and C delay diagnosis. Teaching point: Nearest CT-capable stroke hospital first; transfer for surgery only if indicated.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Pre-hospital Bypass; Recommendation 3.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 52-year-old woman with a large ICH has a GCS of 7 and is vomiting. The team decides to secure her airway. Which approach does the CPG recommend?",
    option_a: "Awake fibreoptic intubation without sedation",
    option_b: "Rapid sequence intubation",
    option_c: "Laryngeal mask airway as definitive airway",
    option_d: "Delay intubation until after CT",
    correct_option: "B",
    explanation: "Rationale: Securing the airway is the initial vital step in ICH with impaired consciousness, to maintain oxygenation and ventilation and prevent aspiration. Because airway manipulation can raise ICP and lower cerebral perfusion pressure, rapid sequence intubation is recommended (Recommendation 4). A and C are inappropriate for this patient. D risks aspiration and hypoxia. Teaching point: Intubate ICH patients with rapid sequence intubation.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Management in Emergency Department, Table 3; Recommendation 4.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 49-year-old man with ICH needs rapid sequence intubation. His potassium is 6.1 mmol/L because of rhabdomyolysis from lying on the floor for hours. Which paralytic agent is most appropriate?",
    option_a: "Succinylcholine 1.5 mg/kg",
    option_b: "Midazolam alone",
    option_c: "Rocuronium 1.0-1.2 mg/kg, which can be reversed with sugammadex",
    option_d: "No paralytic agent",
    correct_option: "C",
    explanation: "Rationale: Table 3 lists succinylcholine (1.0-1.5 mg/kg), which may cause hyperkalaemia, and rocuronium (1.0-1.2 mg/kg, by ideal body weight), reversible with sugammadex. With existing hyperkalaemia, succinylcholine is the trap. Midazolam is an induction agent, not a paralytic, and is used only if no superior agent is available. D compromises intubating conditions. Teaching point: Avoid succinylcholine with hyperkalaemia; rocuronium is reversible with sugammadex.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Table 3.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 61-year-old man presents 2 hours after onset of a 14 mL left basal ganglia ICH. BP is 188/104 mmHg. GCS is 14. What is the most appropriate BP management?",
    option_a: "Intensive lowering within one hour to a target SBP of 130-140 mmHg",
    option_b: "Lower SBP to below 110 mmHg as quickly as possible",
    option_c: "Avoid lowering BP for the first 7 days",
    option_d: "Target SBP below 180 mmHg over 24 hours",
    correct_option: "A",
    explanation: "Rationale: Recommendation 5 advises intensive BP treatment within one hour of presentation to a target SBP of 130-140 mmHg. Intensive reduction was associated with less haematoma growth, especially in patients presenting within 6 hours with smaller haematomas. In INTERACT3 the target was <140 mmHg but not below 130 mmHg, which makes B the trap. C and D are too lenient. Teaching point: Acute ICH: SBP 130-140 mmHg within one hour, not below 130.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Blood Pressure Reduction; Recommendation 5; Care Bundle.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 58-year-old woman with acute ICH has an initial SBP of 236 mmHg. Which approach to BP lowering is most appropriate?",
    option_a: "Reduce SBP to 110-139 mmHg within 30 minutes",
    option_b: "Aim for a more gradual reduction, as rapid intensive lowering from SBP ≥220 mmHg was associated with neurological deterioration and kidney adverse events",
    option_c: "Do not treat BP above 220 mmHg",
    option_d: "Give a single bolus to normalise BP immediately",
    correct_option: "B",
    explanation: "Rationale: In a post-hoc analysis of ATACH-II in patients with SBP ≥220 mmHg, intensive reduction to 110-139 mmHg increased neurological deterioration within 24 hours (RR 2.28) and kidney adverse events within 7 days. The CPG therefore advises a more gradual reduction when initial SBP is ≥220 mmHg. A and D are the risky intensive approach. C leaves severe hypertension untreated. Teaching point: SBP ≥220 mmHg: lower BP more gradually.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Blood Pressure Reduction; Recommendation 5.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 64-year-old woman with type 2 diabetes is admitted with acute ICH. Her capillary glucose is 16 mmol/L. What glucose target does the ICH care bundle recommend for her?",
    option_a: "4.0-6.0 mmol/L",
    option_b: "6.1-7.8 mmol/L",
    option_c: "10.0-14.0 mmol/L",
    option_d: "7.8-10.0 mmol/L",
    correct_option: "D",
    explanation: "Rationale: The care bundle targets glucose of 6.1-7.8 mmol/L in patients without diabetes and 7.8-10.0 mmol/L in patients with diabetes. Hyperglycaemia is associated with haematoma expansion, oedema, mortality and poor function. B is the non-diabetic target. A risks hypoglycaemia. C is too high. Teaching point: ICH glucose: 6.1-7.8 (no diabetes), 7.8-10.0 mmol/L (diabetes).\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Hyperglycaemia; Care Bundle; Recommendation 9.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 70-year-old man with ICH develops a temperature of 38.4°C on day 1. What is the CPG target for body temperature as part of the care bundle?",
    option_a: "≤37.5°C, achieved within one hour of treatment initiation",
    option_b: "≤38.5°C, treated only if infection is proven",
    option_c: "Therapeutic hypothermia to 33°C",
    option_d: "No temperature target is specified",
    correct_option: "A",
    explanation: "Rationale: Fever is an independent predictor of haematoma expansion, oedema, poor function and mortality. The care bundle includes treating pyrexia to achieve a body temperature of ≤37.5°C within one hour of initiation. B is too lenient, C is not recommended, and D is wrong. Teaching point: Keep temperature ≤37.5°C in acute ICH.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Fever; Care Bundle; Recommendation 9.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A hospital audits its ICH pathway against INTERACT3. Which set of interventions forms the CPG care bundle, to be achieved within one hour of treatment initiation?",
    option_a: "Mannitol, ICP monitoring, early tracheostomy and seizure prophylaxis",
    option_b: "Platelet transfusion, tranexamic acid, hypothermia and steroids",
    option_c: "Intensive BP reduction, fever treatment, glycaemic control and warfarin reversal to INR <1.5",
    option_d: "Craniotomy, EVD, hyperosmolar therapy and decompressive craniectomy",
    correct_option: "C",
    explanation: "Rationale: The care bundle consists of intensive BP lowering (SBP 130-140 mmHg), treatment of pyrexia to ≤37.5°C, glycaemic control, and reversal of warfarin to INR <1.5 with PCC or FFP, all within one hour. In INTERACT3 it reduced poor functional outcome (OR 0.86) and serious adverse events. A and B include measures the CPG advises against. D lists surgical procedures for selected patients. Teaching point: Bundle = BP, temperature, glucose and anticoagulation reversal, within an hour.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Care Bundle; Recommendation 9.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 72-year-old woman on warfarin for AF presents with a 22 mL thalamic ICH. Her INR is 3.4. What is the most appropriate reversal strategy?",
    option_a: "4-factor prothrombin complex concentrate as soon as possible, together with IV vitamin K, aiming for INR <1.5",
    option_b: "IV vitamin K alone",
    option_c: "Platelet transfusion",
    option_d: "Stop warfarin and recheck INR in 24 hours",
    correct_option: "A",
    explanation: "Rationale: Recommendation 6 advises 4-factor PCC or FFP as soon as possible, with PCC preferred, targeting INR <1.5. IV vitamin K should be given with PCC or FFP to sustain reversal. In INCH, PCC normalised INR faster than FFP (67% vs 9% within 3 hours) with less early haematoma expansion. B is too slow (vitamin K takes up to 12 hours to peak). C is for nothing here. D allows expansion. Teaching point: Warfarin ICH: PCC plus IV vitamin K, target INR <1.5.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Reversal of VKA; Recommendation 6; Appendix 4.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A registrar gives 4-factor PCC to a patient with warfarin-related ICH and asks why IV vitamin K is also needed. What is the best explanation?",
    option_a: "Vitamin K is the main reversal agent and acts within minutes",
    option_b: "Vitamin K prevents thrombosis caused by PCC",
    option_c: "Vitamin K is not required if PCC is given",
    option_d: "PCC acts rapidly but transiently; vitamin K takes up to 12 hours to peak and sustains the reversal, preventing a later INR rise",
    correct_option: "D",
    explanation: "Rationale: The effect of IV vitamin K takes up to 12 hours to peak and persists to 24 hours. It should be given directly after coagulation factor replacement to prevent a subsequent rise in INR and further haematoma expansion. A reverses the pharmacology. B is wrong. C contradicts Recommendation 6. Teaching point: PCC works fast; vitamin K keeps the INR down.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Reversal of VKA; Recommendation 6.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 76-year-old man taking dabigatran 110 mg twice daily presents 2 hours after onset of a lobar ICH. Which reversal agent may be considered?",
    option_a: "Andexanet alfa",
    option_b: "Intravenous idarucizumab",
    option_c: "Protamine sulphate",
    option_d: "Fresh frozen plasma alone",
    correct_option: "B",
    explanation: "Rationale: Idarucizumab, a monoclonal antibody fragment, reverses dabigatran (a direct thrombin inhibitor). In RE-VERSE AD, 5 g IV completely reversed elevated dilute thrombin and ecarin clotting times. Recommendation 7 states that dabigatran-related ICH may be considered for IV idarucizumab. A is for factor Xa inhibitors. C reverses heparin. D is not the specific agent. Teaching point: Dabigatran: idarucizumab. Factor Xa inhibitors: andexanet alfa (or PCC).\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Reversal of DOAC; Recommendation 7.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 69-year-old woman on apixaban presents with an expanding ICH. Andexanet alfa is not available at her hospital. What is the most appropriate alternative?",
    option_a: "4-factor prothrombin complex concentrate",
    option_b: "Idarucizumab",
    option_c: "Tranexamic acid 1 g IV as the main therapy",
    option_d: "Platelet transfusion",
    correct_option: "A",
    explanation: "Rationale: Recommendation 7 states that factor Xa inhibitor-related ICH may be considered for IV andexanet alfa if available, with 4-factor PCC as an alternative. Andexanet was superior to usual care for haemostatic efficacy in ANNEXA-I (with more thrombotic events). B reverses dabigatran only. C did not reduce haematoma expansion or death in TICH-NOAC. D is harmful in antiplatelet-associated ICH and irrelevant here. Teaching point: No andexanet for a factor Xa inhibitor ICH: use 4-factor PCC.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Reversal of DOAC; Recommendation 7.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 68-year-old man on aspirin and clopidogrel after coronary stenting 2 years ago has a 12 mL basal ganglia ICH. No neurosurgery is planned. Which treatment should be avoided?",
    option_a: "BP lowering to SBP 130-140 mmHg",
    option_b: "Admission to a stroke unit",
    option_c: "Platelet transfusion",
    option_d: "Swallowing assessment",
    correct_option: "C",
    explanation: "Rationale: Recommendation 8 states that platelet transfusion should not be used in ICH with concurrent antiplatelet use. In PATCH, platelet transfusion in antiplatelet-associated ICH not planned for surgery increased the odds of adverse events, death and dependency (OR 2.05). A, B and D are recommended care. Teaching point: Antiplatelet-related ICH: no platelet transfusion.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Antiplatelet-associated ICH; Recommendation 8.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A district hospital admits ICH patients to a general medical ward because the stroke unit is \"for ischaemic strokes\". Which statement best reflects the CPG?",
    option_a: "Stroke units benefit only ischaemic stroke",
    option_b: "ICH patients should be in intensive care, not stroke units",
    option_c: "Stroke unit care prolongs hospital stay without benefit",
    option_d: "All acute ICH patients should be admitted to an organised stroke unit; the mortality benefit was more pronounced in ICH than in ischaemic stroke",
    correct_option: "D",
    explanation: "Rationale: Stroke unit care reduced death or dependency compared with general ward care in ICH, and the mortality reduction was more pronounced in ICH (RR 0.73) than in ischaemic stroke (RR 0.82). A Cochrane network meta-analysis showed fewer poor outcomes (OR 0.37) without a significant increase in length of stay. Recommendation 10 advises admission of all acute ICH patients to an organised stroke unit. A, B and C contradict this. Teaching point: ICH patients belong in a stroke unit, where the mortality benefit is greatest.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Admission to an Organised Stroke Unit; Recommendation 10.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "An 82-year-old man has a 35 mL supratentorial ICH with a GCS of 9. A junior doctor calculates the ICH score and proposes a palliative approach based on it alone. Which statement best reflects the CPG?",
    option_a: "The ICH score may be used for mortality prognostication but should not be the sole indicator for deciding direction of care",
    option_b: "The ICH score accurately predicts each individual's outcome",
    option_c: "The FUNC score is more extensively validated than the ICH score",
    option_d: "Prognostic scores should never be used",
    correct_option: "A",
    explanation: "Rationale: The ICH score (GCS, volume, infratentorial location, age and other components) is the most extensively validated mortality tool, with the highest pooled discrimination (C-statistic 0.84), and haematoma volume can be estimated with ABC/2. Recommendation 11 states it may be used for prognostication but should not be the sole indicator for the direction of care. B overstates it. C is wrong. D is too absolute. Teaching point: Use the ICH score to communicate risk, not to decide care on its own.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Prognostic Scores; Recommendation 11; Appendices 5 and 6.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 67-year-old woman with no previous advance directive is admitted with a large lobar ICH and GCS 8. On day 1 her family asks about a DNAR order. What is the most appropriate advice?",
    option_a: "Place a DNAR order immediately, as early prognosis is accurate",
    option_b: "Avoid an early DNAR decision in the first 48 hours, as early care limitation is associated with higher mortality",
    option_c: "Withdraw all treatment if the ICH score is 2",
    option_d: "DNAR decisions should be made by the triage nurse",
    correct_option: "B",
    explanation: "Rationale: Early DNAR within 24 hours was associated with higher hospital mortality (OR 3.28), and early care limitation with doubled 30-day mortality. Early prognostication is often inaccurate. Recommendation 12 advises avoiding early DNAR decisions in the first 48 hours in patients without pre-existing DNAR status. A, C and D contradict this. Teaching point: No new DNAR order in the first 48 hours after ICH.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Avoidance of early DNAR; Recommendation 12.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 56-year-old man has a right frontal lobar ICH without any clinical seizures. A colleague suggests levetiracetam \"to be safe\". What is the most appropriate response?",
    option_a: "Start levetiracetam, as lobar ICH always causes seizures",
    option_b: "Start phenytoin for 3 months",
    option_c: "Do not give prophylactic antiseizure medication; consider it only if clinical seizures occur",
    option_d: "Give sodium valproate loading dose",
    correct_option: "C",
    explanation: "Rationale: Recommendation 13 states that prophylactic antiseizure medications should not be given in spontaneous ICH without seizures, and should be considered in patients with early clinical seizures. Although prophylaxis reduced early electrographic seizures, it did not improve haematoma change, functional outcome or quality of life. A, B and D give unwarranted prophylaxis. Teaching point: No prophylactic antiseizure drugs; treat seizures if they occur.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Seizure Prophylaxis; Recommendation 13.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 74-year-old woman with a 10 mL thalamic ICH is bed-bound. A repeat CT at 24 hours shows a stable haematoma. Which VTE prophylaxis plan is most consistent with the CPG?",
    option_a: "Graduated compression stockings alone from day 1",
    option_b: "Intermittent pneumatic compression from the day of diagnosis, then heparin prophylaxis after 24 hours of admission",
    option_c: "Therapeutic enoxaparin from admission",
    option_d: "No prophylaxis for 4 weeks",
    correct_option: "B",
    explanation: "Rationale: Recommendation 14 advises intermittent pneumatic compression on the day of diagnosis and heparin prophylaxis after 24 hours of admission in non-ambulatory patients, considering individual risk and haematoma stability. CLOTS 3 showed IPC reduced DVT. Graduated compression/TED stockings alone should not be prescribed, so A is wrong. C uses treatment doses. D leaves her unprotected. Teaching point: IPC from day one, heparin prophylaxis after 24 hours, never stockings alone.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Thromboembolism Prophylaxis; Recommendation 14.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 69-year-old man with ICH is awake and alert, respiratory rate 16/min, SpO2 97% on air, with minimal secretions. The nurse wants to start oral feeding. What should happen first?",
    option_a: "Give a full meal and observe",
    option_b: "Insert a nasogastric tube routinely without assessment",
    option_c: "Wait for a videofluoroscopy before any assessment",
    option_d: "A standardised swallowing assessment, starting with a water swallow screen and proceeding to clinical and instrumental assessment if risk is detected",
    correct_option: "D",
    explanation: "Rationale: Dysphagia affects about 64% of patients acutely and increases aspiration pneumonia. Recommendation 15 advises swallowing assessment using standardised protocols such as the MOH SOP: a stepwise approach from screening (water swallow test) to clinical examination and instrumental assessment (FEES, VFSS). He meets the stability criteria (awake, RR 12-20, SpO2 ≥95%, manageable secretions). A risks aspiration. B and C skip the screening step. Teaching point: Screen swallowing with a standardised protocol before feeding.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Swallowing Assessment, Table 4; Recommendation 15.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A medical team reviews four patients with spontaneous ICH. Which patient meets a CPG criterion for referral to neurosurgery?",
    option_a: "A 60-year-old man with an 8 mL putaminal ICH, stable GCS 15",
    option_b: "A 66-year-old woman with a 6 mL cerebellar ICH, GCS 15",
    option_c: "A 58-year-old man with a 12 mL thalamic ICH and stable GCS 14",
    option_d: "A 70-year-old woman with a 15 mL lobar ICH and stable GCS 15",
    correct_option: "B",
    explanation: "Rationale: Referral criteria are large and/or expanding supratentorial ICH (>20 mL), any intraventricular extension, posterior fossa ICH irrespective of volume, deteriorating consciousness or raised ICP, and suspected vascular malformation. The cerebellar (posterior fossa) haematoma qualifies regardless of its small volume. A, C and D are small, stable supratentorial bleeds without listed features. Teaching point: Any posterior fossa ICH should be referred to neurosurgery, whatever its size.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Neurosurgery; Recommendation 20; Algorithm 2.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 63-year-old man has an 18 mL cerebellar haemorrhage with early fourth ventricle effacement. His GCS is falling from 14 to 12. What is the most appropriate management?",
    option_a: "Haematoma evacuation, with or without an external ventricular drain",
    option_b: "Conservative management, as surgery worsens outcome in all cerebellar bleeds",
    option_c: "Intraventricular alteplase alone",
    option_d: "Decompressive craniectomy of the supratentorial skull",
    correct_option: "A",
    explanation: "Rationale: Recommendation 18 advises considering haematoma evacuation with or without EVD in cerebellar ICH with volume ≥15 mL, as a life-saving treatment. In observational data, surgery improved survival in haematomas ≥15 mL but worsened good functional outcome in those ≤12 mL, which makes B the trap only for small bleeds. C and D are for other scenarios. Teaching point: Cerebellar ICH ≥15 mL: consider evacuation ± EVD.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Neurosurgery; Recommendation 18.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 59-year-old woman with a thalamic ICH has extension into the ventricles and acute hydrocephalus, with a falling GCS. What is the most appropriate neurosurgical management?",
    option_a: "Hyperosmolar therapy alone",
    option_b: "Lumbar drain",
    option_c: "External ventricular drain, with intraventricular fibrinolysis (alteplase) or neuroendoscopy considered",
    option_d: "Observation for 72 hours",
    correct_option: "C",
    explanation: "Rationale: Recommendation 19 states that in ICH with intraventricular haemorrhage and hydrocephalus, an EVD should be offered, and intraventricular alteplase or neuroendoscopy may be considered. In CLEAR III, intraventricular alteplase lowered mortality and ventriculitis without improving mRS 0-3. A is not recommended routinely. B is unsafe with obstructive hydrocephalus. D delays treatment. Teaching point: IVH with hydrocephalus: EVD, ± intraventricular alteplase or neuroendoscopy.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Neurosurgery; Recommendation 19.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 62-year-old man has a 45 mL right frontal lobar ICH, 10 hours after onset. GCS is 11. Which surgical option may be considered according to the CPG?",
    option_a: "Minimally invasive haematoma evacuation, as he has a lobar ICH of 30-80 mL within 24 hours",
    option_b: "Open craniotomy is mandatory for all lobar bleeds",
    option_c: "Surgery is never indicated for supratentorial ICH",
    option_d: "EVD alone",
    correct_option: "A",
    explanation: "Rationale: Recommendation 17 states minimally invasive surgery may be considered for lobar ICH of 30-80 mL within 24 hours of onset. In ENRICH, MIS improved 180-day outcome, with benefit in lobar but not deep basal ganglia haemorrhage. B overstates open surgery. C is wrong. D addresses hydrocephalus, not the clot. Teaching point: Lobar ICH 30-80 mL within 24 hours: consider minimally invasive surgery.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Neurosurgery; Recommendation 17; Key Recommendations.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 55-year-old woman has a 60 mL left basal ganglia ICH with GCS 10. Which surgical option may be considered for a severe, large deep supratentorial ICH?",
    option_a: "Minimally invasive surgery, which showed clear benefit in deep bleeds",
    option_b: "Cerebellar decompression",
    option_c: "Routine ICP monitoring",
    option_d: "Decompressive craniectomy",
    correct_option: "D",
    explanation: "Rationale: In patients with severe and large supratentorial deep ICH, decompressive craniectomy may be considered. In SWITCH (age <75, deep ICH 30-100 mL, GCS 8-13), decompressive craniectomy without evacuation lowered the rate of mRS 5-6 at 180 days (44% vs 58%). Open craniotomy for deep ICH may be considered only in deteriorating patients as a life-saving measure. A is wrong because ENRICH showed benefit in lobar, not deep, bleeds. C is not routine. Teaching point: Large deep supratentorial ICH: decompressive craniectomy may be considered.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Neurosurgery; Recommendation 16; Key Recommendations.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 57-year-old man with a 40 mL putaminal ICH is intubated in the ICU with GCS 6. A registrar proposes routine ICP monitoring. Which statement best reflects the CPG?",
    option_a: "ICP monitoring is mandatory in all ventilated ICH patients",
    option_b: "ICP monitoring should not be routinely performed, as evidence of benefit is inconsistent",
    option_c: "ICP monitoring improves functional outcome in all GCS ranges",
    option_d: "ICP monitoring replaces the need for CT",
    correct_option: "B",
    explanation: "Rationale: Studies of ICP monitoring in ICH are observational and inconsistent: one cohort showed benefit only for GCS 9-12, ERICH showed no mortality difference, and a MISTIE III analysis showed worse outcomes with monitors. Recommendation 21 states ICP monitoring may not be routinely performed. A, C and D overstate its role. Teaching point: No routine ICP monitoring in ICH.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Intensive Care; Recommendation 21.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 66-year-old woman with ICH has perihaematomal oedema on day 3 without signs of herniation. What does the CPG say about routine mannitol or hypertonic saline?",
    option_a: "Hyperosmolar therapy should not be routinely administered, as it was associated with worse outcomes",
    option_b: "It should be given to all patients with oedema on CT",
    option_c: "It should be given prophylactically from admission",
    option_d: "Hypertonic saline is mandatory, but mannitol is not",
    correct_option: "A",
    explanation: "Rationale: In ERICH, hyperosmolar therapy was associated with higher mRS and, on post-hoc analysis, more brain oedema, herniation and death at discharge. Recommendation 23 states it may not be routinely administered for cerebral oedema. B, C and D advocate routine use. Teaching point: No routine mannitol or hypertonic saline for ICH oedema.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Pharmacological agents for cerebral oedema; Recommendation 23.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 61-year-old man ventilated after ICH remains at GCS 8 on day 4. The team considers early tracheostomy. Which statement best reflects the evidence in the CPG?",
    option_a: "Early tracheostomy (<5 days) halves mortality",
    option_b: "Early tracheostomy shortens ICU stay significantly",
    option_c: "Early tracheostomy improves mRS at 6 months",
    option_d: "Early tracheostomy conferred no mortality, neurological or length-of-stay benefit and should not be routinely performed",
    correct_option: "D",
    explanation: "Rationale: A meta-analysis of 13 studies (mostly ICH) found early tracheostomy (<5 days) gave no mortality benefit, no improvement in mRS, and no reduction in ICU or hospital length of stay versus late tracheostomy (>10 days). Recommendation 22 states early tracheostomy may not be routinely performed. A, B and C contradict this. Teaching point: Do not routinely perform early tracheostomy after ICH.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Ventilation and tracheostomy; Recommendation 22.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 58-year-old woman is admitted with a 10 mL ICH. The physiotherapist asks when to start mobilising her. What is the most appropriate timing?",
    option_a: "Very early intensive mobilisation within the first 12 hours",
    option_b: "Wait until discharge",
    option_c: "Start rehabilitation within 24-72 hours of admission, avoiding very early intensive rehabilitation within 24 hours",
    option_d: "Bed rest for 2 weeks",
    correct_option: "C",
    explanation: "Rationale: Recommendation 24 advises starting rehabilitation within 24-72 hours of admission and avoiding very early intensive rehabilitation (<24 hours), which was associated with higher 14-day mortality (OR 3.21). A is the harmful approach. B and D delay rehabilitation and increase complications. Teaching point: Rehabilitate from 24-72 hours, but not intensively before 24 hours.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Rehabilitation; Recommendation 24.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 63-year-old man has elbow flexor spasticity (MAS 2) 6 weeks after a right ICH, limiting hygiene and dressing. Which treatment and timing does the CPG support?",
    option_a: "Botulinum toxin injection, with optimal timing 4-12 weeks after stroke, alongside therapy",
    option_b: "Botulinum toxin only after 12 months",
    option_c: "Surgical tendon release as first line",
    option_d: "No treatment, as spasticity always resolves",
    correct_option: "A",
    explanation: "Rationale: Recommendation 27 states botulinum toxin should be considered to treat spasticity after ICH, with optimal timing 4-12 weeks after stroke. Oral relaxants (dantrolene, benzodiazepines, gabapentin, baclofen) and TENS as an adjunct may also be considered. B is too late. C and D are not CPG recommendations. Teaching point: Post-ICH spasticity: botulinum toxin, ideally at 4-12 weeks.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Rehabilitation; Recommendations 26-28.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 60-year-old woman with ICH asks whether deferoxamine or intravenous magnesium could protect her brain. Which statement best reflects the CPG?",
    option_a: "Deferoxamine improved mRS 0-2 at 90 days",
    option_b: "Magnesium sulphate reduced 90-day mortality",
    option_c: "Both are recommended as routine adjuncts",
    option_d: "Neuroprotective agents should not be routinely given, as neither deferoxamine nor IV magnesium improved outcomes",
    correct_option: "D",
    explanation: "Rationale: Deferoxamine 32 mg/kg IV daily for 3 days showed no difference in mRS 0-2 at day 90 (34% vs 33%), and IV MgSO4 gave no functional or mortality benefit. Recommendation 29 states neuroprotective agents should not be routinely given. A, B and C contradict the trials. Teaching point: No routine neuroprotective drugs after ICH.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Neuroprotective agents; Recommendation 29.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 57-year-old man is being discharged after a hypertensive basal ganglia ICH. His BP is 148/92 mmHg. Which long-term BP strategy does the CPG recommend?",
    option_a: "Target <150/90 mmHg with a beta-blocker",
    option_b: "Target <140/90 mmHg with a calcium channel blocker alone",
    option_c: "Target <130/80 mmHg; an ACE inhibitor plus thiazide diuretic may be the agents of choice",
    option_d: "No treatment until 3 months after the bleed",
    correct_option: "C",
    explanation: "Rationale: Recommendation 30 advises long-term strict BP lowering with SBP <130 mmHg and DBP <80 mmHg. In the trial cited (perindopril with or without indapamide), an average reduction of 9/4 mmHg reduced recurrent stroke by 50%, including in amyloid-related ICH. A and B use targets that are too lenient. D delays treatment. Teaching point: After ICH: BP <130/80 mmHg, ACEi plus thiazide preferred.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Secondary Prevention; Recommendation 30.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 70-year-old woman with non-valvular AF (CHA2DS2-VASc 5) had a lobar ICH 10 days ago while on warfarin. Which plan for anticoagulation is most consistent with the CPG?",
    option_a: "Resume warfarin immediately at the previous dose",
    option_b: "Never restart anticoagulation after ICH",
    option_c: "Restart within 48 hours to prevent stroke",
    option_d: "Resumption may be considered, preferring a NOAC over warfarin, with timing individualised and preferably not earlier than two weeks",
    correct_option: "D",
    explanation: "Rationale: Recommendation 31 states that resumption of OAC may be considered in ICH with non-valvular AF, with NOAC preferred over warfarin, and timing individualised to bleeding and thrombotic risk, preferably not earlier than two weeks. NOACs had lower recurrent ICH and mortality than warfarin. A uses the higher-risk drug too early. B ignores the thromboembolic benefit. C is too early. Teaching point: AF after ICH: consider a NOAC, not before 2 weeks.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Secondary Prevention; Recommendation 31.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 52-year-old man with a mechanical mitral valve had a small ICH 3 days ago. Warfarin was reversed on admission. When is the earliest that anticoagulation should be resumed?",
    option_a: "At least six days after the ICH, with vigilant monitoring for bleeding and thromboembolism",
    option_b: "Within 24 hours",
    option_c: "After 3 months",
    option_d: "Never, as the valve can be managed with aspirin",
    correct_option: "A",
    explanation: "Rationale: The composite risk of haemorrhagic and thromboembolic events is high within six days of ICH, and resuming therapeutic anticoagulation within 13 days was associated with more haemorrhagic complications. Recommendation 32 states the earliest timing should be at least six days after ICH, with vigilant monitoring. B is too early. C exposes a mechanical valve to prolonged thrombotic risk. D is inadequate for a mechanical valve. Teaching point: Mechanical valve after ICH: restart anticoagulation no earlier than day 6.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Secondary Prevention; Recommendation 32.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 66-year-old man had an ICH 3 months ago. He has a history of myocardial infarction and coronary stenting 4 years ago. Which statement about restarting aspirin is most consistent with the CPG?",
    option_a: "Antiplatelets must never be restarted after ICH",
    option_b: "Resuming antiplatelet therapy may be considered based on individual risk; RESTART showed no significant increase in recurrent ICH",
    option_c: "Dual antiplatelet therapy should be started immediately",
    option_d: "Aspirin doubles the recurrent ICH rate",
    correct_option: "B",
    explanation: "Rationale: In RESTART, resuming antiplatelet therapy did not significantly increase recurrent symptomatic ICH (8.2% vs 9.3%; HR 0.87). Recommendation 33 states resumption may be considered based on individual risk assessment, with monitoring for recurrent bleeding. A is too absolute. C is unsupported. D contradicts the data. Teaching point: Restarting antiplatelets after ICH is reasonable when indicated.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Resumption of anti-platelet therapy; Recommendation 33.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 64-year-old woman with a previous ICH has dyslipidaemia and diabetes. A statin is to be started. Which statin type does the CPG prefer?",
    option_a: "Lipophilic statins such as simvastatin",
    option_b: "Statins are contraindicated after ICH",
    option_c: "Hydrophilic statins such as pravastatin or rosuvastatin",
    option_d: "High-dose atorvastatin 80 mg in all patients",
    correct_option: "C",
    explanation: "Rationale: Statins were not associated with ICH occurrence in a meta-analysis of 31 RCTs. In a Taiwanese cohort, hydrophilic statins (pravastatin, rosuvastatin) had a lower risk of recurrent ICH than lipophilic statins (HR 0.69). Recommendation 34 states statins may be used, with hydrophilic statins preferred. A is the less preferred class. B is wrong. D is not specified. Teaching point: After ICH, prefer a hydrophilic statin (pravastatin or rosuvastatin).\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), Statins; Recommendation 34.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "An 84-year-old woman with ICH becomes agitated and inattentive on night 2. She was previously mildly frail, living with her daughter. Which approach is most consistent with the CPG?",
    option_a: "Assess for delirium with a validated tool, treat underlying causes, and use frailty level to plan individualised care",
    option_b: "Sedate with high-dose benzodiazepines",
    option_c: "Frailty is not relevant to ICH management",
    option_d: "Transfer repeatedly between wards to find a quieter bed",
    correct_option: "A",
    explanation: "Rationale: Recommendations 35 and 36 advise assessing pre-morbid frailty in every older person with ICH to individualise care, assessing for delirium (e.g. CAM or CAM-ICU), and treating underlying causes, with measures such as avoiding multiple bed moves. B can worsen delirium. C ignores the recommendation. D is explicitly discouraged. Teaching point: In older ICH patients: assess frailty and delirium; avoid multiple bed moves.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), ICH in the Elderly Population; Recommendations 35 and 36.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "An 87-year-old frail man on amlodipine and perindopril after an ICH reports dizziness on standing. His SBP falls by 26 mmHg on standing. What is the most appropriate action?",
    option_a: "Increase both drugs to reach <120/70 mmHg",
    option_b: "Add a diuretic",
    option_c: "Recognise that conventional targets may not suit frail older adults, and adjust doses or change medications because of orthostatic hypotension",
    option_d: "Ignore it, as postural drops are normal in the elderly",
    correct_option: "C",
    explanation: "Rationale: Recommendation 37 states the conventional BP target after ICH may not be suitable for frailer older persons, who should be assessed for orthostatic hypotension (SBP drop >20 mmHg and/or DBP >10 mmHg). Dosage adjustment or medication change should be done when adverse effects occur. A and B worsen his symptoms. D ignores fall risk. Teaching point: Frail older ICH survivors: check for postural drops and relax targets if needed.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), ICH in the Elderly Population; Recommendation 37.",
    tag: "CPG ICH 2025"
  },
  {
    question_text: "A 79-year-old ambulant woman is recovering from an ICH with mild left-sided weakness. Which assessment does the CPG recommend before discharge?",
    option_a: "Falls and fracture risk assessment by a multidisciplinary team, with osteoporosis screening (renal profile, calcium, vitamin D, bone turnover markers and DEXA)",
    option_b: "Falls assessment is only needed after a fall occurs",
    option_c: "DEXA only if she has a previous fracture",
    option_d: "Start bisphosphonates in all patients without assessment",
    correct_option: "A",
    explanation: "Rationale: Recommendation 39 states that ambulant older persons with ICH should be assessed for falls and fracture risk by a multidisciplinary team, and screened for osteoporosis with blood tests (renal profile, calcium, vitamin D, bone turnover markers) and DEXA, treating according to the Malaysian Osteoporosis CPG. B and C wait for harm. D skips assessment. Teaching point: Older ICH survivors need falls risk assessment and osteoporosis screening.\nReference: Malaysian CPG Management of Spontaneous Intracerebral Haemorrhage 2025 (1st Ed.), ICH in the Elderly Population; Recommendation 39.",
    tag: "CPG ICH 2025"
  }
];
