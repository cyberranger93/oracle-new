#!/usr/bin/env python3
"""
Backend API Testing for Oracle Project Group
Tests all backend endpoints for functionality and data validation
"""

import requests
import json
import sys
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL', 'https://build-marble.preview.emergentagent.com')
API_BASE = f"{BACKEND_URL}/api"

class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

def print_test_header(test_name):
    print(f"\n{Colors.BLUE}{Colors.BOLD}=== {test_name} ==={Colors.ENDC}")

def print_success(message):
    print(f"{Colors.GREEN}✓ {message}{Colors.ENDC}")

def print_error(message):
    print(f"{Colors.RED}✗ {message}{Colors.ENDC}")

def print_warning(message):
    print(f"{Colors.YELLOW}⚠ {message}{Colors.ENDC}")

def test_root_endpoint():
    """Test GET /api/ - Root endpoint"""
    print_test_header("Testing Root Endpoint")
    
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and "Oracle Project Group API" in data["message"]:
                print_success(f"Root endpoint working - Status: {response.status_code}")
                print_success(f"Response: {data}")
                return True
            else:
                print_error(f"Unexpected response format: {data}")
                return False
        else:
            print_error(f"Root endpoint failed - Status: {response.status_code}")
            print_error(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_error(f"Root endpoint connection failed: {str(e)}")
        return False

def test_projects_endpoint():
    """Test GET /api/projects - Should return mock projects"""
    print_test_header("Testing Projects Endpoint")
    
    try:
        response = requests.get(f"{API_BASE}/projects", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            
            if isinstance(data, list):
                print_success(f"Projects endpoint working - Status: {response.status_code}")
                print_success(f"Found {len(data)} projects")
                
                # Verify we have the expected 6 mock projects
                if len(data) == 6:
                    print_success("Correct number of mock projects (6)")
                else:
                    print_warning(f"Expected 6 projects, got {len(data)}")
                
                # Validate project structure
                if data:
                    project = data[0]
                    required_fields = ['id', 'title', 'description', 'image', 'category', 'location', 'year']
                    missing_fields = [field for field in required_fields if field not in project]
                    
                    if not missing_fields:
                        print_success("Project structure validation passed")
                        print_success(f"Sample project: {project['title']} - {project['category']}")
                    else:
                        print_error(f"Missing fields in project: {missing_fields}")
                        return False
                
                return True
            else:
                print_error(f"Expected list, got: {type(data)}")
                return False
        else:
            print_error(f"Projects endpoint failed - Status: {response.status_code}")
            print_error(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_error(f"Projects endpoint connection failed: {str(e)}")
        return False

def test_blog_endpoint():
    """Test GET /api/blog - Should return mock blog posts"""
    print_test_header("Testing Blog Endpoint")
    
    try:
        response = requests.get(f"{API_BASE}/blog", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            
            if isinstance(data, list):
                print_success(f"Blog endpoint working - Status: {response.status_code}")
                print_success(f"Found {len(data)} blog posts")
                
                # Verify we have the expected 4 mock blog posts
                if len(data) == 4:
                    print_success("Correct number of mock blog posts (4)")
                else:
                    print_warning(f"Expected 4 blog posts, got {len(data)}")
                
                # Validate blog post structure
                if data:
                    post = data[0]
                    required_fields = ['id', 'title', 'excerpt', 'image', 'date', 'readTime']
                    missing_fields = [field for field in required_fields if field not in post]
                    
                    if not missing_fields:
                        print_success("Blog post structure validation passed")
                        print_success(f"Sample post: {post['title']} - {post['readTime']} min read")
                    else:
                        print_error(f"Missing fields in blog post: {missing_fields}")
                        return False
                
                return True
            else:
                print_error(f"Expected list, got: {type(data)}")
                return False
        else:
            print_error(f"Blog endpoint failed - Status: {response.status_code}")
            print_error(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_error(f"Blog endpoint connection failed: {str(e)}")
        return False

def test_contact_post_valid():
    """Test POST /api/contact with valid data"""
    print_test_header("Testing Contact POST - Valid Data")
    
    # Valid contact data
    contact_data = {
        "name": "John Smith",
        "email": "john.smith@example.com",
        "phone": "+1-416-555-0123",
        "projectType": "Interior Fit-Out",
        "budget": "$100,000 - $500,000",
        "message": "I'm interested in a complete office renovation for our 10,000 sq ft space in downtown Toronto. We need modern finishes and marble reception area."
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/contact", 
            json=contact_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 200:
            data = response.json()
            print_success(f"Contact POST successful - Status: {response.status_code}")
            
            # Validate response structure
            required_fields = ['id', 'name', 'email', 'phone', 'projectType', 'message', 'timestamp']
            missing_fields = [field for field in required_fields if field not in data]
            
            if not missing_fields:
                print_success("Contact response structure validation passed")
                print_success(f"Created inquiry ID: {data['id']}")
                print_success(f"Timestamp: {data['timestamp']}")
                
                # Verify data integrity
                if (data['name'] == contact_data['name'] and 
                    data['email'] == contact_data['email'] and
                    data['phone'] == contact_data['phone']):
                    print_success("Data integrity validation passed")
                    return True, data['id']
                else:
                    print_error("Data integrity validation failed")
                    return False, None
            else:
                print_error(f"Missing fields in response: {missing_fields}")
                return False, None
        else:
            print_error(f"Contact POST failed - Status: {response.status_code}")
            print_error(f"Response: {response.text}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print_error(f"Contact POST connection failed: {str(e)}")
        return False, None

def test_contact_post_invalid_email():
    """Test POST /api/contact with invalid email"""
    print_test_header("Testing Contact POST - Invalid Email")
    
    # Invalid email data
    contact_data = {
        "name": "Jane Doe",
        "email": "invalid-email-format",
        "phone": "+1-416-555-0456",
        "projectType": "Design-Build",
        "message": "Test message with invalid email"
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/contact", 
            json=contact_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 422:
            print_success(f"Email validation working - Status: {response.status_code}")
            print_success("Invalid email correctly rejected")
            return True
        elif response.status_code == 200:
            print_error("Invalid email was accepted - validation not working")
            return False
        else:
            print_warning(f"Unexpected status code: {response.status_code}")
            print_warning(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_error(f"Contact POST (invalid email) connection failed: {str(e)}")
        return False

def test_contact_get():
    """Test GET /api/contact - Should return contact inquiries"""
    print_test_header("Testing Contact GET")
    
    try:
        response = requests.get(f"{API_BASE}/contact", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            
            if isinstance(data, list):
                print_success(f"Contact GET working - Status: {response.status_code}")
                print_success(f"Found {len(data)} contact inquiries")
                
                # If we have inquiries, validate structure
                if data:
                    inquiry = data[0]
                    required_fields = ['id', 'name', 'email', 'phone', 'projectType', 'message', 'timestamp']
                    missing_fields = [field for field in required_fields if field not in inquiry]
                    
                    if not missing_fields:
                        print_success("Contact inquiry structure validation passed")
                        print_success(f"Latest inquiry from: {inquiry['name']} ({inquiry['email']})")
                        
                        # Check if sorted by timestamp (most recent first)
                        if len(data) > 1:
                            first_timestamp = inquiry['timestamp']
                            second_timestamp = data[1]['timestamp']
                            if first_timestamp >= second_timestamp:
                                print_success("Inquiries correctly sorted by timestamp (newest first)")
                            else:
                                print_warning("Inquiries may not be sorted correctly")
                    else:
                        print_error(f"Missing fields in inquiry: {missing_fields}")
                        return False
                else:
                    print_success("No contact inquiries found (empty list)")
                
                return True
            else:
                print_error(f"Expected list, got: {type(data)}")
                return False
        else:
            print_error(f"Contact GET failed - Status: {response.status_code}")
            print_error(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_error(f"Contact GET connection failed: {str(e)}")
        return False

def run_all_tests():
    """Run all backend API tests"""
    print(f"{Colors.BOLD}Oracle Project Group Backend API Testing{Colors.ENDC}")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"API Base: {API_BASE}")
    
    test_results = {}
    
    # Test all endpoints
    test_results['root'] = test_root_endpoint()
    test_results['projects'] = test_projects_endpoint()
    test_results['blog'] = test_blog_endpoint()
    test_results['contact_post_valid'], contact_id = test_contact_post_valid()
    test_results['contact_post_invalid'] = test_contact_post_invalid_email()
    test_results['contact_get'] = test_contact_get()
    
    # Print summary
    print_test_header("Test Summary")
    
    passed = sum(1 for result in test_results.values() if result)
    total = len(test_results)
    
    for test_name, result in test_results.items():
        status = "PASS" if result else "FAIL"
        color = Colors.GREEN if result else Colors.RED
        print(f"{color}{test_name}: {status}{Colors.ENDC}")
    
    print(f"\n{Colors.BOLD}Overall: {passed}/{total} tests passed{Colors.ENDC}")
    
    if passed == total:
        print(f"{Colors.GREEN}{Colors.BOLD}🎉 All backend API tests passed!{Colors.ENDC}")
        return True
    else:
        print(f"{Colors.RED}{Colors.BOLD}❌ Some tests failed. Check the details above.{Colors.ENDC}")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)