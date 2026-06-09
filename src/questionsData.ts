import { Question } from './types';

export const INFORMATION_SECURITY_QUESTIONS: Question[] = [
  {
    id: "sec_q1",
    number: 1,
    text: "Which of the following keys is required to handle the data when encryption is applied to the data so that an unauthorized user cannot access the data?",
    options: [
      "Primary key",
      "Encryption key",
      "Authorized key",
      "Decryption key"
    ],
    correctAnswer: "D",
    explanation: "Decryption is the process of transforming encrypted data (ciphertext) back into its original readable format. Hence, a decryption key is required by the authorized recipient to decrypt and handle the data.",
    category: "Cryptography",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q2",
    number: 2,
    text: "Encryption and decryption are functions of which of the following layers of the OSI reference model?",
    options: [
      "Transport layer",
      "Session layer",
      "Presentation layer",
      "None of the Above"
    ],
    correctAnswer: "C",
    explanation: "The Presentation layer (Layer 6) of the OSI model is responsible for data translation, compression, and encryption/decryption services, ensuring data is formatted correctly for the Application layer.",
    category: "Cryptography",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q3",
    number: 3,
    text: "John recently received an electronic mail message from Bill. What information security objective would need to be met to convince John that Bill was actually the sender of the message?",
    options: [
      "Authenticity",
      "Availability",
      "Confidentiality",
      "Integrity"
    ],
    correctAnswer: "A",
    explanation: "Authenticity refers to verifying the identity of a sender or origin of a message. It provides assurance to the recipient (John) that the message indeed came from the claimed sender (Bill).",
    category: "Access Control & Authentication",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q4",
    number: 4,
    text: "What is the Diffie-Hellman algorithm most commonly used for?",
    options: [
      "Signing digital contracts",
      "Key exchange",
      "Secure e-mail",
      "Storing encrypted passwords"
    ],
    correctAnswer: "B",
    explanation: "The Diffie-Hellman algorithm is a key-agreement protocol that allows two parties to securely establish a shared secret key over an insecure communication channel, which can then be used for symmetric encryption.",
    category: "Cryptography",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q5",
    number: 5,
    text: "In an e-commerce transaction, an organization is validating the customer through a digital signature when they receive a communication from the customer. How can this be done?",
    options: [
      "A hash of the message can be transmitted and encrypted with the organization's private key.",
      "A hash of the message can be transmitted and encrypted with the customer's private key.",
      "A hash of the message can be transmitted and encrypted with the customer's public key.",
      "A hash of the message can be transmitted and encrypted with the organization's public key."
    ],
    correctAnswer: "B",
    explanation: "A digital signature is created by generating a hash of the message and then encrypting that hash with the sender's (customer's) private key. The receiver decrypts it with the customer's public key to guarantee authenticity and non-repudiation.",
    category: "Cryptography",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q6",
    number: 6,
    text: "What is the main requirement or objective of cryptography?",
    options: [
      "To avoid unauthorized alteration of information being stored",
      "To avoid unauthorized access of network resources",
      "To avoid unauthorized access of information being transmitted",
      "To avoid unauthorized access of network servers"
    ],
    correctAnswer: "C",
    explanation: "The central requirement of encryption in cryptography is confidentiality—to shield data during transmission from eavesdropping or unauthorized reading by interceptors.",
    category: "Cryptography",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q7",
    number: 7,
    text: "A _________ is a program that takes control of another computer connected to the Internet, then uses that computer to launch attacks.",
    options: [
      "Worm",
      "Virus",
      "Zombie",
      "Trap door"
    ],
    correctAnswer: "C",
    explanation: "A zombie is a compromised computer connected to the Internet that has been silently hijacked by a hacker via malware, allowing it to be used remotely as part of a botnet to launch DDoS attacks or send spam.",
    category: "Network Security",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q8",
    number: 8,
    text: "What is non-repudiation?",
    options: [
      "Something you can't deny.",
      "Something you can hide.",
      "Something you can deny.",
      "Something that went a bye."
    ],
    correctAnswer: "A",
    explanation: "Non-repudiation is the assurance that a party to a communication or transaction cannot deny having sent a message or committed an action, typically validated via digital signatures.",
    category: "Access Control & Authentication",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q9",
    number: 9,
    text: "Which of the following algorithms generates a 160-bit hash value?",
    options: [
      "MD5",
      "RC4",
      "AES",
      "SHA-1"
    ],
    correctAnswer: "D",
    explanation: "SHA-1 produces a 160-bit hash value (message digest). MD5 produces 128 bits. AES is a block cipher (not a hashing algorithm), and RC4 is a stream cipher.",
    category: "Cryptography",
    source: "Haramaya University Mock Exam"
  },
  {
    id: "sec_q10",
    number: 10,
    text: "Which of the following functions typically needs to be implemented inside the Trusted Computing Base (TCB) for building a secure operating system?",
    options: [
      "Process context switch and reading a file from the disk",
      "Listening to music",
      "Get the GPS coordinates of a smartphone",
      "Running complex visual analytics applications"
    ],
    correctAnswer: "A",
    explanation: "The Trusted Computing Base (TCB) includes core system mechanisms (hardware, firmware, software) essential for enforcing security policies. Low-level activities like process scheduling (context switching) and direct hardware reading must reside inside the TCB.",
    category: "System & OS Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q11",
    number: 11,
    text: "As a software developer, how would you incorporate secure coding practices into your software development process?",
    options: [
      "Use encryption for sensitive data",
      "Regularly update software libraries",
      "Perform code reviews for security vulnerabilities",
      "All of the above"
    ],
    correctAnswer: "D",
    explanation: "Robust software security relies on defense-in-depth, incorporating safe encryption protocols, active vulnerability patching, and peer security code reviews throughout the SDLC.",
    category: "Application Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q12",
    number: 12,
    text: "Compare and contrast software security with broader cybersecurity. What are the key differences between the two?",
    options: [
      "Cybersecurity encompasses protection for networks, systems, and programs, while software security focuses on securing individual programs.",
      "Neither A nor B.",
      "Software security handles outer firewalls, while cybersecurity regulates programming standards.",
      "They are identical terms and there are no domain separations."
    ],
    correctAnswer: "A",
    explanation: "Cybersecurity is an umbrella domain securing networks, users, and computing infrastructure. Software security specifically treats application-level risks, logic errors, and secure coding practices.",
    category: "Application Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q13",
    number: 13,
    text: "Define software security in a modular, secure design framework.",
    options: [
      "Securing information and system resources through software integrity",
      "Protecting software from viruses exclusively",
      "Ensuring software runs smoothly with zero downtime",
      "Enhancing the visual layout and response triggers for users"
    ],
    correctAnswer: "A",
    explanation: "Software Security is the proactive protection of software assets, database records, and system resources through resilience to unauthorized code modification and exploit attempts.",
    category: "Application Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q14",
    number: 14,
    text: "In GSM security, what role does the Equipment Identity Register (EIR) play?",
    options: [
      "Managing network bandwidth resources",
      "Identifying stolen or unauthorized mobile devices",
      "Authenticating mobile subscriber identity card numbers",
      "Storing active subscription profiles"
    ],
    correctAnswer: "B",
    explanation: "The EIR is a central GSM database that tracks mobile hardware identity numbers (IMEA/IMEI) in 'white', 'gray', or 'black' lists to block stolen, unauthorized, or faulty devices from network access.",
    category: "Network Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q15",
    number: 15,
    text: "Suppose a company experiences a data breach. What are the potential consequences for the organization to analyze?",
    options: [
      "Financial losses stemming from legal fees and civil compensations",
      "Severe reputation damage leading to massive customer attrition",
      "Substantial regulatory fines for non-compliance with data privacy mandates",
      "All of the above"
    ],
    correctAnswer: "D",
    explanation: "Security failures carry cascading penalties including immediate cleanup costs, brand destruction, litigations, and major regulatory fines (like GDPR or HIPAA penalties).",
    category: "System & OS Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q16",
    number: 16,
    text: "What is the fundamental purpose of information security?",
    options: [
      "To improve overall network throughput speed",
      "To design highly reactive user interfaces",
      "To prevent unauthorized access to data",
      "To monitor program development schedules"
    ],
    correctAnswer: "C",
    explanation: "The central objective of Information Security is guaranteeing the confidentiality, integrity, and availability (CIA triad) of information by defending it from unauthorized access, modification, or destruction.",
    category: "Access Control & Authentication",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q17",
    number: 17,
    text: "Which GSM security feature is responsible for ensuring the confidentiality of user data during transmission?",
    options: [
      "Ciphering",
      "Authentication",
      "Key management",
      "Registration"
    ],
    correctAnswer: "A",
    explanation: "Ciphering represents symmetric encryption applied over-the-air between the mobile station (MS) and base transceiver station (BTS), preventing active wireless eavesdropping of voice and transaction packets.",
    category: "Network Security",
    source: "AASTU Software Mock Exam II"
  },
  {
    id: "sec_q18",
    number: 18,
    text: "The process of recovering the original message without detailed knowledge of the secret information (decryption key) is called:",
    options: [
      "Decryption",
      "Deciphering",
      "Cryptanalysis",
      "Hash verification"
    ],
    correctAnswer: "C",
    explanation: "Cryptanalysis is the scientific study of reversing, deciphering, or cracking cipher systems, ciphertext, or keys without prior authorization or key possession.",
    category: "Cryptography",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q19",
    number: 19,
    text: "Which of the following statements is true about crackers?",
    options: [
      "They attempt to break the system without permissions",
      "They are legally employed to break into systems for safety",
      "They always disclose security patches to developers prior to exploitation",
      "They are exclusively database management staff"
    ],
    correctAnswer: "A",
    explanation: "Crackers (or black-hat hackers) bypass security controls and enter systems unauthorized with malicious, fraudulent, or destructive intent.",
    category: "Network Security",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q20",
    number: 20,
    text: "Which type of firewall can filter incoming and outgoing packets based on port numbers, protocols, and the active session state of the traffic?",
    options: [
      "Packet Filtering",
      "Proxy Service",
      "Stateful Inspection",
      "Threat-Focused Next-Generation Firewall (NGFW)"
    ],
    correctAnswer: "C",
    explanation: "Stateful Inspection firewalls keep track of open TCP/UDP sessions, ensuring packets are evaluated not just in isolation, but strictly in the context of active connection states.",
    category: "Network Security",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q21",
    number: 21,
    text: "What will be the encrypted message if the message 'ATTACK' is encrypted by Caesar's cipher with key = 25?",
    options: [
      "ZSSZBJ",
      "ZGGZXP",
      "ZTTZAK",
      "BGGBDL"
    ],
    correctAnswer: "A",
    explanation: "In Caesar's cipher, a key of 25 shifting forward is identical to shifting backward by 1 character (since alphabet has 26 letters). Consequently: A->Z, T->S, T->S, A->Z, C->B, K->J. Reconstructed: ZSSZBJ.",
    category: "Cryptography",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q22",
    number: 22,
    text: "All are properties of a substitution cipher EXCEPT:",
    options: [
      "The identity of letters is changed in the encryption process",
      "The position of letters is changed in the encryption process",
      "It uses the same key for the encryption and decryption processes",
      "It has a secure key distribution problem"
    ],
    correctAnswer: "B",
    explanation: "Changing the position of letters is a transposition cipher property. Substitution ciphers replace elements of plaintext with other symbols, changing their identity.",
    category: "Cryptography",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q23",
    number: 23,
    text: "All are properties of the integrity goal of a computer system EXCEPT:",
    options: [
      "Ensures there was an authorized modification",
      "Keep resources safe from active attacks",
      "Integrity can be compromised by Deception",
      "Integrity can be compromised by Disclosure"
    ],
    correctAnswer: "D",
    explanation: "Information disclosure violates Confidentiality. Integrity concerns correctness and alteration protections, which are degraded by deception or unauthorized data modifications.",
    category: "Access Control & Authentication",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q24",
    number: 24,
    text: "Which of the following statements about encryption is TRUE?",
    options: [
      "One-time pad cipher is highly secure than Vigenere cipher",
      "Symmetric key cryptography has a slower encryption process than asymmetric key encryption technique",
      "Hill-cipher can be easily broken by a basic brute force key search",
      "Asymmetric ciphers rely on sharing a single pre-shared secret key"
    ],
    correctAnswer: "A",
    explanation: "A One-Time Pad cipher is mathematically unbreakable when used with a truly random, non-repeating key that is as long as the plaintext itself (information-theoretic security).",
    category: "Cryptography",
    source: "General Security Prep Sheet"
  },
  {
    id: "sec_q25",
    number: 25,
    text: "Suppose you have received a message from your friend but the message is scrambled for the sake of security. Your friend has used a program to encode messages into scrambled text. In order to read the message, which software or program would you use?",
    options: [
      "Secret key",
      "Decryption program",
      "Encryption program",
      "Ciphertext builder"
    ],
    correctAnswer: "B",
    explanation: "To convert ciphertext (scrambled text) back to plaintext, a decryption program is loaded and executed using the appropriate decryption key.",
    category: "Cryptography",
    source: "MOEE Computer Science Exam"
  },
  {
    id: "sec_q26",
    number: 26,
    text: "Which of the following is a measure taken to ensure information and information systems' availability, integrity, authentication, and confidentiality?",
    options: [
      "Wiretapping",
      "Interception",
      "Information security",
      "Information assurance"
    ],
    correctAnswer: "C",
    explanation: "Information Security is the set of practices and countermeasures engineered to protect the secrecy, accessibility, correct modification, and verification of systems.",
    category: "System & OS Security",
    source: "MOEE Computer Science Exam"
  },
  {
    id: "sec_q27",
    number: 27,
    text: "Which of the following is a security service enforced to protect against presentation or disclosure of information, whether stored in a file or being on transmission, to unauthorized entities?",
    options: [
      "Authentication",
      "Integrity",
      "Availability",
      "Confidentiality"
    ],
    correctAnswer: "D",
    explanation: "Confidentiality is the fundamental security service designed to ensure that data remains inaccessible to all unprivileged individuals.",
    category: "System & OS Security",
    source: "MOEE Computer Science Exam"
  },
  {
    id: "sec_q28",
    number: 28,
    text: "Which of the following computers is most secure compared to the rest?",
    options: [
      "A computer connected to the Internet with the latest anti-virus installed on it",
      "A computer connected to the Internet with the latest firewall system",
      "A computer connected to the Internet having strong intrusion detection",
      "A computer that is completely disconnected from the Internet"
    ],
    correctAnswer: "D",
    explanation: "An air-gapped system (one with zero network interfaces) cannot be targeted by net-based remote attacks, representing maximum absolute security from outer network compromise.",
    category: "Network Security",
    source: "MOEE Computer Science Exam"
  },
  {
    id: "sec_q29",
    number: 29,
    text: "Which of the following represents a method of obtaining the meaning of encrypted information without authorized access to the secret key?",
    options: [
      "Encryption",
      "Decryption",
      "Crypto-analysis",
      "Cryptography"
    ],
    correctAnswer: "C",
    explanation: "Crypto-analysis (or cryptanalysis) is the study of breaking codes, decrypting messages, or finding keys without having authorization or the pre-shared key.",
    category: "Cryptography",
    source: "MOEE Computer Science Exam"
  },
  {
    id: "sec_q30",
    number: 30,
    text: "Which of the following elements is responsible for separating some machines from the rest of the network to shield them from possible attacks?",
    options: [
      "Firewall",
      "Router",
      "Network operating system",
      "Switch"
    ],
    correctAnswer: "A",
    explanation: "Firewalls enforce access control boundaries, isolating networks or hosts from unsecure environments to prevent malicious payloads or unauthorized requests.",
    category: "Network Security",
    source: "MOEE Computer Science Exam"
  },
  {
    id: "sec_q31",
    number: 31,
    text: "Database threats that are related to unauthorized disclosure of sensitive records are called:",
    options: [
      "Loss of integrity",
      "Loss of availability",
      "Loss of confidentiality",
      "None of the mentioned"
    ],
    correctAnswer: "C",
    explanation: "Confidentiality refers to keeping sensitive records secret. A threat that exposes secret data database parameters to unprivileged accounts results in a loss of confidentiality.",
    category: "System & OS Security",
    source: "Bahirdar University Model Mock"
  },
  {
    id: "sec_q32",
    number: 32,
    text: "Cryptography intercepts which type of data accessibility?",
    options: [
      "Authorized accessibility",
      "Unauthorized accessibility",
      "Legitimate accessibility",
      "All of the above"
    ],
    correctAnswer: "B",
    explanation: "The primary design criterion for cryptographic systems is preventing unauthorized accessibility of data, transforming plaintext to ciphertext.",
    category: "Cryptography",
    source: "Bahirdar University Model Mock"
  },
  {
    id: "sec_q33",
    number: 33,
    text: "Which of the following algorithms has overcome Triple DES (3DES) as the primary global symmetric key standard?",
    options: [
      "AES",
      "BLOW FISH",
      "DSA",
      "All of the above"
    ],
    correctAnswer: "A",
    explanation: "AES (Advanced Encryption Standard) was selected by NIST to replace Triple DES because it offers superior encryption speed, stronger key sizes, and high algorithmic efficiency.",
    category: "Cryptography",
    source: "Bahirdar University Model Mock"
  },
  {
    id: "sec_q34",
    number: 34,
    text: "Which of the following data security principles does a checksum or cryptographic hash verify?",
    options: [
      "INTEGRITY",
      "AUTHENTICITY",
      "CONFIDENTIALITY",
      "REPUDENTIALITY"
    ],
    correctAnswer: "A",
    explanation: "Checksums and hash values (like MD5 or SHA-256) verify Integrity. If even one bit of the data is altered during transmission, the resulting checksum collapses, alerting the receiver.",
    category: "Access Control & Authentication",
    source: "Bahirdar University Model Mock"
  },
  {
    id: "sec_q35",
    number: 35,
    text: "Which protocol uses port 443 and operates at Layer 7 (the Application layer)?",
    options: [
      "HTTPS",
      "SNMP",
      "FTP",
      "SSH"
    ],
    correctAnswer: "A",
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) operates over TCP port 443 at Layer 7 of the OSI model, utilizing TLS/SSL for secure web transport.",
    category: "Network Security",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q36",
    number: 36,
    text: "Sara is a database manager. She is allowed to add new users to the database, remove current users, and create usage permissions. However, she is not allowed to read the data inside the fields of the database tables themselves. This is an example of:",
    options: [
      "Role Based Access Control",
      "Discretionary Access Control",
      "Mandatory Access Control",
      "Behavior Based Access Control"
    ],
    correctAnswer: "A",
    explanation: "Role-Based Access Control (RBAC) grants system permissions based strictly on a user's defined job role (e.g., DBA manager) rather than individual identity, separating structural administrative rights from standard data ingestion.",
    category: "Access Control & Authentication",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q37",
    number: 37,
    text: "Chala is a security practitioner tasked with ensuring that the information on the organization's public website is not changed by anyone outside the organization. This task is an example of ensuring ________.",
    options: [
      "Confidentiality",
      "Availability",
      "Authentication",
      "Integrity"
    ],
    correctAnswer: "D",
    explanation: "Integrity is the protection against unauthorized modifications, deletion, or defacement of information, ensuring its accuracy and completeness.",
    category: "Access Control & Authentication",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q38",
    number: 38,
    text: "Which of the following is an example of a \"Something you know\" authentication factor?",
    options: [
      "Finger Printing",
      "Password",
      "GPS Position",
      "ATM Card"
    ],
    correctAnswer: "B",
    explanation: "A password is a knowledge factor (something you know). Fingerprinting is inherence (something you are), and an ATM card is possession (something you have).",
    category: "Access Control & Authentication",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q39",
    number: 39,
    text: "Bereket needs to send an email to his supervisor with an attachment that includes sensitive business records. He wants to maintain the absolute confidentiality of this information. Which of the following is the BEST choice to meet his needs?",
    options: [
      "Hashing",
      "Data masking",
      "Encryption",
      "Digital signature"
    ],
    correctAnswer: "C",
    explanation: "Encryption transforms readable plaintext into scrambled ciphertext, guaranteeing the absolute confidentiality of the file in case of delivery leakage or transit interception.",
    category: "Cryptography",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q40",
    number: 40,
    text: "Your organization hired a cybersecurity expert to perform a vulnerability scan. After running a scan on a web server, she sees a warning that Apache httpd is vulnerable to a mod_auth exploit. However, she verifies that the mod_auth module has never been installed or enabled on the server. Which of the following BEST explains this scenario?",
    options: [
      "A false negative",
      "The result of an authenticated credentialed scan",
      "The result of an unauthenticated external scan",
      "A false positive"
    ],
    correctAnswer: "D",
    explanation: "A false positive occurs when an automated security tool incorrectly flags a vulnerability that is not actually present or active on the scanned target.",
    category: "Application Security",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q41",
    number: 41,
    text: "You are comparing different types of authentication systems. Which of the following choices represents multi-factor authentication (MFA)?",
    options: [
      "A system that checks an employee's fingerprint and performs a vein scan",
      "A system that requires users to have a physical smart card and enter a matching PIN",
      "A cipher door lock that requires employees to enter a numeric password to open the door",
      "A standard system requiring a username and a complex password"
    ],
    correctAnswer: "B",
    explanation: "MFA requires factors from two or more distinct categories. Possessing a physical smart card (something you have) combined with entering a PIN (something you know) satisfies this condition.",
    category: "Access Control & Authentication",
    source: "Jimma University Exit Mock Exam"
  },
  {
    id: "sec_q42",
    number: 42,
    text: "A company experiences a data breach where customer information is leaked. What is the immediate first priority for the Software security infrastructure team?",
    options: [
      "Force a complete update of all employee passwords",
      "Notify all customers about the breach immediately",
      "Deploy newly updated data encryption protocols across storage systems",
      "Identify the source of the breach and isolate the threat to contain it"
    ],
    correctAnswer: "D",
    explanation: "In security incident response, containment (isolating infected machines or patching the open leak) is the first action to stop active damage before secondary steps like user notification are launched.",
    category: "System & OS Security",
    source: "Online Exam Portal Output"
  },
  {
    id: "sec_q43",
    number: 43,
    text: "Security estimation and vulnerability assessment is an essential component of which software engineering process?",
    options: [
      "Software visual design",
      "Software active compilation",
      "Software SRS document assembly",
      "Security Risk management"
    ],
    correctAnswer: "D",
    explanation: "Protecting systems requires evaluating threats and modeling vulnerabilities, both of which are core elements of professional security Risk Management.",
    category: "System & OS Security",
    source: "Online Exam Portal Output"
  },
  {
    id: "sec_q44",
    number: 44,
    text: "An employee at a financial institution receives an email appearing to come from the IT department, asking them to reset their password via a link. The webpage mimics the official company login. What should the employee do first?",
    options: [
      "Click the link and change the password immediately",
      "Report the suspicious phishing email to the IT security department",
      "Enter fake credentials to test whether the form is real",
      "Forward the email to coworkers to raise awareness"
    ],
    correctAnswer: "B",
    explanation: "Reporting suspicion of phishing to security professionals allows immediate investigation and containment, blocking malicious elements on filters protecting the rest of the company.",
    category: "Network Security",
    source: "Online Exam Portal Output"
  },
  {
    id: "sec_q45",
    number: 45,
    text: "Which of the following descriptions best defines a botnet?",
    options: [
      "A configuration management tool for scanning software bugs",
      "A secure storage framework for backing up databases",
      "A specialized network antivirus package",
      "A group of compromised computers infected with malware and controlled remotely by an attacker"
    ],
    correctAnswer: "D",
    explanation: "A Botnet matches 'robot network'—compromised systems (bots/zombies) under the control of an attacker (botmaster) to perform DDoS, crack passwords, or propagate spam.",
    category: "Network Security",
    source: "Online Exam Portal Output"
  },
  {
    id: "sec_q46",
    number: 46,
    text: "A database system enforces access permissions based on security clearances (e.g. Secret, Top Secret) matched against formal data labels/classifications. This database security mechanism is called:",
    options: [
      "Cryptography Control",
      "Role-Based Access Control (RBAC)",
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)"
    ],
    correctAnswer: "C",
    explanation: "Mandatory Access Control (MAC) restricts access strictly based on labels assigned to objects and clearances assigned to subjects. In MAC, individual data owners cannot alter these access permissions, unlike DAC.",
    category: "Access Control & Authentication",
    source: "Online Exam Portal Output"
  },
  {
    id: "sec_q47",
    number: 47,
    text: "During a security audit, a vulnerability scanner discovers that input fields on a web application search bar are highly vulnerable to SQL Injection attacks. What is the most robust way to mitigate this security risk?",
    options: [
      "Restrict database access exclusively to administrative accounts",
      "Implement server-side input validation and parameterization (prepared statements) for SQL queries",
      "Ensure a robust perimeter network firewall is active",
      "Utilize security hashing across all user logs"
    ],
    correctAnswer: "B",
    explanation: "Query parameterization (prepared statements) forces the database driver to treat user inputs strictly as parameters, never as executable code. This completely stops SQL injection attacks, regardless of the input characters.",
    category: "Application Security",
    source: "Online Exam Portal Output"
  },
  {
    id: "sec_q48",
    number: 48,
    text: "What is the main security risk of using innerHTML with user-generated content in web sites?",
    options: [
      "Poor browser performance",
      "Cross-site scripting (XSS)",
      "Unexpected server-side memory leaks",
      "Browser engine incompatibility"
    ],
    correctAnswer: "B",
    explanation: "Using innerHTML directly renders raw HTML elements. If user-generated content contains malicious <script> vectors, they will execute in the browser session of other visitors, leading to Cross-Site Scripting (XSS).",
    category: "Application Security",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q49",
    number: 49,
    text: "What is a zero-day vulnerability in cybersecurity?",
    options: [
      "A publicly disclosed bug that has already been fully patched by the vendor",
      "A security bug that is only exploitable by inside system admins",
      "An older version bug that still exists in outdated legacy machines",
      "An active vulnerability exploited in the wild before a security patch is available"
    ],
    correctAnswer: "D",
    explanation: "A zero-day threat refers to a security vulnerability that is actively exploited by hackers before developers have had zero days of notice to write, test, and release a corresponding software patch.",
    category: "System & OS Security",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q50",
    number: 50,
    text: "Which of the following is a primary defense mechanism against buffer overflow attacks?",
    options: [
      "Stack canaries",
      "Web Application Firewalls",
      "Virtual sandboxes",
      "Traditional host antiviruses"
    ],
    correctAnswer: "A",
    explanation: "Stack canaries are integrity security integers placed in memory before the return pointer. If a buffer overflow occurs, this canary value is corrupted, and the OS aborts execution before hijack instructions can run.",
    category: "System & OS Security",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q51",
    number: 51,
    text: "What is the primary purpose of input validation in secure coding?",
    options: [
      "To compress network payloads for faster transport",
      "To assign database triggers to clean table spaces",
      "To check user input for malicious data that could exploit potential vulnerabilities",
      "To ensure full multi-platform operating system compatibility"
    ],
    correctAnswer: "C",
    explanation: "Input validation ensures that an application only accepts input conformant to strict patterns (data type, range, length), preventing bad actors from injecting scripts, commands, or database payloads.",
    category: "Application Security",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q52",
    number: 52,
    text: "Which class of vulnerability allows a remote attacker to execute arbitrary code directly on a target machine?",
    options: [
      "Cross-Site Request Forgery (CSRF)",
      "Cross-Site Scripting (XSS)",
      "Code injection",
      "Man-in-the-middle interception"
    ],
    correctAnswer: "C",
    explanation: "Code injection occurs when an application processes untrusted commands directly, enabling an attacker to specify custom input that overrides the application logic and forces execution of malicious instructions.",
    category: "Application Security",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q53",
    number: 53,
    text: "Which of the following is NOT considered a common user/system authentication method?",
    options: [
      "Multi-Factor Authentication (MFA)",
      "Biometric security scanning",
      "Time-Based One-Time Password (TOTP)",
      "Data obfuscation"
    ],
    correctAnswer: "D",
    explanation: "Data obfuscation makes code or data complex to inspect for intellectual property confidentiality. It is used for protection against reverse engineering, not for authenticating user identity claims.",
    category: "Access Control & Authentication",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q54",
    number: 54,
    text: "What is the default TCP ingress port utilized for secure HTTPS traffic?",
    options: [
      "Port 80",
      "Port 21",
      "Port 22",
      "Port 443"
    ],
    correctAnswer: "D",
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) operates over secure TCP port 443 by default, utilizing TLS/SSL for encrypted web communications.",
    category: "Network Security",
    source: "Model Exit Exam II"
  },
  {
    id: "sec_q55",
    number: 55,
    text: "Which fundamental cyber security principle states that security mechanisms must be as small and simple as possible?",
    options: [
      "Fail-safe Defaults",
      "Least Privilege",
      "Economy of the Mechanism",
      "Open-Design Architecture"
    ],
    correctAnswer: "C",
    explanation: "Economy of Mechanism advises that security systems should be minimal, simple, and readable. Keeping designs compact limits the volume of potential bugs and code paths, making security validation vastly easier.",
    category: "System & OS Security",
    source: "AAiT Course Exit assessment"
  },
  {
    id: "sec_q56",
    number: 56,
    text: "Which security design principle is considered the direct opposite of 'Security through Obscurity'?",
    options: [
      "Least common mechanism",
      "Work factor",
      "Least privileges",
      "Open design"
    ],
    correctAnswer: "D",
    explanation: "Open Design (Kerckhoffs's principle) states that security must purely rely on secret key privacy, never on the obscurity or secrecy of the cryptographic algorithm or system layout.",
    category: "System & OS Security",
    source: "AAiT Course Exit assessment"
  },
  {
    id: "sec_q57",
    number: 57,
    text: "Which of the following is a network security protocol specifically designed to establish secure Virtual Private Network (VPN) tunnels?",
    options: [
      "SSL / Secure Sockets Layer",
      "SFTP",
      "IPsec",
      "FTP"
    ],
    correctAnswer: "C",
    explanation: "IPsec (Internet Protocol Security) is a robust framework of open standards that encrypts and authenticates packet headers to establish private, secure virtual tunnels across open public networks.",
    category: "Network Security",
    source: "AAiT Course Exit assessment"
  },
  {
    id: "sec_q58",
    number: 58,
    text: "During an audit, it is discovered that an organization's domain controllers were compromised through a clever phishing campaign. According to software engineering incident guides, what must be done next?",
    options: [
      "Conduct a full forensic investigation and assess organizational damage",
      "Erase all email server databases instantly",
      "Filter the records and hope the threat resolves automatically",
      "Force-reinstall Microsoft Windows across standard client desktops"
    ],
    correctAnswer: "A",
    explanation: "Incident response guidelines establish that immediately following active containment, security practitioners must conduct thorough forensic investigations to determine attack paths and evaluate organizational impact.",
    category: "Network Security",
    source: "Software Model Exit Exam"
  },
  {
    id: "sec_q59",
    number: 59,
    text: "In IPSec, which mode protects the entire IP packet (payload and header) by encapsulating it and placing the authentication header after a new outer IP header?",
    options: [
      "Transport Mode",
      "Secure Mode",
      "Tunnel Mode",
      "Bridge Mode"
    ],
    correctAnswer: "C",
    explanation: "Tunnel Mode encapsulates the entire original carriage packet inside a new virtual packet, shielding both the internal payload and original IP directories inside secure IPSec parameters.",
    category: "Network Security",
    source: "Software Model Exit Exam"
  },
  {
    id: "sec_q60",
    number: 60,
    text: "What is the primary objective of performing a comprehensive Threat Modeling session during software design?",
    options: [
      "To map the code to public cloud APIs",
      "To identify potential threats and security vulnerabilities in software beforehand",
      "To confirm execution times match CPU specifications",
      "To document class associations for public developer sites"
    ],
    correctAnswer: "B",
    explanation: "Threat modeling identifies architectural entry points, models threat behaviors, and implements corresponding mitigation boundaries proactively prior to operational systems deployment.",
    category: "Application Security",
    source: "Software Engineering Exit Exam"
  },
  {
    id: "sec_q61",
    number: 61,
    text: "Which of the following is the most robust definition of the primary goal of secure software operations?",
    options: [
      "To compile code into compact, executable binaries",
      "To make user interfaces responsive across multiple devices",
      "To prevent unauthorized access to systems and protect against hostile attacks",
      "To lower deployment and hardware hosting expenses"
    ],
    correctAnswer: "C",
    explanation: "Software Security exists to ensure system availability, protect client data confidentiality, and safeguard integrity against persistent external vectors.",
    category: "Application Security",
    source: "Software Engineering Exit Exam"
  },
  {
    id: "sec_q62",
    number: 62,
    text: "Which of the following describes an independent malicious program that propagates itself automatically across networks without requiring any host files or user stimulation?",
    options: [
      "Trojan Horse",
      "Computer Worm",
      "Logic Bomb",
      "File-Infector Virus"
    ],
    correctAnswer: "B",
    explanation: "A computer worm is a self-contained, independent malicious software program that can automatically replicate and distribute itself across computer networks without attaching to a host file.",
    category: "Network Security",
    source: "Software Engineering Exit Exam"
  },
  {
    id: "sec_q63",
    number: 63,
    text: "Which of the following is NOT a typical technique used for software requirements validation with business stakeholders?",
    options: [
      "Requirements walkthrough reviews",
      "Prototyping mock screen views",
      "Conducting customer focus groups",
      "Writing and executing local unit tests"
    ],
    correctAnswer: "D",
    explanation: "Unit testing verifies that individual components function correctly at compile/implementation time. It is an verification process, not a stakeholder validation method.",
    category: "Application Security",
    source: "Software Engineering Exit Exam"
  },
  {
    id: "sec_q64",
    number: 64,
    text: "In database design, the Boyce-Codd Normal Form (BCNF) requires that for every non-trivial functional dependency X -> Y:",
    options: [
      "No composite key structures exist",
      "Every determinant X must be a candidate key",
      "All non-prime attributes must be mutually independent",
      "The relational tables are restricted to 1NF parameters"
    ],
    correctAnswer: "B",
    explanation: "BCNF is a strict form of 3NF. Under BCNF constraints, every determinant X in functional dependencies X -> Y must be a candidate superkey, eliminating remaining anomalies.",
    category: "System & OS Security",
    source: "AASTU Normalization Assess"
  }
];
