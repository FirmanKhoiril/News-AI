//no sub chapter
const CFA_LAVEL_ONE = {
  exam: 'CFA Level 1',
  chapters: [
    {
      chapter: 'Quantitative Methods',
      topics: [
        'Rates and Returns',
        'The Time Value of Money in Finance',
        'Statistical Measures of Asset Returns',
        'Probability Trees and Conditional Expectations',
        'Portfolio Mathematics',
        'Simulation Methods',
        'Estimation and Inference',
        'Hypothesis Testing',
        'Parametric and Non-Parametric Tests of Independence',
        'Simple Linear Regression',
        'Introduction to Big Data Techniques',
      ],
    },
    {
      chapter: 'Economics',
      topics: [
        'Firms and Market Structures',
        'Understanding Business Cycles',
        'Fiscal Policy',
        'Monetary Policy',
        'Introduction to Geopolitics',
        'International Trade',
        'Capital Flows and the FX Market',
        'Exchange Rate Calculations',
      ],
    },
    {
      chapter: 'Financial Statement Analysis',
      topics: [
        'Introduction to Financial Statement Analysis',
        'Analyzing Income Statements',
        'Analyzing Balance Sheets',
        'Analyzing Statements of Cash Flows I',
        'Analyzing Statements of Cash Flows II',
        'Analysis of Inventories',
        'Analysis of Long-Term Assets',
        'Topics in Long-Term Liabilities and Equity',
        'Analysis of Income Taxes',
        'Financial Reporting Quality',
        'Financial Analysis Techniques',
        'Introduction to Financial Statement Modeling',
      ],
    },
    {
      chapter: 'Corporate Issuers',
      topics: [
        'Organizational Forms, Corporate Issuer Features, and Ownership',
        'Investors and Other Stakeholders',
        'Corporate Governance - Conflicts, Mechanisms, Risks, and Benefits',
        'Working Capital and Liquidity',
        'Capital Investments and Capital Allocation',
        'Capital Structure',
        'Business Models',
      ],
    },
    {
      chapter: 'Equity Investments',
      topics: [
        'Market Organization and Structure',
        'Security Market Indexes',
        'Market Efficiency',
        'Overview of Equity Securities',
        'Company Analysis - Past and Present',
        'Industry and Competitive Analysis',
        'Company Analysis – Forecasting',
        'Equity Valuation Concepts and Basic Tools',
      ],
    },
    {
      chapter: 'Fixed Income',
      topics: [
        'Fixed-Income Instrument Features',
        'Fixed-Income Cash Flows and Types',
        'Fixed-Income Issuance and Trading',
        'Fixed-Income Markets for Corporate Issuers',
        'Fixed-Income Markets for Government Issuers',
        'Fixed-Income Bond Valuation - Prices and Yields',
        'Yield and Yield Spread Measures for Fixed-Rate Bonds',
        'Yield and Yield Spread Measures for Floating-Rate Instruments',
        'The Term Structure of Interest Rates- Spot, Par, and Forward Curves',
        'Interest Rate Risk and Return',
        'Yield-Based Bond Duration Measures and Properties',
        'Yield-Based Bond Convexity and Portfolio Properties',
        'Curve-Based and Empirical Fixed-Income Risk Measures',
        'Credit Risk',
        'Credit Analysis for Government Issuers',
        'Credit Analysis for Corporate Issuers',
        'Fixed-Income Securitization',
        'Asset-Backed Security (ABS) Instrument and Market Features',
        'Mortgage-Backed Security (MBS) Instrument and Market Features',
      ],
    },
    {
      chapter: 'Derivatives',
      topics: [
        'Derivative Instrument and Derivative Market Features',
        'Forward Commitment and Contingent Claim Features and Instruments',
        'Derivative Benefits, Risks, and Issuer and Investor Uses',
        'Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives',
        'Pricing and Valuation of Forward Contracts',
        'Pricing and Valuation of Futures Contracts',
        'Pricing and Valuation of Interest Rates and Other Swaps',
        'Pricing and Valuation of Options',
        'Option Replication Using Put–Call Parity',
        'Valuing a Derivative Using a One-Period Binomial Model',
      ],
    },
    {
      chapter: 'Alternative Investments',
      topics: [
        'Alternative Investment Features, Methods, and Structures',
        'Alternative Investment Performance and Returns',
        'Investments in Private Capital - Equity and Debt',
        'Real Estate and Infrastructure',
        'Natural Resources',
        'Hedge Funds',
        'Introduction to Digital Assets',
      ],
    },
    {
      chapter: 'Portfolio Management',
      topics: [
        'Portfolio Management An Overview',
        'Portfolio Risk and Return Part I',
        'Portfolio Risk and Return Part II',
        'Basics of Portfolio Planning and Construction',
        'The Behavioral Biases of Individuals',
        'Introduction to Risk Management',
      ],
    },
    {
      chapter: 'Ethical and Professional Standards',
      topics: [
        'Ethics and Trust in the Investment Profession',
        'Code of Ethics and Standards of Professional Conduct',
        'Guidance for Standards I-VII',
        'Introduction to GIPS',
        'Ethics Application',
      ],
    },
  ],
}

