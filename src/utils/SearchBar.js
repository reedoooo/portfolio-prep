import React, { Component } from 'react';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Projects from '../components/Projects';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            value: 'All'
        };
    }

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value });
    };

    // handleSelectChange = (e) => {
    //     this.setState({ value: e.target.value });
    // };

    render() {
        const allProjects = this.props.resumeProjects;
        const { searchInput } = this.state;
        const filteredProjects = allProjects.filter(project =>
            (searchInput === '' || project.title.toLowerCase().includes(searchInput.toLowerCase()))
            // &&
            // (this.state.value === 'All' || project.startDate === parseInt(this.state.value))
        );

        return (
            <div>
                <Stack>
                    <InputGroup>
                        <Form.Control
                            type="search"
                            onChange={this.handleChange}
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                            value={searchInput}
                        />
                        {/* <InputGroup.Text id="basic-addon1">Filter by:</InputGroup.Text>
                        <Form.Control as="select" onChange={this.handleSelectChange} value={this.state.value}>
                            <option value="All">All</option>
                            <option value="name">Name</option>
                            <option value="popularity">Popularity</option>
                            <option value="recent">Recent</option>
                            <option value="size">Size</option>
                        </Form.Control> */}
                    </InputGroup>
                </Stack>
                <Stack>
                    <div className="Beast-choices">
                        {filteredProjects.map((project, i) => (
                            <Col key={i}>
                                <Projects resumeProjects={[project]} />
                            </Col>
                        ))}
                    </div>
                </Stack>
            </div>
        );
    }
}

export default SearchBar;
