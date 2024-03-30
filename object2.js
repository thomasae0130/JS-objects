const whereIsMyMind = {
    anexietyDisorders: {
        PanicDisorder: {
            whatIs: 'Panic disorder is a mental and behavioral disorder, specifically an anxiety disorder characterized by reoccurring unexpected panic attacks.',
            symptoms: 'Chest pain or discomfort, Dizziness or feeling faint, Fear of dying, Fear of losing control or impending doom, Feeling of choking,  Feelings of detachment,Feelings of unreality, Nausea or upset stomach, Numbness or tingling in the hands, feet, or face, Palpitations, fast heart rate, or pounding heart, Sensation of shortness of breath or smothering, Sweating, chills, or hot flashes,Trembling or shaking',
            ageRange: "onset typicaly takes place before 25 but can onset in the 30's."   
        },      
        SpecificPhobia: {
            whatIs:'Specific phobia is an anxiety disorder, characterized by an extreme, unreasonable, and irrational fear associated with a specific object, situation, or concept which poses little or no actual danger.',
            symptoms:'Feel intense fear, anxiety and panic right away when exposed to or even thinking about what causes your fear. Know that your fears are not reasonable or not as big as you think they are, but you cannot control them. Have anxiety that gets worse as the situation or object gets closer to you physically or in time. Do everything possible to stay away from an object or situation or face it with extreme anxiety or fear. Have trouble with daily activities because of your fear. Have physical reactions and feelings, including sweating, rapid heartbeat, tight chest or trouble breathing. Feel like throwing up, or you get dizzy or faint, especially around blood or injuries.',
            ageRange: 'Often first seen between the ages of 15-20, but can onset anytime in life.'  
       },
        SocialAnexietyDisorder: {
            whatIs: 'Social anxiety disorder, also known as social phobia, is an anxiety disorder characterized by sentiments of fear and anxiety in social situations, causing considerable distress and impairing ability to function in at least some aspects of daily life.',
            symptoms: 'Fear of situations in which you may be judged negatively. Worry about embarrassing or humiliating yourself. Intense fear of interacting or talking with strangers. Fear that others will notice that you look anxious. Fear of physical symptoms that may cause you embarrassment, such as blushing, sweating, trembling or having a shaky voice. Avoidance of doing things or speaking to people out of fear of embarrassment. Avoidance of situations where you might be the center of attention. Anxiety in anticipation of a feared activity or event. Intense fear or anxiety during social situations. Analysis of your performance and identification of flaws in your interactions after a social situation. Expectation of the worst possible consequences from a negative experience during a social situation',
            ageRange: 'those who seek help are typicially in their teens with it usually fully onset by 20.'
        },          
        SelectiveMutism: {
            whatIs: 'Selective mutism is an anxiety disorder in which a person who is otherwise capable of speech becomes unable to speak when exposed to specific situations, specific places, or to specific people, one or multiple of which serving as triggers. This is caused by the freeze response.',
            symptoms: 'They may avoid eye contact and appear: nervous, uneasy or socially awkward, rude, disinterested or sulky, clingy, shy and withdrawn, stiff, tense or poorly co-ordinated, stubborn or aggressive, having temper tantrums when they get home from school, or getting angry when questioned by parents',
            ageRange: 'starts in early childhood from that ages 2-4.'
            },
    },  
    depressionTypes: {
        PsychoticDepression: {
            whatIs: 'Psychotic depression occurs when psychotic features such as hallucinations and delusions are accompanied by a major depressive episode, though psychotic symptoms generally have a depressive theme such as guilt, worthlessness, and death.',
            symptoms: 'Agitation, Anxiety, Constipation, Hypochondria, Insomnia, Intellectual impairment, Physical immobility, Delusions, or hallucinations.',
            ageRange: 'Can occour anytime in life.'
        },
        MajorDepression: {
            whatIs: 'Major depression. The most common form of depression is “major depression,” which may also be called “clinical depression” or “unipolar depression.”',
            symptoms: 'Depressed mood—feeling sad, down, or blue, Loss of interest and enjoyment in usual activities, Having trouble sleeping or sleeping more than normal, Fatigue or low energy, Poor concentration and difficulty making everyday decisions, Loss of appetite or overeating, Recurring feelings of guilt or worthlessness, Physical and mental restlessness or being slowed down, Loss of hope and thoughts of death or suicide',
            ageRange: 'Onset can occour anytiem in life.'
        },
        SeasonalAffectiveDisorder: {
            whatIs: 'Seasonal affective disorder is a mood disorder subset in which people who typically have normal mental health throughout most of the year exhibit depressive symptoms at the same time each year.',
            symptoms: 'anxiety, apathy, general discontent, loneliness, loss of interest, mood swings, or sadness, excess sleepiness, insomnia, or sleep deprivation, appetite changes or fatigue, irritability or social isolation',
            ageRange: 'typically between 18-30'
        },
        PremenstrualDysphoricDisorder: {
            whatIs: 'Premenstrual dysphoric disorder is a mood disorder characterized by emotional, cognitive, and physical symptoms. PMDD causes significant distress or impairment in menstruating people during the luteal phase of the menstrual cycle.',
            symptoms: 'Pain in the breast, muscles, or pelvis, mood swings, sadness, anger, anxiety, hopelessness, or panic attack, excess sleepiness or insomnia, irritability or crying, appetite changes, bloating, depression, diminished interest in usual activities, economic or social dysfunction due to symptoms, fatigue, feeling overwhelmed, food craving, headache, increased sensitivity to rejection, lack of concentration, self-critical thoughts, water retention, or weight gain',
            ageRange: 'anytime before Menopause'
        }
    },
    biPolarDisorders: {
        Bipolar1: {
            whatIs: 'A disorder associated with episodes of mood swings ranging from depressive lows to manic highs.',
            symptoms: 'Manic episodes may include symptoms such as high energy, reduced need for sleep, and loss of touch with reality. Depressive episodes may include symptoms such as low energy, low motivation, and loss of interest in daily activities. Mood episodes last days to months at a time and may also be associated with suicidal thoughts, etc...',
            ageRange: 'typical onset if from 12-24 years of age.'
        },
        Bipolar2: {
            whatIs: 'A type of bipolar disorder characterized by depressive and hypomanic episodes. It involves at least one depressive episode lasting at least two weeks and at least one hypomanic episode lasting at least four days.',
            symptoms: 'Depressive symptoms include sadness or hopelessness. Hypomanic symptoms include a persistently elevated or irritable mood.',
            ageRange: 'typically diagnosed late adolecence into early adulthood.'
        },
        Cyclothymia: {
            whatIs: "A mood disorder that causes emotional highs and lows. The mood shifts in cyclothymia aren't as extreme as those in people with bipolar disorders. People with cyclothymia can typically function in daily life, though it may be difficult.",
            symptoms: 'Symptoms include intermittent psychological highs and lows that may become more pronounced over time. Mood swings or irritabilty.',
            ageRange: 'onset is typically during teen years or early adulthood.'
        },
        RapidCyclingBipolar: {
            whatIs: 'Rapid cycling bipolar disorder (RCBD) is defined in the fourth edition of the Diagnostic and Statistical Manual of Mental Disorders (DSM-IV) as a type of manic-depressive illness in which the patient experiences four or more episodes of mania and/or major depression per year.',
            symptoms: 'a high mood. high levels of physical and mental activity and energy. increased positivity and self-confidence. increased irritability and aggression. reduced need for sleep without tiring. racing speech and thoughts. overreaction to stimuli. increased libido, or sex drive.',
            ageRange: 'onset is typically during late adolecence into early adulthood.'
        }
    },
    schitzophreina: {
        SchizoaffectiveDisorder: {
            whatIs: 'A mental health condition including schizophrenia and mood disorder symptoms.',
            symptoms: 'Cycles of severe symptoms are often followed by periods of improvement. Symptoms may include delusions, hallucinations, depressed episodes, and manic periods of high energy.',
            ageRange: 'onset is typically between the ages of 16- 30.'
        },
    }
}
const anexietyDisorderType = (disorder) => {
        const type = whereIsMyMind.anexietyDisorders[disorder];
        if (type) {
   return `disorder: ${disorder}.
   whatIs: ${type.whatIs}
   
   symptoms: ${type.symptoms}
   
   ageRange: ${type.ageRange}`;         
        }
    }
    const depression = (disorder) => {
        const type = whereIsMyMind.depressionTypes[disorder];
        if (type) {
            return `disorder: ${disorder}
            whatIs: ${type.whatIs}
            
            symptoms: ${type.symptoms}
            
            ageRange: ${type.ageRange}`;
        }
    }
    const bipolar = (disorder) => {
        const type = whereIsMyMind.biPolarDisorders[disorder];
        if (type) {
            return `disorder: ${disorder}
            whatIs: ${type.whatIs}
            
            symptoms: ${type.symptoms}
            
            ageRange: ${type.ageRange}`
        }
    }
    const schitzo = (disorder) => {
        const type = whereIsMyMind.schitzophreina[disorder];
        if (type) {
            return `disorder: ${disorder}
            whatIs: ${type.whatIs}
            
            symptoms: ${type.symptoms}
            
            ageRange: ${type.ageRange}`
        }
    }
    console.log(anexietyDisorderType('SelectiveMutism'));
    console.log(depression('MajorDepression'));
    console.log(bipolar('Bipolar2'));