//no sub chapter
const CFA_LAVEL_TWO = {
  exam: 'CFA Level 2',
  chapters: [
    {
      chapter: 'Quantitative Methods',
      topics: [
        'Basics of Multiple Regression and Underlying Assumptions',
        'Evaluating Regression Model Fit and Interpreting Model Results',
        'Model Misspecification',
        'Big Data Projects',
        'Time-Series Analysis',
        'Machine Learning',
        'Extensions of Multiple Regression',
      ],
    },
    {
      chapter: 'Economics',
      topics: [
        'Currency Exchange Rates_ Understanding Equilibrium Value',
        'Economic Growth',
        'Economics of Regulation',
      ],
    },
    {
      chapter: 'Financial Statement Analysis',
      topics: [
        'Intercorporate Investments',
        'Employee Compensation_ Post-Employment and Share-Based',
        'Multinational Operations',
        'Analysis of Financial Institutions',
        'Evaluating Quality of Financial Reports',
        'Integration of Financial Statement Analysis Techniques',
        'Financial Statement Modeling',
      ],
    },
    {
      chapter: 'Corporate Issuers',
      topics: [
        'Analysis of Dividends and Share Repurchases',
        'Environmental, Social, and Governance (ESG) Considerations in Investment Analysis',
        'Cost of Capital_ Advanced Topics',
        'Corporate Restructuring',
      ],
    },
    {
      chapter: 'Equity Valuation',
      topics: [
        'Equity Valuation_ Applications and Processes',
        'Discounted Dividend Valuation',
        'Free Cash Flow Valuation',
        'Market-Based Valuation_ Price and Enterprise Value Multiples',
        'Residual Income Valuation',
        'Private Company Valuation',
      ],
    },
    {
      chapter: 'Fixed Income',
      topics: [
        'The Term Structure and Interest Rate Dynamics',
        'The Arbitrage-Free Valuation Framework',
        'Valuation and Analysis of Bonds with Embedded Options',
        'Credit Analysis Models',
        'Credit Default Swaps',
      ],
    },
    {
      chapter: 'Derivatives',
      topics: [
        'Pricing and Valuation of Forward Commitments',
        'Valuation of Contingent Claims',
      ],
    },
    {
      chapter: 'Alternative Investments',
      topics: [
        'Introduction to Commodities and Commodity Derivatives',
        'Overview of Types of Real Estate Investment',
        'Investments in Real Estate Through Publicly Traded Securities',
        'Hedge fund Strategies',
      ],
    },
    {
      chapter: 'Portfolio Management',
      topics: [
        'Exchange-Traded Funds_ Mechanics and Applications',
        'Using Multifactor Models',
        'Measuring and Managing Market Risk',
        'Backtesting and Simulation',
        'Economics and Investment Markets',
        'Analysis of Active Portfolio Management',
      ],
    },
    {
      chapter: 'Ethics and Professional Standards',
      topics: [
        'Code of Ethics and Standards of Professional Conduct',
        'Guidance for Standards I–VII',
        'Application of the Code and Standards_ Level II',
      ],
    },
  ],
}

