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
  }
];
