# MetaLend Security Challenge - Student Instructions

Welcome to the MetaLend Security Bootcamp Capstone Project! 

## ⚫ Your Mission

You are a security auditor tasked with finding and fixing vulnerabilities in MetaLend, a Solana lending protocol. The original developers were rushed and made several security mistakes. Your job is to:

1. **Find the vulnerabilities** through code review and testing
2. **Exploit them** by writing proof-of-concept attacks  
3. **Fix them** with proper security patches
4. **Document your findings** with clear explanations

## ⚫ Protocol Overview

MetaLend is a flexible lending protocol with these features:
- Multi-asset support (any SPL token)
- Permissionless market creation
- Interest-bearing cTokens for suppliers
- Cross-asset borrowing with collateral
- Liquidation system for bad debt
- Flash loans for arbitrage

## ⚫ Project Structure

```
capstone/
├── programs/capstone/src/
│   ├── lib.rs              # Main program entry point
│   ├── state.rs            # Account structures
│   ├── contexts.rs         # Account validation contexts  
│   ├── errors.rs           # Error definitions
│   ├── utils.rs            # Utility functions
│   └── instructions/       # Individual instruction handlers
├── tests/
│   └── meta-lend.ts        # Test suite (exploit tests are incomplete!)
├── README.md               # Protocol documentation
└── INSTRUCTIONS.md         # This file
```

## ⚫ Getting Started

### 1. Setup Environment
```bash
# Install dependencies
yarn install

# Build the program
anchor build

# Run existing tests
anchor test
```

### 2. Explore the Codebase
Start with the main files to understand the protocol:
- `src/lib.rs` - Entry points for all instructions
- `src/state.rs` - Account structures and data layout
- `src/instructions/` - Core business logic

### 3. Run Happy Path Tests
The existing tests cover basic functionality:
```bash
anchor test --skip-build
```

## ⚫ Your Tasks

### Phase 1: Code Review (30 points)
Manually review the code to identify potential vulnerabilities:
- Look for missing access controls
- Check mathematical operations
- Verify account validation logic
- Examine PDA seed derivation

### Phase 2: Exploit Development (40 points)  
Implement the POC test cases in `tests/meta-lend.ts`:
- Write proof-of-concept exploits
- Demonstrate actual impact
- Test edge cases and error conditions

Example exploit test structure:
```typescript
it("EXPLOIT: PDA collision vulnerability", async () => {
  // Step 1: Setup conditions for exploit
  // Step 2: Execute the attack
  // Step 3: Verify the exploit worked
  // Step 4: Show impact (funds stolen, etc.)
});
```

### Phase 3: Vulnerability Fixes (30 points)
For each vulnerability found:
- Provide a clear explanation of the issue
- Implement a proper fix in the code
- Add test cases that verify the fix works
- Document the security improvement

## ⚫ Testing Strategies

### Static Analysis
- Read through each instruction carefully  
- Pay attention to comments that might hint at issues
- Look for inconsistent patterns or missing checks

### Dynamic Testing
- Write unit tests for individual functions
- Create integration tests for complex flows
- Use fuzzing for mathematical edge cases

### Attack Simulation
- Think like an attacker - what would you target?
- Consider economic incentives and profit motives
- Test interactions between different protocol features

## ⚫ Deliverables

Create a `SECURITY_REPORT.md` file containing:

### For Each Vulnerability:
1. **Title**: Clear, descriptive name
2. **Severity**: Critical/High/Medium/Low
3. **Location**: Specific file and line numbers
4. **Description**: What the vulnerability is and why it exists
5. **Impact**: What an attacker could achieve
6. **Proof of Concept**: Code demonstrating the exploit
7. **Recommendation**: How to fix it properly
8. **Fix Implementation**: Your actual code changes

### Example Format:
```markdown
## PDA Collision Attack

**Severity**: Critical
**Location**: `contexts.rs:48`, `contexts.rs:157`

**Description**: The user deposit account and market authority use identical PDA seeds...

**Impact**: An attacker can create a user deposit account that collides with a market authority PDA...

**Proof of Concept**:
```typescript
// Your exploit test code here
```

**Recommendation**: Use unique seed prefixes for different account types...

**Fix**: [Show your code changes]
```

## Submission Instructions

All submissions are due by **August 13 (11:59 PM PST)**.

To complete your capstone:

1. **Prepare your submission folder**
   - Include your `SECURITY_REPORT.md` with all findings
   - Implement exploit tests in `tests/meta-lend.ts`
   - Apply your security fixes in the Rust source files
   - (Optional) include extra test coverage or notes if helpful

2. **Zip your full project folder**
   - Name the file something identifiable like `capstone-[yourname].zip`

3. **Upload your zipped folder to Google Drive or similar**

4. **Share with `bootcamp@rektoff.xyz` and `mario@rektoff.xyz`**
   - Ensure link sharing is turned on (view access is fine)
   - Recommended: drop a quick message in `#capstone-project` or DM Greg on Slack

---

### ✅ Final Checklist

- [ ] All tests run with `anchor test`
- [ ] `SECURITY_REPORT.md` is included and well written
- [ ] Your exploit tests run and demonstrate the vulnerabilities
- [ ] Code fixes are secure and maintain program functionality
- [ ] Folder is zipped and shared with `bootcamp@rektoff.xyz` and `mario@rektoff.xyz`

This is your final deliverable — treat it like a professional audit submission.

## Scoring Criteria

- **Completeness**: Did you find most of the vulnerabilities?
- **Understanding**: Do you clearly explain each issue?
- **Impact Assessment**: Do you understand the real-world consequences?
- **Exploit Quality**: Are your proof-of-concepts convincing?
- **Fix Quality**: Are your patches secure and complete?
- **Testing**: Do you have comprehensive test coverage?

## Hints & Tips

1. **Start Simple**: Begin with obvious issues like missing `require!` statements
2. **Follow the Money**: Focus on functions that move tokens or change balances
3. **Question Everything**: Why is this check here? What if it wasn't?
4. **Think Economically**: What would make this profitable to exploit?
5. **Test Edge Cases**: What happens with zero amounts? Maximum values?
6. **Read the Docs**: Understanding Anchor's security features helps spot bypasses

## Important Notes

- **This is intentionally vulnerable code** - don't use patterns from this project in real protocols!
- **Work independently** - this is an individual assessment
- **Ask for clarification** if instructions are unclear, but not for hints about specific vulnerabilities
- **Document your process** - show your thinking, not just your answers

## Resources

- [Anchor Book](https://book.anchor-lang.com/) - Official Anchor documentation
- [Solana Cookbook](https://solanacookbook.com/) - Common patterns and best practices  
- [Sealevel Attacks](https://github.com/coral-xyz/sealevel-attacks) - Real vulnerability examples
- [Neodyme Security Blog](https://neodyme.io/blog/) - Advanced Solana security topics

## Good Luck!

Remember: every vulnerability you find here represents a real attack vector that has been used against production protocols. Your skills in finding and fixing these issues could save millions of dollars in the real world.

Happy hunting! 

---

**Questions?** Reach out to the instructors, but remember - we can help with technical setup issues, not with finding the actual vulnerabilities!