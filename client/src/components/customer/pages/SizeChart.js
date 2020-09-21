import React from 'react'
import { useEffect } from 'react';
import './SizeChart.css'
const SizeChart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div id='' className="container">
      <section style={{ marginTop: '50px' }} id="" class="">
        <div class="col-sm-12 col-md-6">
          <h2>Detailed Guide</h2>
          <p>A detailed breakdown of our sizes</p>
          <table class="size-info-table">
            <thead>
              <tr>
                <td></td>
                <td colspan="2">P/XS</td>
                <td colspan="2">S</td>
                <td colspan="2">M</td>
                <td colspan="2">L</td>
                <td>XL</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BUST</td>
                <td>32</td>
                <td>33</td>
                <td>34</td>
                <td>35</td>
                <td>36</td>
                <td>37</td>
                <td>38½</td>
                <td>40</td>
                <td>41½</td>
              </tr>
              <tr>
                <td>RIB CAGE</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31</td>
                <td>32</td>
                <td>33½</td>
                <td>35</td>
                <td>36½</td>
              </tr>
              <tr>
                <td>WAIST</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td>31½</td>
                <td>33</td>
                <td>34½</td>
              </tr>
              <tr>
                <td>HIGH HIP</td>
                <td>31½</td>
                <td>32½</td>
                <td>33½</td>
                <td>34½</td>
                <td>35½</td>
                <td>36½</td>
                <td>38</td>
                <td>39½</td>
                <td>40</td>
              </tr>
              <tr>
                <td>LOW HIP</td>
                <td>35¼</td>
                <td>36¼</td>
                <td>37¼</td>
                <td>38¼</td>
                <td>39¼</td>
                <td>40¼</td>
                <td>41¾</td>
                <td>43¾</td>
                <td>44¾</td>
              </tr>
            </tbody>
          </table>
          <h2>Size Information</h2>
          <p>How to choose your size</p>
          <ol>
            <li>NADAASI is available in size XS-L</li>
            <li>The size you order must accommodate all measurements. That is, if your bust
              is a size XS and hips are a size S, you should order a size S</li>
            <li>If measurements fall between sizes, choose the bigger size.</li>
            <li>Fit can vary by fabrication; however, we try our best to keep it close.</li>
          </ol>
        </div>
        <div class="col-sm-12 col-md-6">
          <h2>Size Guide</h2>
          <p>Our sizes, compared to EU sizes.</p>
          <table class="size-info-table-eu">
            <thead>
              <tr>
                <td colspan="2">SIZE</td>
                <td colspan="2">EU</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2">XS</td>
                <td colspan="2">32-34</td>
              </tr>
              <tr>
                <td colspan="2">S</td>
                <td colspan="2">34-36</td>
              </tr>
              <tr>
                <td colspan="2">M</td>
                <td colspan="2">38-40</td>
              </tr>
              <tr>
                <td colspan="2">L</td>
                <td colspan="2">42-44</td>
              </tr>
              <tr>
                <td colspan="2">XL</td>
                <td colspan="2">44-46</td>
              </tr>
            </tbody>
          </table>
        </div>

      </section>
    </div>
  )
}

export default SizeChart
