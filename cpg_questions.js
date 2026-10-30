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
  }
];