//no sub chapter
const CFA_LAVEL_THREE = {
  exam: 'CFA Level 3',
  chapters: [
    {
      chapter: 'Economics',
      topics: [
        'Capital Market Expectations, Part 1_Framework and Macro Considerations',
        'Capital Market Expectations, Part 2_Forecasting Asset Class Returns',
        'Currency Management An Introduction',
      ],
    },
    {
      chapter: 'Portfolio Management',
      topics: [
        'Overview of Asset Allocation',
        'Principles of Asset Allocation',
        'Asset Allocation with Real-World Constraints',
        'Overview of Private Wealth Management',
        'Topics in Private Wealth Management',
        'Risk Management for Individuals',
        'Portfolio Management for Institutional Investors',
        'Trade Strategy and Execution',
        'Portfolio Performance Evaluation',
        'Investment Manager Selection',
        'Case Study in Portfolio Management Institutional',
        'Case Study in Risk Management Private Wealth',
        'Case Study in Risk Management Institutional',
      ],
    },
    {
      chapter: 'Derivatives',
      topics: ['Options Strategies', 'Swaps, Forwards, and Futures Strategies'],
    },
    {
      chapter: 'Equity Investments',
      topics: [
        'Overview of Equity Portfolio Management',
        'Passive Equity Investing',
        'Active Equity Investing Strategies',
        'Active Equity Investing Portfolio Construction',
      ],
    },
    {
      chapter: 'Fixed Income',
      topics: [
        'Overview of Fixed-Income Portfolio Management',
        'Liability-Driven and Index-Based Strategies',
        'Yield Curve Strategies',
        'Fixed-Income Active Management Credit Strategies',
      ],
    },
    {
      chapter: 'Alternative Investments',
      topics: [
        'Hedge Fund Strategies',
        'Asset Allocation to Alternative Investments',
      ],
    },
    {
      chapter: 'Ethical and Professional Standards',
      topics: [
        'Code of Ethics and Standards of Professional Conduct',
        'Guidance for Standards I-VII',
        'Application of the Code and Standards Level III',
        'Asset Manager Code of Professional Conduct',
        'Overview of the Global Investment Performance Standards',
      ],
    },
  ],
}

const CAIA_LAVEL_ONE = {
  exam: 'CAIA Level 1',
  subchapter: true,
  chapters: [
    { chapter: 'Professional Standards and Ethics', topics: [] },
    {
      chapter: 'Introduction to Alternative Investments',
      topics: [
        {
          chapter: '2.1 What is an Alternative Investment',
          topics: [
            'A History of Alternative Investing_ The U.S. Case',
            'Alternative Investments by Exclusion',
            'Alternative Investments by Inclusion',
            'Eight Other Characteristics that Distinguish Alternative and Traditional',
            'Five Goals of Alternative Investing',
            'Investments are Distinguished by Methods of Analysis',
            'Investments are Distinguished by Return Characteristics',
            'The Blurred Lines between Traditional and Alternative Investments',
            'Two Pillars of Alternative Investment Management',
          ],
        },
        {
          chapter: '2.2 The Environment of Alternative Investment',
          topics: [
            'Alternative Investment Structures',
            'Financial Markets',
            'Key Features of Fund Structures',
            'Liquid Alternative Investments',
            'Regulatory Environment',
            'Short Selling',
            'Taxation',
            'The Participants',
          ],
        },
        {
          chapter: '2.3 Quantitative Foundation',
          topics: [
            'Distribution of Cash Waterfall',
            'Illiquidity, Accounting Conservatism, IRR, and the J-Curve',
            'Internal Rate of Return',
            'Other Performance Measures',
            'Problems with Internal Rate of Return',
            'Return and Rate Mathematics',
            'Returns Based on Notional Principal',
          ],
        },
        {
          chapter: '2.4 Statistical Foundations',
          topics: [
            'Covariance, Correlation, Beta, and Autocorrelation',
            'Interpreting Standard Deviation and Variance',
            'Moments of the Distribution_ Mean, Variance, Skewness, and Kurtosis',
            'Return Distributions',
            'Testing for Normality',
            'Time-Series Return Volatility Models',
          ],
        },
        {
          chapter: '2.5 Financial Economics Foundation',
          topics: [
            'Arbitrage-Free Models',
            'Binomial Tree Models',
            'Forward Interest Rates',
            'Informational Market Efficiency',
            'Single-Factor Default–Free Bond Models',
            'Single-Factor Equity Pricing Models',
            'The Three Primary Theories of the Term Structure of Interest Rates',
            'The Time Value of Money, Prices, and Rates',
          ],
        },
        {
          chapter: '2.6 Derivative and Risk-Neutral Valuation',
          topics: [
            'Forward Contracts on Assets with Benefits and Costs of Carry',
            'Forward Contracts on Equities',
            'Forward Contracts on Rates',
            'Forward Contracts Versus Futures Contracts',
            'Foundations of Forward Contracts',
            'Managing Long-Term Futures Exposures',
            'Option Exposures',
            'Option Pricing Models',
            'Option Sensitivities',
          ],
        },
        {
          chapter: '2.7 Measures of Risk and Performance',
          topics: [
            'Benchmarking and Performance Attribution',
            'Estimating Value at Risk (VaR)',
            'Measures of Risk',
            'Ratio-Based Performance Measures',
            'Risk-Adjusted Return Measures',
          ],
        },
        {
          chapter: '2.8 Alpha, Beta, and Hypothesis Testing',
          topics: [
            'Ex Ante Alpha Estimation and Return Persistence',
            'Ex Ante Versus Ex Post Alpha',
            'Inferring Ex Ante Alpha From Ex Post Alpha',
            'Overview of Beta and Alpha',
            'Return Attribution, Alpha, and Beta',
            'Return Drivers',
            'Sampling and Testing Problems',
            'Single-Factor Models and Regression',
            'Statistical Issues in Analyzing Alpha and Beta',
            'Using Statistical Methods to Locate Alpha',
          ],
        },
      ],
    },
    {
      chapter: 'Real Assets',
      topics: [
        {
          chapter: '3.1 Natural Resources and Land',
          topics: [
            'Contagion, Price Indices, and Biases',
            'Farmland',
            'Key Observations Regarding Historical Returns of Farmland',
            'Key Observations Regarding Historical Returns of Timberland',
            'Land',
            'Natural Resources Other Than Land',
            'Pricing and Historic Data Analysis',
            'Timber and Timberland',
            'Valuation and Volatility of Real Assets',
          ],
        },
        {
          chapter: '3.2 Commodities',
          topics: [
            'Commodity Exposure and Diversification',
            'Commodity Futures Indices',
            'Commodity Risk Attributes',
            'Expected Returns on Commodities',
            'Investing in Commodities Without Futures',
            'Normal Backwardation and Normal Contango',
            'Observations Based on Historical Returns',
            'Rolling of Forward and Futures Contracts',
            'The Term Structure of Forward Prices on Commodities',
          ],
        },
        {
          chapter: '3.3 Other Real Assets',
          topics: [
            'Cash Flows of Intellectual Property',
            'Commodity Producers',
            'Infrastructure',
            'Intellectual Property Overview',
            'Liquid Alternative Real Assets',
            'R&D and Patents as Unbundled Intellectual Property',
            'Visual Works of Art and Historical Performance Data',
          ],
        },
        {
          chapter: '3.4 Real Estate Assets and Debt',
          topics: [
            'Advantages, Disadvantages, and Styles of Real Estate Investments',
            'Categories of Real Estate',
            'Commercial Mortgages',
            'Key Observations Regarding Historical Returns of Mortgage REITs',
            'Liquid Alternatives_ Real Estate Investment Trusts',
            'Mortgage-Backed Securities Market',
            'Real Estate Style Boxes',
            'Residential Mortgages',
          ],
        },
        {
          chapter: '3.5 Real Estate Equity',
          topics: [
            'Alternative Real Estate Investment Vehicles',
            'Commercial Real Estate Valuation',
            'Details of the Income Approach to Real Estate Valuation',
            'Equity REIT Returns',
            'Illustration of the Income Method of Real Estate Valuation',
            'Key Observations Regarding Historical Risks and Returns of Equity REITs',
            'Real Estate Development',
          ],
        },
      ],
    },
    {
      chapter: 'Private Securities',
      topics: [
        {
          chapter: '4.1 Private Equity Assets',
          topics: [
            'Buyouts and Leveraged Buyouts',
            'Buyouts of Private Companies',
            'Dynamics of Private Equity Opportunities',
            'Exit Strategies for Private Equity Investments',
            'Growth Equity',
            'Introduction to Private Equity Terms and Background',
            'Leveraged Buyouts (LBOs)',
            'Merchant Banking',
            'Overview of Three Forms of Pre-IPO Private Equity Investing',
            'Venture Capital',
            'Venture Capital as a Compound Option',
          ],
        },
        {
          chapter: '4.2 Private Equity Funds',
          topics: [
            'Key Determinants of Venture Capital Fund Risks and Returns',
            'Leveraged Buyout Funds',
            'Long-hold Buyout Funds',
            'Overview of Private Equity Funds',
            'Private Equity Fund Fees and Terms',
            'Private Equity Funds as Intermediaries',
            'Private Equity Liquid Alternatives',
            'Private Equity Secondary Markets and Structures',
            'Private Investments in Public Equity',
            'Roles and Three Key Distinctions of Venture Capital and Buyout Managers',
            'Subscription Lines in Private Equity',
            'The LP and GP Relationship Life Cycle',
          ],
        },
        {
          chapter: '4.3 Private Equity Funds of Funds',
          topics: [
            'Private Equity Funds of Funds',
            'Private Equity Funds of Funds Historical Returns',
            'Private Equity Funds of Funds Investment',
            'Private Equity Funds of Funds Investment Process',
          ],
        },
        {
          chapter: '4.4 Evolution of Investing in Private Equity',
          topics: [
            'Challenges in Co-Investing',
            'Co-Investments',
            'Historical Returns of Co-investment',
            'Trend of LP Preference for Direct Investment',
          ],
        },
        {
          chapter: '4.5 Private Credit and Distressed Debt',
          topics: [
            'Credit Risk Analysis and the Bankruptcy Process',
            'Direct Lending',
            'Distressed Debt',
            'Fixed-Income Analysis',
            'Leveraged Loans',
            'Mezzanine Debt',
            'Private Credit Performance and Diversification',
            'Types of Fund Private Credit Vehicles',
            'Venture Debt',
          ],
        },
      ],
    },
    {
      chapter: 'Hedge Funds',
      topics: [
        {
          chapter: '5.1 Structure of the Hedge Fund Industry',
          topics: [
            'Distinguishing Hedge Funds',
            'Evaluating a Hedge Fund Investment Program',
            'Hedge Fund Classification',
            'Hedge Fund Fees',
            'Hedge Fund Indices',
            'Hedge Fund Returns and Asset Allocation',
            'Three Research Studies on Whether Hedge Funds Adversely Affect the Financial Markets',
          ],
        },
        {
          chapter: '5.2 Macro and Managed Futures Funds',
          topics: [
            'Benefits of Managed Futures Funds',
            'Eight Core Benefits of Managed Futures for Investors',
            'Evidence on Managed Futures Returns',
            'Four Core Dimensions of Managed Futures Investment Strategies',
            'Global Macro',
            'Macro and Managed Futures Strategies',
            'Managed Futures',
            'Systematic Futures Portfolio Construction',
            'Systematic Trading',
          ],
        },
        {
          chapter: '5.3 Event Driven and Relative Value Hedge Funds',
          topics: [
            'Activist Investing',
            'Convertible Bond Arbitrage',
            'Distressed Securities Funds',
            'Event-Driven Multistrategy Funds',
            'Fixed-Income Arbitrage',
            'Merger Arbitrage',
            'Overview of Relative Value Strategies',
            'Relative Value Multistrategy Funds',
            'The Sources of Most Event Strategy Returns',
            'Volatility Arbitrage',
          ],
        },
        {
          chapter: '5.4 Equity Hedge Funds',
          topics: [
            'Commonalities of Equity Hedge Funds',
            'Implementing Anomaly Strategies',
            'Market Anomalies',
            'Sources of Return',
            'The Three Equity Strategies',
          ],
        },
        {
          chapter: '5.5 Funds of Hedge Funds',
          topics: [
            'Investing in Funds of Hedge Funds',
            'Investing in Multistrategy Funds',
            'Investing in Portfolios of Single Hedge Funds',
            'Key Observations Regarding Historical Returns of Funds of Funds',
            'Multialternatives and Other Hedge Fund Liquid Alternatives',
            'Overview of Funds of Hedge Funds',
          ],
        },
      ],
    },
    {
      chapter: 'Structured Products',
      topics: [
        {
          chapter: '6.1 Introduction to Structuring',
          topics: [
            'Collateralized Mortgage Obligations',
            'Interest Rate Options',
            'Introduction to Collateralized Debt Obligations',
            'Major Types of Structuring',
            'Overview of Financial Structuring',
            'Structural Model Approach to Credit Risk',
            'The Primary Economic Role of Structuring',
          ],
        },
        {
          chapter: '6.2 Credit Risk and Credit Derivatives',
          topics: [
            'An Overview of Credit Risk',
            'CDS Index Products',
            'Credit Default Swaps',
            'Credit Derivatives Markets',
            'Five Key Risks of Credit Derivatives',
            'Interest Rate Swaps',
            'Other Credit Derivatives',
            'Reduced-Form Modeling of Credit Risk',
          ],
        },
        {
          chapter: '6.3 CDO Structuring of Credit Risk',
          topics: [
            'Balance Sheet CDOs and Arbitrage CDOs',
            'Cash Flow CDOs Versus Market Value CDOs',
            'Cash-Funded CDOs Versus Synthetic CDOs',
            'Credit Enhancements',
            'Mechanics of and Motivations for an Arbitrage CDO',
            'Other Types of CDOs',
            'Overview of CDO Variations',
            'Risks of CDOs',
          ],
        },
        {
          chapter: '6.4 Equity Linked Structured Products',
          topics: [
            'Four Potential Tax Effects of Wrappers',
            'Global Structured Product Cases',
            'Motivations of Structured Products',
            'Popular Structured Product Types',
            'Structured Product Valuation',
            'Structured Products and Six Types of Wrappers',
            'Structured Products with Exotic Option Features',
            'The EUSIPA Classification',
          ],
        },
      ],
    },
  ],
}

//no sub chapter
const CFA_ESG_INVESTING = {
  exam: 'CFA ESG Investing',
  chapters: [
    {
      chapter: '01 - Introduction to ESG Investing',
      topics: [],
    },
    {
      chapter: '02 - The ESG Market',
      topics: [],
    },
    {
      chapter: '03 - Environmental Factors',
      topics: [],
    },
    {
      chapter: '04 - Social Factors',
      topics: [],
    },
    {
      chapter: '05 - Governance Factors',
      topics: [],
    },
    {
      chapter: '06 - Engagement and Stewardship',
      topics: [],
    },
    {
      chapter: '07 - ESG Analysis, Valuation, Integration',
      topics: [],
    },
    {
      chapter: '08 - Integrated Portfolio Construction and Management',
      topics: [],
    },
    {
      chapter:
        '09 - Investment Mandates, Portfolio Analytics, and Client Reporting',
      topics: [],
    },
  ],
}

//no sub chapter
const GARP_SCR = {
  exam: 'GARP SCR',
  chapters: [
    {
      chapter: 'Foundations of Climate Change',
      topics: ['What Is Climate Change'],
    },
    {
      chapter: 'Sustainability',
      topics: [],
    },
    {
      chapter: 'Climate Change Risk',
      topics: [],
    },
    {
      chapter: 'Sustainability and Climate Policy, Culture, and Governance',
      topics: [],
    },
    {
      chapter: 'Green and Sustainable Finance Markets and Instruments',
      topics: [],
    },
    {
      chapter: 'Climate Risk Measurement and Management',
      topics: [],
    },
    {
      chapter: 'Climate Models and Scenario Analysis',
      topics: [],
    },
    {
      chapter: 'Net Zero',
      topics: [],
    },
    {
      chapter: 'Additional Reading',
      topics: [
        'Principles for Responsible Banking',
        'Principles for Responsible Investments',
        'Risk-Management Fundamentals',
        'TCFD Implementing Guidance',
        'Network for Greening the Financial System (NGFS)',
        'The GHG Protocol A corporate reporting and accounting standard',
        'TCFD Implementing Guidance',
      ],
    },
  ],
}

export {
  CFA_LAVEL_ONE,
  CFA_LAVEL_TWO,
  CFA_LAVEL_THREE,
  CAIA_LAVEL_ONE,
  CFA_ESG_INVESTING,
  GARP_SCR,
}
